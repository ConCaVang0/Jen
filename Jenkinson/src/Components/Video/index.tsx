// OceanVideoPlayer.tsx
import React, { useRef } from 'react';
import ReactPlayer from 'react-player';

type OceanVideoPlayerProps = {
  url: string;
};

const OceanVideoPlayer: React.FC<OceanVideoPlayerProps> = ({ url }) => {
  const playerRef = useRef<ReactPlayer | null>(null);

  const handleProgress = (progress: { playedSeconds: number }) => {
    // Nếu thời gian hiện tại vượt quá 10 giây, seek lại về 0
    if (progress.playedSeconds > 10 && playerRef.current) {
      playerRef.current.seekTo(0, 'seconds');
    }
  };

  return (
    <ReactPlayer
      ref={(ref) => (playerRef.current = ref)}
      url={url}
      width="100%"
      height="600px"
      playing={true}
      loop={false}
      controls={false}
      muted={true}
      progressInterval={1000}
      onProgress={handleProgress}
    />
  );
};

export default OceanVideoPlayer;
