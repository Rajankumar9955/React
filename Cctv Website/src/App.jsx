
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Mycart from "./Mycart";
const App=()=>{
  return(
    <>
       <BrowserRouter>
           <Routes>
            <Route path="/" element={<Layout/>}>
                 <Route index element={<Home/>}/>
                 <Route path="home" element={<Home/>}/>
                 <Route path="mycart" element={<Mycart/>}/>
            </Route>
           </Routes>
       </BrowserRouter>
    
    </>
  )
}
export default App;