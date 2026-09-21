// ============================================================
// Guest wishes.
//
// EDIT THIS FILE to change the blessings the page starts with.
// Anything a visitor adds through the form is kept in their own
// browser and never reaches this file or any other guest.
// ============================================================

// Each wish is { id, name, text, createdAt }. `createdAt` is an ISO
// string so a wish restored from storage sorts the same as a fresh
// one — a Date object would not survive the JSON round-trip.
export const initialWishes = [
  {
    id: "seed-1",
    name: "Ramesh & Family",
    text: "Wishing Vignesh and Nandhini a lifetime of laughter, patience and quiet mornings together. So happy for you both!",
    createdAt: "2026-08-20T09:30:00.000Z",
  },
  {
    id: "seed-2",
    name: "Priya",
    text: "From 2014 to forever — what a beautiful thing to witness. May your home always be as warm as your friendship.",
    createdAt: "2026-08-22T14:05:00.000Z",
  },
  {
    id: "seed-3",
    name: "Karthik R",
    text: "Congratulations da! Wishing you both endless sunflowers and every happiness. See you on the 13th.",
    createdAt: "2026-08-25T18:40:00.000Z",
  },
];

// Bumping this key retires every wish saved in guests' browsers, which
// is the only way to clear them remotely.
export const WISHES_STORAGE_KEY = "vwn:wishes:v1";
