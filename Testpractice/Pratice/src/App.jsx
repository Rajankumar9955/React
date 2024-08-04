import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Gallery from "./components/Galllery";
import Placement from "./components/Placement";
import Service from "./components/Service";
import Insert from "./components/Insert";
import Display from "./components/Display";
import Layout from "./components/Layout";
import Marks from "./Marks";

const App=()=>{
  return(
    <>
    <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout/>}>
                  <Route index element={<Home/>}/>
                  <Route path="home" element={<Home/>}/>
                  <Route path="about" element={<About/>}/>
                  <Route path="contactUs" element={<ContactUs/>}/>
                  <Route path="gallery" element={<Gallery/>}/>
                  <Route path="placement" element={<Placement/>}/>
                  <Route path="service" element={<Service/>}/>
                  <Route path="insert" element={<Insert/>}/>
                  <Route path="display" element={<Display/>}/>
                  </Route>
              </Routes>
    </BrowserRouter>


    <hr size="4" color="red" />
     <Marks/>



    </>
  )
}
export default App;