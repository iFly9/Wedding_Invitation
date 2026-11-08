
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { FaPlay, FaPause } from "react-icons/fa";

import song from "../assets/music/song.mp3";

// Automatically load images from the assets folder
const imageModules = import.meta.glob(
  "../assets/images/*",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

// Find images regardless of extension capitalization
const getImage = (name) => {
  const match = Object.entries(imageModules).find(([path]) => {
    const filename = path.split("/").pop();
    const filenameWithoutExtension = filename.replace(/\.[^.]+$/, "");

    return filenameWithoutExtension.toLowerCase() === name.toLowerCase();
  });

  return match ? match[1] : "";
};

function Gallery() {
  const memories = [
    {
      image: getImage("image1"),
      date: "05 December 2026",
      title: "Where It All Began ❤️",
      text: "Two hearts met and a beautiful journey started."
    },
    {
      image: getImage("image2"),
      date: "05 December 2026",
      title: "Beautiful Conversations ☕",
      text: "Every conversation created another memory."
    },
    {
      image: getImage("image3"),
      date: "06 December 2026",
      title: "A Promise Forever 💍",
      text: "A new chapter filled with love and happiness."
    },
    {
      image: getImage("image4"),
      date: "06 December 2026",
      title: "The Wedding Day ✨",
      text: "Our forever begins surrounded by blessings."
    },
    {
      image: getImage("image5"),
      date: "06 December 2026",
      title: "The Wedding Day ✨",
      text: "Our forever begins surrounded by blessings."
    },
    {
      image: getImage("image6"),
      date: "06 December 2026",
      title: "The Wedding Day ✨",
      text: "Our forever begins surrounded by blessings."
    },
    {
      image: getImage("image7"),
      date: "06 December 2026",
      title: "The Wedding Day ✨",
      text: "Our forever begins surrounded by blessings."
    },
    {
      image: getImage("image8"),
      date: "05 December 2026",
      title: "The Wedding Day ✨",
      text: "Our forever begins surrounded by blessings."
    },
    {
      image: getImage("image9"),
      date: "06 December 2026",
      title: "The Wedding Day ✨",
      text: "Our forever begins surrounded by blessings."
    },
    {
      image: getImage("image10"),
      date: "06 December 2026",
      title: "The Wedding Day ✨",
      text: "Our forever begins surrounded by blessings."
    }
  ];

  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(song);
    audioRef.current.loop = true;

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % memories.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [memories.length]);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (error) {
        console.error("Unable to play music:", error);
      }
    }
  };

  return (
    <section id="gallery" className="cinematic-gallery">

      <SectionTitle
        subtitle="Memories"
        title="Our Love Story"
      />

      <div className="movie-frame">

        {/* GOLD PARTICLES */}
        <div className="gold-particles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <AnimatePresence mode="wait">

          <motion.img
            key={current}
            src={memories[current].image}
            alt={memories[current].title}
            className="movie-image"

            initial={{
              opacity: 0,
              scale: 1.25
            }}

            animate={{
              opacity: 1,
              scale: 1.05
            }}

            exit={{
              opacity: 0,
              scale: 1
            }}

            transition={{
              duration: 2
            }}
          />

        </AnimatePresence>

        <div className="movie-overlay">

          <motion.div
            key={current}

            initial={{
              opacity: 0,
              y: 40
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            transition={{
              duration: 1
            }}
          >

            <p className="memory-date">
              {memories[current].date}
            </p>

            <h2>
              {memories[current].title}
            </h2>

            <p>
              {memories[current].text}
            </p>

          </motion.div>

          <button
            className="music-btn"
            onClick={toggleMusic}
            type="button"
          >
            {playing ? <FaPause /> : <FaPlay />}

            {playing
              ? " Playing Our Story"
              : " Start Our Story"}
          </button>

        </div>

      </div>

    </section>
  );
}

export default Gallery;
