import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Share2 } from "lucide-react";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  embedUrl: string;
}

const CHANNEL_ID = "UCdfQKDvtuYv_7TAJLgY-rPQ"; // replace with your channel ID
const API_KEY = "AIzaSyBDgGKrv7mwtOYA6Wbmo2EYWQVb1PqsDUw";
const THUMBNAIL = "/assets/logo-light.png"; // fallback if no thumbnail

const VideosSection = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [videoName, setVideoName] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isUploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isPlayerDialogOpen, setPlayerDialogOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const hasMore = visibleCount < videos.length;

  // Extract YouTube Video ID
  const getYouTubeVideoId = (url: string) => {
    let videoId = null;
    try {
      const urlObj = new URL(url);
      if (urlObj.hostname === "youtu.be") {
        videoId = urlObj.pathname.slice(1);
      } else if (
        urlObj.hostname === "www.youtube.com" ||
        urlObj.hostname === "youtube.com"
      ) {
        videoId = urlObj.searchParams.get("v");
        if (!videoId && urlObj.pathname.startsWith("/embed/")) {
          videoId = urlObj.pathname.split("/")[2];
        }
      }
    } catch {
      const regex =
        /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
      const matches = url.match(regex);
      videoId = matches ? matches[1] : null;
    }
    return videoId;
  };

  const handleShare = (title: string) => {
    if (navigator.share) {
      navigator
        .share({
          title: `Azakhana e Dr. Manzar Abbas: ${title}`,
          text: `Check these videos at Azakhana e Dr. Manzar Abbas: ${title}`,
          url: window.location.href,
        })
        .catch((error) => console.log("Error sharing", error));
    } else {
      console.log("Web Share API not supported");
    }
  };

  // Fetch latest videos from channel
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=20`
        );
        const data = await res.json();

        if (data.items) {
          const ytVideos: Video[] = data.items
            .filter((item: { id: { videoId: string } }) => item.id.videoId)
            .map(
              (item: {
                id: { videoId: string };
                snippet: {
                  title: string;
                  thumbnails: {
                    high: { url: string };
                    medium: { url: string };
                  };
                };
              }) => ({
                id: item.id.videoId,
                title: item.snippet.title,
                thumbnail:
                  item.snippet.thumbnails?.high?.url ||
                  item.snippet.thumbnails?.medium?.url ||
                  THUMBNAIL,
                embedUrl: `https://www.youtube.com/embed/${item.id.videoId}`,
              })
            );

          // Load saved local videos from storage
          const stored = JSON.parse(
            localStorage.getItem("uploadedVideos") || "[]"
          );

          setVideos([...stored, ...ytVideos]);
        }
      } catch (err) {
        console.error("Error fetching YouTube videos", err);
      }
    };

    fetchVideos();
  }, []);

  // Save uploaded video
  const handleVideoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoName || !videoUrl) return;

    setIsLoading(true);

    const videoId = getYouTubeVideoId(videoUrl);

    if (videoId) {
      const newVideo: Video = {
        id: Date.now().toString(),
        title: videoName,
        thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${videoId}`,
        // publishedAt: Date.now().toString(),
      };

      const updated = [newVideo, ...videos];
      setVideos(updated);

      // Save to localStorage
      localStorage.setItem(
        "uploadedVideos",
        JSON.stringify(updated.filter((v) => !v.id.includes("youtube")))
      );

      setVideoName("");
      setVideoUrl("");
      setUploadDialogOpen(false);
    }
    setIsLoading(false);
  };

  const openPlayer = (video: Video) => {
    setSelectedVideo(video);
    setPlayerDialogOpen(true);
  };

  return (
    <section id="videos" className="py-16 md:py-24 geometric-pattern">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="section-heading dark:text-white">Our Videos</h2>
          <Dialog open={isUploadDialogOpen} onOpenChange={setUploadDialogOpen}>
            <DialogTrigger asChild>
              <button className="islamicButton">Upload</button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Upload Video</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleVideoSubmit}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Video Name
                    </Label>
                    <Input
                      id="name"
                      className="col-span-3"
                      value={videoName}
                      onChange={(e) => setVideoName(e.target.value)}
                      placeholder="Enter Video Name"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="url" className="text-right">
                      YouTube URL
                    </Label>
                    <Input
                      id="url"
                      className="col-span-3"
                      value={videoUrl}
                      onChange={(e) => setVideoUrl(e.target.value)}
                      placeholder="Paste here Youtube Video URL"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    className="islamicButton"
                    disabled={isLoading}
                  >
                    {isLoading ? "Submitting..." : "Submit"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 select-none cursor-defualt">
          {videos.slice(0, visibleCount).map((video) => (
            <div
              key={video.id}
              className="islamicCard overflow-hidden group hover:shadow-lg transition-all duration-300 dark:bg-islamic-gray/10 dark:border border-islamic-gold/30 dark:border-islamic-gold/30 hover:scale-105 select-none cursor-defualt"
            >
              <div
                className="relative cursor-pointer"
                onClick={() => openPlayer(video)}
              >
                <img
                  src={THUMBNAIL}
                  alt={video.title}
                  className="w-full h-48 object-cover object-center"
                  onError={(e) => (e.currentTarget.src = THUMBNAIL)}
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-islamic-blue dark:bg-islamic-red rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="elipsis line-clamp-2">
                  <h3
                    className="font-bold text-lg mb-2 dark:text-white hover:underline cursor-pointer"
                    onClick={() => openPlayer(video)}
                  >
                    {video.title}
                  </h3>
                </div>
                <div className="flex items-center justify-end">
                  <button
                    onClick={() => handleShare(video.title)}
                    className="text-islamic-gray hover:text-islamic-green"
                    title="Share this video"
                  >
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {hasMore && (
          <div className="text-center mt-10">
            <button
              onClick={loadMore}
              className="islamicButton dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              View More
            </button>
          </div>
        )}
      </div>

      {/* Video Player Modal */}
      <Dialog open={isPlayerDialogOpen} onOpenChange={setPlayerDialogOpen}>
        <DialogContent className="max-w-3xl h-auto">
          <DialogHeader>
            <DialogTitle>{selectedVideo?.title}</DialogTitle>
          </DialogHeader>
          {selectedVideo && (
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={selectedVideo.embedUrl}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VideosSection;
