import React, { useEffect, useState } from "react";
import { getGenresAPI, getGenreInfoAPI } from "./GenreAPI";
import Graph from "./GenreGraph";
import GenreCard from "./GenreCard";
import "./Map.css";

const Map = () => {
  const [loading, setLoading] = useState(true); // State to track loading state
  const [error, setError] = useState(false); // State to track error state
  const [genreData, setGenreData] = useState([]); // State to store genre data fetched from Last.fm
  const [searchTerm, setSearchTerm] = useState(""); // State to store user search term
  const [selectedGenre, setSelectedGenre] = useState(null); // State to store selected genre for detailed view

  // Effect to fetch genre data from Last.fm on component mount
  useEffect(() => {
    const fetchAllGenresInfo = async () => {
      try {
        const topGenres = await getGenresAPI(); // Fetch top tags from Last.fm API

        if (topGenres && topGenres.toptags && topGenres.toptags.tag) {
          // Filter out "seen live" genre and limit to 50 genres for demonstration
          const tags = topGenres.toptags.tag
            .filter((tag) => tag.name !== "seen live")
            .slice(0, 49); // Limit to 49 tags (adjustable)

          // Map each tag to fetch detailed info asynchronously
          const genrePromises = tags.map(async (tag) => {
            const tagInfoResponse = await getGenreInfoAPI(tag.name); // Fetch info for each tag

            if (tagInfoResponse && tagInfoResponse.tag) {
              return {
                genre: tagInfoResponse.tag.name,
                info: tagInfoResponse.tag.wiki
                  ? tagInfoResponse.tag.wiki.summary
                  : "", // Use wiki summary if available
              };
            } else {
              return null; // Handle error case or skip problematic genre
            }
          });

          // Resolve all promises and filter out null values (errors)
          const genreDataResult = await Promise.all(genrePromises);
          const filteredGenreData = genreDataResult.filter(
            (data) => data !== null
          );
          setGenreData(filteredGenreData); // Set fetched genre data
          setLoading(false); // Update loading state
        } else {
          setError(true); // Set error state if fetching top tags fails
          setLoading(false); // Update loading state
        }
      } catch (error) {
        console.error("Error fetching genre data from Last.fm:", error); // Log error to console
        setError(true); // Set error state
        setLoading(false); // Update loading state
      }
    };

    fetchAllGenresInfo(); // Call fetch function on component mount
  }, []); // Dependency array ensures effect runs only once on mount

  // Handle search input change
  const handleSearchChange = (e) => {
    const { value } = e.target; // Get input value
    setSearchTerm(value); // Update search term state
    const foundGenre = genreData.find((genre) =>
      genre.genre.toLowerCase().includes(value.toLowerCase())
    ); // Find genre that matches search term
    setSelectedGenre(foundGenre || null); // Set selected genre based on search results
  };

  // Clear search term and selected genre
  const clearSearch = () => {
    setSearchTerm(""); // Clear search term state
    setSelectedGenre(null); // Clear selected genre state
  };

  // Render loading message if data is still loading
  if (loading) {
    return <div>Loading...</div>; // Or a loading spinner component
  }

  // Render error message if data fetching encountered an error
  if (error) {
    return <div>Currently unable to fetch data. Please try again later.</div>;
  }

  // Render main container with graph and search input
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

export default Map; // Export Map component
