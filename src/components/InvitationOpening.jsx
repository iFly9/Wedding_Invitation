
import React, { useState } from "react";
import { motion } from "framer-motion";

import curtainLeft from "../assets/images/curtain-left.jpg";
import curtainRight from "../assets/images/curtain-right.jpg";

function InvitationOpening({ onOpen }) {
  const [stage, setStage] = useState("closed");

  const startOpening = () => {
    if (stage === "closed") {
      setStage("opening");
    }
  };

  return (
    <section className="art-invitation io-scene">
      {/* LEFT CURTAIN */}
      <motion.div
        className="io-curtain io-curtain-left"
        initial={{ x: "0%" }}
        animate={{
          x: stage === "opening" ? "-105%" : "0%",
        }}
        transition={{
          duration: 2,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <img src={curtainLeft} alt="" />
      </motion.div>

      {/* RIGHT CURTAIN */}
      <motion.div
        className="io-curtain io-curtain-right"
        initial={{ x: "0%" }}
        animate={{
          x: stage === "opening" ? "105%" : "0%",
        }}
        transition={{
          duration: 2,
          ease: [0.76, 0, 0.24, 1],
        }}
        onAnimationComplete={() => {
          if (stage === "opening") {
            onOpen();
          }
        }}
      >
        <img src={curtainRight} alt="" />
      </motion.div>

      {/* OPEN BUTTON */}
      {stage === "closed" && (
        <>
          <button
            className="io-open-button"
            onClick={startOpening}
            type="button"
          >
            Open Our Invitation ✧
          </button>

          <button
            className="art-open-hitarea desktop-only"
            aria-label="Open our invitation"
            onClick={startOpening}
            type="button"
          />
        </>
      )}
    </section>
  );
}

export default InvitationOpening;
