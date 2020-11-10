import React, { useEffect, useRef } from 'react';

const Video = ({ source, showControls = false }) => (
  <video
    controls={showControls}
    muted
    autoPlay
    loop
    style={{ width: '500px', filter: 'brightness(160%)' }}
  >
    <source src={source} type="video/mp4" />
  </video>
);

export default Video;
