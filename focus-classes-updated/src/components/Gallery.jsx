import React from "react";
import "./Gallery.css";

const galleryImages = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",

  "https://images.unsplash.com/photo-1513258496099-48168024aec0",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
  "https://images.unsplash.com/photo-1503676382389-4809596d5290",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754",
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846",
];

function Gallery() {
  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <h1>Our Gallery</h1>
      </section>

      <div className="gallery-breadcrumb">
        <span>Resources</span>
        <span>›</span>
        <span>Gallery</span>
      </div>

      <section className="gallery-section">
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div className="gallery-card" key={index}>
              <img
                src={`${image}?w=800&auto=format&fit=crop`}
                alt={`Gallery ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Gallery;