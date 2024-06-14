import React from "react";
import {
  SealCheck,
  Envelope,
  InstagramLogo,
  Phone,
  Globe,
} from "@phosphor-icons/react"; // Importing icons from Phosphor Icons library
import "./ArtistProfile.css"; // Importing CSS styles

// Functional component for the Artist Profile section
const ArtistProfile = () => {
  return (
    // Main section for the artist profile
    <section className="artist-profile">
      {/* Section for the artist's basic information */}
      <section className="profile-section small">
        <article className="section-one">
          <div className="overlay">
            {/* Verification status */}
            <p className="verified">
              Digital artist <SealCheck className="verified-check" />
            </p>
            {/* Artist's name */}
            <h1>Sihle Mazibuko</h1>
            {/* Number of projects */}
            <p className="proj-count">
              +20 projects <span>(and counting)</span>
            </p>
          </div>
        </article>
      </section>

      {/* Section for the detailed description of the artist */}
      <section className="profile-section large">
        {/* Title for the section */}
        <h2>About</h2>
        {/* Description of the artist */}
        <p>
          HeartBeat Tunes is a project simple in its nature and its goal. Not
          only will you get tailored music recommendations based on your artist
          preferences but you will also learn a thing or two about your
          favourtie music genres{" "}
        </p>
      </section>

      {/* Section for contact information */}
      <section className="profile-section contact">
        {/* Title for the section */}
        <h2> Contact Me</h2>
        {/* List of contact options */}

        <p className="contact-p">
          To get more info about the creator of this website:
        </p>
        <ol>
          {/* Email */}
          <li>
            <a href="mailto:sihlemazii@.com">
              Email <Envelope />
            </a>
          </li>
          {/* Instagram */}
          <li>
            <a href="https://www.instagram.com/sihle.jpeg">
              Instagram <InstagramLogo />
            </a>
          </li>
          {/* Website */}
          <li>
            <a href="https://sihle-mazibuko.github.io/Portfolio/">
              Website <Globe />
            </a>
          </li>
          {/* Phone */}
          <li>
            <a href="">
              (+27) 83 989 0907 <Phone />
            </a>
          </li>
        </ol>
      </section>
    </section>
  );
};

export default ArtistProfile;
