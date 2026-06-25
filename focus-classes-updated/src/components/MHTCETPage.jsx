import { useState } from "react";
import "./MHTCETPage.css";

const faqs = [
  {
    q: "What is the duration of the MHT-CET course at Focus Coaching Classes?",
    a: "Our MHT-CET course runs for approximately 12 months, aligned with the academic year to ensure complete syllabus coverage before the exam.",
  },
  {
    q: "How do you ensure individual attention to each student?",
    a: "We maintain small batch sizes and offer dedicated doubt-clearing sessions and one-on-one feedback for every student.",
  },
  {
    q: "Do you provide study material?",
    a: "Yes, we provide comprehensive, regularly updated study material covering the complete Maharashtra State Board syllabus.",
  },
  {
    q: "What is the fee structure for the MHT-CET course?",
    a: "Please contact us at 09920506327 or visit our center at Gangapur Road, Nashik for detailed fee information.",
  },
  {
    q: "Do you offer demo classes before enrollment?",
    a: "Yes! We offer free demo classes. Click 'Book Demo Class' to schedule yours today.",
  },
  {
    q: "Are the teachers qualified and experienced?",
    a: "Our faculty are subject matter experts with years of experience in preparing students for competitive exams like MHT-CET.",
  },
  {
    q: "Is there a test series included in the course?",
    a: "Yes, weekly and monthly mock tests are included, along with performance tracking and detailed report analysis.",
  },
  {
    q: "What subjects are covered in the CET preparation?",
    a: "We cover Physics, Chemistry, Mathematics (PCM) and Physics, Chemistry, Biology (PCB) depending on your course choice.",
  },
  {
    q: "What are the batch timings?",
    a: "Multiple batches are available. Please contact us for current batch schedules that suit your timetable.",
  },
  {
    q: "How can I enroll?",
    a: "Call us at 09920506327, visit our center at Gangapur Road, Nashik 422013, or use the Contact Us form on our website.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`mht-faq-item ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <div className="mht-faq-question">
        <span>{q}</span>
        <svg
          className="mht-faq-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      {open && <div className="mht-faq-answer">{a}</div>}
    </div>
  );
}

export default function MHTCETPage() {
  return (
    <div className="mht-page-wrapper">

      {/* Hero Banner */}
      <section className="mht-hero-banner">
        <div className="mht-hero-overlay" />
        <h1 className="mht-hero-title">
          Best CET Coaching Classes in Gangapur Road Nashik
        </h1>
        <div className="mht-breadcrumb">Home › courses › mht cet classes</div>
      </section>

      {/* Intro Section */}
      <section className="mht-intro-section">
        <div className="mht-intro-content">
          <div className="mht-intro-text">
            <h2 className="mht-section-heading">MHT CET Classes</h2>
            <p>
              Welcome to Focus Coaching Classes, one of the most trusted
              academic institutions for MHT-CET preparation in Gangapur Road,
              Nashik. At Focus, our mission is simple: To empower students with
              knowledge, confidence, and clarity for competitive success. With a
              team of experienced teachers, a personalized teaching approach,
              and a result-oriented curriculum, we aim to be the best choice for
              parents seeking a reliable coaching partner for their children.
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
          <div className="mht-intro-image">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80"
              alt="Students in class"
            />
          </div>
        </div>
      </section>

      {/* About MHT-CET */}
      <section className="mht-about-section">
        <div className="mht-about-inner">
          <p className="mht-about-intro">
            The{" "}
            <strong>Maharashtra Common Entrance Test (MHT-CET)</strong> is a
            state-level entrance examination conducted for admission into
            undergraduate programs in Engineering, Pharmacy, and Agriculture in
            the state of Maharashtra. The exam tests a student's proficiency in{" "}
            <strong>Physics, Chemistry, Mathematics (PCM)</strong> or{" "}
            <strong>Physics, Chemistry, Biology (PCB)</strong> depending on the
            course of application.
          </p>

          <h2 className="mht-section-h2">Key Highlights of MHT-CET:</h2>
          <ul className="mht-highlights-list">
            <li>Conducted annually by the State Common Entrance Test Cell, Maharashtra.</li>
            <li>Curriculum is based on Maharashtra State Board syllabus.</li>
            <li>Plays a vital role in gaining admission to top colleges across Maharashtra.</li>
          </ul>

          <h2 className="mht-section-h2">Why Prepare for MHT-CET with Expert Guidance?</h2>
          <p className="mht-about-intro">
            While the MHT-CET follows the State Board syllabus,{" "}
            <strong>
              cracking the exam requires strategic preparation, time management,
              and conceptual clarity
            </strong>
            —something that Focus Coaching Classes offers with excellence.
          </p>
        </div>
      </section>

      {/* Course Features */}
      <section className="mht-course-section">
        <div className="mht-course-inner">
          <h2 className="mht-course-heading">
            MHT-CET Course at Focus Coaching Classes
          </h2>
          <p className="mht-course-sub">
            Our MHT-CET coaching is designed to equip students with:
          </p>

          <div className="mht-feature-block">
            <h3>1. <strong>Comprehensive Curriculum</strong></h3>
            <ul>
              <li>Detailed coverage of the Maharashtra Board syllabus.</li>
              <li>Special focus on important topics and frequently asked concepts.</li>
              <li>Regular updates to align with the latest exam patterns.</li>
            </ul>
          </div>

          <div className="mht-feature-block">
            <h3>2. <strong>Concept-Based Teaching</strong></h3>
            <ul>
              <li>Focused sessions on building strong fundamentals.</li>
              <li>Real-life examples to make complex topics easier.</li>
            </ul>
          </div>

          <div className="mht-feature-block">
            <h3>3. <strong>Regular Testing and Feedback</strong></h3>
            <ul>
              <li>Weekly and monthly mock tests.</li>
              <li>Performance tracking and detailed report analysis.</li>
              <li>Doubt-clearing sessions and one-on-one feedback for every student.</li>
            </ul>
          </div>

          <div className="mht-feature-block">
            <h3>4. <strong>Activity-Based Learning</strong></h3>
            <ul>
              <li>Brainstorming sessions, group quizzes, and visual learning aids.</li>
              <li>Encouragement for self-study through structured assignments.</li>
            </ul>
          </div>

          <div className="mht-feature-block">
            <h3>5. <strong>Guidance for Exam Strategy</strong></h3>
            <ul>
              <li>Time management tips for exam day.</li>
              <li>Practice through previous years' question papers.</li>
              <li>Revision and crash course support.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mht-why-section">
        <div className="mht-why-inner">
          <h2 className="mht-section-h2 mht-center">
            Why Choose Focus Coaching Classes?
          </h2>

          <div className="mht-why-block">
            <h3>1. <strong>Experienced Teachers</strong></h3>
            <p>
              Our faculty members are subject matter experts with years of
              experience preparing students for competitive exams. Their ability
              to simplify complex concepts and make learning engaging sets us
              apart.
            </p>
          </div>

          <div className="mht-why-block">
            <h3>2. <strong>Small Batch Sizes</strong></h3>
            <p>
              We intentionally keep batch sizes small so every student gets
              personal attention, and no one falls behind.
            </p>
          </div>

          <div className="mht-why-block">
            <h3>3. <strong>Regular Testing and Feedback</strong></h3>
            <p>
              Weekly and monthly mock tests, performance tracking, and
              one-on-one feedback ensure continuous improvement.
            </p>
          </div>

          <div className="mht-why-block">
            <h3>4. <strong>Parent-Teacher Communication</strong></h3>
            <p>
              We maintain open channels of communication with parents, ensuring
              they're updated on their child's progress and academic needs.
            </p>
          </div>

          <div className="mht-why-block">
            <h3>5. <strong>Safe and Accessible Location</strong></h3>
            <p>
              Located in <strong>Gangapur Road, Nashik</strong>, our coaching
              center is easily accessible via public and private transportation,
              making daily commute stress-free for students and guardians.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="mht-facilities-section">
        <div className="mht-facilities-inner">
          <h2 className="mht-section-h2">Facilities and Infrastructure</h2>
          <ul className="mht-facilities-list">
            <li>Well-ventilated and spacious classrooms.</li>
            <li>Smart-board enabled teaching.</li>
            <li>Dedicated doubt-clearing and library zone.</li>
            <li>Safe premises with surveillance.</li>
          </ul>

          <p className="mht-cta-text">
            Join the ranks of successful students.{" "}
            <strong>Book a Free Demo</strong> today and experience the Focus
            Coaching Classes difference!
          </p>
          <div className="mht-contact-row">
            <span>📞 <a href="tel:09920506327">09920506327</a></span>
            <span>📍 Gangapur Road, Nashik 422013</span>
            <span>
              🌐{" "}
              <a href="https://focuscoachingclasses.in/contact" target="_self" rel="noreferrer">
                focuscoachingclasses.in/contact
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* Closing para */}
      <section className="mht-closing-section">
        <div className="mht-closing-inner">
          <p>
            At Focus Coaching Classes, we understand the pressure competitive
            exams put on students and their families. That's why we blend
            quality education with compassion and care. Enroll your child with
            us today and take the first step towards MHT-CET success.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mht-faq-section">
        <div className="mht-faq-inner">
          <h2 className="mht-faq-title">FAQ's</h2>
          <p className="mht-faq-sub">
            Here are answers to some questions frequently asked.
          </p>
          <div className="mht-faq-divider" />
          <div className="mht-faq-list">
            {faqs.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
