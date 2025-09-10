import React, { useState } from "react";
import "./Navbar.css"; // Sening Navbar CSS
import image from "../assets/image.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Navbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false); // Sign In uchun yangi state

  const [loginFirstName, setLoginFirstName] = useState("");
  const [loginLastName, setLoginLastName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginClassName, setLoginClassName] = useState("");

  const [signInFirstName, setSignInFirstName] = useState("");
  const [signInLastName, setSignInLastName] = useState("");
  const [signInEmail, setSignInEmail] = useState(""); // Sign In uchun email
  const [signInPassword, setSignInPassword] = useState("");
  const [signInConfirmPassword, setSignInConfirmPassword] = useState(""); // Parolni tasdiqlash

  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignInPassword, setShowSignInPassword] = useState(false);

  const handleLogin = () => {
    if (loginFirstName && loginLastName && loginPassword && loginClassName) {
      alert(
        `Foydalanuvchi ma'lumotlari:\nIsm: ${loginFirstName}\nFamiliya: ${loginLastName}\nParol: ${loginPassword}\nSinf: ${loginClassName}`
      );
      setIsLoginModalOpen(false);
      setShowLoginPassword(false);
    } else {
      alert("Iltimos, barcha maydonlarni to'ldiring!");
    }
  };

  const handleSignIn = () => {
    if (
      signInFirstName &&
      signInLastName &&
      signInEmail &&
      signInPassword &&
      signInConfirmPassword
    ) {
      if (signInPassword !== signInConfirmPassword) {
        alert("Parollar mos kelmadi. Iltimos, qayta kiriting.");
        return;
      }
      alert(
        `Ro'yxatdan o'tish ma'lumotlari:\nIsm: ${signInFirstName}\nFamiliya: ${signInLastName}\nEmail: ${signInEmail}\nParol: ${signInPassword}`
      );
      setIsSignInModalOpen(false);
      setShowSignInPassword(false);
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

        <div className="login-buttons">
          <button onClick={() => setIsLoginModalOpen(true)}>Log In</button>
          <button onClick={() => setIsSignInModalOpen(true)}>
            Sign In
          </button>{" "}
          {/* Sign In tugmasi */}
        </div>
      </div>

      {/* Log In Modal */}
      {isLoginModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Log In</h2>
            <input
              type="text"
              placeholder="Ismingiz"
              value={loginFirstName}
              onChange={(e) => setLoginFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Familiyangiz"
              value={loginLastName}
              onChange={(e) => setLoginLastName(e.target.value)}
            />
            <div className="password-wrapper">
              <input
                type={showLoginPassword ? "text" : "password"}
                placeholder="Parol"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <span
                className="password-toggle"
                onClick={() => setShowLoginPassword(!showLoginPassword)}
              >
                {showLoginPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <input
              type="text"
              placeholder="Sinfingiz"
              value={loginClassName}
              onChange={(e) => setLoginClassName(e.target.value)}
            />
            <div className="modal-buttons">
              <button className="login-btn" onClick={handleLogin}>
                Kirish
              </button>
              <button
                className="cancel-btn"
                onClick={() => setIsLoginModalOpen(false)}
              >
                Bekor qilish
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sign In Modal (Yangi modal) */}
      {isSignInModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Ro'yxatdan o'tish</h2>
            <input
              type="text"
              placeholder="Ismingiz"
              value={signInFirstName}
              onChange={(e) => setSignInFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Familiyangiz"
              value={signInLastName}
              onChange={(e) => setSignInLastName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Elektron pochta"
              value={signInEmail}
              onChange={(e) => setSignInEmail(e.target.value)}
            />
            <div className="password-wrapper">
              <input
                type={showSignInPassword ? "text" : "password"}
                placeholder="Parol"
                value={signInPassword}
                onChange={(e) => setSignInPassword(e.target.value)}
              />
              <span
                className="password-toggle"
                onClick={() => setShowSignInPassword(!showSignInPassword)}
              >
                {showSignInPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <input
              type="password"
              placeholder="Parolni tasdiqlash"
              value={signInConfirmPassword}
              onChange={(e) => setSignInConfirmPassword(e.target.value)}
            />
            <div className="modal-buttons">
              <button className="login-btn" onClick={handleSignIn}>
                Ro'yxatdan o'tish
              </button>
              <button
                className="cancel-btn"
                onClick={() => setIsSignInModalOpen(false)}
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
