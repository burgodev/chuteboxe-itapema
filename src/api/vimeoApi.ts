import { apiMoviesToMovies } from "../mappers/apiMappers";
import { vimeoVideotoVideo } from "../mappers/vimeoVideotoVideo";

const CLIENT_ID = "160a0f5414634953a5d79b7b9063c958c93aa8cd"; // TODO: env
const CLIENT_SECRET =
  "8MLSNhYIonfJmkHtu1U5laZGGdkK/woO8Y+qvXznrLtYOjJd6yDo3e4ubUYITKEB4bEOK2UStGzo+/DhTFX8EYp2qXi/EgS63Z6QCm0pO2Z+d6xxrvTJ3g8yk5eKEB3U";
const USER_ID = "227519127";

export const getVimeoAccessToken = async () => {
  const token = localStorage.getItem("access_token");

  if (!token) return await fetchVimeoAccessToken();

  return token;
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

export const getVimeoVideos = async ({ token }: { token: string }) => {
  const response = await fetch(
    `https://api.vimeo.com/users/${USER_ID}/videos`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const { data } = await response.json();

  console.log("data", data);

  return apiMoviesToMovies(data);
};

export const getVimeoVideo = async ({
  videoId,
  token,
}: {
  videoId: string;
  token: string;
}) => {
  const response = await fetch(`https://api.vimeo.com/videos/${videoId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  return vimeoVideotoVideo(data);
};
