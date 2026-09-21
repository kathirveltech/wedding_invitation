import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { weddingData } from "./data/weddingData.js";

import Envelope from "./components/landing/Envelope.jsx";
import DoorReveal from "./components/landing/DoorReveal.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import MusicToggle from "./components/common/MusicToggle.jsx";

import Hero from "./components/sections/Hero.jsx";
import CoupleInfo from "./components/sections/CoupleInfo.jsx";
import LoveQuote from "./components/sections/LoveQuote.jsx";
import OurStory from "./components/sections/OurStory.jsx";
import EventTimeline from "./components/sections/EventTimeline.jsx";
import Countdown from "./components/sections/Countdown.jsx";
import Gallery from "./components/sections/Gallery.jsx";
import VenueMap from "./components/sections/VenueMap.jsx";
// import RSVPForm from "./components/sections/RSVPForm.jsx"; // disabled for now
import GuestWishes from "./components/sections/GuestWishes.jsx";

// Landing flow: "envelope" → click seal → flap opens → click letter →
// envelope fades, "doors" mount closed and swing open → "site"
export default function App() {
  const [stage, setStage] = useState("envelope"); // envelope | doors | site
  const [flapOpen, setFlapOpen] = useState(false);
  const [doorsOpen, setDoorsOpen] = useState(false);

  const { groom, bride, venue, quotes } = weddingData;

  const startDoors = () => {
    setStage("doors");
    // Let the doors mount closed for a beat before swinging open
    window.setTimeout(() => setDoorsOpen(true), 350);
  };

  return (
    <>
      <AnimatePresence>
        {stage === "envelope" ? (
          <motion.div
            className="landing"
            key="landing"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6 }}
          >
            <Envelope
              groomInitial={groom.initial}
              brideInitial={bride.initial}
              flapOpen={flapOpen}
              onOpenFlap={() => setFlapOpen(true)}
              onOpenInvitation={startDoors}
            />
            {!flapOpen ? <p className="landing__hint">Tap the envelope to open</p> : null}
          </motion.div>
        ) : null}
      </AnimatePresence>

      {stage === "doors" ? (
        <DoorReveal open={doorsOpen} onFinished={() => setStage("site")} />
      ) : null}

      {stage !== "envelope" ? (
        <>
          <Navbar groomInitial={groom.initial} brideInitial={bride.initial} />
          <main>
            <Hero
              groomName={groom.name}
              brideName={bride.name}
              dateDisplay={weddingData.weddingDateDisplay}
              venueName={venue.name}
              venueCity={venue.city}
              quote={quotes[0]}
              animate={doorsOpen}
            />
            <CoupleInfo groom={groom} bride={bride} />
            <LoveQuote quotes={quotes} />
            <OurStory story={weddingData.story} />
            <EventTimeline events={weddingData.events} />
            <Countdown targetDate={weddingData.weddingDate} />
            {/* <Gallery photos={weddingData.gallery} /> */}
            <VenueMap venue={venue} />
            {/* RSVPForm disabled for now */}
            <GuestWishes />
          </main>
          <Footer groomName={groom.name} brideName={bride.name} note={weddingData.footerNote} />
          <MusicToggle src={weddingData.musicSrc} />
        </>
      ) : null}
    </>
  );
}
