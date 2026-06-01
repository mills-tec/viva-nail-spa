import { useEffect, useRef } from "react";

/**
 * Intersection Observer hook that adds `is-visible` class on enter.
 * Supports stagger by setting `--stagger-delay` (ms) on parent and
 * applying `transitionDelay` based on data-index for children.
 */
export const useReveal = (selector = ".reveal", options = {}) => {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current || document;
    const nodes = root.querySelectorAll(selector);
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.idx || 0);
            entry.target.style.transitionDelay = `${idx * 90}ms`;
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px", ...options },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [selector, options]);

  return rootRef;
};
