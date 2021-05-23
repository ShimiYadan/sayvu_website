import React from "react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      style={{height: "100%", width: "100%"}}
    />
  </div>
)
export default Video