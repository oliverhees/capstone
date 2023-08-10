import { useState, useEffect } from "react";
import YouTubePlayer from "../YoutubePlayer";

function VideoSearch({ searchKey }) {
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    async function performSearch() {
      try {
        const response = await fetch("/api/youtubeSearch", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ searchTerm: searchKey }),
        });

        if (response.ok) {
          const data = await response.json();
          setVideoUrl(data.videoId);
        } else {
          console.error("API request error");
        }
      } catch (error) {
        console.error("API request error", error);
      }
    }

    performSearch();
  }, [searchKey]);
  console.log(videoUrl);
  return (
    <div>
      {videoUrl ? (
        <YouTubePlayer videoUrl={videoUrl} />
      ) : (
        <p>No matching video found</p>
      )}
    </div>
  );
}

export default VideoSearch;
