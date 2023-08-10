import YouTube from "react-youtube";

const YouTubePlayer = ({ videoUrl }) => {
  const opts = {
    height: "240",
    width: "320",
    playerVars: {},
  };

  return <YouTube videoId={videoUrl} opts={opts} />;
};

export default YouTubePlayer;
