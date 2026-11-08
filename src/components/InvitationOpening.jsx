
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
    <section className={`art-invitation io-scene ${stage}`}>

      {/* DESKTOP INVITATION */}
      <img
        src={invitationOpen}
        className="open-invitation-art desktop-only"
        alt="Kausalya and Raghav wedding invitation"
        fetchPriority="high"
      />

      {/* MOBILE INVITATION CARD */}
      <div className="io-mobile-card">
        <div className="io-card-inner">

          <div className="io-decoration-top">
            ✦ ❀ ✦
          </div>

          <p className="io-kicker">
            Together with our families
          </p>

          <p className="io-intro">
            We're getting married
          </p>

          <div className="io-heart">♥</div>

          <h1>
            Kausalya
            <span>&</span>
            Raghav
          </h1>

          <div className="io-divider">
            ✦ ─ ❀ ─ ✦
          </div>

          <div className="io-event">
            <div className="io-event-icon">🥂</div>
            <strong>Reception</strong>
            <span>05 December 2026</span>
            <small>7:30 PM onwards</small>
          </div>

          <div className="io-flower-divider">❀</div>

          <div className="io-event">
            <div className="io-event-icon">💍</div>
            <strong>Wedding Ceremony</strong>
            <span>06 December 2026</span>
            <small>7:30 AM onwards</small>
          </div>

          <div className="io-divider">
            ✦ ─ ❀ ─ ✦
          </div>

          {stage === "opening" && (
            <p className="io-opening-message">
              Your invitation awaits...
            </p>
          )}

          {stage === "revealed" && (
            <button
              className="io-enter-button"
              onClick={onOpen}
              type="button"
            >
              Enter Our Wedding ✧
            </button>
          )}

          <div className="io-decoration-bottom">
            ❀ ✿ ❀
          </div>

        </div>
      </div>

      {/* LEFT CURTAIN */}
      <motion.div
        className="io-curtain io-curtain-left"
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

      {/* RIGHT CURTAIN */}
      <motion.div
        className="io-curtain io-curtain-right"
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

      {/* MOBILE OPEN BUTTON */}
      {stage === "closed" && (
        <button
          className="io-open-button"
          onClick={startOpening}
          type="button"
        >
          Open Our Invitation ✧
        </button>
      )}

      {/* DESKTOP OPEN BUTTON */}
      {!opening && (
        <button
          className="art-open-hitarea desktop-only"
          aria-label="Open our invitation"
          onClick={startOpening}
          type="button"
        />
      )}

      {/* DESKTOP ENTER BUTTON */}
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
