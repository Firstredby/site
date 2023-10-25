import React from "react";
import Video from "./Video/Video";

const VideosBlock = ({ videos }) => {
  return (
    <div className="flex flex-wrap gap-8 py-4 justify-around shadow-inner">
      {videos.map((el) => (
        <Video link={el.link} downloadLink={el.downloadLink} />
      ))}
    </div>
  );
};

export default VideosBlock;
