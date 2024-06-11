import React, { useEffect, useState } from "react";
import "./ArtistLink.css";

const clientID = "b5a36b87bb8a4529841f72127460a81f";
const clientSecret = "732c9d58b4144c9898fa23425f6c6c44";

const ArtistLink = () => {
  const [artistName, setArtistName] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // Fetch access token when component mounts
    const authOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientID + ":" + clientSecret),
      },
      body: "grant_type=client_credentials",
    };

    fetch("https://accounts.spotify.com/api/token", authOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAccessToken(data.access_token);
      })
      .catch((error) => {
        console.error("Error fetching access token:", error);
      });
  }, []);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setArtistName(inputValue);

    // Fetch suggestions based on input value
    if (inputValue.trim() !== "") {
      fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(
          inputValue
        )}&type=artist&limit=5`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
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
          const suggestedArtists = data.artists.items.map(
            (artist) => artist.name
          );
          setSuggestions(suggestedArtists);
        })
        .catch((error) => {
          console.error("Error fetching artist suggestions:", error);
        });
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setArtistName(suggestion);
    setSuggestions([]);

    // Fetch related artists based on selected artist
    fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(
        suggestion
      )}&type=artist&limit=1`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
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
        // Get the first artist's ID
        const artistId = data.artists.items[0].id;

        // Fetch related artists
        return fetch(
          `https://api.spotify.com/v1/artists/${artistId}/related-artists`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
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
        // Extract required information from related artists
        const relatedArtistsInfo = data.artists.map((artist) => ({
          name: artist.name,
          genres: artist.genres,
          hasImage: artist.images && artist.images.length > 0,
          popularity: artist.popularity,
        }));
        console.log("Related Artists Info:", relatedArtistsInfo);
      })
      .catch((error) => {
        console.error("Error fetching related artists:", error);
      });
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Find Your Match</h5>
        <form>
          <input
            type="text"
            value={artistName}
            onChange={handleInputChange}
            placeholder="Enter artist name"
            className="form-control"
          />
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
  );
};

export default ArtistLink;
