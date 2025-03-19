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
  const cookieStore = cookies();
  // const accessToken = cookieStore.get("accessToken")?.value || "";
  const { videoId } = params;
  const accessToken = await fetchVimeoAccessToken();

  const videoData = await getVimeoVideo({ token: accessToken, videoId });

  console.log("videoData", videoData);

  const videos = await getVimeoVideos({ token: accessToken });
  const video = videos[0];

  return <PageClient video={video} relatedVideos={videos} />;
};

export default Watch;
