
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Mycart from "./Mycart";
import Eyetech from "./Components/Eyetech";
import Wipro from "./Components/Wipro";
import Daynight from "./Components/Daynight";
import Products from "./Components/Products";
import LRpage from "./Components/LRpage";
import SearchProducts from "./Components/SearchProducts";
import Details from "./Components/Details";
import Shop from "./Components/Shop";
import About from "./Components/About";
import Ddlc from "./Components/Ddlc";
import PremiumCamera from "./Components/PremiumCamera";
import Sale from "./Components/Sale";
import Blog from "./Components/Blog";
import Payment from "./Components/Payment";
import PlaceOrder from "./Components/PlacedOrder";
import PurchaseDetails from "./Components/PurchaseDetails";



const App=()=>{
  return(
    <>
       <BrowserRouter>
           <Routes>
            <Route path="/" element={<Layout/>}>
                 <Route index element={<Home/>}/>
                 <Route path="home" element={<Home/>}/>
                 <Route path="about" element={<About/>}/>
                 <Route path="mycart" element={<Mycart/>}/>
                 <Route path="eyetech" element={<Eyetech/>}/>
                 <Route path="wipro" element={<Wipro/>}/>
                 <Route path="ddlc" element={<Ddlc/>}/>
                 <Route path="daynight" element={<Daynight/>}/>
                 <Route path="premiumcamera" element={<PremiumCamera/>}/>
                 <Route path="details/:id" element={<Details/>}/>
                 <Route path="products" element={<Products/>}/>
                 <Route path="lrpage" element={<LRpage/>}/>
                 <Route path="searchproduct/:txtdata" element={<SearchProducts/>}/>
                 <Route path="shop" element={<Shop/>}/>
                 <Route path="sale" element={<Sale/>}/>
                 <Route path="sale" element={<Sale/>}/>
                 <Route path="blog" element={<Blog/>}/>
                 <Route path="payment" element={<Payment/>}/>
                 <Route path="placeorder" element={<PlaceOrder/>}/>
                 <Route path="purchasedetails" element={<PurchaseDetails/>}/>
            </Route>
           </Routes>
       </BrowserRouter>
    </>
  )
}
export default App;