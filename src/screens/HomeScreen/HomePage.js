import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import "./HomePage.css";
import FeedbackForm from "../../components/feedback/FeedBackForm";

function HomePage(props) {
  return (
    <div className="homepage-container" style={{ marginTop: "100px" }}>
      <header className="header">
        <h1 className="gradient-text">
          Chào mừng đến với Dịch Vụ Định Giá Ô Tô
        </h1>
        <Carousel
          autoPlay
          infiniteLoop
          interval={3000}
          showThumbs={false}
          showStatus={false}
          className="carousel-banner"
        >
          <div>
            <img src="/assets/bn11.png" alt="Banner 1" />
          </div>
          <div>
            <img src="/assets/bn12.png" alt="Banner 2" />
          </div>
          <div>
            <img src="/assets/bn13.png" alt="Banner 3" />
          </div>
          <div>
            <img src="/assets/bn14.png" alt="Banner 4" />
          </div>
        </Carousel>
      </header>
      <section className="valuation-info"></section>
      <section className="car-gallery">
        <div className="car-item">
          <img src="/assets/Bentley.png" alt="Bentley" className="car-image" />
          <h3>Bentley</h3>
        </div>
        <div className="car-item">
          <img
            src="/assets/Mercedes.png"
            alt="Mercedes"
            className="car-image"
          />
          <h3>Mercedes</h3>
        </div>
        <div className="car-item">
          <img src="/assets/Toyota.png" alt="Toyota" className="car-image" />
          <h3>Toyota</h3>
        </div>
        <div className="car-item">
          <img src="/assets/Huyndai.png" alt="Huyndai" className="car-image" />
          <h3>Huyndai</h3>
        </div>
        <div className="car-item">
          <img src="/assets/Audi.png" alt="Audi" className="car-image" />
          <h3>Audi</h3>
        </div>
        <div className="car-item">
          <img src="/assets/BMW.png" alt="BMW" className="car-image" />
          <h3>BMW</h3>
        </div>
        <div className="car-item">
          <img
            src="/assets/RollsRoyce.png"
            alt="Rolls Royce"
            className="car-image"
          />
          <h3>Rolls Royce</h3>
        </div>
        <div className="car-item">
          <img
            src="/assets/RangeRover.png"
            alt="Range Rover"
            className="car-image"
          />
          <h3>Range Rover</h3>
        </div>
      </section>
      <FeedbackForm />
      <footer className="footer">
        <p>&copy; 2024 Dịch Vụ Định Giá Ô Tô. Tất cả quyền được bảo lưu.</p>
      </footer>
    </div>
  );
}

export default HomePage;
