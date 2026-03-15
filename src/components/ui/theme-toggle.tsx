"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const storageKey = "remark-portfolio-theme";

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M20 15.5A8.5 8.5 0 1 1 10.5 6a7 7 0 0 0 9.5 9.5Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.2M12 19.3v2.2M4.7 4.7l1.6 1.6M17.7 17.7l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.7 19.3l1.6-1.6M17.7 6.3l1.6-1.6" />
    </svg>
  );
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(storageKey);
    const nextTheme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : "dark";

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(storageKey, theme);
  }, [mounted, theme]);

  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="inline-flex h-11 items-center gap-3 rounded-full border border-line/25 bg-surface/75 px-3 text-sm font-medium text-ink shadow-panel backdrop-blur-xl hover:-translate-y-0.5 hover:border-accent/35"
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      title={isLight ? "Switch to dark mode" : "Switch to light mode"}
    >
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full ${
          isLight ? "bg-accent text-canvas" : "bg-canvas/55 text-warm"
        }`}
      >
        {isLight ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  );
}
