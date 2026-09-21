import PropTypes from "prop-types";
import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle.jsx";

export default function OurStory({ story }) {
  return (
    <section className="section" id="story">
      <SectionTitle eyebrow="How It Began" title="Our Story" />
      <ul className="story__list">
        {story.map((milestone, i) => (
          <motion.li
            className="story__item"
            key={milestone.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            <p className="story__year">{milestone.year}</p>
            <h3 className="story__title">{milestone.title}</h3>
            <p className="story__text">{milestone.text}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

OurStory.propTypes = {
  story: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};
