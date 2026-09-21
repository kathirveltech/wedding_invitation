import { useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle.jsx";

export default function Gallery({ photos }) {
  const [active, setActive] = useState(null);

  return (
    <section className="section" id="gallery">
      <SectionTitle eyebrow="Moments" title="Our Gallery" />
      <div className="gallery__grid">
        {photos.map((photo, i) => (
          <motion.button
            type="button"
            className="gallery__item"
            key={photo.id}
            style={photo.src ? { padding: 0, border: "1px solid var(--border)" } : { background: photo.tone, border: "none" }}
            onClick={() => setActive(photo)}
            aria-label={`View ${photo.alt}`}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ scale: 1.03 }}
          >
            {photo.src ? (
              <img src={photo.src} alt={photo.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <span aria-hidden="true">❀</span>
            )}
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="gallery__lightbox"
            onClick={() => setActive(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-label={active.alt}
          >
            <motion.div
              className="gallery__lightbox-inner"
              style={active.src ? {} : { background: active.tone }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              {active.src ? (
                <img src={active.src} alt={active.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                <span aria-hidden="true">❀</span>
              )}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

Gallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      tone: PropTypes.string.isRequired,
    })
  ).isRequired,
};
