import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  const menuItems = (
    <>
      {["home", "explore", "features", "about"].map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`block md:inline transition-colors ${
            active === id ? "text-purple-500" : "text-gray-900"
          } hover:text-purple-500`}
          onClick={() => setMenuOpen(false)}
        >
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </a>
      ))}
    </>
  );


  

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

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center text-sm font-medium">
          {menuItems}
        </div>

        {/* Right side (Get Started + Hamburger) */}
        <div className="flex items-center gap-3">
          {/* Get Started button visible always */}
          <Link
            to="/auth"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-md hover:opacity-90 transition"
          >
            Get Started
          </Link>

          {/* Hamburger for mobile */}
          <button
            className="md:hidden text-2xl text-gray-900"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-3 space-y-3">
          {menuItems}
        </div>
      )}
    </nav>
  );
}
