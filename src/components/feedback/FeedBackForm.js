import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/feedback";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(API_URL);
      setFeedbacks(response.data.result.data);
      setError(null);
    } catch (err) {
      setError("Không thể tải feedback. Vui lòng thử lại sau.");
    }
    setIsLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim() && review.trim()) {
      setIsLoading(true);
      try {
        const response = await axios.post(API_URL, { name, review });
        setName("");
        setReview("");
        setError(null);
      } catch (err) {
        setError("Không thể gửi feedback. Vui lòng thử lại sau.");
      }
      setIsLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h2>Feedback của bạn</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="name"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Tên của bạn:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="review"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Review của bạn:
          </label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            style={{ width: "100%", padding: "8px", minHeight: "100px" }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 15px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
          disabled={isLoading}
        >
          {isLoading ? "Đang gửi..." : "Gửi Feedback"}
        </button>
      </form>
      <div style={{ marginTop: "30px" }}>
        <h3>Danh sách Feedback</h3>
        {isLoading ? (
          <p>Đang tải...</p>
        ) : (
          feedbacks.map((feedback, index) => (
            <div
              key={index}
              style={{
                marginBottom: "15px",
                padding: "10px",
                border: "1px solid #ddd",
              }}
            >
              <strong>{feedback.name}</strong>
              {/* {new Date(feedback.createdAt).toLocaleString()} */}
              <p>{feedback.review}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;
