import "./cbse10.css";
import cbse10 from "../assets/cbse10.webp";
import FaqSection from "./FaqSection";
import { Link } from "react-router-dom";

export default function Cbse10th() {
  return (
    <div className="cbse-root">
      {/* Hero Banner */}
      <div className="cbse-hero">
        <h1>Best 10th CBSE Coaching Classes in Gangapur Road Nashik</h1>
      </div>

      {/* Breadcrumb */}
      <div className="cbse-breadcrumb">
        <a href="/">Home</a>
        <span>›</span>
        <a href="/courses">courses</a>
        <span>›</span>
        10th cbse classes
      </div>

      {/* Section 1: Intro */}
      <div className="cbse-section">
        <div className="cbse-text-block">
          <h2 className="cbse-heading">10th CBSE Classes</h2>
          <p>
            Welcome to Focus Coaching Classes – Your Pathway to Excellence in
            10th CBSE Education At Focus Coaching Classes, we are committed to
            providing high-quality education to students who aim to excel in
            their 10th CBSE exams. Located conveniently on Gangapur Road and Old
            Gangapur Road in Nashik, our coaching center is renowned for
            delivering personalized, results-driven coaching. We understand the
            importance of these formative years for students, and we focus on
            developing both academic skills and the confidence needed to
            succeed.
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
          </div>
        </div>

        <div className="cbse-image-block">
          <img src={cbse10} alt="Students studying" />
        </div>
      </div>

      <div className="cd-root">
        <h2 className="cd-main-title">
          The 10th CBSE Course: Comprehensive, Engaging, and Effective
        </h2>
        <p className="cd-para">
          Our 10th CBSE course at Focus Coaching Classes is designed to cover
          the full spectrum of the curriculum prescribed by the Central Board of
          Secondary Education (CBSE). We focus on all key subjects, including
          Mathematics, Science (Physics, Chemistry, Biology), Social Science,
          and Hindi/English. Our course structure aims to build a strong
          foundation for each student, ensuring a thorough understanding of
          every concept.
        </p>

        <h3 className="cd-sub-title">Curriculum Overview</h3>
        <p className="cd-para">
          The 10th CBSE syllabus is structured to ensure comprehensive coverage
          of essential concepts. Our experienced teachers deliver engaging
          lessons that align with the CBSE guidelines and teaching
          methodologies.
        </p>

        <h3 className="cd-sub-title">Mathematics:</h3>
        <p className="cd-para">
          Mathematics forms the backbone of the CBSE 10th curriculum, and at
          Focus Coaching Classes, we ensure that every student grasps the
          fundamental concepts with clarity. We break down complex problems into
          manageable steps and use real-world applications to make learning more
          engaging.
        </p>

        <h3 className="cd-sub-title">Science (Physics, Chemistry, Biology):</h3>
        <p className="cd-para">
          The Science subjects are divided into three core areas – Physics,
          Chemistry, and Biology. We focus on conceptual understanding in
          Physics, experimental knowledge in Chemistry, and scientific
          exploration in Biology. Our teachers use practical examples, visual
          aids, and interactive learning methods to make Science come alive.
        </p>

        <h3 className="cd-sub-title">Social Science:</h3>
        <p className="cd-para">
          Social Science is a subject that requires an understanding of both
          historical facts and current societal dynamics. We ensure that
          students not only memorize dates and events but also connect them with
          real-life situations. Our interactive sessions make Social Science
          more interesting and memorable.
        </p>

        <h3 className="cd-sub-title">Languages:</h3>
        <p className="cd-para">
          Languages like Hindi and English are essential components of the CBSE
          10th curriculum. Our language teachers focus on improving reading,
          writing, and communication skills, helping students master the
          language through regular practice and discussion.
        </p>

        <h3 className="cd-sub-title" style={{ marginTop: "36px" }}>
          Benefits of the 10th CBSE Course at Focus Coaching Classes
        </h3>
        <ol className="cd-list">
          <li>
            <strong>Comprehensive Coverage:</strong> Our course covers the
            entire CBSE 10th syllabus, ensuring students are well-prepared for
            their board exams. We follow a structured approach, starting from
            basics and progressing to more advanced topics, giving students a
            step-by-step learning experience.
          </li>
          <li>
            <strong>Conceptual Clarity:</strong> We place a strong emphasis on
            conceptual clarity. Instead of rote learning, we encourage students
            to understand the 'why' and 'how' of every concept, which helps them
            retain knowledge for the long term.
          </li>
          <li>
            <strong>Regular Assessments and Feedback:</strong> To track
            progress, we conduct regular tests, quizzes, and assignments. These
            assessments help students identify areas of improvement, and our
            teachers provide constructive feedback to guide their learning.
          </li>
          <li>
            <strong>Doubt Clearing Sessions:</strong> We offer dedicated doubt
            clearing sessions where students can directly interact with teachers
            and resolve any questions or uncertainties. These sessions ensure
            that students are never left behind and can continue their learning
            without any hindrances.
          </li>
          <li>
            <strong>Exam Preparation:</strong> As the board exams approach, we
            focus on exam-specific strategies, helping students practice
            previous years' question papers, model tests, and mock exams. This
            boosts their confidence and helps them familiarize themselves with
            the exam format.
          </li>
        </ol>

        <h3 className="cd-sub-title" style={{ marginTop: "36px" }}>
          Unique Features of Focus Coaching Classes
        </h3>
        <p className="cd-para">
          At Focus Coaching Classes, we stand out due to our commitment to
          quality education and the personalized approach we take with every
          student. Here are the key features that make us the best choice for
          your child's 10th CBSE coaching needs:
        </p>

        <h4 className="cd-feature-title">1. Experienced Teachers</h4>
        <p className="cd-para">
          Our faculty comprises highly experienced educators who are experts in
          their respective fields. They bring years of teaching experience and a
          passion for imparting knowledge. Our teachers not only deliver lessons
          but also inspire students to take an active interest in learning. They
          understand the nuances of the CBSE curriculum and are adept at
          simplifying complex concepts for easy understanding.
        </p>

        <h4 className="cd-feature-title">2. Small Batch Sizes</h4>
        <p className="cd-para">
          We believe in providing personalized attention to each student. Our
          small batch sizes ensure that every student receives the individual
          support they need. This allows our teachers to track each student's
          progress, address specific challenges, and tailor their teaching
          methods to suit the learning style of every student.
        </p>

        <h4 className="cd-feature-title">3. Personalized Attention</h4>
        <p className="cd-para">
          Our teaching methodology revolves around the idea of individualized
          learning. By limiting batch sizes, we can give each student the
          attention they deserve, making sure that no one falls behind. Regular
          one-on-one interactions with teachers help students understand
          concepts at their own pace.
        </p>

        <h4 className="cd-feature-title">4. Focus on Practical Learning</h4>
        <p className="cd-para">
          We believe in bridging the gap between theoretical knowledge and
          practical application. Our hands-on approach, especially in subjects
          like Science and Mathematics, allows students to connect classroom
          learning with real-world experiences.
        </p>

        <h4 className="cd-feature-title">
          5. Friendly and Supportive Environment
        </h4>
        <p className="cd-para">
          We maintain a welcoming and supportive environment that helps students
          feel comfortable. Our teachers are approachable and are always ready
          to help students both academically and personally, ensuring they have
          a positive learning experience.
        </p>

        <h3 className="cd-sub-title" style={{ marginTop: "36px" }}>
          Our Location: Conveniently Situated on Gangapur Road and Old Gangapur
          Naka
        </h3>
        <p className="cd-para">
          Focus Coaching Classes is located in the heart of Nashik, with easy
          access from the Gangapur Road and Old Gangapur Naka areas. The
          strategic location ensures convenience for students coming from
          various parts of the city, making it easier for parents to drop off
          their children and for students to commute hassle-free.
        </p>

        <p className="cd-para">
          <strong>Address:</strong>
        </p>
        <p className="cd-para" >
          Focus Coaching Classes
          <br />
          Gangapur Road, Nashik, Maharashtra
          <br />
          Near Old Gangapur Naka
        </p>

        <p className="cd-para">
          Whether you're looking for 10th CBSE coaching classes in Gangapur Road
          Nashik or 10th CBSE coaching center in Canada Corner Nashik, we are
          centrally located to serve students across the city.
        </p>

        <h3 className="cd-sub-title" style={{ marginTop: "36px" }}>
          Book a Free Demo Today!
        </h3>
        <p className="cd-para">
          At Focus Coaching Classes, we are confident that our personalized
          coaching can make a significant difference in your child's learning
          journey. We invite you to book a <strong>free demo class</strong> to
          experience our teaching methods and meet our educators firsthand.
        </p>

        <p className="cd-para">
          <strong>Contact us today:</strong>
        </p>

        <p className="cd-para">
          <span style={{ color: "#e91e63", marginRight: "6px" }}>📞</span>
          Call us at:{" "}
          <a href="tel:09920506327" className="cd-link">
            09920506327
          </a>
        </p>

        <p className="cd-para" style={{ marginTop: "16px" }}>
          Or visit our{" "}
          <Link to="/contact" onClick={()=>window.scrollTo(0,0)} className="cd-link">
            Contact Page
          </Link>{" "}
          for more information.
        </p>

        <h3 className="cd-sub-title" style={{ marginTop: "36px" }}>
          Locations
        </h3>
        <p className="cd-para">
          <a href="#" className="cd-link">
            gangapur road nashik
          </a>
        </p>

        <FaqSection />
      </div>

      </div>
  );
}
