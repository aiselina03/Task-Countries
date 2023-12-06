import React from 'react'
import "./style.scss"
import useDarkMode from "../../hook/dark";

function Navbar() {
    const { handleTheme } = useDarkMode();
    
  return (
    <><div className="navbar">
    <h3>Where in the world?</h3>
    <h4>
      <i onClick={handleTheme} class="fa-regular fa-moon"></i>Dark Mode
    </h4>
  </div></>
  )
}

export default Navbar