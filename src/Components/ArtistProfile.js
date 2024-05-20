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
        <p>ADD ABOUT HERE</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          scelerisque leo nec nisi cursus, nec cursus nisi pellentesque. Integer
          gravida orci in massa pretium, a posuere lorem facilisis. Sed
          tincidunt nunc quis arcu convallis, in ullamcorper nisl euismod.
          Integer rutrum odio eu turpis vulputate, vel feugiat ipsum dapibus.
          Nam ut ligula ac erat dignissim bibendum. Quisque mollis libero quis
          nisl venenatis, a suscipit nulla interdum. Nulla facilisi. Cras at dui
          sit amet lacus interdum tristique.
        </p>
      </section>

      <section className="profile-section contact">
        <h2> Contact Me</h2>
        <p>ADD FUNCTIONALITY</p>
        <ol>
          <li>
            <a href="#">
              Email <Envelope />
            </a>
          </li>
          <li>
            <a href="#">
              Instagram <InstagramLogo />
            </a>
          </li>
          <li>
            <a href="#">
              Phone <Phone />
            </a>
          </li>
          <li>
            <a href="#">
              Website <Globe />
            </a>
          </li>
        </ol>
      </section>
    </section>
  );
};

export default ArtistProfile;
