import React from "react";
import Header from "./header";
import Footer from "../components/footer/Footer";

// set app as default lv - resolve plugin bug
typeof window !== "undefined" &&
  localStorage.setItem("gatsby-i18next-language", "lv");

const Layout = ({ children, footerInfo }) => {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
        <Footer footerInfo={footerInfo} />
      </div>
    </>
  );
};
export default Layout;
