import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import IncrementDecreament from "./IncrementDecrement";
import ToDoApp from "./ToDoApp";




const App=()=>{
  return(
    <>
     
     <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Layout/>}>
        <Route path="IncrementDecreament" element={<IncrementDecreament/>}/>
        <Route path="todoapp" element={<ToDoApp/>}/>
        </Route>
      </Routes>
     
     
     </BrowserRouter>
    
    </>
  )
}
export default App;