import React from "react";
import UserInfo from "./UserInfo";
import FolderInfo from "./FolderInfo";
import logo from "../images/logo.svg";

function Header() {
  return(
    <>
    <Header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="userinfo">
        <UserInfo />
      </div>
    </Header>
    <FolderInfo />
    </>
  );
}

export default Header;