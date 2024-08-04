
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./components/Dashboard";
const App=()=>
{
  return(
    <>
      

          <BrowserRouter>
                  <Routes>
                       <Route path="/dashboard" element={<Dashboard/>}>
                  </Route>
                  </Routes>
               <Routes>
                   <Route path="/" element={<Layout/>}>
                   </Route>
               </Routes>
          </BrowserRouter>


    </>
  )
}
export default App;