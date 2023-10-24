import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";

const Information = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="w-full bg-slate-800 flex">
      <div className="w-full pl-14">
        <h1 className="pt-2 font-semibold text-2xl">Zusatzmaterialien</h1>
        <p className="pt-2 text-base">
          Hier finden Sie Zusatzmaterialien wie Videos oder Modelltests sowie
          die Kurs- und Arbeitsbuch-CDs zum Lehrwerk
        </p>
        <p className="text-base">
          Pluspunkt Deutsch "Leben in Österreich" der Sprachniveaus A1, A2 und
          B2.
        </p>
        <p className="text-sm pt-2">
          Alle Materialien stehen Ihnen gratis als Download zur Verfügung.
        </p>
        <Dropdown
          isActive={isDropdownOpen}
          setIsActive={() => {
            setDropdownOpen(!isDropdownOpen);
          }}
        />
      </div>
      <div className="w-[13%]">
        <div className="flex place-items-center h-1/2">
          <a href="http://www.integrationsfonds.at/" 
            className="w-1/2 scale-[60%]">
            <img
              src="https://sprachportal.integrationsfonds.at/typo3conf/ext/siwa_project/Resources/Public/Images/oeif_logo_top.png"
              alt="OIF"
              className="object-contain"
            ></img>
          </a>
          <a href="https://www.oesterreichinstitut.at/"
            className="w-1/2 scale-[60%]">
            <img
              src="https://sprachportal.integrationsfonds.at/typo3conf/ext/siwa_project/Resources/Public/Images/oei_logo_top.png"
              alt="OI"
              className="object-contain"
            ></img>
          </a>
        </div>
        <div className="flex place-items-center scale-75 h-1/2">
          <img src="https://sprachportal.integrationsfonds.at/fileadmin/_processed_/f/1/csm_Cornelsen_28ac6cc04f.png" alt="PLUSPUNKT"></img>
        </div>
      </div>
    </div>
  );
};

export default Information;
