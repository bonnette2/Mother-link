// src/components/Navbar.tsx
import React, { useEffect, useState } from "react";
import { HeartHandshake } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`modern-navbar ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar-inner font-poppins">   {/* ← Poppins here */}
        <div className="logo" onClick={() => scrollTo("home")}>
          <HeartHandshake size={scrolled ? 26 : 32} className="logo-icon" />
          <span className="logo-text">MotherLink</span>
        </div>

        <ul className="nav-links">
          {["Home", "About us", "Features", "Our team", "FAQs", "Contact"].map((item) => {
            const id = item === "About us" ? "about" : item.toLowerCase().replace(" ", "-");
            return (
              <li key={item}>
                <button onClick={() => scrollTo(id === "faqs" ? "faq" : id)}>
                  {item}
                </button>
              </li>
            );
          })}
        </ul>

        <button onClick={() => scrollTo("contact")} className="contact-btn">
          Contact Us
        </button>
      </nav>
    </header>
  );
};

export default Navbar;