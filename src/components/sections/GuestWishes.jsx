import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { initialWishes, WISHES_STORAGE_KEY } from "../../data/wishes.js";
import SectionTitle from "../common/SectionTitle.jsx";
import Button from "../common/Button.jsx";

const NAME_MAX = 60;
const TEXT_MAX = 500;

// Newest first, matching the order the Firestore query used to return.
const byNewest = (a, b) => new Date(b.createdAt) - new Date(a.createdAt);

// Storage throws rather than returning null in a private window or when a
// browser is set to block site data, so every access is guarded and simply
// falls back to the seed list.
function loadWishes() {
  try {
    const saved = window.localStorage.getItem(WISHES_STORAGE_KEY);
    if (!saved) return [...initialWishes].sort(byNewest);
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) return [...initialWishes].sort(byNewest);
    return parsed.sort(byNewest);
  } catch {
    return [...initialWishes].sort(byNewest);
  }
}

export default function GuestWishes() {
  const [wishes, setWishes] = useState(loadWishes);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      window.localStorage.setItem(WISHES_STORAGE_KEY, JSON.stringify(wishes));
    } catch {
      // A full or blocked storage quota shouldn't break the page; the wishes
      // stay in memory for this visit and are simply not carried over.
    }
  }, [wishes]);

  const deleteWish = (id) => {
    setWishes((current) => current.filter((wish) => wish.id !== id));
  };

  const addWish = () => {
    const trimmedName = name.trim();
    const trimmedText = text.trim();

    if (!trimmedName || !trimmedText) {
      setError("Please add both your name and a wish.");
      return;
    }
    if (trimmedName.length > NAME_MAX) {
      setError(`Please keep your name under ${NAME_MAX} characters.`);
      return;
    }
    if (trimmedText.length > TEXT_MAX) {
      setError(`Please keep your wish under ${TEXT_MAX} characters.`);
      return;
    }

    setError("");
    setWishes((current) => [
      {
        // crypto.randomUUID needs a secure context, which rules out plain-http
        // previews on the local network.
        id:
          typeof crypto !== "undefined" && crypto.randomUUID
            ? crypto.randomUUID()
            : `wish-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        name: trimmedName,
        text: trimmedText,
        createdAt: new Date().toISOString(),
      },
      ...current,
    ]);
    setName("");
    setText("");
  };

  const submitOnEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addWish();
    }
  };

  return (
    <section className="section" id="wishes">
      <SectionTitle eyebrow="Blessings" title="Guest Wishes" />

      <div className="wishes__form">
        <div className="field">
          <label className="field__label" htmlFor="wish-name">Your Name</label>
          <input
            id="wish-name"
            className="field__input"
            type="text"
            value={name}
            maxLength={NAME_MAX}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={submitOnEnter}
            placeholder="Name"
          />
        </div>
        <div className="field">
          <label className="field__label" htmlFor="wish-text">Your Wish</label>
          <input
            id="wish-text"
            className="field__input"
            type="text"
            value={text}
            maxLength={TEXT_MAX}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={submitOnEnter}
            placeholder="Write a blessing"
          />
        </div>
        <div className="field" style={{ justifyContent: "flex-end" }}>
          <Button solid onClick={addWish}>Add</Button>
        </div>
      </div>
      {error ? <p className="field__error" style={{ textAlign: "center", marginBottom: "16px" }}>{error}</p> : null}

      <ul className="wishes__list">
        <AnimatePresence initial={false}>
          {wishes.map((wish) => (
            <motion.li
              className="wish"
              key={wish.id}
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <button
                type="button"
                className="wish__delete"
                onClick={() => deleteWish(wish.id)}
                aria-label={`Delete wish from ${wish.name}`}
              >
                ×
              </button>
              <p className="wish__name">{wish.name}</p>
              <p className="wish__text">{wish.text}</p>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </section>
  );
}
