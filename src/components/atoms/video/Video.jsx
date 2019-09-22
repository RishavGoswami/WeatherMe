import React from "react";

const Video = props => {
  const { source_mp4, source_webm } = props;
  return (
    <video autoPlay muted loop id="video">
      <source src={source_mp4} type="video/mp4" />
      <source src={source_webm} type="video/webm" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
};

export default Video;
