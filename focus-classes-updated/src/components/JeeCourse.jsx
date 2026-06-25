import "./JeeCourse.css";
import jeeImg from "../assets/a2.webp";
import JeeFaq from "./JeeFaq";
import { useNavigate } from "react-router-dom";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaQ } from "react-icons/fa6";

function JeeCourse() {
  const navigate = useNavigate();
  return (
    <div className="jee-page">
      <section className="jee-hero">
        <h1>Best JEE Coaching Classes in Gangapur Road Nashik</h1>
      </section>

      <div className="jee-breadcrumb">
        <span>Home</span>
        <span>›</span>
        <span>courses</span>
        <span>›</span>
        <span>jee classes</span>
      </div>

      <section className="jee-top">
        <div className="jee-left">
          <h2>JEE Classes</h2>

          <p>
            Located conveniently on Gangapur Road and Old Gangapur Naka in Nashik, Focus Coaching Classes is the ultimate destination for aspiring engineers. With years of expertise and a commitment to excellence, we are proud to be recognized as the best JEE coaching centre in Gangapur Road Nashik. We understand the challenges students face while preparing for one of the most competitive exams in the country, and our tailored approach ensures success for both students and their families.


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

        <div className="jee-right">
          <img src={jeeImg} alt="JEE Classes" />
        </div>
      </section>

      <section className="jee-content">
        <h3>Why Choose Focus Coaching Classes for JEE Preparation?</h3>

        <ol>
          <li>
            <b>Comprehensive Curriculum:</b> At Focus Coaching Classes, we deliver an exhaustive curriculum that covers every aspect of the JEE syllabus. Our JEE tutorials in Gangapur Road Nashik are designed to strengthen fundamental concepts and build advanced problem-solving skills.
          </li>
          <li>
            <b>Experienced Faculty:</b> Our team comprises highly qualified and experienced educators who have a proven track record of producing top-performing students. They bring expertise, passion, and a student-focused approach to every class.
          </li>
          <li>
            <b>State-of-the-Art Infrastructure:</b>Our classrooms are equipped with modern teaching aids, ensuring an engaging and effective learning experience. Whether you’re at our Gangapur Road or Old Gangapur Naka center, you can expect the best facilities.
          </li>
          <li>
            <b>Personalized Attention:</b> We believe every student is unique. That’s why we offer personalized attention through small batch sizes and one-on-one doubt-solving sessions, making us the best JEE coaching classes in Gangapur Road Nashik.
          </li>
          <li>
            <b>Regular Assessments:</b> Success in JEE requires consistent effort. Our regular tests and performance analysis reports help students track their progress and improve continuously.
          </li>
          <li>
            <b>Strategic Study Plans:</b> We create customized study plans to help students manage their time effectively. Our expert guidance ensures students can balance their school studies and JEE preparation seamlessly.
          </li>
        </ol>

        <h3>Course Highlights at Focus Coaching Classes</h3>

        <ul>
          <li><b>Foundation Building:</b> We strengthen the core concepts of Physics, Chemistry, and Mathematics, essential for JEE success.</li>
          <li><b>Advanced Problem-Solving Techniques:</b> Learn shortcuts and innovative techniques to tackle complex problems in less time.</li>
          <li><b>Mock Tests and Practice Papers:</b> Our test series simulates the real JEE environment, helping students build confidence and accuracy.</li>
          <li><b>Mentorship and Guidance:</b>Beyond academics, our mentors offer emotional and motivational support to students, ensuring holistic preparation.</li>
        </ul>

        <h3>Parents’ Corner: Ensuring Your Child’s Success</h3>

        <p>
          At Focus Coaching Classes, we understand the dreams you have for your child’s future. That’s why we partner with parents to ensure success at every step:
        </p>

        <ul>
          <li><b>Regular Updates:</b>  Stay informed about your child’s progress through periodic reports and parent-teacher meetings.</li>
          <li><b>Open Communication:</b> We encourage an open dialogue with parents to address any concerns and provide updates on performance and attendance.</li>
          <li><b>Focus on Well-Being:</b> Our holistic approach ensures students are not only academically prepared but also mentally and emotionally balanced.
 </li>
        </ul>

        
      </section>
        <JeeFaq/>

    </div>
  );
}

export default JeeCourse;