import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
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
  }, [active]);

  const navClass = scrolled
    ? "bg-white/75 shadow-lg"
    : "bg-white/40";

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md transition-colors ${navClass}`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="font-bold text-xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          LibroScope
        </Link>

        {/* Centered Links */}
        <div className="flex gap-6 items-center text-sm font-medium mx-auto">
          {["home", "explore", "features", "about"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`transition-colors ${
                active === id
                  ? "text-purple-500"
                  : "text-gray-900" // Default non-hover color
              } hover:text-purple-500`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>

        {/* Get Started */}
        <Link
          to="/auth"
          className="hidden md:inline px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-md hover:opacity-90 transition"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
