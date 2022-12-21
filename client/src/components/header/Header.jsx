import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitlesm">Post your Passion</span>
        <span className="headerTitlelg">Blogger</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1589987616737-50f054888459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />
    </div>
  );
}

export default Header;
