import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaCoffee,
  FaRing,
  FaGlassCheers,
} from "react-icons/fa";

function Story() {
  const stories = [
    {
      icon: <FaHeart />,
      title: "First Meet",
      date: "08 Jan 2026",
      description:
        "Two strangers crossed paths and discovered a beautiful friendship that soon blossomed into love.",
    },
    {
      icon: <FaCoffee />,
      title: "First Coffee",
      date: "28 Jan 2026",
      description:
        "Endless conversations, shared dreams, and countless smiles made every moment unforgettable.",
    },
    {
      icon: <FaRing />,
      title: "Engagement",
      date: "29 Mar 2026",
      description:
        "A heartfelt 'Yes' marked the beginning of our forever journey together.",
    },
    {
      icon: <FaGlassCheers />,
      title: "Wedding Day",
      date: "06 Dec 2026",
      description:
        "Surrounded by love, blessings, and family, we begin our happily ever after.",
    },
  ];

  return (
    <section id="story" className="container my-5">

      <SectionTitle
        subtitle="Our Journey"
        title="Love Story"
      />

      <div className="story-timeline">

        {stories.map((story, index) => (
          <motion.div
            key={index}
            className="story-item"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="story-icon">
              {story.icon}
            </div>

            <div className="story-card">

              <span className="story-date">
                {story.date}
              </span>

              <h4>{story.title}</h4>

              <p>{story.description}</p>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Story;