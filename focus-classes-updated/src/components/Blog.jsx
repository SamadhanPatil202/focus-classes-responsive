import React from "react";
import "./Blog.css";
import b1 from "../assets/b1.webp";
import b2 from "../assets/b2.webp";
import b3 from "../assets/b3.webp";
import b4 from "../assets/b4.webp";
import b5 from "../assets/b5.webp";
import b6 from "../assets/b6.webp";
import b7 from "../assets/b7.webp";
import b8 from "../assets/b8.webp";
import b9 from "../assets/b9.webp";
import b10 from "../assets/b10.webp";
import b11 from "../assets/b11.webp";
import b12 from "../assets/b12.webp";
import b13 from "../assets/b13.webp";
import b14 from "../assets/b14.webp";
import b15 from "../assets/b15.webp";
import b16 from "../assets/b16.webp";
import b17 from "../assets/b17.webp";
import { Link } from "react-router-dom";

const blogs = [
  {
    img: b1,
    title: "10th CBSE Coaching Classes near Gangapur Road Nashik",
    desc: "This article provides a detailed guide for parents and students seeking coaching classes.",
    link: "/10th-cbse",
  },
  {
    img: b2,
    title: "JEE Coaching Classes near Gangapur Road Nashik",
    desc: "If you are looking for reliable and result-oriented JEE coaching classes.",
    link: "/jee",
  },
  {
    img: b3,
    title: "Top 9th CBSE Classes in Old Gangapur Naka Nashik",
    desc: "Are you searching for the best coaching classes for CBSE students.",
    link: "/9th-cbse",
  },
  {
    img: b4,
    title: "MHT-CET Coaching Classes near Gangapur Road Nashik",
    desc: "Looking for reliable CET coaching classes near Gangapur Road Nashik.",
    link: "/mht-cet",
  },
  {
    img: b5,
    title: "9th SSC Coaching Classes near Gangapur Road Nashik",
    desc: "Focus Coaching Classes offers the best 9th SSC coaching with experienced teachers.",
    link: "/9th-ssc",
  },
  {
    img: b6,
    title: "NEET Coaching Classes near Gangapur Road Nashik",
    desc: "Looking for reliable NEET coaching classes near Gangapur Road Nashik.",
    link: "/neet",
  },
  {
    img: b7,
    title: "Top NEET Classes in Canada Corner Nashik",
    desc: "NEET is the gateway for aspiring medical students to build a medical career.",
    link: "/neet",
  },
  {
    img: b8,
    title: "Top JEE Coaching Classes in Canada Corner Nashik",
    desc: "JEE is one of the most competitive exams in India for engineering students.",
    link: "/jee",
  },
  {
    img: b9,
    title: "Top 10th SSC Classes in Old Gangapur Naka Nashik",
    desc: "The 10th SSC exam is an important milestone in a student's academic journey.",
    link: "/10th-ssc",
  },
  {
    img: b10,
    title: "Top JEE Coaching Classes in Canada Corner Nashik",
    desc: "JEE (Joint Entrance Examination) is one of the most competitive exams in India, serving as the ga..",
    link: "/jee",
  },
  {
    img: b11,
    title: "Top 10th SSC Classes in Old Gangapur Naka Nashik",
    desc: "The 10th CBSE board exam is a significant milestone in a student’s academic journey. With compet..",
    link: "/10th-ssc",
  },
  {
    img: b12,
    title: "Top JEE Classes in Old Gangapur Naka, Nashik – Best JEE Coaching",
    desc: "Engineering aspirants aiming for admission to prestigious IITs, NITs, and other top institutes und...",
    link: "/jee",
  },
  {
    img: b13,
    title: "Top 9th CBSE Classes in Canada Corner Nashik",
    desc: "Education plays a crucial role in shaping a student’s future, and class 9 is a significant milestone. It ...",
    link: "/9th-cbse",
  },
  {
    img: b14,
    title: "Top NEET Classes in Old Gangapur Naka Nashik",
    desc: "The National Eligibility cum Entrance Test (NEET) is the gateway to a medical career, requiring rigorous preparation and...",
    link: "/neet",
  },
  {
    img: b15,
    title: "Top 10th SSC Classes in Old Gangapur Naka Nashik",
    desc: "The 10th SSC exam is a crucial milestone in a student’s academic journey. Proper guidance, quality education, and ...",
    link: "/10th-ssc",
  },
  {
    img: b16,
    title: "Top 10th CBSE Classes in Canada Corner Nashik | Expert Coaching",
    desc: "Choosing the right coaching class for 10th CBSE students in Canada Corner, Nashik can be overwhelming. The...",
    link: "/10th-cbse",
  },
  {
    img: b17,
    title: "Top 10th SSC Classes in Canada Corner Nashik",
    desc: "The 10th SSC board exams are a crucial milestone in every student’s academic journey. With...",
    link: "/10th-ssc",
  },
];

function Blog() {
  return (
    <div className="blog-page">
      <section className="blog-hero">
        <h1>Our Blogs</h1>
      </section>

      <div className="breadcrumb">
        <span>Resources</span> › <span>Blogs</span>
      </div>

      <section className="blog-container">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.img} alt={blog.title} />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>
              <Link
                to={blog.link}
                className="blog-read-more"
                onClick={() => window.scrollTo(0, 0)}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Blog;
