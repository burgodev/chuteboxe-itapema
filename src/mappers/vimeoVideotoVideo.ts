import { Video } from "../types/api";
import { VimeoVideo } from "../types/vimeo";

export const vimeoVideotoVideoArray = (vimeoVideo: VimeoVideo[]): Video[] =>
  vimeoVideo.map((video) => ({
    id: video.uri,
    title: video.name,
    link: video.player_embed_url,
    description: video.description,
    backgroundImage: video.pictures.base_link,
    duration: video.duration.toString(),
    categories: video.categories,
  }));

export const vimeoVideotoVideo = (video: VimeoVideo): Video => ({
  id: video.uri,
  title: video.name,
  link: video.player_embed_url,
  description: video.description,
  backgroundImage: video.pictures.base_link,
  duration: video.duration.toString(),
  categories: video.categories,
});
