import { useState } from "react";
import "./faq.css";

const faqs = [
  {
    question:
      "What makes Focus Coaching Classes the best 10th SSC coaching in Gangapur Road Nashik?",
    answer:
      "Our experienced teachers, small batch sizes, and result-oriented teaching methodology set us apart. We prioritize personalized attention to ensure every student’s success.",
  },

  {
    question: "What is the batch size for the 10th SSC course?",
    answer:
      "We maintain small batch sizes to provide individualized attention and cater to each student’s unique learning needs.",
  },

  {
    question: "Do you offer regular tests and performance tracking?",
    answer:
      "Yes, we conduct regular chapter-wise tests and full-length mock exams. Parents receive detailed performance reports to track their child’s progress.",
  },

  {
    question: "Are there any additional practice sessions for weak students?",
    answer:
      "Yes, we offer extra classes and doubt-solving sessions for students who need additional support.",
  },

  {
    question: "How can I book a demo session?",
    answer:
      "You can book a free demo session by calling us at 09920506327.",
  },

];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-root">
      <h2 className="faq-title">FAQ's</h2>
      <p className="faq-subtitle">
        Here are answers to some questions frequently asked.
      </p>
      <div className="faq-divider" />

      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div key={i} className={`faq-item ${openIndex === i ? "open" : ""}`}>
            <button
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              {faq.question}
              <span className="faq-icon">{openIndex === i ? "∧" : "∨"}</span>
            </button>
            {openIndex === i && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
