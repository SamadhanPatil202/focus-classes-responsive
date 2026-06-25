import React from "react";
import { Link } from "react-router-dom";
import "./OurCourses.css";

import cbse10Img from "../assets/cbse10.webp";
import ssc10Img from "../assets/ssc10.webp";
import cbseStudentImg from "../assets/cbse-student.jpg";
import neetStudentImg from "../assets/neet-student.jpg";
import a1Img from "../assets/a1.webp";
import a2Img from "../assets/a2.webp";
import b1Img from "../assets/b1.webp";
import b2Img from "../assets/b2.webp";

const courses = [
  {
    title: "JEE Classes",
    desc: "Located conveniently on Gangapur Road and Old Gangapur Naka in Nashik, Focus Coaching Classes is the ultimate destination for aspiring engineers. With years of expertise and a commitment to excellence...",
    img: a1Img,
    link: "/jee",
  },
  {
    title: "10th CBSE Classes",
    desc: "Welcome to Focus Coaching Classes – Your Pathway to Excellence in 10th CBSE Education. At Focus Coaching Classes, we are committed to providing high-quality education to students who aim to excel in t...",
    img: cbse10Img,
    link: "/10th-cbse",
  },
  {
    title: "9th SSC Classes",
    desc: "Welcome to Focus Coaching Classes: Your Partner in Academic Excellence. Located in the heart of Nashik on Gangapur Road and Old Gangapur Road, Focus Coaching Classes is dedicated to nurturing young mi...",
    img: cbseStudentImg,
    link: "/9th-ssc",
  },
  {
    title: "10th SSC Classes",
    desc: "Welcome to Focus Coaching Classes, the premier destination for quality education and academic success in Nashik. Situated conveniently in the bustling areas of Gangapur Road and Old Gangapur Naka, we ...",
    img: ssc10Img,
    link: "/10th-ssc",
  },
  {
    title: "9th CBSE Classes",
    desc: "At Focus Coaching Classes, we are committed to providing top-tier educational support for students aspiring to excel in their 9th CBSE examinations. Located conveniently in Gangapur Road and Old Ganga...",
    img: b1Img,
    link: "/9th-cbse",
  },
  {
    title: "MHT CET Classes",
    desc: "Welcome to Focus Coaching Classes, one of the most trusted academic institutions for MHT-CET preparation in Gangapur Road, Nashik. At Focus, our mission is simple: To empower students with knowledge, ...",
    img: b2Img,
    link: "/mht-cet",
  },
  {
    title: "CBSE 10th Standard",
    desc: "Vidora in Nashik offers focused CBSE 10th coaching with expert teaching, concept clarity, regular tests, and personal attention to help students achieve excellent board exam results.",
    img: a2Img,
    link: "/course",
  },
  {
    title: "Neet Classes",
    desc: "Looking for the best NEET coaching classes at Gangapur Road Nashik? We provide expert guidance, structured learning, and result-oriented preparation for students aiming to crack the NEET exam with top...",
    img: neetStudentImg,
    link: "/neet",
  },
];

function OurCourses() {
  return (
    <div className="our-courses-page">
      {/* Hero Banner */}
      <section className="courses-hero">
        <h1>Our Courses</h1>
      </section>

      {/* Breadcrumb */}
      <div className="courses-breadcrumb">
        <Link to="/">Home</Link> › <span>Our Courses</span>
      </div>

      {/* Courses Grid */}
      <section className="courses-grid-section">
        <div className="courses-grid">
          {courses.map((course, i) => (
            <Link to={course.link} key={i} className="course-card">
              <div className="course-card-img">
                <img src={course.img} alt={course.title} />
              </div>
              <div className="course-card-body">
                <h3>{course.title}</h3>
                <p>{course.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default OurCourses;
