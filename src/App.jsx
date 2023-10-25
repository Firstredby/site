import React, { useState } from "react";
import VideosBlock from "./components/VideosBlock/VideosBlock";
import Navbar from "./components/Navbar/Navbar";
import Information from "./components/Information/Information";
import data from "./data/videos.json";

function App() {
  const [videos, setVideos] = useState(data);

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
