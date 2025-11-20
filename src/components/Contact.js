import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="contact-section-compact">
      <div className="contact-header-compact">
        <h2 className="contact-title-compact">Get in touch</h2>
        <p className="contact-subtitle-compact">
          Have a question or want to partner with us?
        </p>
      </div>

      <div className="contact-container-compact">
        {/* Form */}
        <form className="contact-form-compact" onSubmit={handleSubmit}>
          <input type="text" placeholder="Full name" required />
          <input type="email" placeholder="Your email" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your message" required rows={3} />
          <button type="submit" className="contact-submit-btn-compact">
            Send Message
          </button>
          {sent && (
            <p className="success-message-compact">
              Thank you! Message sent.
            </p>
          )}
        </form>

        {/* Info Cards */}
        <div className="contact-info-compact">
          <div className="info-item-compact">
            <div className="info-icon-compact email">
              <Mail size={18} />
            </div>
            <div>
              <strong>Email</strong>
              <p>info@motherlink.rw</p>
            </div>
          </div>
          <div className="info-item-compact">
            <div className="info-icon-compact phone">
              <Phone size={18} />
            </div>
            <div>
              <strong>Phone</strong>
              <p>+250 790 327 902</p>
            </div>
          </div>
          <div className="info-item-compact">
            <div className="info-icon-compact location">
              <MapPin size={18} />
            </div>
            <div>
              <strong>Location</strong>
              <p>Kigali, Rwanda</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;