// ============================================================
// EDIT THIS FILE ONLY to customize every piece of content
// on the website. No component contains hardcoded text.
// ============================================================

import groomPhoto from "../asset/Image (13).jpg";
import bridePhoto from "../asset/Image (14).jpg";
import galleryPhoto15 from "../asset/Image (15).jpg";
import galleryPhoto16 from "../asset/Image (16).jpg";
import galleryPhoto17 from "../asset/Image (17).jpg";
import galleryPhoto18 from "../asset/Image (18).jpg";
import galleryPhoto19 from "../asset/Image (19).jpg";
import galleryPhoto20 from "../asset/Image (20).jpg";
import bgMusic from "../asset/Thumbi-Thullal-Love-BGM.mp3";

export const weddingData = {
  groom: {
    name: "Vignesh R",
    initial: "V",
    photo: groomPhoto,
    about:
      "Warm-hearted and easygoing, Vignesh is the one who turns ordinary days into inside jokes. Ever since that first meeting in 2014, his patience and quiet care have been Nandhini's steadiest comfort — and the December he finally asked her to spend forever with him remains his proudest moment.",
  },
  bride: {
    name: "Nandhini R",
    initial: "N",
    photo: bridePhoto,
    about:
      "Nandhini's warmth and laughter have a way of making any room feel like home. Her friendship with Vignesh bloomed slowly since 2014 into a love neither of them saw coming, and when he finally asked, her yes came without a moment's hesitation.",
  },

  // ISO date-time of the wedding (used by hero + countdown)
  weddingDate: "2026-09-13T10:00:00",
  weddingDateDisplay: "13 · 09 · 2026",

  venue: {
    name: "Agathiyan Thirumana Mandapam",
    city: "Karaikudi",
    address: "Agathiyan Thirumana Mandapam, Karaikudi",
    // Paste a Google Maps EMBED url here to show the live map.
    // (Google Maps → Share → Embed a map → copy the src URL)
    mapEmbedUrl: "https://maps.google.com/maps?q=10.074367,78.7632812&z=16&output=embed",
    directionsUrl:
      "https://www.google.com/maps/place/Agathiyan+Thirumana+Mandapam/@10.0743723,78.7607063,816m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3b00675b954670b7:0xb52dc782cf143a1f!8m2!3d10.074367!4d78.7632812!16s%2Fg%2F11hcj16mn2?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D",
  },

  quotes: [
    "Two souls, one heart — today our forever begins.",
    "In all the world, there is no heart for me like yours.",
    "Whatever our souls are made of, yours and mine are the same.",
    "Every love story is beautiful, but ours is my favorite.",
    "You are my today and all of my tomorrows.",
    "I looked at you and knew that a new adventure was about to begin.",
  ],

  story: [
    {
      id: "met",
      year: "2014",
      title: "We First Met",
      text: "June 2014 — the moment our paths first crossed and a quiet friendship began.",
    },
    {
      id: "first-date",
      year: "2015",
      title: "Our First Date",
      text: "June 2015 — the day friendship turned into something neither of us wanted to end.",
    },
    {
      id: "proposal",
      year: "2015",
      title: "The Proposal",
      text: "December 2015 — one question, one very happy yes.",
    },
  ],

  events: [
    {
      id: "engagement",
      icon: "💍",
      title: "Engagement",
      date: "12 Sep 2026",
      time: "Time to be announced",
      venue: "Agathiyan Thirumana Mandapam, Karaikudi",
    },
    {
      id: "reception",
      icon: "🥂",
      title: "Reception",
      date: "12 Sep 2026",
      time: "Time to be announced",
      venue: "Agathiyan Thirumana Mandapam, Karaikudi",
    },
    {
      id: "wedding",
      icon: "❤️",
      title: "Wedding",
      date: "13 Sep 2026",
      time: "10:00 AM",
      venue: "Agathiyan Thirumana Mandapam, Karaikudi",
    },
  ],

  gallery: [
    { id: "g1", src: galleryPhoto15, alt: "Wedding gallery photo one", tone: "linear-gradient(140deg, #e8a9b0, #c9a227)" },
    { id: "g2", src: galleryPhoto16, alt: "Wedding gallery photo two", tone: "linear-gradient(140deg, #c9a227, #b7c9a8)" },
    { id: "g3", src: galleryPhoto17, alt: "Wedding gallery photo three", tone: "linear-gradient(140deg, #f7d9dc, #c97583)" },
    { id: "g4", src: galleryPhoto18, alt: "Wedding gallery photo four", tone: "linear-gradient(140deg, #b7c9a8, #e8d9a0)" },
    { id: "g5", src: galleryPhoto19, alt: "Wedding gallery photo five", tone: "linear-gradient(140deg, #c97583, #9c7a1a)" },
    { id: "g6", src: galleryPhoto20, alt: "Wedding gallery photo six", tone: "linear-gradient(140deg, #e8d9a0, #e8a9b0)" },
  ],

  musicSrc: bgMusic,

  footerNote: "With love, we can't wait to celebrate with you.",
};
