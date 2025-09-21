import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Warrior Mind?",
      answer:
        "Warrior Mind is an educational platform that helps students prepare for competitive exams with curated resources, motivational content, and study tools."
    },
    {
      question: "Which exams does Warrior Mind support?",
      answer:
        "The platform supports JEE, NEET, SSC, UPSC, LLB, and other major competitive exams by providing tailored book recommendations and study planners."
    },
    {
      question: "Can I buy books directly from Warrior Mind?",
      answer:
        "Yes! The platform integrates e-commerce so you can purchase recommended study materials directly."
    },
    {
      question: "Is Warrior Mind free to use?",
      answer:
        "Core features like book recommendations, motivational content, and success stories are free. Premium features may include advanced tools in the future."
    },
    {
      question: "Who developed Warrior Mind?",
      answer:
        "The platform was developed by a passionate full-stack developer pursuing B.Tech at Babu Banarasi Das University, Lucknow, with professional experience in modern web technologies."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                <span>{activeIndex === index ? "−" : "+"}</span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
