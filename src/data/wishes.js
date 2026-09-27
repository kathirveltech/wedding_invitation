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
];

// Bumping this key retires every wish saved in guests' browsers, which
// is the only way to clear them remotely.
export const WISHES_STORAGE_KEY = "vwn:wishes:v1";
