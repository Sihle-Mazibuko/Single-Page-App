// LastFMAPI.js
import axios from "axios";

const LAST_FM_API_KEY = "b37c0fccc299864b7c5c2118c880eb8e";
const LAST_FM_API_BASE_URL = "https://ws.audioscrobbler.com/2.0/";

// Function to fetch top tags from Last.fm
export const getLastfmTopTags = async () => {
  try {
    const response = await axios.get(`${LAST_FM_API_BASE_URL}`, {
      params: {
        method: "tag.getTopTags",
        api_key: LAST_FM_API_KEY,
        format: "json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching top tags from Last.fm:", error);
    return null;
  }
};

// Function to fetch tag info from Last.fm
export const getLastfmTagInfo = async (tagName) => {
  try {
    const response = await axios.get(`${LAST_FM_API_BASE_URL}`, {
      params: {
        method: "tag.getInfo",
        tag: tagName,
        api_key: LAST_FM_API_KEY,
        format: "json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching tag info for ${tagName} from Last.fm:`,
      error
    );
    return null;
  }
};
