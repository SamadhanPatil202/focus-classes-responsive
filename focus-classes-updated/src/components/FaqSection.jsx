import { useState } from "react";
import "./faq.css";

const faqs = [
  {
    question: "What subjects are covered in the 10th CBSE course?",
    answer:
      "We cover all major subjects in the CBSE 10th curriculum, including Mathematics, Science (Physics, Chemistry, Biology), Social Science, and Languages (Hindi/English).",
  },

  {
    question: "How long is the 10th CBSE course?",
    answer:
      "Our 10th CBSE course is designed to run throughout the academic year, with regular classes, assessments, and revisions leading up to the board exams.",
  },

  {
    question: "What is the class size?",
    answer:
      "We maintain small batch sizes to ensure personalized attention for each student.",
  },

  {
    question: "Are there doubt clearing sessions?",
    answer:
      "Yes, we conduct regular doubt clearing sessions to ensure that students understand all concepts clearly.",
  },

  {
    question: "Can my child join mid-year?",
    answer:
      "Yes, students can join mid-year. We offer crash courses and remedial sessions to help them catch up.",
  },

  {
    question: "What is the fee structure for the 10th CBSE course?",
    answer:
      "The fee structure varies depending on the course duration and subjects chosen. Please contact us for more details.",
  },

  {
    question: "Do you offer online coaching?",
    answer:
      "Currently, we focus on in-person coaching at our Nashik center. However, we are exploring online options in the future.",
  },

  {
    question: "How do you prepare students for exams?",
    answer:
      "We conduct regular assessments, mock exams, and review previous year papers to help students prepare for their board exams.",
  },

  {
    question: "What makes Focus Coaching Classes different from others?",
    answer:
      "We offer experienced teachers, small batch sizes, personalized attention, and a focused, student-centric approach to learning.",
  },

  {
    question: "How can I book a demo class?",
    answer:
      "You can call us at 09920506327 or visit our Contact Page to book a free demo class.",
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
