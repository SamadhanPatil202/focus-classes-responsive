import React, { useState, useEffect } from "react";
import "./Home.css";
import { FaWhatsapp, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import bannerImg from "../assets/coaching-banner.jpg";
import whyChooseImg from "../assets/why-choose.jpg";
import cbseImg from "../assets/cbse-student.jpg";
import neetImg from "../assets/neet-student.jpg";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import join from "../assets/join-focus.jpg";
import Footer from "../components/Footer";

function Home() {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };

  const blogRoutes = ["/10th-cbse", "/jee", "/9th-cbse"];

  const [showPopup, setShowPopup] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      name: "Pooja Desai",
      text: "I owe my NEET success to the amazing team at Focus Coaching Classes. The study material, test series, and doubt-solving sessions were excellent.",
      stars: 5,
    },
    {
      name: "Rahul Sharma",
      text: "Focus Coaching Classes helped me improve my confidence and score better in 10th CBSE. Teachers explain every concept in a very simple way.",
      stars: 5,
    },
    {
      name: "Sneha Patil",
      text: "The regular tests and personal guidance helped me understand my weak areas. The faculty is very supportive and friendly.",
      stars: 5,
    },
    {
      name: "Amit Jadhav",
      text: "Best coaching classes in Nashik. Small batch size, proper notes, and doubt-solving sessions helped me prepare well for exams.",
      stars: 5,
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentReview = testimonials[activeTestimonial];

  return (
    <>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button className="popup-close" onClick={() => setShowPopup(false)}>
              ×
            </button>

            <h2>Focus Coaching Classes</h2>
            <p>Share your query for personalized assistance.</p>

            <input type="text" placeholder="Enter your contact number" />

            <div className="popup-buttons">
              <button>Call Now</button>
              <button>Request A Call</button>
            </div>
          </div>
        </div>
      )}

      <main>
        <section className="home-banner">
          <img src={bannerImg} alt="Focus Coaching Classes Students" />
        </section>

        <section className="intro-section">
          <div className="intro-container">
            <h1>Focus Coaching Classes, Nashik Call 09920506327</h1>
            <div className="title-line"></div>

            <h3>
              Join The Best Coaching Classes in Nashik for Unmatched Academic
              Excellence!
            </h3>

            <p>
              At <strong>Focus Coaching Classes</strong>, we believe that every
              student has the potential to achieve greatness with the right
              guidance and support. Located at Gangapur Road, Nashik, we are
              committed to providing top-notch coaching for students aiming to
              excel in academics and competitive exams.
            </p>

            <p>
              Whether you’re striving for better grades or preparing for
              entrance exams, Focus Coaching Classes is the best coaching in
              Gangapur Road, designed to meet your needs.
            </p>

            <p style={{ fontWeight: "bold" }}>
              Achieve greatness in your exams with Focus Coaching Classes
              Nashik!
            </p>

            <button className="learn-btn" onClick={() => { navigate('/services'); window.scrollTo(0, 0); }}>
              Learn More
            </button>
          </div>
        </section>

        <section className="why-section">
          <div className="why-container">
            <div className="why-content">
              <h2>Why Choose Focus Coaching Classes?</h2>

              <ul className="why-list">
                <li>
                  <strong>Experienced Faculty:</strong> Learn from educators
                  with years of experience in their respective subjects.
                </li>
                <li>
                  <strong>Interactive Learning Environment:</strong> We
                  encourage discussions, critical thinking, and student
                  engagement.
                </li>
                <li>
                  <strong>Comprehensive Study Material:</strong> Access
                  well-researched and easy-to-understand study materials for
                  every subject.
                </li>
                <li>
                  <strong>Regular Assessments:</strong> Stay on track with
                  weekly tests, progress reports, and performance analysis.
                </li>
                <li>
                  <strong>Small Batch Sizes:</strong> Personalized attention and
                  customized teaching methods to suit individual learning
                  styles.
                </li>
              </ul>

              <div className="why-buttons">
                <button className="why-btn" onClick={goToContact}>
                  Contact Us
                </button>
                <button className="why-btn" onClick={goToContact}>
                  Get Free Counselling
                </button>
              </div>
            </div>

            <div className="why-image-box">
              <img src={whyChooseImg} alt="Why Choose" className="why-img" />
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="services-container">
            <div className="section-heading">
              <h2>Featured Services</h2>
              <span></span>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <div className="service-img-box">
                  <img src={cbseImg} alt="CBSE 10th Standard" />
                </div>

                <div className="service-content">
                  <Link
                    to="/course"
                    className="service-link"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <h3>CBSE 10th Standard</h3>
                  </Link>
                  <p>
                    Vidora in Nashik offers focused CBSE 10th coaching with
                    expert teaching, concept clarity, regular tests, and
                    personal attention to help students achieve excellent board
                    exam results.
                  </p>
                </div>
              </div>

              <div className="service-card">
                <div className="service-img-box">
                  <img src={neetImg} alt="NEET Classes" />
                </div>

                <div className="service-content">
                  <Link
                    to="/neet"
                    className="service-link"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <h3>NEET Classes</h3>
                  </Link>
                  <p>
                    Looking for the best NEET coaching classes at Gangapur Road
                    Nashik? We provide expert guidance, structured learning, and
                    result-oriented preparation for students aiming to crack the
                    NEET exam with top...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonial-section">
          <div className="testimonial-container">
            <h2>What Our Clients Say</h2>

            <button
              className="testimonial-arrow testimonial-left"
              onClick={prevTestimonial}
            >
              <FaArrowLeft />
            </button>

            <div key={activeTestimonial} className="testimonial-content">
              <div className="client-avatar">
                <div className="avatar-hair"></div>
                <div className="avatar-face"></div>
                <div className="avatar-body"></div>
              </div>

              <h3>{currentReview.name}</h3>
              <p>{currentReview.text}</p>

              <div className="testimonial-stars">
                {[...Array(currentReview.stars)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
            </div>

            <button
              className="testimonial-arrow testimonial-right"
              onClick={nextTestimonial}
            >
              <FaArrowRight />
            </button>
          </div>
        </section>

        <section className="blogs-section">
          <div className="blogs-container">
            <div className="blogs-heading">
              <h2>Featured Blogs</h2>
              <span></span>
              <p>Stay updated with the latest trends.</p>
            </div>

            <div className="blogs-grid">
              {[blog1, blog2, blog3].map((blog, index) => (
                <div className="blog-card" key={index}>
                  <div className="blog-image">
                    <img src={blog} alt="Blog" />
                  </div>

                  <div className="blog-content">
                    <h3>
                      {index === 0
                        ? "10th CBSE Coaching Classes near Gangapur Road Nashik"
                        : index === 1
                          ? "JEE Coaching Classes near Gangapur Road Nashik"
                          : "Top 9th CBSE Classes in Old Gangapur Naka Nashik"}
                    </h3>

                    <p>
                      Expert coaching, structured learning, and personal
                      guidance for better academic results.
                    </p>

                    <button
                      className="blog-btn"
                      onClick={() => {
                        navigate(blogRoutes[index]);
                        window.scrollTo(0, 0);
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="join-section">
          <div className="join-container">
            <div className="join-content">
              <h2>Join the Focus Coaching Classes</h2>
              <div className="join-line"></div>

              <p>
                Experience quality education, personalized attention, and
                result-oriented preparation.
              </p>

              <div className="join-buttons">
                <button className="join-btn" onClick={() => { navigate('/services'); window.scrollTo(0, 0); }}>Courses We Offer</button>
                <button className="join-btn" onClick={goToContact}>
                  Get Started
                </button>
              </div>
            </div>

            <div className="join-image-box">
              <img src={join} alt="Join Focus Coaching" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
