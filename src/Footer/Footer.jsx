import React from "react";
import "./Footer.css"; // CSS alohida yozamiz
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h2>Namangan 3-Maktab</h2>
          <p>Kelajak sari birgalikda!</p>
        </div>
        <div className="footer-links">
          <h4>Tezkor havolalar</h4>
          <ul>
            <li><a href="#">Bosh sahifa</a></li>
            <li><a href="#">O‘quvchilar va O‘qituvchilar</a></li>
            <li><a href="#">Biz haqimizda</a></li>
            <li><a href="#">Aloqa</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Kontakt</h4>
          <p><FaLocationDot className='falocation' /> Namangan shahri, 3-Maktab</p>
          <p><FaPhoneAlt className='falocation'  /> +998 99 977 11 03</p>
          <p><FaPhoneAlt className='falocation'  />  +998 69 977 11 03</p>
          <p> <MdSchool className='falocation' /> 3-school.N.SH.uz </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Namangan 3-Maktab. Barcha huquqlar himoyalangan.</p>
      </div>
    </footer>
  );
};

export default Footer;
