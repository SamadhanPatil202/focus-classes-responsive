import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="about-banner">
        <h1>About Us</h1>
      </section>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">About</Link>
        <span> › </span>
        <span>About Us</span>
      </div>

      {/* Intro Section */}
      <section className="about-intro container">
        <div className="about-image">
          <img src="https://bucket-neosite.s3.ap-south-1.amazonaws.com/a790fb30-7621-4cea-926a-b5ad5d6ea5ef/website/common/focus-coaching-classes-nashik-2.jpg" alt="About Focus Coaching" />
        </div>
        <div className="about-text">
          <h2>About Focus Coaching Classes</h2>
          <div className="underline"></div>
          <p>
            Welcome to Focus Coaching Classes, Nashik's premier coaching institute located at
            Gangapur Road. At Focus, we specialize in shaping the future of students by offering
            tailored courses for 9th and 10th-grade ICSE & CBSE students, along with comprehensive
            programs for IIT Foundation, NEET, JEE, and MHT-CET. Our experienced faculty, modern
            teaching methodologies, and personalized attention ensure that every student receives
            the support and knowledge needed to excel academically. Join us and take the first step
            toward achieving your dreams!
          </p>
        </div>
      </section>

      {/* About Body */}
      <section className="about-body container">
        <p>
          Focus Coaching Classes, located in the vibrant educational hub of Gangapur Road, Nashik,
          was established with a singular vision — to transform the lives of students by equipping
          them with the tools necessary for academic and competitive success. Our diverse range of
          courses caters to students of classes 9 and 10 (ICSE & CBSE), as well as aspirants
          aiming for IIT Foundation, NEET, JEE, and MHT-CET.
        </p>

        {/* Why Choose */}
        <h3>Why Choose Focus Coaching Classes?</h3>
        <ol>
          <li><strong>Expert Faculty:</strong> Our team comprises seasoned educators who bring years of expertise in their respective subjects.</li>
          <li><strong>Comprehensive Curriculum:</strong> We provide meticulously designed study material and structured courses that cover the syllabus comprehensively.</li>
          <li><strong>Small Batch Sizes:</strong> By maintaining small batch sizes, we ensure personalized attention to each student.</li>
          <li><strong>State-of-the-Art Infrastructure:</strong> Our classrooms are equipped with the latest teaching aids and online/offline resources.</li>
          <li><strong>Performance Tracking:</strong> Regular tests, mock exams, and performance analytics help students identify their strengths.</li>
        </ol>

        {/* Core Programs */}
        <h3>Core Programs:</h3>
        <ul>
          <li><strong>ICSE & CBSE Classes (9th & 10th):</strong> Tailored to strengthen conceptual clarity and prepare students for board examinations.</li>
          <li><strong>IIT Foundation:</strong> Designed for students who aspire to excel in science and engineering fields.</li>
          <li><strong>NEET:</strong> Focused on mastering biology, chemistry, and physics to secure top ranks in medical entrance exams.</li>
          <li><strong>JEE:</strong> Structured approach to prepare students for both JEE Main and Advanced.</li>
          <li><strong>MHT-CET:</strong> Focuses on the Maharashtra state entrance exam, emphasizing key topics and problem-solving techniques.</li>
        </ul>

        {/* Commitment */}
        <p>
          <strong>Our Commitment:</strong> At Focus Coaching Classes, we are committed to excellence in education. We believe in
          empowering students with knowledge and confidence, enabling them to achieve their dreams.
        </p>

        {/* Vision */}
        <div className="vmg-section">
          <h3>Vision:</h3>
          <p>To become a beacon of excellence in education, inspiring students to achieve their academic and professional aspirations through innovative teaching, personalized guidance, and a commitment to quality.</p>

          <h3>Mission:</h3>
          <ol>
            <li>To provide high-quality education tailored to the individual needs of students.</li>
            <li>To empower students with knowledge, critical thinking, and problem-solving skills.</li>
            <li>To create a supportive and inspiring learning environment that nurtures curiosity.</li>
            <li>To employ modern teaching methodologies and leverage technology.</li>
            <li>To build a community of learners who thrive on discipline, determination, and success.</li>
          </ol>

          <h3>Goals:</h3>
          <ul>
            <li><strong>Student-Centric Approach:</strong> Ensure every student's unique learning needs are addressed.</li>
            <li><strong>Academic Excellence:</strong> Consistently achieve top results in ICSE, CBSE, IIT, NEET, JEE, and MHT-CET exams.</li>
            <li><strong>Faculty Excellence:</strong> Employ and retain the best teaching talent to offer unparalleled academic mentorship.</li>
            <li><strong>Technology Integration:</strong> Use cutting-edge teaching aids such as digital classrooms and online tests.</li>
            <li><strong>Parental Engagement:</strong> Regular updates and parent-teacher meetings to ensure transparent communication.</li>
            <li><strong>Holistic Development:</strong> Foster values of discipline, resilience, and ethical behavior.</li>
          </ul>
        </div>

        <p className="about-closing">
          Take the first step towards a brighter future. With our expert guidance, structured programs,
          and unwavering commitment to quality, we ensure that every student is equipped to succeed in
          their academic journey. Enroll now and be a part of Nashik's leading coaching institute.
          For inquiries, contact us or visit our center at Gangapur Road, Nashik.
        </p>
      </section>
    </>
  );
};

export default About;
