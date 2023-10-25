/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import classes from "./Video.module.css";

const Video = ({ link, downloadLink }) => {
  const onDownload = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className={classes.video_block}>
      <video src={link} controls className="w-[407px] h-[230px]" />
      <div className="grid grid-cols-2 gap-8 pt-1">
        <div className="grid bg-slate-300 shadow-md">
          <button
            className="grid grid-cols-[2fr_6fr]"
            onClick={() => onDownload(link)}
          >
            <img
              className="scale-50"
              src="https://www.svgrepo.com/show/533682/download.svg"
            />
            <p className="text-start place-self-center">mit Untertitel</p>
          </button>
        </div>
        <div className="pt-1">
          <button
            className="grid grid-cols-[2fr_6fr] bg-slate-300 shadow-md"
            onClick={() => onDownload(downloadLink)}
          >
            <img
              className="scale-50"
              src="https://www.svgrepo.com/show/533682/download.svg"
            />
            <p className="text-start place-self-center">ohne Untertitel</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
