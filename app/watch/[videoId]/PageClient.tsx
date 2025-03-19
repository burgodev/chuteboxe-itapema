"use client";

import { downloadVimeoVideo, getVimeoAccessToken } from "@/src/api/vimeoApi";
import { Movie } from "@/src/types";

interface PageClientProps {
  video: Movie;
  relatedVideos: Movie[];
}

const PageClient: React.FC<PageClientProps> = ({ video, relatedVideos }) => {
  console.log("video", video);
  return (
    <div className="flex flex-col min-h-screen gap-4 px-12 py-12">
      <div>
        <h1 className="text-2xl font-bold">{video.title}</h1>
        <button onClick={() => downloadVimeoVideo(video.id)}>download</button>
      </div>

      <div className="flex-1">
        <div
          className="w-full h-[75vh] iframe-container"
          dangerouslySetInnerHTML={{ __html: video.iframe }}
        />
      </div>
    </div>
  );
};

export default PageClient;
