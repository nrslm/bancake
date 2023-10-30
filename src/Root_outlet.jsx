import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function Root_outlet() {
  return (
    <>
      <Navbar/>
      <div id="detail" className="">
        <Outlet />
      </div>
    </>
  );
}
export default Root_outlet