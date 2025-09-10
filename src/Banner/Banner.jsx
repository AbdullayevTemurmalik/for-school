import React, { useEffect, useState } from "react";
import "./Banner.css";

// Rasmlarni to'g'ri import qilamiz
import bannerImage1 from "./Images/image1.jpg";
import bannerImage2 from "./Images/image2.jpg";
import bannerImage3 from "./Images/image3.jpg";

const Banner = () => {
  const slides = [
    {
      src: bannerImage1,
      title: "Namangan 3-Maktab",
      subtitle: "Kelajak sari birgalikda",
    },
    {
      src: bannerImage2,
      title: "O‘quvchilarimiz",
      subtitle: "Bilim va fidoyilik",
    },
    {
      src: bannerImage3,
      title: "Faoliyat",
      subtitle: "Sport va san'at",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="banner">
      <div
        className="banner-slides"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="banner-slide"
            style={{ backgroundImage: `url(${slide.src})` }}
          >
            <div className="banner-overlay" />
            <div className="banner-content">
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="banner-dots">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`dot ${i === index ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
