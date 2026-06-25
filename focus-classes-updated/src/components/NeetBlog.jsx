import React from "react";
import "./NeetBlog.css";
import blogImg from "../assets/neet-blog.jpeg";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function NeetBlog() {
  return (
    <div className="neet-page">

      {/* ── Hero / Header ── */}
      <div className="neet-hero-container">

        <div className="neet-left">
          <p className="neet-date">June 01, 2026</p>

          <h1>
            Maximize Your NEET Score: from
            <br />
            Experts at Gangapur Road Classes
          </h1>

          <div className="neet-line"></div>

          <br /><br />

          <hr />

          {/* Social Share Icons */}
          <div className="cbse-social">
            <a href="https://www.facebook.com" className="cbse-social-btn fb" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="https://twitter.com" className="cbse-social-btn tw" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a href="https://linkedin.com" className="cbse-social-btn li" aria-label="LinkedIn">
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

        <div className="neet-right">
          <img src={blogImg} alt="NEET Blog" />
        </div>

      </div>

      {/* ── Intro Section ── */}
      <section className="neet-content">

        <h1>
          Maximize Your NEET Score: Expert Insights from Gangapur Road Classes
        </h1>

        <p className="neet-intro-text">
          Are you aspiring to secure a high score in the NEET examination?
          Look no further! At Focus Coaching Classes, we specialize
          in <strong>neet classes gangapur road</strong>, designed to equip you
          with the knowledge and skills necessary to excel. Join our expert-led
          programs today!
        </p>

        <h2>Why Choose Our NEET Classes on Gangapur Road?</h2>

        <p>
          NEET (National Eligibility cum Entrance Test) is a highly competitive
          exam that determines admission into medical colleges across India.
          Our coaching classes on Gangapur Road are tailored to ensure that
          you are fully prepared to tackle this challenge.
        </p>

        <h3>Expert Faculty</h3>
        <p>
          Our instructors are seasoned educators with extensive experience in
          the NEET syllabus. They provide individualized attention and skillful
          guidance, helping you grasp complex concepts effortlessly.
        </p>

        <h3>Comprehensive Study Material</h3>
        <p>
          We offer meticulously curated study materials, including practice
          papers and revision notes. This ensures that you have access to all
          the resources required for high-level preparation.
        </p>

        <h3>Regular Assessments</h3>
        <p>
          Monthly assessments are part of our program, allowing you to track
          your progress and identify areas of improvement. This ensures you
          stay on the right path as you prepare for your NEET examination.
        </p>

      </section>

      {/* ── Course Features & Tips ── */}
      <section className="neet-article-content">

        <h3>Course Features at Focus Coaching Classes</h3>
        <p>Our NEET classes on Gangapur Road provide:</p>

        <ul>
          <li>
            <strong>Flexible Batch Timings:</strong> We understand that students have various commitments. Our flexible timing caters to your schedule.
          </li>
          <li>
            <strong>Interactive Learning Environment:</strong> Engage with peers and instructors through discussions and collaborative learning.
          </li>
          <li>
            <strong>Mock Tests:</strong> Gain experience with our simulated test environments that replicate the actual NEET setting.
          </li>
        </ul>

        <h3>Success Stories</h3>
        <p>
          Many of our students have achieved remarkable results, securing seats in prestigious medical institutions. Their testimonials inspire us to keep delivering quality education.
        </p>

        <h3>How to Maximize Your NEET Score</h3>
        <p>To score well in NEET, consider the following strategies:</p>

        <ul>
          <li>
            <strong>Structured Study Plan:</strong> Create a timetable, dedicating time to all important topics.
          </li>
          <li>
            <strong>Focus on NCERT:</strong> A significant part of NEET is derived from NCERT textbooks, so ensure to study them thoroughly.
          </li>
          <li>
            <strong>Practice Regularly:</strong> Consistent practice is key to mastering the exam pattern and time management.
          </li>
        </ul>

        <h3>Join Focus Coaching Classes Today!</h3>
        <p>
          As you embark on your journey to become a successful medical professional, arm yourself with the right skills and knowledge at
          Focus Coaching Classes
        </p>
        <p>
          Ready to take your preparation to the next level?
          <a href="tel:09920506327"> Call us at 09920506327</a> to
          <strong> Book a Free Demo Class</strong> today!
        </p>

      </section>

      {/* ── FAQ ── */}
      <section className="neet-article-content">

        <h3>Frequently Asked Questions</h3>

        <div className="neet-faq-item">
          <h4>1. What is the NEET exam?</h4>
          <p>
            NEET is a standardized examination for medical aspirants in India to
            secure a seat in MBBS/BDS programs.
          </p>
        </div>

        <div className="neet-faq-item">
          <h4>2. Why is coaching necessary for NEET?</h4>
          <p>
            Coaching provides structured guidance and helps in understanding
            complex subjects that are crucial for NEET.
          </p>
        </div>

        <div className="neet-faq-item">
          <h4>3. How can I enroll in the classes?</h4>
          <p>
            You can enroll by visiting our
            services page
            or calling us at
            <a href="tel:09920506327"> 09920506327</a>.
          </p>
        </div>

        <div className="neet-faq-item">
          <h4>4. What facilities do you provide?</h4>
          <p>
            We offer a conducive learning environment, study materials, and
            regular assessments to enhance your learning experience.
          </p>
        </div>

        <div className="neet-faq-item">
          <h4>5. Can I reschedule my demo class?</h4>
          <p>
            Yes, you can contact us at
            <a href="tel:09920506327"> 09920506327 </a>
            to reschedule based on your availability.
          </p>
        </div>

        <p className="neet-faq-last">
          For more details about our courses,
          <a href="tel:09920506327"> explore more </a>
          on our website.
        </p>

        <p className="neet-faq-last">
          Don't miss out on the chance to excel in NEET!
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)}> Contact us now!</Link>
        </p>

      </section>

    </div>
  );
}

export default NeetBlog;
