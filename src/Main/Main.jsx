import React from "react";
import "./Main.css";

// Rasmlarni import qilamiz
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";

const Main = () => {
  return (
    <main className="main-container">
      {/* 1-bo'lim: Rasm chapda, matn o'ngda */}
      <section className="main-section">
        <div className="section-content">
          <img src={image1} alt="Rasm 1" className="section-image" />
          <div className="text-content">
            <h1>1-Bo'lim sarlavhasi</h1>
            <p>
              Bu yerda birinchi boʻlimga oid maʼlumotlar joylashgan. Bu boʻlimda
              rasm matndan chap tomonda turadi. Siz bu matnni oʻzingizga kerakli
              maʼlumotlar bilan almashtirishingiz mumkin.
            </p>
          </div>
        </div>
      </section>

      {/* 2-bo'lim: Rasm o'ngda, matn chapda */}
      <section className="main-section">
        <div className="section-content reverse">
          <img src={image2} alt="Rasm 2" className="section-image" />
          <div className="text-content">
            <h1>2-Bo'lim sarlavhasi</h1>
            <p>
              Bu yerda ikkinchi boʻlimga oid maʼlumotlar joylashgan. Bu boʻlimda
              rasm matndan oʻng tomonda joylashgan boʻladi.
            </p>
          </div>
        </div>
      </section>

      {/* 3-bo'lim: Rasm chapda, matn o'ngda */}
      <section className="main-section">
        <div className="section-content">
          <img src={image3} alt="Rasm 3" className="section-image" />
          <div className="text-content">
            <h1>3-Bo'lim sarlavhasi</h1>
            <p>
              Bu yerda uchinchi boʻlimga oid maʼlumotlar bor. Rasm yana chap
              tomonga qaytadi. Dizayn tartibi har bir boʻlimda almashib turadi.
            </p>
          </div>
        </div>
      </section>

      {/* 4-bo'lim: Rasm o'ngda, matn chapda */}
      <section className="main-section">
        <div className="section-content reverse">
          <img src={image4} alt="Rasm 4" className="section-image" />
          <div className="text-content">
            <h1>4-Bo'lim sarlavhasi</h1>
            <p>
              Bu yerda to'rtinchi boʻlimga oid maʼlumotlar bor. Rasm yana oʻng
              tomonda joylashgan.
            </p>
          </div>
        </div>
      </section>

      {/* 5-bo'lim: Rasm chapda, matn o'ngda */}
      <section className="main-section">
        <div className="section-content">
          <img src={image5} alt="Rasm 5" className="section-image" />
          <div className="text-content">
            <h1>5-Bo'lim sarlavhasi</h1>
            <p>
              Bu yerda beshinchi boʻlimga oid maʼlumotlar bor. Rasm yana chap
              tomonda joylashgan.
            </p>
          </div>
        </div>
      </section>

      {/* 6-bo'lim: Rasm o'ngda, matn chapda */}
      <section className="main-section">
        <div className="section-content reverse">
          <img src={image6} alt="Rasm 6" className="section-image" />
          <div className="text-content">
            <h1>6-Bo'lim sarlavhasi</h1>
            <p>
              Bu yerda oltinchi boʻlimga oid maʼlumotlar bor. Bu boʻlimda rasm
              yana oʻng tomonda joylashgan.
            </p>
          </div>
        </div>
      </section>
      {/* 7-bo'lim: Rasm o'ngda, matn chapda */}
      <section className="main-section">
        <div className="section-content reverse">
          
          <div className="text-content">
            <h1>7-Bo'lim sarlavhasi</h1>
            <p>
              Bu yerda oltinchi boʻlimga oid maʼlumotlar bor. Bu boʻlimda rasm
              yana oʻng tomonda joylashgan.
            </p>
          </div>
          <img src={image6} alt="Rasm 6" className="section-image" />
        </div>
      </section>
      {/* 8-bo'lim: Rasm o'ngda, matn chapda */}
      <section className="main-section">
        <div className="section-content reverse">
          <img src={image6} alt="Rasm 6" className="section-image" />
          <div className="text-content">
            <h1>8-Bo'lim sarlavhasi</h1>
            <p>
              Bu yerda oltinchi boʻlimga oid maʼlumotlar bor. Bu boʻlimda rasm
              yana oʻng tomonda joylashgan.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
