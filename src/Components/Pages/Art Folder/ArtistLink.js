import React, { useEffect, useState } from "react";
import "./ArtistLink.css";

// Spotify API credentials
const clientID = "b5a36b87bb8a4529841f72127460a81f";
const clientSecret = "732c9d58b4144c9898fa23425f6c6c44";

const ArtistLink = () => {
  // State variables for managing component state
  const [artistName, setArtistName] = useState(""); // Stores the input value for artist name
  const [accessToken, setAccessToken] = useState(""); // Stores the access token for Spotify API
  const [suggestions, setSuggestions] = useState([]); // Stores suggested artist names based on user input
  const [relatedArtists, setRelatedArtists] = useState([]); // Stores related artists based on selected artist

  // useEffect hook to fetch access token from Spotify API on component mount
  useEffect(() => {
    const authOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientID + ":" + clientSecret), // Base64 encoded client credentials for authentication
      },
      body: "grant_type=client_credentials", // Specifies the type of OAuth2 grant (client credentials)
    };

    fetch("https://accounts.spotify.com/api/token", authOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAccessToken(data.access_token); // Sets the access token received from Spotify API
      })
      .catch((error) => {
        console.error("Error fetching access token:", error);
      });
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Function to handle input change in the artist input field
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setArtistName(inputValue); // Updates artistName state with current input value

    // Fetch suggestions based on input value from Spotify API
    if (inputValue.trim() !== "") {
      fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(
          inputValue
        )}&type=artist&limit=5`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Includes access token in headers for authentication
          },
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          // Extracts artist names from API response and updates suggestions state
          const suggestedArtists = data.artists.items.map(
            (artist) => artist.name
          );
          setSuggestions(suggestedArtists);
        })
        .catch((error) => {
          console.error("Error fetching artist suggestions:", error);
        });
    } else {
      setSuggestions([]); // Clears suggestions if input is empty
    }
  };

  // Function to handle click on a suggested artist
  const handleSuggestionClick = (suggestion) => {
    setArtistName(suggestion); // Sets the selected artist name as the input value
    setSuggestions([]); // Clears suggestions after selection

    // Fetch related artists based on selected artist from Spotify API
    fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(
        suggestion
      )}&type=artist&limit=1`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Includes access token in headers for authentication
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Extracts the ID of the first artist from API response
        const artistId = data.artists.items[0].id;

        // Fetches related artists based on the retrieved artist ID
        return fetch(
          `https://api.spotify.com/v1/artists/${artistId}/related-artists`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`, // Includes access token in headers for authentication as required by the SpotifyAPI
            },
          }
        );
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Extracts required information (name and image URL) from related artists and updates relatedArtists state
        const relatedArtistsInfo = data.artists
          .map((artist) => ({
            name: artist.name,
            imageUrl: artist.images.length > 0 ? artist.images[0].url : null,
          }))
          .slice(0, 10); // Limits to the first 10 related artists
        setRelatedArtists(relatedArtistsInfo);
      })
      .catch((error) => {
        console.error("Error fetching related artists:", error);
      });
  };

  // JSX markup for rendering the component
  return (
    <>
      {/* Introductory text for the component */}
      <p className="intro-text">
        Everyone has their own taste but sometimes and stepping out of your
        comfort zone to find what you like is not always that easy. This
        Match-Maker however will help you find artists you may like based on
        your favourite artist.
      </p>
      <p className="intro-text">
        Simply type an artist and similar artists you may like will be
        recommended.
      </p>
      {/* Main card section with input form and suggestions */}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Find Your Match</h5>
          <form>
            <input
              type="text"
              value={artistName}
              onChange={handleInputChange}
              placeholder="Enter your favourite artist"
              className="form-control"
            />
            {/* Render suggestions if available */}
            {suggestions.length > 0 && (
              <div className="suggestions">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="suggestion"
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Render related artists if artistName and relatedArtists exist */}
      {artistName && relatedArtists.length > 0 && (
        <div className="related-artists">
          <h5 className="related-artist-title">
            Our Top 10 recommendations since you like: {artistName}
          </h5>
          <div className="artist-images-container">
            {relatedArtists.map((artist, index) => (
              <div key={index} className="artist-container">
                <img
                  src={artist.imageUrl}
                  alt={artist.name}
                  className="artist-img"
                />
                <div className="artist-name">{artist.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ArtistLink;

// Credit to the following for help with implementing the SpotifyAPI:
// Spotify (2017). Home | Spotify for Developers. [online] Spotify.com. Available at: https://developer.spotify.com/.
// Imdad Codes (2021). Getting Started with Spotify API (Complete Overview). [online] www.youtube.com. Available at: https://www.youtube.com/watch?v=c5sWvP9h3s8.
// Imdad Codes (2024). The ONLY Spotify API Tutorial You’ll Ever Need (Getting User Playlists). [online] YouTube. Available at: https://www.youtube.com/watch?v=2if5xSaZJlg
