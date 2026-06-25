import "./ssc10.css";
import ssc10 from "../assets/ssc10.webp";
import Faqssc from "./Faqssc";

export default function SSC10() {
  return (
    <div className="cbse-root">
      {/* Hero Banner */}
      <div className="cbse-hero">
        <h1>Best 10th SSC Coaching Classes in Gangapur Road Nashik</h1>
      </div>

      {/* Breadcrumb */}
      <div className="cbse-breadcrumb">
        <a href="/">Home</a>
        <span>›</span>
        <a href="/courses">courses</a>
        <span>›</span>
        10th ssc classes
      </div>

      {/* Section 1: Intro */}
      <div className="cbse-section">
        <div className="cbse-text-block">
          <h2 className="cbse-heading">10th SSC Classes</h2>
          <p>
            Welcome to Focus Coaching Classes, the premier destination for
            quality education and academic success in Nashik. Situated
            conveniently in the bustling areas of Gangapur Road and Old Gangapur
            Naka, we are committed to guiding students toward excellence in
            their 10th SSC board exams. Our mission is to provide top-tier
            education through experienced teachers, personalized attention, and
            a proven teaching methodology that empowers students to achieve
            their best.
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

        <div className="cbse-image-block">
          <img src={ssc10} alt="Students studying" />
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="cd-root">
        <h3 className="cd-sub-title" style={{ marginTop: "36px" }}>
          Why Choose Focus Coaching Classes for 10th SSC?
        </h3>
        <p className="cd-para">
          We understand that the <strong>10th Standard SSC board exams</strong>{" "}
          are a critical milestone in a student's academic journey. At Focus
          Coaching Classes, we go beyond mere syllabus completion—we focus on
          holistic learning and concept clarity, ensuring your child is
          well-prepared to tackle challenges confidently.
        </p>

        <h4 className="cd-feature-title">
          Key Highlights of Our 10th SSC Course:
        </h4>
        <ol className="cd-list">
          <li>
            <strong>Experienced Teachers:</strong> Our team comprises highly
            qualified and experienced educators who bring years of expertise in
            teaching SSC curriculum. Their innovative teaching methods ensure
            that every student understands the concepts thoroughly.
          </li>
          <li>
            <strong>Small Batch Sizes:</strong> We limit the number of students
            per batch to ensure personalized attention for each child. Our small
            batch sizes foster better teacher-student interaction, enabling us
            to address the unique learning needs of every student.
          </li>
          <li>
            <strong>Comprehensive Curriculum Coverage:</strong> Our curriculum
            is meticulously designed to cover all subjects—Mathematics, Science,
            Social Studies, English, and Marathi/Hindi—in alignment with the{" "}
            <strong>Maharashtra State Board guidelines</strong>. Regular
            assessments and revision sessions further reinforce the learning
            process.
          </li>
          <li>
            <strong>Result-Oriented Methodology:</strong> We believe in a
            structured approach to education. Our teaching methodology includes:
            <ul className="cd-sub-list">
              <li>Daily assignments and practice exercises.</li>
              <li>Regular chapter-wise and full-length tests.</li>
              <li>Detailed performance analysis and feedback.</li>
            </ul>
          </li>
          <li>
            <strong>Supportive Learning Environment:</strong> We create a
            nurturing environment that encourages curiosity, critical thinking,
            and self-confidence. Our classrooms are equipped with modern
            teaching aids to enhance the learning experience.
          </li>
          <li>
            <strong>Parent-Teacher Interaction:</strong> Regular meetings with
            parents keep them updated about their child's progress. We value
            open communication and ensure that parents are actively involved in
            their child's academic journey.
          </li>
        </ol>

        {/* Course Curriculum and Benefits */}
        <h3 className="cd-sub-title" style={{ marginTop: "36px" }}>
          Course Curriculum and Benefits
        </h3>
        <p className="cd-para">
          Our <strong>10th SSC course</strong> is tailored to address the
          academic requirements and challenges of students preparing for the
          Maharashtra State Board examinations.
        </p>

        <h4 className="cd-feature-title">Detailed Curriculum:</h4>
        <ul className="cd-bullet-list">
          <li>
            <strong>Mathematics:</strong> Algebra, Geometry, and problem-solving
            techniques.
          </li>
          <li>
            <strong>Science:</strong> Physics, Chemistry, and Biology concepts
            explained with practical examples.
          </li>
          <li>
            <strong>Social Studies:</strong> History, Civics, Geography, and
            Economics with an emphasis on map work and analytical skills.
          </li>
          <li>
            <strong>Languages:</strong> Comprehensive training in English,
            Marathi, and Hindi to build linguistic proficiency.
          </li>
        </ul>

        <h4 className="cd-feature-title">
          Benefits of Enrolling in Our 10th SSC Course:
        </h4>
        <ul className="cd-bullet-list">
          <li>
            Improved conceptual clarity through detailed explanations and
            real-life examples.
          </li>
          <li>Enhanced problem-solving and analytical skills.</li>
          <li>
            Better time management during exams with mock tests and time-bound
            practice.
          </li>
          <li>
            Increased confidence and reduced exam anxiety through regular
            practice and feedback.
          </li>
        </ul>

        {/* Location Advantage */}
        <h3 className="cd-sub-title" style={{ marginTop: "36px" }}>
          Location Advantage: Gangapur Road and Old Gangapur Naka
        </h3>
        <p className="cd-para">
          Conveniently located at <strong>Gangapur Road</strong> and{" "}
          <strong>Old Gangapur Naka</strong>, Focus Coaching Classes is easily
          accessible for students across Nashik. Our classrooms are designed to
          provide a comfortable and distraction-free learning environment.
        </p>
        <p className="cd-para">
          For parents in nearby areas like <strong>Canada Corner</strong>, we
          are just a short distance away, making us the ideal choice for{" "}
          <strong>10th SSC coaching classes in Nashik</strong>.
        </p>

        <p className="cd-para" style={{ marginTop: "24px" }}>
          Take the first step toward securing your child's future today! Book a{" "}
          <strong>Free Demo Session</strong> and experience the Focus Coaching
          Classes difference.
        </p>
        <ul className="cd-bullet-list">
          <li>
            <strong>Contact Numbers:</strong>
            <ul className="cd-sub-list">
              <li>
                <a href="tel:09920506327" className="cd-link">
                  09920506327
                </a>
              </li>
            </ul>
          </li>
          <li>
            <strong>Contact Link:</strong>{" "}
            <a href="/contact" className="cd-link">
              Book a Free Demo
            </a>
          </li>
        </ul>
        <p className="cd-para">
          Let us partner with you in shaping a bright future for your child.
        </p>

        {/* Tags */}
        <h3 className="cd-sub-title" style={{ marginTop: "36px" }}>
          Tags
        </h3>
        <p className="cd-para">
          <a href="#" className="cd-link">
            10th ssc coaching classes
          </a>
        </p>

        {/* Locations */}
        <h3 className="cd-sub-title" style={{ marginTop: "36px" }}>
          Locations
        </h3>
        <p className="cd-para">
          <a href="#" className="cd-link">
            gangapur road nashik
          </a>
        </p>

        <Faqssc />
      </div>

      
    </div>
  );
}
