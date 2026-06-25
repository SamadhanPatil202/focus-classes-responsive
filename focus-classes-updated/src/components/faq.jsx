import { useState } from "react";
import "./faq1.css";

const faqs = [
  {
    question: "What is JEE, and why is it important?",
    answer:
      "JEE (Joint Entrance Examination) is a national-level entrance exam for engineering aspirants. It is the gateway to prestigious institutions like IITs, NITs, and other top engineering colleges in India..",
  },

  {
    question: "How early should a student start preparing for JEE?",
    answer:
      "Ideally, students should start their preparation in Class 11 to build a strong foundation. However, with the right guidance, even Class 12 students can achieve success.",
  },

  {
    question: "How does Focus Coaching Classes help in JEE preparation?",
    answer:
      "We offer comprehensive JEE coaching in Gangapur Road Nashik, with experienced faculty, a structured curriculum, regular assessments, and personalized attention to ensure every student’s success.",
  },

  {
    question: "What is the difference between JEE Main and JEE Advanced?",
    answer:
      "JEE Main is the first stage of the exam and serves as a qualifying test for JEE Advanced. JEE Advanced is for admission to IITs and requires a higher level of preparation.",
  },

  {
    question: "Do you offer online classes for JEE preparation?",
    answer:
      "Yes, we offer online and hybrid classes to ensure flexibility and accessibility for all students.",
  },

  {
    question: "How are parents kept informed about their child’s progress?",
    answer:
      "We provide regular performance updates and conduct parent-teacher meetings to discuss students’ progress and address any concerns.",
  },

  {
    question: "What makes Focus Coaching Classes different from other JEE coaching centers?",
    answer:
      "Our personalized approach, experienced faculty, and commitment to excellence make us the best JEE coaching classes in Gangapur Road Nashik.",
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