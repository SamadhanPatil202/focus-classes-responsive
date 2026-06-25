import "./LatestUpdates.css";

import u1 from "../assets/u1.webp";
import u2 from "../assets/u2.webp";
import u3 from "../assets/u3.webp";
import u4 from "../assets/u4.webp";
import u5 from "../assets/u5.webp";
import u6 from "../assets/u6.webp";
import u7 from "../assets/u7.webp";
import u8 from "../assets/u8.webp";
import u9 from "../assets/u9.webp";
import u10 from "../assets/u10.webp";
import u11 from "../assets/u11.webp";
import u12 from "../assets/u12.webp";
import u13 from "../assets/u13.webp";
import u14 from "../assets/u14.webp";
import u15 from "../assets/u15.webp";
import u16 from "../assets/u16.webp";
import { Link } from "react-router-dom";

const updates = [
  {
    image: u5,
    title:
      "How CBSE Classes Near Gangapur Road Are Shaping Future Leaders and Innovators",
    desc: "In today's fast-paced world, education plays a crucial role in building capable leaders and innovative thinkers. ",
    link: "/latest-update/cbse-future-leaders",
  },
  {
    image: u1,
    title: "Maximize Your NEET Score: from Experts at Gangapur Road Classes",
    desc: "Maximize Your NEET Score: Insights from Experts at Gangapur Road Classes Preparing for NEET can be ...",
    link: "/latest-update/neet",
  },

  {
    image: u3,
    title:
      "Maximize Your NEET Preparation: Benefits of Joining Classes on Gangapur Road",
    desc: "Maximize Your NEET Preparation: Benefits of Joining Classes on Gangapur Road",
    link: "/latest-update/neet-preparation",
  },
  
  {
    image: u2,
    title:
      "Maximize Your NEET Score: Proven Strategies from Gangapur Road Coaching Centers",
    desc: "Maximize Your NEET Score: Proven Strategies from Gangapur Road Coaching Centers..",
  },
  {
    image: u4,
    title:
      "Affordable NEET Coaching Options Near Gangapur Road: Quality Education Within Reach",
    desc: "Are you a medical aspirant searching for neet coaching classes near gangapur road? Look no further! At Focus Coaching Classes",
  },

  {
    image: u6,
    title:
      "The Benefits of Enrolling in CBSE Classes Near Gangapur Road: A Parent's Perspective",
    desc: "As a parent, ensuring your child's educational success is likely one of your top priorities. With numerous options available for schooling...",
  },
  {
    image: u7,
    title:
      "Student Success Stories: Transformative Experiences in NEET Classes at Gangapur Road",
    desc: "At Focus Coaching Classes, we believe every student has the potential for greatness. Our NEET classes..",
  },
  {
    image: u8,
    title:
      "Success Stories: How CBSE Classes Near Gangapur Road Helped Students Achieve Their Goals..",
    desc: "In today’s competitive environment, a solid foundation is crucial for academic success. Our CBSE classes near ..",
  },
  {
    image: u9,
    title:
      "The Benefits of Enrolling in NEET Coaching on Gangapur Road for Aspiring Doctors",
    desc: "As a parent, ensuring your child's educational success is likely one of your top priorities. With numerous options a...",
  },
  {
    image: u10,
    title:
      "Discover the Best CBSE Tuition Classes Near Gangapur Road for Academic Excellence.",
    desc: "If you're searching for the best CBSE tuition classes near Gangapur Road, Focus Coaching Classes is your premier choice.",
  },
  {
    image: u11,
    title: "Success Stories: How CBSE Classes Near Gangapur Road Helped...",
    desc: "At Focus Coaching Classes, we pride ourselves on supporting students in achieving their academic goa...",
  },
  {
    image: u12,
    title:
      "Discover the Best CBSE Tuition Classes Near Gangapur Road for Academic Excellence.",
    desc: "If you're searching for the best CBSE tuition classes near Gangapur Road, Focus Coaching Classes is your premier choice. With a proven track record",
  },
  {
    image: u13,
    title: "Focus Coaching Classes – Your Pathway to IIT Success in Nashik",
    desc: "Focus Coaching Classes – Your Pathway to IIT Success in Nashik : Dreaming of cracking IIT...",
  },
  {
    image: u14,
    title:
      "How to Choose the Right CBSE Coaching Class Near Gangapur Road, Nashik",
    desc: "At Focus Coaching Classes, we pride ourselves on supporting students in achieving their academic goa...",
  },
  {
    image: u15,
    title:
      "The Future of Medical Preparation: Exploring Online NEET Classes in Gangapur Road",
    desc: "As the demand for quality medical education continues to soar, aspiring medical students are seeking effective preparation methods to ace the Nationa..",
  },
  {
    image: u16,
    title: "Admissions Open for 26-27.",
    desc: "Admissions are now open for 26-27 at your most trusted Focus Coaching Classes Nashik...",
  },
];

function LatestUpdates() {
  return (
    <div className="latest-page">
      <section className="latest-hero">
        <h1>Latest Updates</h1>
      </section>

      <div className="latest-breadcrumb">
        <span>Resources</span>
        <span>›</span>
        <span>Latest Updates</span>
      </div>

      <div className="latest-container">
        {updates.map((item, index) => (
          <div className="latest-card" key={index}>
            <img src={item.image} alt={item.title} />

            <div className="latest-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              {item.link && (
                <Link
                  to={item.link}
                  className="latest-read-more"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Read More
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestUpdates;
