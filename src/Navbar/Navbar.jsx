import React, { useState } from "react";
import "./Navbar.css"; // Sening Navbar CSS
import image from "../assets/image.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [className, setClassName] = useState("");
  const [showPassword, setShowPassword] = useState(false); // yangi state

  const handleLogin = () => {
    if (firstName && lastName && password && className) {
      alert(
        `Foydalanuvchi ma'lumotlari:\nIsm: ${firstName}\nFamiliya: ${lastName}\nParol: ${password}\nSinf: ${className}`
      );
      setIsModalOpen(false);
      setShowPassword(false); // modal yopilganda passwordni yashirish
    } else {
      alert("Iltimos, barcha maydonlarni to'ldiring!");
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={image} alt="logo" />
        </div>
        <nav>
          <ul>
            <li>Bosh sahifa</li>
            <li>Oquvchilar va Oqituvchilar</li>
            <li>Biz haqimizda</li>
            <li>Aloqa</li>
          </ul>
        </nav>

        <div className="login">
          <button onClick={() => setIsModalOpen(true)}>Log In</button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Log In</h2>
            <input
              type="text"
              placeholder="Ismingiz"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Familiyangiz"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {/* Password wrapper */}
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Parol"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <input
              type="text"
              placeholder="Sinfingiz"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
            />
            <div className="modal-buttons">
              <button className="login-btn" onClick={handleLogin}>
                Kirish
              </button>
              <button
                className="cancel-btn"
                onClick={() => setIsModalOpen(false)}
              >
                Bekor qilish
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
