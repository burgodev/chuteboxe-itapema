interface App {
  name: string;
  uri: string;
}

interface Embed {
  html: string;
  badges: Record<string, unknown>;
  interactive: boolean;
}

interface Metadata {
  connections: Record<string, unknown>;
  interactions: Record<string, unknown>;
  is_vimeo_create: boolean;
  is_screen_record: boolean;
}

interface Pictures {
  uri: string;
  active: boolean;
  type: string;
  base_link: string;
  sizes: Array<{ width: number; height: number; link: string }>;
}

interface Play {
  status: string;
}

interface Privacy {
  view: string;
  embed: string;
  download: boolean;
  add: boolean;
  comments: string;
}

interface Stats {
  plays: number | null;
}

interface Uploader {
  pictures: Pictures;
}

interface User {
  uri: string;
  name: string;
  link: string;
  capabilities: Record<string, unknown>;
  location: string;
  pictures: Pictures;
}

export interface VimeoVideo {
  app: App;
  categories: string[];
  content_rating: string[];
  content_rating_class: string;
  created_time: string;
  description: string;
  duration: number;
  embed: Embed;
  has_audio: boolean;
  height: number;
  is_playable: boolean;
  language: string;
  license: string | null;
  link: string;
  metadata: Metadata;
  modified_time: string;
  name: string;
  pictures: Pictures;
  play: Play;
  player_embed_url: string;
  privacy: Privacy;
  rating_mod_locked: boolean;
  release_time: string;
  resource_key: string;
  stats: Stats;
  status: string;
  tags: string[];
  transcode: string | null;
  type: string;
  upload: string | null;
  uploader: Uploader;
  uri: string;
  user: User;
  width: number;
}
