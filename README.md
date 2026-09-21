# 💌 Animated Wedding Invitation — React + Vite

A fully animated wedding invitation website: a sealed envelope opens on click,
ornate doors swing apart, and the invitation is revealed — followed by couple
info, story timeline, events, countdown, gallery, venue map, RSVP, and guest
wishes.

## Quick Start

```bash
npm install
npm run dev      # open the printed localhost URL
npm run build    # production build (dist/)
```

## Customize Everything (2 files only)

1. **`src/data/weddingData.js`** — ALL text content: names, date, venue,
   quotes, story milestones, events, gallery images, music track, footer note.
2. **`src/styles/global.css`** — the `:root` block at the top holds every
   color (gold / blush pink / florals), font, spacing, and shadow variable.
   Change a variable once and the whole site updates.

### Add real photos
Put images in `public/images/` and edit the `gallery` array in
`weddingData.js`, e.g. `{ id: "g1", src: "/images/us.jpg", alt: "At the beach", tone: "" }`.

### Add the live map
Google Maps → Share → *Embed a map* → copy the `src` URL into
`venue.mapEmbedUrl` in `weddingData.js`.

### Add background music
Drop an mp3 into `public/music/` and set `musicSrc: "/music/theme.mp3"`.

## Structure

```
src/
├── styles/global.css       # theme variables + all styles
├── data/weddingData.js     # all content (edit me!)
├── hooks/useCountdown.js
├── components/
│   ├── common/    Button, SectionTitle, Divider, FloralCorner, MusicToggle
│   ├── landing/   Envelope, DoorReveal
│   ├── sections/  Hero, CoupleInfo, LoveQuote, OurStory, EventTimeline,
│   │              Countdown, Gallery, VenueMap, RSVPForm, GuestWishes
│   └── layout/    Navbar, Footer
├── App.jsx                 # landing flow state (envelope → doors → site)
└── main.jsx
```

## Firebase Setup (Guest Wishes)
Guest Wishes is backed by Firestore.

1. Copy `.env.example` to `.env` and fill in your web app config from
   Firebase Console → Project Settings → General → "Your apps" (create a
   Web app there if you haven't yet).
2. In Firebase Console, enable **Firestore Database** (Build → Firestore
   Database → Create database).
3. Set Firestore security rules to allow public read/create on the `wishes`
   collection (adjust to your needs — this keeps it simple for a public
   invitation page):
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /wishes/{wishId} {
         allow read, create: if true;
         allow delete: if false; // tighten this — see note below
       }
     }
   }
   ```
   The delete button in the UI currently has no auth guard, so anyone could
   delete any wish. Either wire up Firebase Auth for the couple/admin, or
   remove the delete button for public deploys, before opening this rule up.
4. `npm run dev` — no local server needed anymore.
5. When deploying (Vercel, etc.), set the same `VITE_FIREBASE_*` variables as
   environment variables in your hosting provider's project settings.

## Notes
- Built with React 18, Vite, Framer Motion, PropTypes, Firebase (Firestore).
- RSVP is front-end only; wire it up to Firestore too if you want to persist
  responses (not done yet — out of scope of the Guest Wishes migration).
- Respects `prefers-reduced-motion` and is responsive down to mobile.
