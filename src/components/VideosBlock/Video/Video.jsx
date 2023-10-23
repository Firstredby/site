import React from "react";
import classes from "./Video.module.css";

const Video = ({ text }) => {
  return <div className={classes.video_block}>{text}</div>;
};

export default Video;
