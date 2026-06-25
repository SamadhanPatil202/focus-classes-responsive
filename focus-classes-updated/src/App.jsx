import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";
import Cbse10 from "./components/Cbse10";
import SSC10 from "./components/SSC10";
import NinthCBSE from "./components/NinthCBSE (1)";
import NinthSSC from "./components/NinthSSC";
import JeeCourse from "./components/JeeCourse";
import MHTCETPage from "./components/MHTCETPage";
import CourseDetails from "./components/CourseDetails";
import NeetClasses from "./components/NeetClasses";
import LatestUpdates from "./components/LatestUpdates";
import WhatsAppButton from "./components/WhatsAppButton";
import OurCourses from "./components/OurCourses";
import CBSEFutureLeaders from "./components/CBSEFutureLeaders";
import NeetBlog from "./components/NeetBlog";
import BlogDetails from "./components/BlogDetails";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<ContactUs />} />

        <Route path="/blogs" element={<Blog />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/latestupdates" element={<LatestUpdates />} />

        <Route path="/10th-cbse" element={<Cbse10 />} />

        <Route path="/10th-ssc" element={<SSC10 />} />

        <Route path="/9th-cbse" element={<NinthCBSE />} />

        <Route path="/9th-ssc" element={<NinthSSC />} />

        <Route path="/jee" element={<JeeCourse />} />

        <Route path="/mht-cet" element={<MHTCETPage />} />

        <Route path="/course" element={<CourseDetails />} />

        <Route path="/neet" element={<NeetClasses />} />

        <Route path="/services" element={<OurCourses />} />

        <Route
          path="/latest-update/cbse-future-leaders"
          element={<CBSEFutureLeaders />}
        />

        <Route path="/latest-update/neet" element={<NeetBlog />} />

        <Route
          path="/latest-update/neet-preparation"
          element={<BlogDetails />}
        />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
