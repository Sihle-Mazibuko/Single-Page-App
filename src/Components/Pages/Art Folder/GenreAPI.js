import axios from "axios";

const LASTFM_API_KEY = "b37c0fccc299864b7c5c2118c880eb8e";
const LASTFM_BASE_URL = "http://ws.audioscrobbler.com/2.0/";

export const getLastfmTopTags = async () => {
  try {
    const response = await axios.get(LASTFM_BASE_URL, {
      params: {
        method: "chart.getTopTags",
        api_key: LASTFM_API_KEY,
        format: "json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Last.fm top tags:", error);
    return null;
  }
};

export const getLastfmTagInfo = async (tag) => {
  try {
    const response = await axios.get(LASTFM_BASE_URL, {
      params: {
        method: "tag.getInfo",
        tag: tag,
        api_key: LASTFM_API_KEY,
        format: "json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Last.fm tag info:", error);
    return null;
  }
};

export const getLastfmTopArtists = async (tag) => {
  try {
    const response = await axios.get(LASTFM_BASE_URL, {
      params: {
        method: "tag.getTopArtists",
        tag: tag,
        api_key: LASTFM_API_KEY,
        format: "json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Last.fm top artists:", error);
    return null;
  }
};
