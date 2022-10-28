import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <br></br>
            <Outlet />
        </div>
      );
}
 
export default Layout;