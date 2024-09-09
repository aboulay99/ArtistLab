import React from "react";

const ListItem = ({ link }) => {
  return (
    <li className="px-4 py-2 hover:text-[#013328] hover:-translate-y-0.5 duration-200 hover:bg-[#ffffffab] rounded-md">
      <a href="#">{link}</a>
    </li>
  );
};

export default ListItem;
