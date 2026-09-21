import PropTypes from "prop-types";
import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle.jsx";

function PersonCard({ person, fromX }) {
  return (
    <motion.article
      className="couple__card"
      initial={{ opacity: 0, x: fromX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ y: -6 }}
    >
      <div className="couple__photo" aria-hidden={person.photo ? undefined : "true"}>
        {person.photo ? (
          <img src={person.photo} alt={person.name} />
        ) : (
          person.initial
        )}
      </div>
      <h3 className="couple__name">{person.name}</h3>
      <p className="couple__about">{person.about}</p>
    </motion.article>
  );
}

PersonCard.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    initial: PropTypes.string.isRequired,
    photo: PropTypes.string,
    about: PropTypes.string.isRequired,
  }).isRequired,
  fromX: PropTypes.number.isRequired,
};

export default function CoupleInfo({ groom, bride }) {
  return (
    <section className="section" id="couple">
      <SectionTitle eyebrow="The Happy Couple" title="Two Hearts, One Journey" />
      <div className="couple">
        <PersonCard person={groom} fromX={-40} />
        {/* ✅ plain div with CSS animation — no Framer Motion infinite loop */}
        <div className="couple__heart" aria-hidden="true">❤</div>
        <PersonCard person={bride} fromX={40} />
      </div>
    </section>
  );
}

const personShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  initial: PropTypes.string.isRequired,
  photo: PropTypes.string,
  about: PropTypes.string.isRequired,
});

CoupleInfo.propTypes = {
  groom: personShape.isRequired,
  bride: personShape.isRequired,
};