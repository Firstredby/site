import React from "react";

const DropdownItem = ({ text }) => {
  return (
    <li>
      <button className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
        {text}
      </button>
    </li>
  );
};

export default DropdownItem;
