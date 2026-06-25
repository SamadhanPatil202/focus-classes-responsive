import "./BlogDetails.css";
import blogImg from "../assets/blogImg.webp";

import {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaWhatsapp,
} from "react-icons/fa";

function BlogDetails() {
    return (
        <div className="bd-page">

            {/* HERO SECTION */}
            <section className="bd-hero">
                <div className="bd-hero-left">
                    <p className="bd-date">April 24, 2026</p>
                    <h1>
                        Maximize Your NEET Preparation: Benefits of Joining Classes on Gangapur Road
                    </h1>
                </div>

                <div className="bd-hero-right">
                    <img src={blogImg} alt="NEET Coaching" />
                </div>
            </section>

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

            {/* CONTENT SECTION */}
            <section className="bd-content">

                <h1>Maximize Your NEET Preparation: Benefits of Joining Classes on Gangapur Road</h1>

                <h4>
                    Preparing for the National Eligibility cum Entrance Test (NEET) can be a challenging journey for many aspiring medical students. With increasing competition and the need for a solid foundation in various subjects, enrolling in coaching classes becomes an essential decision. Specifically, if you're located near Gangapur Road, you are in luck! Focus Coaching Classes offers specialized NEET coaching classes to enhance your preparation and ensure you grasp the fundamental concepts thoroughly. In this blog post, we will explore the advantages of choosing NEET coaching classes in Gangapur Road.
                </h4>

                <h2>1. Expert Guidance</h2>
                <h4>
                    One of the most significant benefits of joining NEET coaching classes is access to expert faculty. Our instructors at Focus Coaching Classes have extensive experience in their respective subjects: Physics, Chemistry, and Biology. They tailor their teaching techniques to meet each student's unique learning style, ensuring that complex concepts are broken down into understandable lessons.
                </h4>

                <h2>2. Structured Study Plan</h2>
                <h4>
                    Joining NEET coaching classes provides you with a well-structured study plan. Unlike self-study, where you may get sidetracked or overlook essential topics, our coaching program emphasizes a systematic approach. Students are guided on what to study daily, helping them cover their syllabus methodically before the exam. This ensures that all subjects are covered thoroughly.
                </h4>

                <h2>3. Regular Assessments</h2>
                <h4>
                    Regular assessments and mock tests are critical in gauging your readiness for NEET. With NEET coaching classes, you'll receive periodic tests designed to evaluate your knowledge and improve your time management skills. Focus Coaching Classes organizes weekly quizzes and monthly performance reviews, equipping students with the confidence to face the examination.
                </h4>

                <h2>4. Peer Interaction</h2>
                <h4>
                    Studying alongside fellow aspirants creates a dynamic learning environment. By interacting with peers in NEET coaching classes, you can share resources, insights, and tips. This collaboration fosters motivation as students learn from each other's strengths and weaknesses. Our classes located on Gangapur Road attract students from various backgrounds, ensuring a rich educational experience.
                </h4>

                <h2>5. Comprehensive Study Material</h2>
                <h4>
                    Focus Coaching Classes provides students with comprehensive study materials. Our resources are meticulously curated and aligned with the NEET syllabus, covering essential topics as well as previous years' question papers. Our study materials aid in understanding the concepts better and serve as excellent revision tools.
                </h4>

                <h2>6. Time Management Skills</h2>
                <h4>
                    One major reason students perform poorly in competitive exams is inadequate time management during the exam. NEET coaching instills effective time management skills through consistent practice of full-length mock tests. Students learn to strategize their time wisely during the exam, ensuring they answer all questions comprehensively.
                </h4>

                <h2>7. Personalized Attention</h2>
                <h4>
                    Unlike larger institutions where students may feel lost in a crowd, Focus Coaching Classes maintains small batch sizes. This approach enables our instructors to offer personalized attention to each student. You can ask questions, clarify doubts, and receive feedback directly, significantly enhancing your learning experience.
                </h4>

                <h2>8. Confidence Building</h2>
                <h4>
                    Joining NEET coaching classes not only equips you with knowledge but also enhances your confidence. Regular interactions with experts and peers, coupled with rigorous preparation, prepare you to face challenges on the exam day fearlessly.
                </h4>

                <h2>9. Locally Accessible</h2>
                <h4>
                    If you reside on or near Gangapur Road, enrolling in Focus Coaching Classes saves time on travel. Students can spend more time studying rather than commuting, allowing them to focus exclusively on their NEET preparation.
                </h4>

                <h1>Join Focus Coaching Classes Today!</h1>
                <h4>Are you ready to enhance your NEET preparation and embark on your journey towards a successful medical career? Don't miss out on the opportunity to learn from the best faculty in Gangapur Road. Explore More about our courses and how they can equip you for NEET.</h4>
                <h4>Book your Free Demo Class now! Call us at 09920506327 for more details on how to get started.</h4>

                <h1>FAQs</h1>

                <h2>1. What is NEET?</h2>
                <h4>NEET (National Eligibility cum Entrance Test) is an entrance examination in India for students seeking admission into medical colleges.</h4>

                <h2>2. Why should I join NEET coaching classes?</h2>
                <h4>Joining NEET coaching classes offers structured guidance, expert knowledge, personalized attention, and a competitive environment.</h4>

                <h2>3. How can Focus Coaching Classes help with my NEET preparation?</h2>
                <h4>We provide expert faculty, structured study plans, comprehensive study materials, and regular assessments to ensure thorough preparation.</h4>

                <h2>4. How often are classes held?</h2>
                <h4>Classes are conducted regularly, and schedules can be tailored based on student needs to ensure optimum learning.</h4>

                <h2>5. What is the cost of NEET coaching classes in Gangapur Road?</h2>
                <h4>For detailed information on fees and payment options, please contact us at 09920506327.</h4>

            </section>

        </div>
    );
}

export default BlogDetails;
