
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Mycart from "./Mycart";
import Eyetech from "./Components/Eyetech";
import Daynight from "./Components/Daynight";
import Details from "./Components/Details";


const App=()=>{
  return(
    <>
       <BrowserRouter>
           <Routes>
            <Route path="/" element={<Layout/>}>
                 <Route index element={<Home/>}/>
                 <Route path="home" element={<Home/>}/>
                 <Route path="mycart" element={<Mycart/>}/>
                 <Route path="eyetech" element={<Eyetech/>}/>
                 <Route path="daynight" element={<Daynight/>}/>
                 <Route path="details/:id" element={<Details/>}/>
                
            </Route>
           </Routes>
       </BrowserRouter>
    
    </>
  )
}
export default App;