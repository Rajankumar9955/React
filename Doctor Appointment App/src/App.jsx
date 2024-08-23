

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Insert from "./components/Insert";
import Display from "./components/Display";
import Cong from "./components/Cong";
const App=()=>{
  return(
    <>
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index elements={<home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="insert" element={<Insert/>}/>
        <Route path="display" element={<Display/>}/>
        <Route path="cong" element={<Cong/>}/>
        </Route>
       </Routes>
    </BrowserRouter>
      
    
    </>
  )
}
export default App;