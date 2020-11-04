import React from 'react';
import styled from 'styled-components';

const VideoFrame = styled.div`
  .video-wrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9, for an aspect ratio of 1:1 change to this value to 100% */
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <VideoFrame>
    <div className="video-wrapper">
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </div>
  </VideoFrame>
);
export default Video;
