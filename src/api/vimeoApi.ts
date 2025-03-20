import { apiMoviesToMovies } from "../mappers/apiMappers";
import { vimeoVideotoVideo } from "../mappers/vimeoVideotoVideo";

const CLIENT_ID = "4fb576e6fecddfec3da7fa424401226a1c6c067b"; // TODO: env
const CLIENT_SECRET =
  "JUEdwKjMzzFLLXcf6pV9lFKTU4lN+Snc9v7krbouBf2AT2oq3uVpEoniMcixWBJj3DB1XdSvuLqCR3HVcfuHg/Aipzao9e2qCyHivb2cj2vvUZ02Q4HNtOQwgUR322m9";
const USER_ID = "227519127";
const ACCESS_TOKEN = "1d9b4ac4192d9f87156c5a473d33a6f5";

export const getVimeoAccessToken = async () => {
  const token = localStorage.getItem("access_token");

  if (!token) return await fetchVimeoAccessToken();

  return token;
};

//

export const downloadVimeoVideo = async (videoId: string) => {
  try {
    const response = await fetch(`https://api.vimeo.com/me/videos`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    const { data } = await response.json();

    console.log("downloadVimeoVideo", data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchVimeoAccessToken = async () => {
  try {
    const response = await fetch(
      "https://api.vimeo.com/oauth/authorize/client",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
        },
        body: JSON.stringify({
          grant_type: "client_credentials",
        }),
      }
    );

    const data = await response.json();

    return data.access_token;
  } catch (err) {
    console.log(err);
  }
};

export const getVimeoVideos = async () => {
  const response = await fetch(
    `https://api.vimeo.com/users/${USER_ID}/videos`,
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        Accept: "application/vnd.vimeo.*+json",
        Host: "api.vimeo.com",
        Connection: "Keep-Alive",
      },
    }
  );
  const { data } = await response.json();

  console.log("data AQUI", data);

  return apiMoviesToMovies(data);
};

export const getVimeoVideo = async ({ videoId }: { videoId: string }) => {
  const response = await fetch(`https://api.vimeo.com/videos/${videoId}`, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      Accept: "application/vnd.vimeo.*+json",
      Host: "api.vimeo.com",
      Connection: "Keep-Alive",
    },
  });

  const data = await response.json();

  console.log("getVimeoVideo", data);

  return vimeoVideotoVideo(data);
};
