import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const PeopleAlsoAsk = () => {
  const faqs = [
    {
      question: "What is MotherLink?",
      answer: "MotherLink is a mobile health support system that helps pregnant mothers and caregivers get reminders, health tips, and emergency help using simple SMS, USSD, or voice—no smartphone or internet needed."
    },
    {
      question: "How do I register?",
      answer: "You register by dialing a short USSD code (e.g., *123#) or by sending a simple SMS. The system will guide you step by step."
    },
    {
      question: "Do I need a smartphone or internet?",
      answer: "No. MotherLink works on any basic phone, even without data or internet. You only need network service."
    },
    {
      question: "What kind of messages will I receive?",
      answer: "You’ll get reminders for antenatal visits, vaccination dates, nutrition tips, pregnancy week-by-week updates, and alerts for important health actions."
    },
    {
      question: "What do I do in an emergency?",
      answer: "Dial the emergency USSD code (e.g., 1239#). MotherLink will immediately alert the nearest clinic, CHW, and transport options so help reaches you faster."
    },
    {
      question: "Is MotherLink free?",
      answer: "Yes. Registration and basic services are free. SMS/USSD charges may be covered through partnerships with telecoms."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="people-also-ask" id="faq">
      <h3 className="paa-title">People also ask</h3>
      <div className="paa-list">
        {faqs.map((faq, index) => (
          <div key={index} className="paa-item">
            <button className="paa-question" onClick={() => toggleFaq(index)}>
              {faq.question}
              {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
            </button>
            {openIndex === index && <p className="paa-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PeopleAlsoAsk;