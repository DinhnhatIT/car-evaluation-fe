import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import "./ResultValuation.css";
import { useLocation, Navigate } from "react-router-dom";
import axios from "axios";

function Result() {
  const [score, setScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [valuationResult, setValuationResult] = useState(null);
  const location = useLocation();

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN").format(amount);
  };

  useEffect(() => {
    let isMounted = true;

    const fetchValuationResult = async () => {
      if (location.state) {
        try {
          const response = await axios.post(
            "http://localhost:8080/car/valuation",
            {
              carBrand: location.state.carBrand,
              carModel: location.state.carModel,
              carVersion: location.state.carVersion,
              yearOfManufacture: location.state.yearOfManufacture,
              kmDriven: location.state.kmDriven,
            }
          );

          if (isMounted) {
            setValuationResult(response.data);
            setIsVisible(true);
            setScore(response.data.condition || 0);
          }
        } catch (error) {
          console.error("Error fetching valuation:", error);
        }
      }
    };

    fetchValuationResult();

    return () => {
      isMounted = false;
    };
  }, [location.state]);

  if (!location.state) {
    return <Navigate to="/" replace />;
  }

  const { carBrand, carModel, carVersion, yearOfManufacture, kmDriven } =
    location.state;

  return (
    <div className="modern-result-container" style={{ paddingTop: "100px" }}>
      <Row className="h-100 g-4">
        <Col md={4}>
          <div className={`fade-in-left ${isVisible ? "active" : ""}`}>
            <Card className="info-card">
              <Card.Body>
                <h2 className="info-title">Thông tin xe</h2>
                <div className="info-content">
                  {Object.entries({
                    "Hãng xe": carBrand,
                    "Dòng xe": carModel,
                    "Phiên bản": carVersion || "Không có",
                    "Năm sản xuất": yearOfManufacture,
                    "Số km đã đi": kmDriven,
                  }).map(([label, value]) => (
                    <div className="info-item" key={label}>
                      <span className="info-label">{label}</span>
                      <span className="info-value">{value}</span>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>

        <Col md={8}>
          <div className={`fade-in-up ${isVisible ? "active" : ""}`}>
            <div className="result-content">
              <div className="score-section">
                <div className="circular-progress">
                  <div
                    className="progress-circle"
                    style={{ "--progress": score }}
                  >
                    <svg viewBox="0 0 170 170">
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#2ecc71" />
                          <stop offset="100%" stopColor="#27ae60" />
                        </linearGradient>
                      </defs>
                      <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div className="score-display">
                      <h2>
                        <CountUp
                          start={0}
                          end={score}
                          duration={1.5}
                          suffix="%"
                        />
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="condition-text">
                  <p>Tình trạng xe</p>
                </div>
              </div>

              <div
                className={`price-section fade-in-scale ${
                  isVisible ? "active" : ""
                }`}
              >
                <h2 className="info-title">Giá ước tính</h2>
                <p className="price-amount">
                  {valuationResult
                    ? formatCurrency(valuationResult.estimatedPrice)
                    : "..."}
                  <small> VNĐ</small>
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Result;
