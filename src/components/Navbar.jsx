import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 w-full bg-white px-[5%] py-6 flex justify-between items-center shadow-md z-[1000]">
        <h1 className="text-xl font-bold">Hello.</h1>
        <div>
          <ul className="flex gap-8 list-none">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
