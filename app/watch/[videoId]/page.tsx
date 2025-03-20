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

const Watch = async ({ params }: WatchProps) => {
  const { videoId } = params;
  const accessToken = await fetchVimeoAccessToken();

  const videoData = await getVimeoVideo({ videoId });

  console.log("videoData", videoData);

  const videos = await getVimeoVideos();
  const video = videos[0];

  return <PageClient video={video} relatedVideos={videos} />;
};

export default Watch;
