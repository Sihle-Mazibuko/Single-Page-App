import React, { useEffect } from "react";
import {
  getLastfmTopTags,
  getLastfmTagInfo,
  getLastfmTopArtists,
} from "./GenreAPI"; // Adjust the path as per your actual project structure

const Map = () => {
  useEffect(() => {
    const fetchAllGenresInfo = async () => {
      try {
        const topTagsResponse = await getLastfmTopTags();

        if (
          topTagsResponse &&
          topTagsResponse.toptags &&
          topTagsResponse.toptags.tag
        ) {
          // Iterate over top tags and fetch genre info and top artists for each
          for (let i = 0; i < topTagsResponse.toptags.tag.length; i++) {
            const genre = topTagsResponse.toptags.tag[i].name;
            const tagInfoResponse = await getLastfmTagInfo(genre);
            const topArtistsResponse = await getLastfmTopArtists(genre);

            if (
              tagInfoResponse &&
              tagInfoResponse.tag &&
              topArtistsResponse &&
              topArtistsResponse.topartists
            ) {
              // Limit to top 5 artists
              const topArtists = topArtistsResponse.topartists.artist
                .slice(0, 5)
                .map((artist) => ({
                  name: artist.name,
                  listeners: artist.listeners,
                  url: artist.url,
                }));

              const genreData = {
                name: tagInfoResponse.tag.name,
                info: tagInfoResponse.tag.wiki.summary, // Adjust this to fit the Last.fm API response structure
                topArtists: topArtists,
              };

              console.log("Genre Data for", genre, ":", genreData);
            }
          }
        } else {
          console.error("Error fetching top tags from Last.fm");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAllGenresInfo();
  }, []);

  return <></>; // Render nothing in the component
};

export default Map;
