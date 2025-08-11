import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Navbar({ dark, toggleDark }) {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const updateActiveOnScroll = () => {
      const navHeight = navRef.current ? navRef.current.offsetHeight : 0;
      const sections = Array.from(document.querySelectorAll("section[id]"));
      const offset = 20;

      let current = sections[0];
      sections.forEach((sec) => {
        const top = sec.offsetTop - navHeight - offset;
        if (window.scrollY >= top) current = sec;
      });

      if (current && current.id !== active) setActive(current.id);
      setScrolled(window.scrollY > 8);
    };

    updateActiveOnScroll();
    window.addEventListener("scroll", updateActiveOnScroll, { passive: true });
    window.addEventListener("resize", updateActiveOnScroll);

    return () => {
      window.removeEventListener("scroll", updateActiveOnScroll);
      window.removeEventListener("resize", updateActiveOnScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const navClass = scrolled
    ? dark
      ? "bg-gray-900/75 shadow-lg"
      : "bg-white/75 shadow-lg"
    : dark
    ? "bg-gray-900/40"
    : "bg-white/40";

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md transition-colors ${navClass}`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left side - Logo + Links */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="font-bold text-xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            LibroScope
          </Link>

          <div className="hidden md:flex gap-6 items-center text-sm font-medium">
            {["home", "explore", "features", "about"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`transition-colors hover:text-purple-500 ${
                  active === id ? "text-purple-500" : "text-gray-700 dark:text-gray-200"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>
        </div>

        {/* Right side - Buttons */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleDark}
            aria-label="toggle theme"
            className="p-2 rounded-lg hover:bg-gray-200/40 dark:hover:bg-gray-700/40 transition"
          >
            {dark ? <FiSun /> : <FiMoon />}
          </button>

          {/* Auth Buttons */}
         

          {/* Existing Get Started */}
          <Link
            to="/auth"
            className="hidden md:inline px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-md hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
