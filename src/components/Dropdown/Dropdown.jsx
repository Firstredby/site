import React from "react";
import DropdownItem from "./DropdownItems/DropdownItem";

const DropdownMenuData = ["Dashboard", "Settings", "Earnings", "Sign out"];

const Dropdown = ({ isActive, setIsActive }) => {
  return (
    <div className="w-full flex justify-center h-full pb-[72px]">
      <button
        id="dropdownRightButton"
        onClick={setIsActive}
        className="w-1/2 h-1/2 justify-self-center self-center bg-red-500 hover:bg-slate-50 rounded-lg inline-flex items-center"
        type="button"
      >
        Downloads
      </button>
      {isActive && (
        <div
          id="dropdownRight"
          className="absolute right-[-165px] mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownRightButton"
          >
            {DropdownMenuData.map((el) => (
              <DropdownItem text={el} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
