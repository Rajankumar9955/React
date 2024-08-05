import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Insert from "./components/Insert";
import Display from "./components/Display";
import Search from "./Search";
import Update from "./components/Update";
import TotalQty from "./components/TotalQty";
import ContactUs from "./components/ContactUs";

const App=()=>{
    return(
        <>
        
        <BrowserRouter> 
        <Routes>
                      <Route path="/" element={<Layout/>}>
                      <Route index element={<Home/>}/>
                      <Route path="home" element={<Home/>}/>
                      <Route path="insert" element={<Insert/>}/>
                      <Route path="display" element={<Display/>}/>
                      <Route path="search" element={<Search/>}/>
                      <Route path="update" element={<Update/>}/>
                      <Route path="totalQty" element={<TotalQty/>}/>
                      <Route path="contactUs" element={<ContactUs/>}/>

                      </Route>
        </Routes>
        
        
        </BrowserRouter>
        
        
        </>
    )
}
export default App;