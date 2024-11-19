import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
 import { addTask,recDelete,taskComplete,taskUnComplete,editDataSave } from "./todoSlice";
 const App=()=>{
    const [txtval, setTxtval]=useState("")
    const [edBtn, setEdbtn]=useState(true);
    const [edId, setEdID]=useState("");
    const mydata = useSelector((state)=>state.todo.task);
    const mydis=useDispatch();

    console.log(mydata);

    let sno=0;
    const delTask=(id)=>{
        mydis(recDelete(id))
    }

    const taskComp=(id)=>{
        mydis(taskComplete(id))
    }

    const taskUncomp=(id)=>{
        mydis(taskUnComplete(id))
    }

    const dataEdit=(id,data)=>{
        setTxtval(data)
        setEdbtn(false)
        setEdID(id)
    }
   
    const editSave=()=>{
        mydis(editDataSave({id:edId,data:txtval}))
        setEdbtn(true)
        setTxtval("");
    }
    const ans=mydata.map((key)=>{
        sno++;
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>
                    {key.status? <span style={{color:"red",textDecoration:"line-through"}}>{key.data}</span> : key.data}
                </td>
                <td><button onClick={()=>{delTask(key.id)}}>Delete</button></td>
                <td>
                    {key.status?(
                        <button onClick={()=>{taskUncomp(key.id)}}>Uncomplete</button>
                    ):(
                        <button onClick={()=>{taskComp(key.id)}}>Complete</button>
                    )}
                </td>
                <td>
                    <button onClick={()=>{dataEdit(key.id,key.data)}}>Edit</button>
                </td>
            </tr>
            
            </>
        )
    })
    return(
        <>
        <h1>To Do App</h1>
        Enter Your Task: <input type="text" value={txtval} onChange={(e)=>{setTxtval(e.target.value)}} />
        
        {edBtn?(
            <button onClick={()=>{mydis(addTask({id:Date.now(),data:txtval,status:false}))}}>Add</button>
        ):(
            <button onClick={editSave}>Edit Save</button>
        )}
        <hr size="4" color="red" />
        <table border="">
            <tr>
                <th>SNO</th>
                <th>Your Work</th>
                <th>Delete</th>
                <th>Status</th>
                <th>Edit</th>
            </tr>
            {ans}
        </table>
        </>
    )
 }
 export default App;