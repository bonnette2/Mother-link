import React from "react";
import { Facebook, Twitter, Instagram, Mail, HeartHandshake } from "lucide-react";

const Footer = () => {
  return (
    <footer className="compact-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand + Logo */}
          <div className="footer-brand">
            <div className="footer-logo">
              <HeartHandshake size={28} className="logo-icon" />
              <h5>MotherLink</h5>
            </div>
            <p className="brand-text">
              Empowering mothers through accessible healthcare technology
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h6>Quick Links</h6>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Features</li>
              <li>Our team</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-links">
            <h6>Resources</h6>
            <ul>
              <li>Blog</li>
              <li>News</li>
              <li>Reports</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Connect */}
          <div className="footer-connect">
            <h6>Connect</h6>
            <div className="social-icons">
              <Instagram size={18} />
              <Facebook size={18} />
              <Twitter size={18} />
              <Mail size={18} />
            </div>
            <p className="email">motherlink@gmail.com</p>
          </div>
        </div>

        <div className="footer-bottom-line">
          <p>© {new Date().getFullYear()} MotherLink Rwanda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;