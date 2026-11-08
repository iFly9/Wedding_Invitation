
import React, { useState } from "react";
import { motion } from "framer-motion";

import curtainLeft from "../assets/images/curtain-left.jpg";
import curtainRight from "../assets/images/curtain-right.jpg";
import invitationOpen from "../assets/images/invitation-open.jpg";

function InvitationOpening({ onOpen }) {
  const [stage, setStage] = useState("closed");

  const opening = stage !== "closed";

  const startOpening = () => {
    if (stage === "closed") {
      setStage("opening");
    }
  };

  return (
    <section className={`art-invitation ${stage}`}>

      {/* Desktop invitation artwork */}
      <img
        src={invitationOpen}
        className="open-invitation-art desktop-only"
        alt="Kausalya and Raghav wedding invitation"
        fetchPriority="high"
      />

      {/* Mobile invitation card */}
      <div className="mobile-invitation-card">

        <div className="mobile-card-frame">

          <div className="mobile-card-top">
            ✦ <span>❀</span> ✦
          </div>

          <p className="mobile-kicker">
            Together with our families
          </p>

          <p className="mobile-intro">
            We're getting married
          </p>

          <div className="mobile-heart">♥</div>

          <h1>
            Kausalya
            <span>&</span>
            Raghav
          </h1>

          <div className="mobile-divider">
            ✦ ─ ❀ ─ ✦
          </div>

          <div className="mobile-event">
            <div className="mobile-event-icon">🥂</div>
            <strong>Reception</strong>
            <span>05 December 2026</span>
            <small>7:30 PM onwards</small>
          </div>

          <div className="mobile-event-separator">
            ❀
          </div>

          <div className="mobile-event">
            <div className="mobile-event-icon">💍</div>
            <strong>Wedding Ceremony</strong>
            <span>06 December 2026</span>
            <small>7:30 AM onwards</small>
          </div>

          <div className="mobile-divider">
            ✦ ─ ❀ ─ ✦
          </div>

          {/* Show open button before animation */}
          {stage === "closed" && (
            <button
              className="mobile-open-button"
              onClick={startOpening}
              type="button"
            >
              Open Our Invitation ✧
            </button>
          )}

          {/* Show enter button after animation */}
          {stage === "revealed" && (
            <button
              className="mobile-enter-button"
              onClick={onOpen}
              type="button"
            >
              Enter Our Wedding ✧
            </button>
          )}

          {stage === "opening" && (
            <p className="mobile-opening-text">
              Opening your invitation...
            </p>
          )}

          <div className="mobile-card-bottom">
            ❀ <span>✿</span> ❀
          </div>

        </div>
      </div>

      {/* Left curtain */}
      <motion.div
        className="art-curtain art-curtain-left"
        initial={{ x: "0%" }}
        animate={{
          x: opening ? "-105%" : "0%"
        }}
        transition={{
          duration: 2,
          ease: [0.76, 0, 0.24, 1]
        }}
      >
        <img src={curtainLeft} alt="" />
      </motion.div>

      {/* Right curtain */}
      <motion.div
        className="art-curtain art-curtain-right"
        initial={{ x: "0%" }}
        animate={{
          x: opening ? "105%" : "0%"
        }}
        transition={{
          duration: 2,
          ease: [0.76, 0, 0.24, 1]
        }}
        onAnimationComplete={() => {
          if (stage === "opening") {
            setStage("revealed");
          }
        }}
      >
        <img src={curtainRight} alt="" />
      </motion.div>

      {/* Desktop open button area */}
      {!opening && (
        <button
          className="art-open-hitarea desktop-only"
          aria-label="Open our invitation"
          onClick={startOpening}
          type="button"
        />
      )}

      {/* Desktop enter button area */}
      {stage === "revealed" && (
        <button
          className="art-enter-hitarea desktop-only"
          aria-label="Enter our wedding"
          onClick={onOpen}
          type="button"
        />
      )}

    </section>
  );
}

export default InvitationOpening;
