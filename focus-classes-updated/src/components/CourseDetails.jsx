import "./CourseDetails.css";
import cbse10 from "../assets/a1.webp";
import { Link, useNavigate } from "react-router-dom";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

function CourseDetails() {
  const navigate = useNavigate();
  return (
    <div className="course-page">
      <section className="course-hero">
        <h1>
          CBSE 10th Coaching in Dindori Road Call 09513183150 | Vidora
        </h1>
      </section>

      <div className="breadcrumb">Home › Courses › CBSE 10th Standard</div>

      <section className="course-top">
        <div className="course-left">
          <h2>CBSE 10th Standard</h2>

          <p>
            Vidora in Nashik offers focused CBSE 10th coaching with expert
            teaching, concept clarity, regular tests, and personal attention to
            help students achieve excellent board exam results.
          </p>

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
          
        

            <button className="demo-btn" onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}>
              Book your free demo
            </button>
          </div>
        </div>

        <div className="course-right">
          <img src={cbse10} alt="CBSE 10th Standard" />
        </div>
      </section>

      <section className="course-description">
        <p>
         Vidora  offers dedicated and result-oriented CBSE Class 10 coaching in Nashik for students who want to perform well in their board examinations. Class 10 is one of the most important stages in a student’s academic journey, and proper guidance during this time plays a key role in achieving good results. At Vidora , we provide structured learning programs that help students understand concepts clearly and prepare confidently for their CBSE board exams.
        </p>

        <p>
          Our teaching approach focuses on building strong subject fundamentals in Mathematics, Science, and other core subjects. Instead of memorization, we emphasize conceptual learning so that students can understand the logic behind each topic. This helps them solve problems effectively and score better marks in examinations.
        </p>

        <p>
         Vidora  provides well-planned coaching sessions that include detailed explanations, regular practice assignments, doubt-solving sessions, and periodic tests. These regular tests help students evaluate their preparation and improve their performance step by step. Our experienced teachers guide students through important topics, exam patterns, and effective study strategies that are useful for CBSE board exams.
        </p>

        <p>
            One of the major strengths of Vidora  is our small batch sizes, which allow teachers to give individual attention to every student. We believe that each student learns differently, and personalized support helps them overcome academic challenges more effectively. Our aim is to create a supportive and motivating environment where students feel confident and encouraged to perform their best.
        </p>

        <p>
            Vidora  is conveniently located near Mhasrul, Dindori Road, and Panchvati in Nashik, making it easily accessible for students from nearby areas. With dedicated teaching, structured study plans, and continuous academic support, we help students build confidence and achieve excellent results in their CBSE Class 10 board examinations.
        </p>

        <p>
            Students and parents looking for reliable CBSE 10th coaching in Nashik can join Vidora  for quality education and expert guidance.
        </p>

        <p>
            For admissions and course inquiries, contact Vidora  at 09513183150.
        </p>
      </section>
    </div>
  );
}

export default CourseDetails;