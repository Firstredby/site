import React from "react";
import classes from "./Video.module.css";

const Video = ({ text }) => {
  return <div className={classes.video_block}>
    <video src={text} controls className="w-[407px] h-[230px]"/>
    {/* <a href="">
        <svg xmlns="https://www.svgrepo.com/show/533682/download.svg"></svg>
        mit Untertitel
      </a>
      <a href="">
        <svg xmlns="https://www.svgrepo.com/show/533682/download.svg"></svg>
        ohne Untertitel
      </a> */}
  </div>;
};

export default Video;
