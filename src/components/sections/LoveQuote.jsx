import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";

export default function LoveQuote({ quotes }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (quotes.length < 2) return undefined;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  return (
    <section className="quote" id="quote">
      <p className="quote__marks" aria-hidden="true">&ldquo;</p>
      <AnimatePresence mode="wait">
        <motion.blockquote
          className="quote__text"
          key={quotes[index]}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.6 }}
        >
          {quotes[index]}
        </motion.blockquote>
      </AnimatePresence>
    </section>
  );
}

LoveQuote.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.string).isRequired,
};
