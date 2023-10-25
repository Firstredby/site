/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import classes from "./Video.module.css";

const Video = ({ text }) => {
  return (
    <div className={classes.video_block}>
      <video src={text} controls className="w-[407px] h-[230px]" />
      <div className="grid grid-cols-2">
        <div className="grid border-2 border-slate-400 bg-slate-300">
          <button className="grid grid-cols-[2fr_6fr]">
            <img
              className="scale-50"
              src="https://www.svgrepo.com/show/533682/download.svg"
            />
            <p className="text-start place-self-center">mit Untertitel</p>
          </button>
        </div>
        <div>
          <button className="grid grid-cols-[2fr_6fr]">
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
