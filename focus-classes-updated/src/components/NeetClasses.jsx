import React, { useState } from "react";
import "./NeetClasses.css";

const faqs = [
  {
    question: "What is the duration of the NEET course?",
    answer:
      "The duration depends on the batch selected. We offer 1-year and 2-year programs.",
  },
  {
    question: "Do you provide study material?",
    answer:
      "Yes, comprehensive study material and practice worksheets are provided.",
  },
  {
    question: "Are mock tests conducted regularly?",
    answer: "Yes, weekly tests and full-length mock exams are conducted.",
  },
  {
    question: "Is there a facility for doubt solving?",
    answer: "Yes, dedicated doubt-solving sessions are arranged regularly.",
  },
  {
    question: "How can I join the NEET coaching classes?",
    answer:
      "Call us at 09920506327 or visit our center at Gangapur Road, Nashik 422013 to enroll today.",
  },
];

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`neet-faq-item ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
      <div className="neet-faq-question">
        <span>{question}</span>
        <svg className="neet-faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      {open && <div className="neet-faq-answer">{answer}</div>}
    </div>
  );
}

export default function NeetClasses() {
  return (
    <div className="neet-page">

      {/* Hero */}
      <section className="neet-hero">
        <div className="neet-hero-overlay" />
        <h1 className="neet-hero-title">
          NEET Classes Near Gangapur Road Nashik Call 09920506327
        </h1>
        <div className="neet-breadcrumb">Home › courses › neet classes</div>
      </section>

      {/* Intro */}
      <section className="neet-intro-section">
        <div className="neet-intro-inner">
          <div className="neet-intro-text">
            <h2 className="neet-section-heading">Neet Classes</h2>
            <p>
              Looking for the best NEET coaching classes at Gangapur Road Nashik?
              We provide expert guidance, structured learning, and result-oriented
              preparation for students aiming to crack the NEET exam with top
              scores. Our coaching program is designed by experienced faculty
              members who focus on concept clarity, regular practice, and exam
              strategies.
            </p>
            {/* Social Share Icons */}
          <div className="cbse-social">
            <a href="https://www.facebook.com" className="cbse-social-btn fb" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="https://www.twitter.com" className="cbse-social-btn tw" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com" className="cbse-social-btn li" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://wa.me/919920506327"
              className="cbse-social-btn wa"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
            </a>
          </div>
        
          </div>
          <div className="neet-intro-image">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80"
              alt="NEET student doctor"
            />
          </div>
        </div>
      </section>

      {/* Best NEET Coaching */}
      <section className="neet-content-section">
        <div className="neet-content-inner">
          <h2 className="neet-h2">Best NEET Coaching Classes at Gangapur Road Nashik</h2>
          <p>
            Preparing for NEET (National Eligibility cum Entrance Test) requires
            dedication, the right strategy, and expert guidance. Our NEET coaching
            classes at Gangapur Road Nashik are designed to provide students with
            everything they need to succeed in one of the most competitive medical
            entrance exams in India.
          </p>
          <p>
            We understand that NEET is not just an exam but a gateway to a
            successful medical career. Therefore, we focus on providing
            high-quality education, systematic preparation, and continuous support
            to help students achieve their goals.
          </p>

          {/* Why Choose */}
          <h2 className="neet-h2">Why Choose Our NEET Coaching in Nashik?</h2>

          <div className="neet-feature-block">
            <h3>1. <strong>Experienced Faculty</strong></h3>
            <p>
              Our faculty members are highly qualified and experienced in NEET
              coaching. They understand exam patterns, important topics, and common
              student challenges. Their teaching approach ensures that even complex
              concepts are easy to understand.
            </p>
          </div>

          <div className="neet-feature-block">
            <h3>2. <strong>Structured Course Planning</strong></h3>
            <p>
              We follow a well-planned syllabus schedule that covers all topics in
              Physics, Chemistry, and Biology. Each topic is taught in a
              step-by-step manner, ensuring clarity and retention.
            </p>
          </div>

          <div className="neet-feature-block">
            <h3>3. <strong>Updated Study Material</strong></h3>
            <p>
              Students receive comprehensive study material designed according to
              the latest NEET syllabus and exam trends. Our notes include important
              formulas, diagrams, and previous years' questions.
            </p>
          </div>

          <div className="neet-feature-block">
            <h3>4. <strong>Regular Tests &amp; Assessments</strong></h3>
            <p>
              We conduct weekly tests, unit tests, and full-length mock exams.
              These tests help students analyze their performance and improve their
              time management skills.
            </p>
          </div>

          <div className="neet-feature-block">
            <h3>5. <strong>Doubt Solving Sessions</strong></h3>
            <p>
              Special doubt-solving sessions are arranged to ensure that no student
              is left behind. Students can freely ask questions and get clarity on
              difficult topics.
            </p>
          </div>

          {/* Subjects */}
          <h2 className="neet-h2">Subjects Covered in NEET Coaching</h2>

          <h3 className="neet-subject-heading">Physics</h3>
          <p>
            Physics is often considered challenging by many students. We simplify
            concepts through practical examples, numerical problem-solving, and
            step-by-step explanations.
          </p>
          <p>Topics include:</p>
          <ul className="neet-list">
            <li>Mechanics</li>
            <li>Thermodynamics</li>
            <li>Optics</li>
            <li>Modern Physics</li>
            <li>Electrodynamics</li>
          </ul>

          <h3 className="neet-subject-heading">Chemistry</h3>
          <p>
            Our Chemistry teaching focuses on conceptual understanding and
            memorization techniques for reactions and formulas.
          </p>
          <p>Topics include:</p>
          <ul className="neet-list">
            <li>Organic Chemistry</li>
            <li>Inorganic Chemistry</li>
            <li>Physical Chemistry</li>
          </ul>

          <h3 className="neet-subject-heading">Biology</h3>
          <p>
            Biology plays a crucial role in NEET scoring. We provide detailed
            explanations, diagrams, and revision techniques to help students score
            high.
          </p>
          <p>Topics include:</p>
          <ul className="neet-list">
            <li>Botany</li>
            <li>Zoology</li>
            <li>Human Physiology</li>
            <li>Genetics</li>
          </ul>

          {/* Personalized Attention */}
          <h2 className="neet-h2">Personalized Attention for Every Student</h2>
          <p>
            We maintain small batch sizes to ensure individual attention. Each
            student's performance is monitored regularly, and personalized feedback
            is provided to improve weak areas.
          </p>

          {/* Advanced Teaching */}
          <h2 className="neet-h2">Advanced Teaching Methodology</h2>
          <p>Our teaching methods include:</p>
          <ul className="neet-list">
            <li>Concept-based learning</li>
            <li>Visual aids and diagrams</li>
            <li>Practice worksheets</li>
            <li>Interactive sessions</li>
            <li>Real exam simulations</li>
          </ul>

          {/* Mock Tests */}
          <h2 className="neet-h2">Mock Tests &amp; Performance Analysis</h2>
          <p>
            Mock tests are designed to simulate the real NEET exam environment.
            After every test:
          </p>
          <ul className="neet-list">
            <li>Detailed performance analysis is provided</li>
            <li>Weak areas are identified</li>
            <li>Improvement strategies are suggested</li>
          </ul>

          {/* NEET Preparation Strategy */}
          <h2 className="neet-h2">NEET Preparation Strategy</h2>
          <p>We guide students with a proper study plan:</p>
          <ul className="neet-list">
            <li>Daily study schedule</li>
            <li>Revision techniques</li>
            <li>Time management skills</li>
            <li>Smart problem-solving methods</li>
          </ul>

          {/* Location */}
          <h2 className="neet-h2">Convenient Location – Gangapur Road Nashik</h2>
          <p>
            Our coaching center is located at Gangapur Road Nashik, making it
            easily accessible for students from nearby areas. The comfortable
            learning environment helps students stay focused and motivated.
          </p>

          {/* Fees */}
          <h2 className="neet-h2">Affordable Fees Structure</h2>
          <p>
            We believe in providing quality education at an affordable price. Our
            courses are designed to be accessible to all students without
            compromising on quality.
          </p>

          {/* Who Can Join */}
          <h2 className="neet-h2">Who Can Join?</h2>
          <ul className="neet-list">
            <li>11th &amp; 12th Science Students</li>
            <li>Repeaters preparing for NEET</li>
            <li>Students aiming for top medical colleges</li>
          </ul>

          {/* Benefits */}
          <h2 className="neet-h2">Benefits of Joining Our NEET Coaching</h2>
          <ul className="neet-list">
            <li>Strong conceptual foundation</li>
            <li>Regular practice &amp; revision</li>
            <li>Expert guidance</li>
            <li>Increased confidence</li>
            <li>Higher chances of success</li>
          </ul>

          {/* CTA */}
          <h2 className="neet-h2">Start Your Medical Journey Today</h2>
          <p>
            If you dream of becoming a doctor, the right coaching can make all the
            difference. Our NEET coaching classes at Gangapur Road Nashik provide
            the perfect platform to turn your dreams into reality.
          </p>
          <p>
            Call now on{" "}
            <a href="tel:09920506327" className="neet-phone-link">
              09920506327
            </a>{" "}
            and enroll today!
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="neet-faq-section">
        <div className="neet-faq-inner">
          <h2 className="neet-faq-title">FAQ's</h2>
          <p className="neet-faq-sub">Here are answers to some questions frequently asked.</p>
          <div className="neet-faq-divider" />
          <div className="neet-faq-list">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
