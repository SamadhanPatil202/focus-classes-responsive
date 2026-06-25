import React from 'react';
import { Link } from 'react-router-dom';
import './NinthSSC.css'

const NinthSSC = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="about-banner">
        <h1>9th SSC Coaching Classes at Gangapur Road and Old Gangapur Naka</h1>
      </section>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Home</Link> › <Link to="/courses">courses</Link> › <span>9th ssc classes</span>
      </div>

      {/* Intro: text left, image right */}
      <section className="about-intro container">
        <div className="about-text">
          <h2>9th SSC Classes</h2>
          <div className="underline"></div>
          <p>
            Welcome to Focus Coaching Classes: Your Partner in Academic Excellence Located in the heart
            of Nashik on Gangapur Road and Old Gangapur Road, Focus Coaching Classes is dedicated to
            nurturing young minds and empowering students to achieve their academic goals. We specialize
            in providing high-quality coaching for students in various standards, including our
            meticulously designed 9th SSC Course, tailored to meet the unique needs of every learner.
            With a mission to build a strong foundation for future success, we focus on delivering
            excellence in education through experienced teachers, personalized attention, and innovative
            teaching methodologies.
          </p>
          {/* Social Icons + Book Demo */}
          <div style={{ display:'flex', alignItems:'center', gap:'10px', marginTop:'20px', flexWrap:'wrap' }}>
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

            <Link to="/contact" style={{ background:'#29a8d0', color:'white', padding:'10px 22px', borderRadius:'6px', fontSize:'14px', fontWeight:'600', textDecoration:'none' }}>Book Free Demo Class</Link>
          </div>
        </div>
          </div>
        
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1607453998774-d533f65dac99?w=700"
            alt="9th SSC Students at Focus Coaching Nashik"
          />
        </div>
      </section>

      {/* Body */}
      <section className="about-body container">

        <p style={{ fontSize:'14px', color:'#555', marginBottom:'10px' }}>About the 9th SSC Course at Focus Coaching Classes</p>
        <p>
          The <strong>9th SSC curriculum</strong> is a pivotal stage in a student's academic journey.
          It bridges foundational concepts from earlier classes with the rigorous demands of the 10th
          board exams. At Focus Coaching Classes, we understand the importance of this transitional year
          and have curated a comprehensive program to help students excel.
        </p>

        <h3>Course Curriculum</h3>
        <p>Our 9th SSC course is aligned with the Maharashtra State Board syllabus and covers all major subjects, including:</p>
        <ul>
          <li><strong>Mathematics</strong>: Concepts, problem-solving techniques, and exam-focused practice sessions.</li>
          <li><strong>Science</strong>: In-depth understanding of Physics, Chemistry, and Biology through hands-on experiments and real-world applications.</li>
          <li><strong>Social Studies</strong>: Thorough coverage of History, Geography, Political Science, and Economics with an emphasis on analytical skills.</li>
          <li><strong>Languages</strong>: Proficiency in English, Marathi, and Hindi through grammar drills, writing practices, and oral exercises.</li>
        </ul>

        <h3>Key Benefits of Enrolling in the 9th SSC Course</h3>
        <ol>
          <li><strong>Strong Foundation</strong>: Master core concepts and build a solid base for the 10th board exams.</li>
          <li><strong>Enhanced Problem-Solving Skills</strong>: Gain confidence in tackling complex questions.</li>
          <li><strong>Regular Assessments</strong>: Periodic tests and evaluations to track progress.</li>
          <li><strong>Individual Attention</strong>: Small batch sizes ensure every student receives personalized guidance.</li>
          <li><strong>Doubt-Solving Sessions</strong>: Dedicated sessions to clarify all doubts and reinforce learning.</li>
        </ol>

        <p style={{ fontSize:'14px', color:'#555', marginBottom:'6px' }}>Unique Features of Focus Coaching Classes</p>

        <h3>Experienced Teachers</h3>
        <p>Our faculty comprises highly qualified and experienced educators who are passionate about teaching. They bring years of expertise in their respective subjects and adopt a student-centric approach to ensure effective learning. Their dedication helps students grasp challenging concepts with ease and excel academically.</p>

        <h3>Small Batch Sizes</h3>
        <p>At Focus Coaching Classes, we believe that personalized attention is key to student success. Our small batch sizes allow our teachers to understand each student's strengths and weaknesses, tailoring their teaching methods accordingly. This ensures that no student is left behind.</p>

        <h3>Comprehensive Study Material</h3>
        <p>We provide meticulously designed study material, including notes, practice papers, and previous years' question banks, to give students an edge in their preparation.</p>

        <h3>Technology-Enabled Learning</h3>
        <p>Our classrooms are equipped with modern teaching aids, including audio-visual tools, to make learning more engaging and interactive.</p>

        <h3>Regular Parent-Teacher Interaction</h3>
        <p>We prioritize transparent communication with parents. Regular meetings and updates ensure parents are well-informed about their child's progress.</p>

        <p style={{ fontSize:'14px', color:'#555', marginBottom:'6px' }}>Convenient Locations</p>
        <p>Focus Coaching Classes is strategically located to provide easy access to students from across Nashik:</p>
        <ol>
          <li><strong>Gangapur Road</strong>: A central location known for its educational hubs.</li>
          <li><strong>Old Gangapur Road</strong>: Easily reachable, providing a peaceful learning environment.</li>
        </ol>
        <p>Both branches are designed to offer a comfortable and focused learning atmosphere.</p>

        <p style={{ fontSize:'14px', color:'#555', marginBottom:'6px' }}>Enroll Today and Witness the Difference</p>
        <p>
          Join the hundreds of students who have trusted Focus Coaching Classes for their academic
          journey. Give your child the opportunity to learn, grow, and excel with the best{' '}
          <strong>9th SSC coaching in Gangapur Road Nashik</strong>.
        </p>

        <h3>Contact Us Today</h3>
        <ul>
          <li>Call us at <a href="tel:09920506327" style={{ color:'#29a8d0' }}>09920506327</a></li>
          <li>Visit us at <Link to="/contact" onClick={() => window.scrollTo(0, 0)} style={{ color:'#29a8d0' }}>Contact Us</Link>.</li>
          <li><strong>Book a Free Demo Class</strong> to experience our teaching methodology firsthand.</li>
        </ul>

        {/* Tags */}
        <div style={{ marginTop:'40px' }}>
          <h3 style={{ fontSize:'1.5rem' }}>Tags</h3>
          <a href="#" style={{ display:'inline-block', color:'#29a8d0', fontSize:'14px',  borderRadius:'4px', padding:'4px 12px', textDecoration:'none',}}>9th ssc coaching classes</a>
        </div>

      </section>
    </>
  );
};

export default NinthSSC;