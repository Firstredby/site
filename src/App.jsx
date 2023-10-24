import React, { useState } from "react";
import VideosBlock from "./components/VideosBlock/VideosBlock";
import Navbar from "./components/Navbar/Navbar";
import Information from "./components/Information/Information";

function App() {
  const [videos, setVideos] = useState([
    "https://sprachportal.integrationsfonds.at/fileadmin/migrate/sampletests/Clip_1.mp4",
    "https://sprachportal.integrationsfonds.at/fileadmin/migrate/sampletests/Clip_2.mp4",
    "https://sprachportal.integrationsfonds.at/fileadmin/migrate/sampletests/Clip_3.mp4",
    "https://sprachportal.integrationsfonds.at/fileadmin/migrate/sampletests/Clip_4.mp4",
    "https://sprachportal.integrationsfonds.at/fileadmin/migrate/sampletests/Clip_5.mp4",
    "https://sprachportal.integrationsfonds.at/fileadmin/migrate/sampletests/Clip_6.mp4",
    "https://sprachportal.integrationsfonds.at/fileadmin/migrate/sampletests/Clip_7.mp4",
    "https://sprachportal.integrationsfonds.at/fileadmin/migrate/sampletests/Clip_8.mp4",
    "https://sprachportal.integrationsfonds.at/fileadmin/migrate/sampletests/Clip_9.mp4",
    "https://sprachportal.integrationsfonds.at/fileadmin/migrate/sampletests/Clip_10.mp4",
    "https://sprachportal.integrationsfonds.at/fileadmin/migrate/sampletests/Clip_11.mp4",
    "https://sprachportal.integrationsfonds.at/fileadmin/migrate/sampletests/Clip_12.mp4",
    "https://sprachportal.integrationsfonds.at/fileadmin/migrate/sampletests/Clip_13.mp4",
    "https://sprachportal.integrationsfonds.at/fileadmin/migrate/sampletests/Clip_14.mp4",
  ]);

  return (
    <>
      <Navbar />
      <div className="w-5/6 mx-auto min-h-screen bg-gray-300">
        <Information />
        <VideosBlock videos={videos} />
      </div>
    </>
  );
}

export default App;
