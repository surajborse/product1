import React, { useContext } from "react";
import Header from "../Layout/Header";
import Sidebar from "../Layout/Sidebar";
import { LayoutArea } from "../../App";

const Layout = ({ children }) => {
  const [toggle] = useContext(LayoutArea);

  return (
    <>
      <main className={`${!toggle ? "" : "ml"}`}>
        {<Header />}
        {children}
      </main>
      {<Sidebar />}
    </>
  );
};

export default Layout;
