import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Divider from "./Divider.jsx";

export default function SectionTitle({ eyebrow, title }) {
  return (
    <motion.div
      className="section-title"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6 }}
    >
      <p className="section-title__eyebrow">{eyebrow}</p>
      <h2 className="section-title__main">{title}</h2>
      <Divider />
    </motion.div>
  );
}

SectionTitle.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
