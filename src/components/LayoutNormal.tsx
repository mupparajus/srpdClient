import { Outlet } from "react-router-dom"
import Header from "./Header"

const LayoutNormal = () => {
  return (
    <>
      <Header/>
      <Outlet />
    </>
  );
};

export default LayoutNormal;