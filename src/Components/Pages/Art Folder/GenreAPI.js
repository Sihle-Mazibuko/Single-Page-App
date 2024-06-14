import axios from "axios";

// Last.fm API credentials and base URL
const api_key_LastFM = "b37c0fccc299864b7c5c2118c880eb8e";
const lastFM_url = "https://ws.audioscrobbler.com/2.0/";

// Function to fetch top tags from Last.fm
export const getGenresAPI = async () => {
  try {
    // Using axios to make a GET request to Last.fm API
    const response = await axios.get(`${lastFM_url}`, {
      params: {
        method: "tag.getTopTags", // API method to get top tags
        api_key: api_key_LastFM, // API key for authentication
        format: "json", // Response format
      },
    });
    return response.data; // Return the JSON data received from API
  } catch (error) {
    // Log and handle errors if any occur during the API request
    console.error("Error fetching top genres", error);
    return null; // Return null in case of error
  }
};

// Function to fetch tag info from Last.fm
export const getGenreInfoAPI = async (tagName) => {
  try {
    // Using axios to make a GET request to Last.fm API
    const response = await axios.get(`${lastFM_url}`, {
      params: {
        method: "tag.getInfo", // API method to get info for a specific tag
        tag: tagName, // Tag name to fetch info for
        api_key: api_key_LastFM, // API key for authentication
        format: "json", // Response format
      },
    });
    return response.data; // Return the JSON data received from API
  } catch (error) {
    // Log and handle errors if any occur during the API request
    console.error(
      `Error fetching genre info for ${tagName} from Last.fm:`,
      error
    );
    return null; // Return null in case of error
  }
};

// Credit to: https://cs.wellesley.edu/~mashups/pages/APIs/lastfm_docu.pdf for providing info on how to use the LastFM api in a simple document
