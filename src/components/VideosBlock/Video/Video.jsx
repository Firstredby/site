import React from "react";
import classes from "./Video.module.css";

const Video = ({ text }) => {
  return <div className={classes.video_block}>
    <iframe src={text}/>
  </div>;
};

export default Video;
