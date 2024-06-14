// Map.js
import React, { useEffect, useState } from "react";
import { getLastfmTopTags, getLastfmTagInfo } from "./GenreAPI";
import Graph from "./GenreGraph";
import GenreCard from "./GenreCard";
import "./Map.css"; // Import your CSS file

const Map = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [genreData, setGenreData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(null);

  useEffect(() => {
    const fetchAllGenresInfo = async () => {
      try {
        const topTagsResponse = await getLastfmTopTags();

        if (
          topTagsResponse &&
          topTagsResponse.toptags &&
          topTagsResponse.toptags.tag
        ) {
          // Filter out "seen live" genre and limit to 10 genres for demonstration
          const tags = topTagsResponse.toptags.tag
            .filter((tag) => tag.name !== "seen live")
            .slice(0, 3);

          const genrePromises = tags.map(async (tag) => {
            const tagInfoResponse = await getLastfmTagInfo(tag.name);

            if (tagInfoResponse && tagInfoResponse.tag) {
              return {
                genre: tagInfoResponse.tag.name,
                info: tagInfoResponse.tag.wiki
                  ? tagInfoResponse.tag.wiki.summary
                  : "",
              };
            } else {
              return null; // Handle error case or skip problematic genre
            }
          });

          const genreDataResult = await Promise.all(genrePromises);
          const filteredGenreData = genreDataResult.filter(
            (data) => data !== null
          );
          setGenreData(filteredGenreData);
          setLoading(false);
        } else {
          setError(true);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching genre data from Last.fm:", error);
        setError(true);
        setLoading(false);
      }
    };

    fetchAllGenresInfo();
  }, []);

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    const foundGenre = genreData.find((genre) =>
      genre.genre.toLowerCase().includes(value.toLowerCase())
    );
    setSelectedGenre(foundGenre || null);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSelectedGenre(null);
  };

  if (loading) {
    return <div>Loading...</div>; // Or a loading spinner component
  }

  if (error) {
    return <div>Currently unable to fetch data. Please try again later.</div>;
  }

  return (
    <div className="container">
      <h2>Genre City</h2>
      {!selectedGenre && (
        <>
          <Graph
            data={genreData}
            searchTerm={searchTerm}
            setSelectedGenre={setSelectedGenre}
          />
          <input
            type="text"
            placeholder="Search genres..."
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ marginTop: "20px", padding: "5px", width: "200px" }}
          />
        </>
      )}
      {selectedGenre && (
        <div>
          <GenreCard genre={selectedGenre} onClose={clearSearch} />
        </div>
      )}
    </div>
  );
};

export default Map;
