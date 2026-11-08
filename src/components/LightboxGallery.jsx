
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";

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

function LightboxGallery() {
  const memories = [
    {
      image: getImage("image1"),
      title: "Beautiful Memories ❤️",
      text: "Every picture tells our story."
    },
    {
      image: getImage("image2"),
      title: "Together Forever 💍",
      text: "Moments we will cherish forever."
    },
    {
      image: getImage("image3"),
      title: "Our New Beginning ✨",
      text: "A beautiful journey starts here."
    },
    {
      image: getImage("image4"),
      title: "Our New Beginning ✨",
      text: "A beautiful journey starts here."
    },
    {
      image: getImage("image5"),
      title: "Our New Beginning ✨",
      text: "A beautiful journey starts here."
    },
    {
      image: getImage("image6"),
      title: "Our New Beginning ✨",
      text: "A beautiful journey starts here."
    },
    {
      image: getImage("image7"),
      title: "Our New Beginning ✨",
      text: "A beautiful journey starts here."
    },
    {
      image: getImage("image8"),
      title: "Our New Beginning ✨",
      text: "A beautiful journey starts here."
    },
    {
      image: getImage("image9"),
      title: "Our New Beginning ✨",
      text: "A beautiful journey starts here."
    },
    {
      image: getImage("image10"),
      title: "Our New Beginning ✨",
      text: "A beautiful journey starts here."
    }
  ];

  const [selected, setSelected] = useState(null);

  const closeLightbox = () => {
    setSelected(null);
  };

  const nextImage = () => {
    setSelected((selected) =>
      (selected + 1) % memories.length
    );
  };

  const previousImage = () => {
    setSelected((selected) =>
      (selected - 1 + memories.length) % memories.length
    );
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (selected === null) return;

      if (e.key === "Escape") {
        closeLightbox();
      }

      if (e.key === "ArrowRight") {
        nextImage();
      }

      if (e.key === "ArrowLeft") {
        previousImage();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [selected]);

  return (
    <section className="container my-5">

      <h2 className="section-title text-center">
        Gallery
      </h2>

      <div className="row g-3 mt-3">

        {memories.map((item, index) => (

          <div
            className="col-md-4"
            key={index}
          >

            <motion.img
              src={item.image}
              className="gallery-img"
              alt={item.title}

              whileHover={{
                scale: 1.05
              }}

              transition={{
                duration: 0.4
              }}

              onClick={() => setSelected(index)}
            />

          </div>

        ))}

      </div>

      <AnimatePresence>

        {selected !== null && (

          <motion.div
            className="luxury-lightbox"

            initial={{
              opacity: 0
            }}

            animate={{
              opacity: 1
            }}

            exit={{
              opacity: 0
            }}

            onClick={closeLightbox}
          >

            <button
              className="close-lightbox"
              onClick={closeLightbox}
              type="button"
              aria-label="Close gallery"
            >
              <FaTimes />
            </button>

            <button
              className="lightbox-prev"

              onClick={(e) => {
                e.stopPropagation();
                previousImage();
              }}

              type="button"
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>

            <motion.div
              className="lightbox-content"

              initial={{
                scale: 0.7,
                opacity: 0
              }}

              animate={{
                scale: 1,
                opacity: 1
              }}

              transition={{
                duration: 0.6
              }}

              onClick={(e) => e.stopPropagation()}
            >

              <img
                src={memories[selected].image}
                alt={memories[selected].title}
              />

              <div className="lightbox-caption">

                <h3>
                  {memories[selected].title}
                </h3>

                <p>
                  {memories[selected].text}
                </p>

                <span>
                  {selected + 1} / {memories.length}
                </span>

              </div>

            </motion.div>

            <button
              className="lightbox-next"

              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}

              type="button"
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}

export default LightboxGallery;
