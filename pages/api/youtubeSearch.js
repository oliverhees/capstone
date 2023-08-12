export default async function handler(req, res) {
  if (req.method === "POST") {
    const apiKey = process.env.YOUTUBE_API_KEY;
    const searchTerm = req.body.searchTerm;

    // URL for youtube api search
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${searchTerm}&part=snippet&type=video&maxResults=1`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.items.length > 0) {
        const videoId = data.items[0].id.videoId;
        res.status(200).json({ videoId });
      } else {
        res.status(404).json({ message: "Found no video." });
      }
    } catch (error) {
      console.error("Error retrieving the video", error);
      res.status(500).json({ message: "Error retrieving the video" });
    }
  } else {
    res.status(405).json({ message: "Only POST requests are supported." });
  }
}
