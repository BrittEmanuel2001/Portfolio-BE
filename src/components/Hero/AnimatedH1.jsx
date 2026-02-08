import { useEffect, useRef } from "react";
import gsap from "gsap";

const phrases = [
  ["Be", "bold", "."],
  ["Be", "real", "."],
  ["Be", "you", "."],
];

export default function AnimatedH1() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(root);
      const slots = q(".word");

      let index = 0;
      const tl = gsap.timeline({ repeat: -1 });

      phrases.forEach(() => {
        tl.call(() => {
          slots.forEach((slot, i) => {
            const word = phrases[index][i] || "";

            // Derde woord krijgt speciale kleur
            if (i === 2) {
              slot.innerHTML = `<span style="color: var(--primary)">${word}</span>`;
            } else {
              slot.textContent = word;
            }
          });
          index = (index + 1) % phrases.length;
        });

        tl.fromTo(
          slots,
          { y: "0.5em", opacity: 0 },
          {
            y: "0em",
            opacity: 1,
            duration: 2.6,
            stagger: 0.12,
            ease: "power3.out",
          }
        )
          .to({}, { duration: 3 })
          .set(slots, { opacity: 0, y: "0.5em" });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <h1 ref={root} className="hero">
      {phrases[0].map((_, i) => (
        <span key={i} className="word-slot">
          <span className="word">{/* GSAP vult dit */}</span>
          {i < phrases[0].length - 1 && " "}
        </span>
      ))}
    </h1>
  );
}
