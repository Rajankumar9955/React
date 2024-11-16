import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { qntyInc, qntyDec, dataDel } from "./Components/addtocartSlice";
import { useNavigate } from "react-router-dom";
const MyCart=()=>{
    const Data= useSelector((state)=>state.addCart.cart);
   console.log(Data);
  const dispatch= useDispatch();
   const incQnty=(id)=>{
    dispatch(qntyInc({id:id}))
   }

   const decQnty=(id)=>{
    dispatch(qntyDec({id:id}))
   }
 
   const dataDelete=(id)=>{
     dispatch(dataDel({id:id}));
     toast.success("Item Removed");
   }


const myNav=useNavigate();
const detail=(id)=>{
   myNav(`/details/${id}`)
}

const Payment=()=>{
  myNav('/payment')
}


  let sno=0;
  let grandTotal=0;
    const ans= Data.map((key)=>{
        sno++;
        grandTotal+=key.price*key.qnty;
          return(
            <>
              <tr>
                <td> {sno} </td>
                <td> <img src={key.image} wudth="100" height="100" onClick={()=>{detail(key.id)}} id="imgpro"/> </td>
                <td>{key.name} </td>
                <td>{key.brand} </td>
                <td>{key.category}</td>
                <td style={{fontSize:"12px", width:"300px"}}>{key.description} </td>
                <td>₹{key.price}.00 </td>
                <th>
                <FaMinusCircle onClick={()=>{decQnty(key.id)}}  style={{cursor:"pointer"}}/> 
                 <span style={{marginLeft:"5px", marginRight:"5px"}}> 
                    {key.qnty}   
                 </span>    
                <FaPlusCircle onClick={()=>{incQnty(key.id)}}  style={{cursor:"pointer"}}/>
                 </th>
                <th> 
                   ₹{key.price*key.qnty}.00
                    </th>
                <td>
                 <Button var="secondary" onClick={()=>{dataDelete(key.id)}} > Remove</Button>    
                 </td>
              </tr>
            </>
          )
    })


    return(
        <>
           <center> <h1 style={{marginTop:"20px",marginBottom:"20px"}}> My Cart</h1></center>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.No</th>
          <th >Images</th>
          <th>Product Name</th>
          <th>Brand</th>
          <th> Category </th>
          <th> Description</th>
          <th> Price</th>
          <th> Quantity</th>
          <th> Total </th>
          <td>Remove</td>
        </tr>
      </thead>
      <tbody>
         {ans}

         <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th>  </th>
          <th> </th>
          <th></th>
          <th width="200" style={{color:"green", fontSize:"20px"}}> Grand Total:  </th>
          <th style={{color:"green", fontSize:"20px"}}>₹{grandTotal}.00 </th>
          <td><button style={{backgroundColor:"green",width:"90px",padding:"5px",borderRadius:"10px"}} onClick={Payment}>₹ Pay</button></td>
        </tr>
      </tbody>
        </Table>
        <ToastContainer />
        </>
    )
}
export default MyCart;