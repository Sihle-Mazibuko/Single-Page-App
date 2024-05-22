import React from "react";
import {
  SealCheck,
  Envelope,
  InstagramLogo,
  Phone,
  Globe,
} from "@phosphor-icons/react";
import "./ArtistProfile.css";

const ArtistProfile = () => {
  return (
    <section className="artist-profile">
      <section className="profile-section small">
        <div className="section-one">
          <div className="overlay">
            <p className="verified">
              Digital artist <SealCheck className="verified-check" />
            </p>
            <h1>Sihle Mazibuko</h1>

            <p className="proj-count">
              +20 projects <span>(and counting)</span>
            </p>
          </div>
        </div>
      </section>
      <section className="profile-section large">
        <h2>About Artist</h2>
        <p>
          I am an aspiring digital artist Currently completing a degree in
          Digital Arts Some of my skill include game designing, asset creation
          for game projects, website design and development.
        </p>
      </section>

      <section className="profile-section contact">
        <h2> Contact Me</h2>
        <ol>
          <li>
            <a href="mailto:sihlemazii@.com">
              Email <Envelope />
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/sihle.jpeg">
              Instagram <InstagramLogo />
            </a>
          </li>
          <li>
            <a href="https://sihle-mazibuko.github.io/Portfolio/">
              Website <Globe />
            </a>
          </li>
          <li>
            <a href="">
              Phone <Phone />
            </a>
          </li>
        </ol>
      </section>
    </section>
  );
};

export default ArtistProfile;
