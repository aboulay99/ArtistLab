import React from "react";

const NavItemSmall = ({ icon, text }) => {
  return (
    <>
      <li>
        <a className="flex space-x-2 items-center" href="#">
          {icon}
          <span>{text}</span>
        </a>
      </li>
    </>
  );
};

export default NavItemSmall;
