

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Insert from "./components/Insert";
import Display from "./components/Display";
import Cong from "./components/Cong";
import Services from "./components/Services";
import Book from "./components/Book";
import BookShow from "./components/BookShow";
import Bgenerate from "./components/Bgenerate";
import LRpage from "./components/LRpage";
import Dashboard from "./components/Dashboard";

const App=()=>{
  return(
    <>
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="insert" element={<Insert/>}/>
        <Route path="display" element={<Display/>}/>
        <Route path="cong" element={<Cong/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="book/:id" element={<Book/>}/>
        <Route path="bookshow" element={<BookShow/>}/>
        <Route path="bgenerate/:id" element={<Bgenerate/>}/>
        <Route path="lrpage" element={<LRpage/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        
        
        </Route>
       </Routes>
    </BrowserRouter>
      
    
    </>
  )
}
export default App;