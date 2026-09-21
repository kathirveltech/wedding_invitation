import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle.jsx";
import Button from "../common/Button.jsx";

const initialForm = { name: "", guests: "1", attending: "yes", message: "" };

export default function RSVPForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    const guests = Number(form.guests);
    if (!Number.isInteger(guests) || guests < 1 || guests > 10) {
      next.guests = "Guests must be between 1 and 10.";
    }
    return next;
  };

  const handleSubmit = () => {
    const next = validate();
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section rsvp" id="rsvp">
        <motion.div
          className="rsvp__success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="rsvp__success-title">Thank You!</p>
          <p>
            {form.attending === "yes"
              ? `We can't wait to celebrate with you, ${form.name.trim()}.`
              : `We'll miss you, ${form.name.trim()} — thank you for letting us know.`}
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="section rsvp" id="rsvp">
      <SectionTitle eyebrow="Join Us" title="RSVP" />
      <motion.div
        className="rsvp__form"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="field">
          <label className="field__label" htmlFor="rsvp-name">Full Name</label>
          <input
            id="rsvp-name"
            className="field__input"
            type="text"
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
          />
          {errors.name ? <p className="field__error">{errors.name}</p> : null}
        </div>

        <div className="field">
          <label className="field__label" htmlFor="rsvp-guests">Number of Guests</label>
          <input
            id="rsvp-guests"
            className="field__input"
            type="number"
            min="1"
            max="10"
            value={form.guests}
            onChange={update("guests")}
          />
          {errors.guests ? <p className="field__error">{errors.guests}</p> : null}
        </div>

        <div className="field">
          <label className="field__label" htmlFor="rsvp-attending">Will you attend?</label>
          <select
            id="rsvp-attending"
            className="field__select"
            value={form.attending}
            onChange={update("attending")}
          >
            <option value="yes">Joyfully accepts</option>
            <option value="no">Regretfully declines</option>
          </select>
        </div>

        <div className="field">
          <label className="field__label" htmlFor="rsvp-message">Message (optional)</label>
          <textarea
            id="rsvp-message"
            className="field__textarea"
            rows="3"
            value={form.message}
            onChange={update("message")}
            placeholder="A note for the couple"
          />
        </div>

        <Button solid onClick={handleSubmit}>
          Send RSVP
        </Button>
      </motion.div>
    </section>
  );
}
