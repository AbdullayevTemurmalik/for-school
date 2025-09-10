import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Banner from "./Banner/Banner";
import Main from "./Main/Main"; // Bu qatorni to'g'rilang

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
