import React from "react";

const Navbar = () => {
  return (
    <nav className="grid-cols-[6fr_360px] min-h-[65px] grid mx-auto bg-slate-600 w-5/6">
      <div className="bg-slate-400 flex h-full w-1.5/10 min-w-[230px]">
        <a href="https://sprachportal.integrationsfonds.at/">
          <img
            src="https://sprachportal.integrationsfonds.at/typo3conf/ext/siwa_project/Resources/Public/Images/sprachportal_logo_top.png"
            className="object-contain"
            alt="kartinka"
          />
        </a>
      </div>
      <div className="w-full bg-slate-400 text-white">
        <button className="w-1/4 h-full hover:bg-slate-50 hover:text-black transition duration-150 ease-in-out">
          FAQ
        </button>
        <button className="w-1/4 h-full hover:bg-slate-50 hover:text-black transition duration-150 ease-in-out">
          Kontakt
        </button>
        <button className="w-1/4 h-full hover:bg-slate-50 hover:text-black transition duration-150 ease-in-out">
          Hotline
        </button>
        <button className="w-1/4 h-full bg-[#FF0000] hover:bg-slate-50 hover:text-red-500 transition duration-150 ease-in-out">
          DEUTSCH
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
