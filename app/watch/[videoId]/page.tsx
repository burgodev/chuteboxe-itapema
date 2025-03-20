import {
  fetchVimeoAccessToken,
  getVimeoVideo,
  getVimeoVideos,
} from "@/src/api/vimeoApi";

import { cookies } from "next/headers";
import PageClient from "./PageClient";

interface WatchProps {
  params: {
    videoId: string;
  };
}

const Watch = async () => {
  const videos = await getVimeoVideos();
  const video = videos[0];

  return <PageClient video={video} relatedVideos={videos} />;
};

export default Watch;
