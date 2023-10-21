import './App.css';

function App() {
  return (
    <div className="App">
      <header className="w-full h-1/4 bg-slate-600">
        <nav>
          <div className="bg-slate-400 flex h-full w-">
            <a href="https://sprachportal.integrationsfonds.at/">
              <img
                src="https://sprachportal.integrationsfonds.at/typo3conf/ext/siwa_project/Resources/Public/Images/sprachportal_logo_top.png"
                className="h-5/6 object-contain pl-4 pt-4"
                alt="kartinka"
              />
            </a>

          </div>
        </nav>
      </header>
      <div className="w-4/5 mx-auto h-screen bg-gray-300">
        <div className="h-1/5 w-full bg-slate-800"> 

        </div>
        <div className="h-full w-full bg-slate-500">

        </div>
      </div>
    </div>
  );
}

export default App;
