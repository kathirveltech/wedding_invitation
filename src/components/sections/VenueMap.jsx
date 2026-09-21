import PropTypes from "prop-types";
import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle.jsx";
import Button from "../common/Button.jsx";

export default function VenueMap({ venue }) {
  return (
    <section className="section venue" id="venue">
      <SectionTitle eyebrow="Where" title="The Venue" />
      <motion.div
        className="venue__map"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {venue.mapEmbedUrl ? (
          <iframe
            src={venue.mapEmbedUrl}
            title={`Map showing ${venue.name}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <div className="venue__map-placeholder">
            <span aria-hidden="true" style={{ fontSize: "2rem" }}>📍</span>
            <p>Map placeholder</p>
            <p style={{ fontSize: "0.85rem" }}>
              Add your Google Maps embed URL in weddingData.js
            </p>
          </div>
        )}
      </motion.div>
      <p className="venue__address">
        {venue.name} · {venue.address}
      </p>
      <div className="venue__actions">
        <Button href={venue.directionsUrl}>Get Directions</Button>
      </div>
    </section>
  );
}

VenueMap.propTypes = {
  venue: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    mapEmbedUrl: PropTypes.string.isRequired,
    directionsUrl: PropTypes.string.isRequired,
  }).isRequired,
};
