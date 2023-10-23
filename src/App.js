import './App.css';
import React, { useState } from "react";

function App() {


  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="App">
      <header className="w-5/6  mx-auto bg-slate-600">
        <nav className='grid-cols-[6fr_360px] min-h-[65px] grid'>
          <div className="bg-slate-400 flex h-full w-1.5/10 min-w-[230px]">
            <a href="https://sprachportal.integrationsfonds.at/">
              <img
                src="https://sprachportal.integrationsfonds.at/typo3conf/ext/siwa_project/Resources/Public/Images/sprachportal_logo_top.png"
                className="object-contain"
                alt="kartinka"
              />
            </a>
          </div>
          <div className='w-full bg-slate-400 text-white'>
            <button className='w-1/4 h-full hover:bg-slate-50 hover:text-black transition duration-150 ease-in-out'>
              FAQ
            </button>
            <button className='w-1/4 h-full hover:bg-slate-50 hover:text-black transition duration-150 ease-in-out'>
              Kontakt
            </button>
            <button className='w-1/4 h-full hover:bg-slate-50 hover:text-black transition duration-150 ease-in-out'>
              Hotline
            </button>
            <button className='w-1/4 h-full bg-red-500 hover:bg-slate-50 hover:text-red-500 transition duration-150 ease-in-out'>
              DEUTSCH
            </button>
          </div>
        </nav>
      </header>
      <div className=''>
        <div className="w-5/6 mx-auto h-screen bg-gray-300">
          <div className="h-1/5 w-full bg-slate-800 flex">
            <div className='w-1/12 h-full relative'>
              <div className='w-full flex justify-center h-full pb-[72px]'>
                <button
                  id="dropdownRightButton"
                  onClick={toggleDropdown}
                  className="w-1/2 h-1/2 justify-self-center self-center bg-red-500 hover:bg-slate-50 rounded-lg inline-flex items-center"
                  type="button"
                >
                  Downloads
                </button>
                {isDropdownOpen && (
                  <div
                    id="dropdownRight"
                    className="absolute right-[-165px] mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownRightButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover-bg-gray-100 dark:hover-bg-gray-600 dark:hover-text-white"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover-bg-gray-100 dark:hover-bg-gray-600 dark:hover-text-white"
                        >
                          Earnings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover-bg-gray-100 dark:hover-bg-gray-600 dark:hover-text-white"
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className='w-full h-full'>
              <h1 className='pt-2 font-medium text-xl'>Zusatzmaterialien</h1>
              <p className='pt-2 text-sm'>Hier finden Sie Zusatzmaterialien wie Videos oder Modelltests sowie die Kurs- und Arbeitsbuch-CDs zum Lehrwerk</p>
              <p className='text-sm'>Pluspunkt Deutsch "Leben in Österreich" der Sprachniveaus A1, A2 und B2.</p>
              <br></br>
              <p className='text-sm'>Alle Materialien stehen Ihnen gratis als Download zur Verfügung.</p>
            </div>
            <div className='w-1/10 h-full'>
              <div className='h-1/2 flex place-items-center'>
                <a href='http://www.integrationsfonds.at/' className='w-1/2 scale-75'>
                  <img src='https://sprachportal.integrationsfonds.at/typo3conf/ext/siwa_project/Resources/Public/Images/oeif_logo_top.png'
                    alt='OIF'
                    className="object-contain"></img>
                </a>
                <a href='https://www.oesterreichinstitut.at/' className='w-1/2 scale-75'>
                  <img src='https://sprachportal.integrationsfonds.at/typo3conf/ext/siwa_project/Resources/Public/Images/oei_logo_top.png'
                    alt='OI'
                    className="object-contain"></img>
                </a>
              </div>
              <div className='h-1/2 flex place-items-center scale-75'>
                <img src='https://sprachportal.integrationsfonds.at/fileadmin/_processed_/f/1/csm_Cornelsen_28ac6cc04f.png'></img>
              </div>
            </div>
          </div>
          <div className='h-1/6'>

          </div>
          <div className="h-full w-full bg-slate-500 flex flex-wrap">
            {
               
            }
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
