



import TopNavbar from './TopNavbar';
import { Outlet } from 'react-router-dom';
const Layout=()=>{
    return(
        <>
           <TopNavbar/>
           <Outlet/>
        </>
    )
}
export default Layout;