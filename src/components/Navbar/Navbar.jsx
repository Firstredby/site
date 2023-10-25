import React from "react";

const Navbar = () => {
  return (
    <nav className="grid-cols-[6fr_360px] min-h-[65px] grid mx-auto bg-gray-300 w-5/6">
      <div className="flex h-full w-1.5/10 min-w-[230px]">
        <a href="https://sprachportal.integrationsfonds.at/">
          <img
            src="https://sprachportal.integrationsfonds.at/typo3conf/ext/siwa_project/Resources/Public/Images/sprachportal_logo_top.png"
            className="object-contain"
            alt="kartinka"
          />
        </a>
      </div>
      <div className="w-full grid grid-cols-4 text-white">
        <button className="w-full h-full hover:bg-slate-50 hover:text-black transition duration-150 ease-in-out">
          FAQ
        </button>
        <button className="w-full h-full hover:bg-slate-50 hover:text-black transition duration-150 ease-in-out">
          Kontakt
        </button>
        <button className="w-full h-full hover:bg-slate-50 hover:text-black transition duration-150 ease-in-out">
          Hotline
        </button>
        <button className="grid grid-cols-[2fr_6fr] w-full h-full bg-[#FF0000] hover:bg-slate-50 hover:text-red-500 transition duration-150 ease-in-out font-medium">
          <svg className="h-full w-full" viewBox="0 0 10 6">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
          <p className="place-self-center">DEUTSCH</p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
