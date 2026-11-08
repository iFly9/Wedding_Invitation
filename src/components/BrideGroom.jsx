
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import groomImage from "../assets/images/groom.jpeg";
import brideImage from "../assets/images/bride.jpg";

function BrideGroom() {
  const profiles = [
    {
      name: "Raghav",
      role: "Software Engineer",
      description:
        "A dreamer who believes in building beautiful things in life and code.",
      image: groomImage,
      alt: "Raghav - Groom",
      direction: -60,
    },
    {
      name: "Kausalya",
      role: "Software Engineer",
      description:
        "A warm heart who brings love, care and happiness everywhere.",
      image: brideImage,
      alt: "Kausalya - Bride",
      direction: 60,
    },
  ];

  return (
    <section className="container my-5 bride-groom-section">
      <SectionTitle
        subtitle="The Beautiful Couple"
        title="Bride & Groom"
      />

      <div className="row g-4 align-items-stretch couple-wrapper">
        {profiles.map((person) => (
          <div className="col-12 col-md-6" key={person.name}>
            <Tilt
              tiltEnable={window.innerWidth > 767}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1200}
              transitionSpeed={1000}
              glareEnable={false}
              scale={1}
            >
              <motion.div
                className="glass-card text-center couple-card h-100"
                initial={{
                  opacity: 0,
                  x: person.direction,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="profile-image-wrapper">
                  <img
                    src={person.image}
                    alt={person.alt}
                    className="profile-img"
                    loading="lazy"
                  />
                </div>

                <h3 className="mt-4">{person.name}</h3>

                <p className="fw-semibold text-gold">
                  {person.role}
                </p>

                <p className="text-muted couple-description">
                  {person.description}
                </p>
              </motion.div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BrideGroom;
