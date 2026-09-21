import PropTypes from "prop-types";
import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle.jsx";

export default function EventTimeline({ events }) {
  return (
    <section className="section" id="events">
      <SectionTitle eyebrow="Celebrations" title="Wedding Events" />
      <div className="events__grid">
        {events.map((event, i) => (
          <motion.article
            className="event-card"
            key={event.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
          >
            <div className="event-card__icon" aria-hidden="true">
              {event.icon}
            </div>
            <h3 className="event-card__title">{event.title}</h3>
            <p className="event-card__meta">
              {event.date}
              <br />
              {event.time}
              <br />
              {event.venue}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

EventTimeline.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      venue: PropTypes.string.isRequired,
    })
  ).isRequired,
};
