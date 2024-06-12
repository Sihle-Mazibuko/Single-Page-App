import React, { useState } from "react";
import ArtistLink from "./Art Folder/ArtistLink";
import ExamArt from "./Art Folder/ExamArt";
import { motion, AnimatePresence } from "framer-motion";
import "./Art Folder/ArtPage.css";
import { Play } from "@phosphor-icons/react";

const InternetArtwork = () => {
  const [selectedTab, setSelectedTab] = useState("artistLink");

  const tabVariants = {
    enter: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <div className="now-playing-wrapper">
        <h2 className="now-playing">
          <Play size={24} /> Now playing: Designing The WebApp - Sihle Mazibuko
        </h2>
      </div>

      <section>
        <nav className="tab-nav">
          <ul>
            <li
              className={selectedTab === "artistLink" ? "selected" : ""}
              onClick={() => setSelectedTab("artistLink")}
            >
              <button className="tab-button">Music Matcher</button>
            </li>
            <li
              className={selectedTab === "examArt" ? "selected" : ""}
              onClick={() => setSelectedTab("examArt")}
            >
              <button className="tab-button">Music Art</button>
            </li>
          </ul>
        </nav>
        <section>
          <AnimatePresence>
            {selectedTab === "artistLink" && (
              <motion.div
                key="artistLink"
                variants={tabVariants}
                initial="exit"
                animate="enter"
                exit="exit"
              >
                <ArtistLink />
              </motion.div>
            )}
            {selectedTab === "examArt" && (
              <motion.div
                key="examArt"
                variants={tabVariants}
                initial="exit"
                animate="enter"
                exit="exit"
              >
                <ExamArt />
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </section>
    </>
  );
};

export default InternetArtwork;
