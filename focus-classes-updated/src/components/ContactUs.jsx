import { useState } from "react";
import "./contact.css";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", contact: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [waModal, setWaModal] = useState(false);
  const [waForm, setWaForm] = useState({ number: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleWaChange = (e) => setWaForm({ ...waForm, [e.target.name]: e.target.value });

  const handleWaSend = () => {
    if (!waForm.number) return;
    const url = `https://wa.me/${waForm.number.replace(/\D/g, "")}?text=${encodeURIComponent(waForm.message)}`;
    window.open(url, "_blank");
    setWaModal(false);
    setWaForm({ number: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) { alert("Name is required"); return; }
    if (!/^[0-9]{10}$/.test(form.contact)) { alert("Please enter a valid 10-digit mobile number"); return; }
    if (!form.email.trim()) { alert("Email is required"); return; }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)) {
      alert("Please enter a valid email");
      return;
    }
    if (!form.message.trim()) { alert("Message is required"); return; }
    try {
      const response = await fetch("http://localhost:8080/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          mobile: form.contact,
          email: form.email,
          message: form.message,
          formType: "CONTACT_US",
        }),
      });
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setForm({ name: "", contact: "", email: "", message: "" });
      } else {
        alert("Failed to submit form");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Backend connection failed");
    }
  };

  return (
    <div className="cp-root">

      <div className="cp-hero">
        <h1>Contact Us</h1>
      </div>

      <div className="cp-breadcrumb">
        <a href="/">Home</a>
        <span>›</span>
        Contact
      </div>

      <div className="cp-main">

        <div className="cp-card cp-map-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7127.046907243439!2d73.76881407500255!3d20.00759408139837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb905d9bd853%3A0xe8ce75b0f1b7cefc!2sFOCUS%20Coaching%20Classes!5e1!3m2!1sen!2sin!4v1780727739731!5m2!1sen!2sin"
            title="Focus Coaching Classes Location"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="cp-info">
            <h2>Focus Coaching Classes</h2>
            <p>
              Focus Coaching Classes in Nashik offers top-quality coaching for 9th and 10th CBSE
              and SSC along with IIT JEE, NEET, and MHT CET preparation. Located at Shraddha
              Sankul, Gangapur Road, we provide expert guidance, concept clarity, and
              result-oriented teaching. Call 09920506327 to secure your admission today!
            </p>

            <div className="cp-detail">
              <svg className="cp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Shraddha Sankul, Gangapur Rd, Shreerang Nagar, Nashik, Maharashtra 422013, India</span>
            </div>

            <div className="cp-detail">
              <svg className="cp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.58a16 16 0 0 0 6.08 6.08l.93-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>09920506327</span>
            </div>

            <div className="cp-detail">
              <svg className="cp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>info@focuscoachingclasses.in</span>
            </div>

            <button className="cp-wa" aria-label="Chat on WhatsApp" onClick={() => setWaModal(true)}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
            </button>

            <div className="cp-map-btns">
              <a href="https://maps.google.com/?q=Focus+Coaching+Classes+Nashik" target="_blank" rel="noopener noreferrer" className="cp-map-btn outline">
                View on Google Maps
              </a>
              <a href="https://maps.google.com/maps/dir//Focus+Coaching+Classes+Nashik" target="_blank" rel="noopener noreferrer" className="cp-map-btn filled">
                Get Directions
              </a>
            </div>

          </div>
        </div>

        <div className="cp-card cp-form-card">
          <h2>Talk to us</h2>

          <div className="cp-field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Name" value={form.name} onChange={handleChange} />
          </div>

          <div className="cp-field">
            <label htmlFor="contact">Contact</label>
            <input id="contact" name="contact" type="tel" placeholder="Contact" value={form.contact} onChange={handleChange} />
          </div>

          <div className="cp-field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
          </div>

          <div className="cp-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Enter your message" value={form.message} onChange={handleChange} />
          </div>

          <button className="cp-submit" type="button" onClick={handleSubmit}>
            Talk to us
          </button>

          {submitted && (
            <div className="cp-success">
              Message sent! We will get back to you soon.
            </div>
          )}
        </div>

      </div>

      {waModal && (
        <div className="wa-overlay" onClick={() => setWaModal(false)}>
          <div className="wa-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Send WhatsApp Message</h3>
            <input className="wa-input" type="tel" name="number" placeholder="Enter WhatsApp number" value={waForm.number} onChange={handleWaChange} />
            <textarea className="wa-textarea" name="message" placeholder="Enter message" value={waForm.message} onChange={handleWaChange} />
            <div className="wa-btns">
              <button className="wa-btn-send" onClick={handleWaSend}>Send Message</button>
              <button className="wa-btn-close" onClick={() => setWaModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}