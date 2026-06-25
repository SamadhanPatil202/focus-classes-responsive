import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NinthCBSE.css';

const faqs = [
  { q: "What is the duration of the 9th CBSE course at Focus Coaching Classes?", a: "Our 9th CBSE course runs for the full academic year, with sessions scheduled on weekdays and weekends. Each session is approximately 1.5 hours long, covering all core subjects thoroughly." },
  { q: "How are the batches organized at Focus Coaching Classes?", a: "We maintain small batch sizes of maximum 15–20 students to ensure every child gets personalized attention. Batches are available in the morning and evening to suit different schedules." },
  { q: "Are the teachers qualified?", a: "Yes, all our teachers are highly qualified professionals with years of experience in teaching CBSE students. They have deep knowledge of the CBSE curriculum and are skilled at simplifying complex concepts." },
  { q: "Can my child join in the middle of the academic year?", a: "Yes, we accept mid-year admissions. Our faculty will ensure your child is quickly brought up to speed through catch-up sessions if needed." },
  { q: "What is the teaching methodology at Focus Coaching Classes?", a: "Our methodology focuses on conceptual clarity rather than rote learning. We use visual aids, interactive discussions, and practical examples. Regular assessments and doubt-clearing sessions are also part of our approach." },
  { q: "Do you provide study material for the 9th CBSE course?", a: "Yes, we provide comprehensive study material including structured notes, practice papers, and previous years' question papers." },
  { q: "Is there a regular test and assessment system?", a: "Absolutely. We conduct weekly chapter-wise tests and monthly mock exams to track each student's progress and identify areas that need improvement." },
  { q: "How can I book a demo class for my child?", a: "You can book a free demo class by calling us at 09920506327 or by visiting our Contact page on the website." },
  { q: "What subjects are covered in the 9th CBSE course?", a: "We cover all core CBSE subjects: Mathematics, Science (Physics, Chemistry, Biology), English, Social Science (History, Geography, Political Science, Economics), and Hindi." },
  { q: "Where is Focus Coaching Classes located?", a: "Focus Coaching Classes is located at Gangapur Road and Old Gangapur Naka, Nashik — conveniently accessible from all parts of the city." },
];

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item" onClick={() => setOpen(!open)}>
      <div className="faq-question">
        <span>{q}</span>
        <span className="faq-arrow">{open ? '∧' : '∨'}</span>
      </div>
      {open && <div className="faq-answer">{a}</div>}
    </div>
  );
};

const NinthCBSE = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="ninth-cbse-banner">
        <h1>Best 9th CBSE Coaching Classes in Gangapur Road Nashik</h1>
      </section>

      {/* Breadcrumb */}
      <div className="ninth-breadcrumb">
        <Link to="/">Home</Link> › <Link to="/courses">courses</Link> › <span>9th cbse classes</span>
      </div>

      {/* Intro: text left, image right */}
      <div className="ninth-intro">
        <div className="ninth-intro-text">
          <h2>9th CBSE Classes</h2>
          <div className="ninth-underline"></div>
          <p>
            At Focus Coaching Classes, we are committed to providing top-tier educational support for
            students aspiring to excel in their 9th CBSE examinations. Located conveniently in Gangapur
            Road and Old Gangapur Naka in Nashik, we have earned a reputation as the best coaching center
            for 9th CBSE classes in the region. With a focus on individualized attention, experienced
            teachers, and a structured learning approach, we ensure that every student receives the tools
            and guidance needed to succeed in their academic journey.
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
        <div className="ninth-intro-img">
          <img
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700"
            alt="9th CBSE Students at Focus Coaching"
          />
        </div>
      </div>

      {/* Body Content */}
      <div className="ninth-body">

        {/* Our Mission */}
        <h2>Our Mission</h2>
        <p>
          At Focus Coaching Classes, we aim to help every student unlock their full potential. Our mission
          is to create an enriching environment where students can not only master the CBSE curriculum but
          also develop a strong foundation in essential concepts that will serve them throughout their
          academic careers. We believe in a holistic approach to education that nurtures both the
          intellectual and personal growth of each student.
        </p>

        {/* Why Choose */}
        <h2>Why Choose Focus Coaching Classes for Your 9th CBSE Preparation?</h2>
        <p>
          When it comes to selecting the right coaching center for your child's 9th CBSE studies in
          Gangapur Road, Nashik, there are many factors to consider. Here's why Focus Coaching Classes
          stands out from the rest:
        </p>
        <ul>
          <li>
            <strong>Experienced Teachers</strong>: Our faculty consists of highly qualified and experienced
            teachers who bring years of expertise in their respective subjects. With a deep understanding
            of the CBSE curriculum, our teachers know how to explain complex concepts in simple,
            understandable terms, making learning easier and more enjoyable for students.
          </li>
          <li>
            <strong>Small Batch Sizes</strong>: We prioritize personalized learning at Focus Coaching
            Classes. Our small batch sizes ensure that each student receives focused attention. Teachers
            can effectively address individual doubts, work on specific challenges, and provide the
            necessary guidance to maximize the student's learning potential.
          </li>
          <li>
            <strong>Comprehensive Curriculum</strong>: Our 9th CBSE course is designed to provide
            in-depth knowledge and comprehensive coverage of all subjects prescribed by the CBSE board.
            We ensure that each student is well-prepared for their exams through structured lessons,
            regular assessments, and interactive sessions that make learning engaging and effective.
          </li>
          <li>
            <strong>Interactive Learning Environment</strong>: At Focus Coaching Classes, we create a
            learning environment where students are encouraged to ask questions, interact with their
            peers, and participate in discussions. This helps them develop critical thinking and
            problem-solving skills that are vital for academic success.
          </li>
          <li>
            <strong>Consistent Performance Track Record</strong>: Our students consistently achieve
            excellent results in the 9th CBSE exams, thanks to our proven teaching methods and
            personalized attention. We pride ourselves on delivering results that speak for themselves.
          </li>
        </ul>

        {/* Course Details */}
        <h2>9th CBSE Course Details</h2>
        <p>
          Our 9th CBSE course at Focus Coaching Classes is designed to provide a solid foundation for
          students preparing for their board exams. Here's what we cover in our 9th CBSE curriculum:
        </p>

        <h3>1. Core Subjects:</h3>
        <ul>
          <li>
            <strong>Mathematics</strong>: We offer a structured approach to the 9th-grade math syllabus,
            ensuring that students grasp key concepts in algebra, geometry, and number systems, among
            others. Our teaching focuses on both conceptual clarity and problem-solving techniques.
          </li>
          <li>
            <strong>Science</strong>: Our science classes include comprehensive lessons in Physics,
            Chemistry, and Biology. We ensure that students understand the fundamental principles and
            practical applications of each subject.
          </li>
          <li>
            <strong>English</strong>: English is taught in a way that develops both written and verbal
            communication skills. Students learn grammar, comprehension, writing skills, and literature
            in a structured, interactive manner.
          </li>
          <li>
            <strong>Social Science</strong>: History, Geography, Political Science, and Economics are
            taught in a way that promotes critical thinking and helps students understand the real-world
            relevance of these subjects.
          </li>
        </ul>

        <h3>2. Methodology:</h3>
        <ul>
          <li>
            <strong>Conceptual Teaching</strong>: Our focus is on building strong concepts, rather than
            rote memorization. We use a variety of teaching methods, such as visual aids, interactive
            discussions, and practical examples, to ensure that students truly understand the material.
          </li>
          <li>
            <strong>Regular Assessments</strong>: We conduct regular quizzes, mock tests, and assignments
            to track progress and identify areas that need improvement.
          </li>
          <li>
            <strong>Doubt-Clearing Sessions</strong>: To ensure that students have a clear understanding
            of every topic, we hold dedicated doubt-clearing sessions after every lesson.
          </li>
          <li>
            <strong>Revision Classes</strong>: Before exams, we conduct thorough revision sessions to
            help students revise the entire syllabus, ensuring they are exam-ready.
          </li>
        </ul>

        {/* Unique Features */}
        <h2>Unique Features of Focus Coaching Classes</h2>

        <p className="feature-num">1. <span style={{textDecoration:'underline'}}>Small Batches for Personalized Attention</span></p>
        <p>
          At Focus Coaching Classes, we believe in keeping our batch sizes small. This ensures that each
          student receives personalized attention from the teacher. With fewer students in each class,
          teachers can focus on the individual needs of each child, helping them overcome academic
          challenges, clarify doubts, and progress at their own pace.
        </p>

        <p className="feature-num">2. <span style={{textDecoration:'underline'}}>Experienced and Dedicated Teachers</span></p>
        <p>
          Our team of teachers comprises highly qualified professionals with years of experience in
          teaching CBSE students. They not only have a deep understanding of the curriculum but are also
          skilled in identifying the unique learning styles of each student, ensuring a tailored approach
          to their teaching.
        </p>

        <p className="feature-num">3. <span style={{textDecoration:'underline'}}>Convenient Location: Gangapur Road and Old Gangapur Naka, Nashik</span></p>
        <p>
          Our coaching classes are conveniently located in the heart of Nashik, making it easy for
          parents and students to access the best 9th CBSE coaching classes in the city. Whether you
          live near Gangapur Road or Canada Corner, our coaching center is ideally situated to serve
          students from all parts of Nashik.
        </p>

        {/* Book Demo */}
        <h2>Book a Free Demo Class Today!</h2>
        <p>
          We understand that choosing the right coaching center is an important decision. That's why we
          offer a <strong>free demo class</strong> to help you experience firsthand how we teach and
          whether our approach works for your child.
        </p>
        <p>Book your free demo today by calling us at:</p>
        <ul>
          <li><a href="tel:09920506327">09920506327</a></li>
        </ul>
        <p>Or visit our website: <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Focus Coaching Classes Contact</Link></p>
        <p>
          Don't miss the chance to provide your child with the best possible preparation for their 9th
          CBSE exams. At Focus Coaching Classes, we are here to guide your child to success!
        </p>
      </div>

      {/* Locations */}
      <div className="ninth-locations">
        <h2>Locations</h2>
        <a href="#">gangapur road nashik</a>
      </div>

      {/* FAQ */}
      <section className="ninth-faq">
        <div className="ninth-faq-inner">
          <h2>FAQ's</h2>
          <p className="ninth-faq-sub">Here are answers to some questions frequently asked.</p>
          <div className="faq-divider"></div>
          {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
        </div>
      </section>
    </>
  );
};

export default NinthCBSE;
