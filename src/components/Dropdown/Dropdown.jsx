import React from "react";

const Dropdown = ({ isActive, setIsActive }) => {
  return (
    <div className="w-full h-fit flex justify-end pt-[6px] pr-[12px]">
      <button
        id="dropdownRightButton"
        onClick={setIsActive}
        className="w-1.5/10 bg-[#FF0000] text-slate-50 hover:bg-slate-50 hover:text-[#FF0000] hover:border-[1px] hover:border-[#FF0000] rounded-sm"
        type="button"
      >
        Downloads
      </button>
      {isActive && (
        <div
          id="dropdownRight"
          className="absolute mt-6 w-[10.6%] bg-[#FF0000] rounded-sm shadow"
        >
          <ul
            className="text-sm text-slate-50"
          >
            <li className="block px-6 py-1 font-semibold bg-[#800000]">
              Videos
            </li>
            <li>
              <a href="https://sprachportal.integrationsfonds.at/fileadmin/migrate/rte/Clip_1-5.zip" class="block rounded-sm px-12 hover:bg-[#b60000fe]">
                Clip 1-5</a>
            </li>
            <li>
              <a href="https://sprachportal.integrationsfonds.at/fileadmin/migrate/rte/Clip_6-7.zip" class="block rounded-sm px-12 hover:bg-[#b60000fe]">
                Clip 6-7</a>
            </li>
            <li>
              <a href="https://sprachportal.integrationsfonds.at/fileadmin/migrate/rte/Clip_8_-_11.zip" class="block rounded-sm px-12 hover:bg-[#b60000fe]">
                Clip 8-11</a>
            </li>
            <li>
              <a href="https://sprachportal.integrationsfonds.at/fileadmin/migrate/rte/Clip_12-14.zip" class="block rounded-sm px-12 hover:bg-[#b60000fe]">
                Clip 12-14</a>
            </li>
            <li className="block rounded-sm px-6 pt-1 font-semibold bg-[#800000]">
              Audiofiles
            </li>
            <li className="block rounded-sm px-9 font-medium bg-[#800000]">
              Kursbuch
            </li>
            <li>
              <a href="https://sprachportal.integrationsfonds.at/fileadmin/migrate/rte/CD1.zip" class="block rounded-sm px-12 hover:bg-[#b60000fe]">
                CD 1</a>
            </li>
            <li>
              <a href="https://sprachportal.integrationsfonds.at/fileadmin/migrate/rte/CD2_Kursbuch.zip" class="block rounded-sm px-12 hover:bg-[#b60000fe]">
                CD 2</a>
            </li>
            <li>
              <a href="https://sprachportal.integrationsfonds.at/fileadmin/migrate/rte/Modelltest_Kursbuch.zip" class="block rounded-sm px-12 hover:bg-[#b60000fe]">
                Modelltest</a>
            </li>
            <li className="block rounded-sm px-9 font-medium bg-[#800000]">
              Arbeitsbuch
            </li>
            <li>
              <a href="https://sprachportal.integrationsfonds.at/fileadmin/migrate/rte/CD1_Arbeitsbuch.zip" class="block rounded-sm px-12 hover:bg-[#b60000fe]">
                CD 1</a>
            </li>
            <li>
              <a href="https://sprachportal.integrationsfonds.at/fileadmin/migrate/rte/CD2_Arbeitsbuch.zip" class="block rounded-sm px-12 hover:bg-[#b60000fe]">
                CD 2</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
