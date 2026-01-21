import { useState, useEffect } from "react";

const isTouchDevice = () => {
  if (typeof window === "undefined") return false;
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(hover: none) and (pointer: coarse)").matches
  );
};

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(isTouchDevice());
  }, []);

  useEffect(() => {
    if (isTouch) return;

    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };
    const leave = () => setHidden(true);

    const checkHover = () => {
      const hoverable = document.querySelectorAll(
        "a, button, .tilt-card, .magnetic-button"
      );
      hoverable.forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    setTimeout(checkHover, 100);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      <div
        className={`custom-cursor ${hidden ? "hidden" : ""} ${hovered ? "hovered" : ""}`}
        style={{ left: position.x, top: position.y }}
      />
      <div
        className={`custom-cursor-dot ${hidden ? "hidden" : ""}`}
        style={{ left: position.x, top: position.y }}
      />
    </>
  );
};
