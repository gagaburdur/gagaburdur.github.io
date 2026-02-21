// ABOUTME: Utility functions shared across the app.
// ABOUTME: Contains string helpers and a manual smooth scroll implementation.

/** Converts a Turkish string to a URL-safe slug for use as HTML element IDs. */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ş/g, "s")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/ı/g, "i")
    .replace(/İ/g, "i")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Smooth scrolls to an element by ID using requestAnimationFrame. */
export function smoothScrollTo(elementId: string, duration = 600): void {
  const element = document.getElementById(elementId);
  if (!element) return;

  const targetY = element.getBoundingClientRect().top + window.scrollY;
  const startY = window.scrollY;
  const diff = targetY - startY;

  if (diff === 0) return;

  const startTime = performance.now();

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 0.5 - Math.cos(progress * Math.PI) / 2;
    window.scrollTo(0, startY + diff * ease);
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}
