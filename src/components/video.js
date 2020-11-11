import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: ${(props) => props.width ?? 'auto'};
  video {
    width: 100%;
    max-height: 100%;
  }
`;

const Video = ({ source, width, showControls = false, filter }) => {
  const videoRef = useRef(null);

  return (
    <Container width={width}>
      <video
        controls={showControls}
        muted
        playsInline
        autoPlay
        loop
        style={{ filter }}
        ref={videoRef}
        onCanPlay={() => (videoRef.current.playbackRate = 3)}
      >
        <source src={source} type="video/mp4" />
      </video>
    </Container>
  );
};

export default Video;
