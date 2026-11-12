
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaHeart, FaDirections } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

function Venue() {
  const embedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.1053330133504!2d76.36891927377832!3d15.262050560543228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb9d79294a096b7%3A0x2f4c0d11c9fb536!2sSri%20Saileela%20Ranga%20Mandira!5e0!3m2!1sen!2sin!4v1794122283152!5m2!1sen!2sin";

  const directionsUrl =
    "https://maps.app.goo.gl/YjjxWVZCP4tpyLkG9";

  return (
    <section className="venue-section my-5" id="venue">
      <div className="container">

        <SectionTitle
          subtitle="Location"
          title="Wedding Venue"
        />

        <motion.div
          className="venue-card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="venue-header">

            <motion.div
              className="venue-pin"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaMapMarkerAlt />
            </motion.div>

            <h3>✨ Sri Sai Leela Ranga Mandira</h3>

            <p className="venue-location">
              Hospet, Karnataka
            </p>

            <FaHeart className="venue-heart" />

          </div>

          <p className="venue-text">
            Join us to celebrate our special day filled with
            love, laughter and beautiful memories.
          </p>

          {/* Google Maps Embed */}
          <div className="map-container">

            <iframe
              title="Sri Sai Leela Ranga Mandira Location"
              src={embedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />

          </div>

          {/* Directions Button */}
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="map-button"
          >
            <FaDirections />
            Get Directions
          </a>

        </motion.div>

      </div>
    </section>
  );
}

export default Venue;
