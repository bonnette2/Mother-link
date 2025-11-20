// src/components/Navbar.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About us", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Our team", href: "#team" },
    { name: "FAQs", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  // Smooth scroll to section with offset (so content isn't hidden under navbar)
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Add background when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <motion.nav
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {/* Logo */}
        <a href="#home" onClick={(e) => handleScroll(e, "#home")} className="logo">
          <HeartHandshake size={30} className="logo-icon" />
          <span className="logo-text">MotherLink</span>
        </a>

        {/* Links */}
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="nav-link"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <motion.a
          href="#contact"
          onClick={(e) => handleScroll(e, "#contact")}
          className="contact-btn"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.a>
      </motion.nav>
    </header>
  );
};

export default Navbar;