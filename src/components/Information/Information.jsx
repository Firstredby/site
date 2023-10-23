import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";

const Information = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="h-1/5 w-full bg-slate-800 flex">
      <div className="w-1/12 h-full relative">
        <Dropdown
          isActive={isDropdownOpen}
          setIsActive={() => {
            setDropdownOpen(!isDropdownOpen);
          }}
        />
      </div>
      <div className="w-full h-full">
        <h1 className="pt-2 font-medium text-xl">Zusatzmaterialien</h1>
        <p className="pt-2 text-sm">
          Hier finden Sie Zusatzmaterialien wie Videos oder Modelltests sowie
          die Kurs- und Arbeitsbuch-CDs zum Lehrwerk
        </p>
        <p className="text-sm">
          Pluspunkt Deutsch "Leben in Österreich" der Sprachniveaus A1, A2 und
          B2.
        </p>
        <br></br>
        <p className="text-sm">
          Alle Materialien stehen Ihnen gratis als Download zur Verfügung.
        </p>
      </div>
      <div className="w-1/10 h-full">
        <div className="h-1/2 flex place-items-center">
          <a href="http://www.integrationsfonds.at/" className="w-1/2 scale-75">
            <img
              src="https://sprachportal.integrationsfonds.at/typo3conf/ext/siwa_project/Resources/Public/Images/oeif_logo_top.png"
              alt="OIF"
              className="object-contain"
            ></img>
          </a>
          <a
            href="https://www.oesterreichinstitut.at/"
            className="w-1/2 scale-75"
          >
            <img
              src="https://sprachportal.integrationsfonds.at/typo3conf/ext/siwa_project/Resources/Public/Images/oei_logo_top.png"
              alt="OI"
              className="object-contain"
            ></img>
          </a>
        </div>
        <div className="h-1/2 flex place-items-center scale-75">
          <img src="https://sprachportal.integrationsfonds.at/fileadmin/_processed_/f/1/csm_Cornelsen_28ac6cc04f.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Information;
