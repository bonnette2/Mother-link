import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { FaAmbulance, FaRobot, FaCalendarCheck, FaChartBar } from "react-icons/fa";

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(1); // AI Assistant highlighted by default

  const features = [
    {
      icon: <FaAmbulance />,
      title: "Emergency Link",
      desc: "Instant connection to ambulances and hospitals in critical moments.",
    },
    {
      icon: <FaRobot />,
      title: "AI Health Assistant",
      desc: "24/7 intelligent answers to your health questions in local languages.",
    },
    {
      icon: <FaCalendarCheck />,
      title: "Smart Reminders",
      desc: "Never miss ANC visits, vaccinations, or check-ups with automated alerts.",
    },
    {
      icon: <FaChartBar />,
      title: "CHW Dashboard",
      desc: "Powerful tools for community health workers to track and support mothers.",
    },
  ];

  return (
    <SectionWrapper>
      <section className="features-pro" id="features">
        <div className="features-pro-container">

          <div className="features-pro-header">
            <h2>Platform Features</h2>
            <p>Simple. Inclusive. Life-saving technology built for every mother.</p>
          </div>

          <div className="features-pro-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-card-pro ${activeIndex === index ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="icon-circle">
                  <span className={activeIndex === index ? "icon-active" : ""}>
                    {feature.icon}
                  </span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </SectionWrapper>
  );
};

export default Features;