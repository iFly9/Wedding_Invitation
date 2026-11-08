
import React, { useState } from "react";
import { motion } from "framer-motion";

import curtainLeft from "../assets/images/curtain-left.jpg";
import curtainRight from "../assets/images/curtain-right.jpg";
import invitationOpen from "../assets/images/invitation-open.jpg";

function InvitationOpening({ onOpen }) {
  const [stage, setStage] = useState("closed");

  const opening = stage !== "closed";

  return (
    <section className="art-invitation">

      {/* Desktop invitation artwork */}
      <img
        src={invitationOpen}
        className="open-invitation-art desktop-only"
        alt="Kausalya and Raghav wedding invitation"
      />

      {/* Mobile invitation content */}
      <div className="mobile-invitation-card">
        <div className="mobile-card-top">✦ ❀ ✦</div>
        <p className="mobile-kicker">Together with our families</p>
        <p className="mobile-intro">We're getting married</p>

        <div className="mobile-heart">♥</div>

        <h1>
          Kausalya
          <span>&</span>
          Raghav
        </h1>

        <div className="mobile-divider">✦ ─ ❀ ─ ✦</div>

        <div className="mobile-event">
          <strong>Reception</strong>
          <span>05 December 2026</span>
          <small>7:30 PM onwards</small>
        </div>

        <div className="mobile-event">
          <strong>Wedding Ceremony</strong>
          <span>06 December 2026</span>
          <small>7:30 AM onwards</small>
        </div>

        <button
          className="mobile-enter-button"
          onClick={onOpen}
        >
          Enter Our Wedding ✧
        </button>

        <div className="mobile-card-bottom">❀ ✿ ❀</div>
      </div>

      {/* Left curtain */}
      <motion.div
        className="art-curtain art-curtain-left"
        initial={{ x: "0%" }}
        animate={{ x: opening ? "-105%" : "0%" }}
        transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
      >
        <img src={curtainLeft} alt="" />
      </motion.div>

      {/* Right curtain */}
      <motion.div
        className="art-curtain art-curtain-right"
        initial={{ x: "0%" }}
        animate={{ x: opening ? "105%" : "0%" }}
        transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
        onAnimationComplete={() => {
          if (stage === "opening") setStage("revealed");
        }}
      >
        <img src={curtainRight} alt="" />
      </motion.div>

      {/* Desktop click areas */}
      {!opening && (
        <button
          className="art-open-hitarea desktop-only"
          aria-label="Open our invitation"
          onClick={() => setStage("opening")}
        />
      )}

      {stage === "revealed" && (
        <button
          className="art-enter-hitarea desktop-only"
          aria-label="Enter our wedding"
          onClick={onOpen}
        />
      )}

      {/* Mobile open button */}
      {!opening && (
        <button
          className="mobile-open-button"
          onClick={() => setStage("opening")}
        >
          Open Our Invitation ✧
        </button>
      )}
    </section>
  );
}

export default InvitationOpening;
