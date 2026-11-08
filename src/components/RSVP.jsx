
import { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { sendRSVP } from "../services/api";

function RSVP() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    members: 1,
    attending: "yes",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "members" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await sendRSVP(form);

      setSuccess(true);

      setForm({
        name: "",
        phone: "",
        members: 1,
        attending: "yes",
        message: "",
      });
    } catch (err) {
      console.error("RSVP sending failed:", err);
      setError("Unable to send your RSVP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rsvp" className="container my-5">
      <motion.div
        className="glass-card rsvp-card"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="rsvp-header">
          <FaHeart className="rsvp-heart" />

          <h2 className="section-title">RSVP</h2>

          <p>Please confirm your presence 💍</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row g-4">
            <div className="col-md-6">
              <input
                type="text"
                name="name"
                className="form-control luxury-input"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <input
                type="tel"
                name="phone"
                className="form-control luxury-input"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                pattern="[0-9+\-\s()]{7,20}"
                title="Please enter a valid phone number"
                required
              />
            </div>

            <div className="col-md-6">
              <input
                type="number"
                name="members"
                className="form-control luxury-input"
                placeholder="Number of Members"
                min="1"
                value={form.members}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <select
                name="attending"
                className="form-control luxury-input"
                value={form.attending}
                onChange={handleChange}
              >
                <option value="yes">Attending</option>
                <option value="no">Not Attending</option>
              </select>
            </div>

            <div className="col-12">
              <textarea
                name="message"
                className="form-control luxury-input"
                rows="4"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <div className="col-12 text-center">
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.05 }}
                whileTap={{ scale: loading ? 1 : 0.95 }}
                className="btn btn-gold rsvp-button"
              >
                {loading ? "Sending..." : "Confirm Attendance ❤️"}
              </motion.button>
            </div>
          </div>
        </form>

        {error && (
          <p className="text-danger text-center mt-3" role="alert">
            {error}
          </p>
        )}

        {success && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="rsvp-success"
            role="status"
          >
            🎉 Thank you for confirming your presence!
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}

export default RSVP;
