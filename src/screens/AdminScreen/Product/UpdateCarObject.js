import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateCarObject = () => {
  const [inputData, setInputData] = useState({
    carBrand: '',
    carModel: '',
    carVersion: '',
    yearOfManufacture: '',
    price: '',
  });
  const [errorMessage, setErrorMessage] = useState(''); 

  const navigate = useNavigate();
  const { id } = useParams();  // Fetch 'id' from the URL params

  useEffect(() => {
    axios.get(`http://localhost:8080/getCar/${id}`)  // Use 'id' in the GET request
      .then((res) => {
        setInputData(res.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setErrorMessage("Car not found. Please check the information and try again.");
        } else {
          setErrorMessage("An error occurred while fetching the car data.");
        }
        console.error("Error fetching car data:", error);
      });
  }, [id]);  // Dependency array updated to include 'id'
  

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!inputData.carBrand || !inputData.carModel || !inputData.carVersion || !inputData.yearOfManufacture || !inputData.price) {
      setErrorMessage('Vui lòng nhập đầy đủ thông tin cho tất cả các trường bắt buộc.');
      return; 
    }

    setErrorMessage(''); 

    try {
      axios.put(`http://localhost:8080/updateCar/${id}`, inputData)  // Use 'id' in the PUT request
        .then(res => {
          alert("Cập nhật thông tin xe thành công!");
          navigate('/admin/car-list');
        });
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("Error: " + error.response.data);
      } else {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="carBrand" className="form-label text-start w-100">Hãng xe:</label>
            <input
              type="text"
              name="carBrand"
              className="form-control"
              value={inputData.carBrand}
              onChange={e => setInputData({ ...inputData, carBrand: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="carModel" className="form-label text-start w-100">Mẫu xe:</label>
            <input
              type="text"
              name="carModel"
              className="form-control"
              value={inputData.carModel}
              onChange={e => setInputData({ ...inputData, carModel: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="carVersion" className="form-label text-start w-100">Phiên bản:</label>
            <input
              type="text"
              name="carVersion"
              className="form-control"
              value={inputData.carVersion}
              onChange={e => setInputData({ ...inputData, carVersion: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="yearOfManufacture" className="form-label text-start w-100">Năm sản xuất:</label>
            <input
              type="text"
              name="yearOfManufacture"
              className="form-control"
              value={inputData.yearOfManufacture}
              onChange={e => setInputData({ ...inputData, yearOfManufacture: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label text-start w-100">Giá:</label>
            <input
              type="text"
              name="price"
              className="form-control"
              value={inputData.price}
              onChange={e => setInputData({ ...inputData, price: e.target.value })}
              required
            />
          </div>

          {errorMessage && <p className="text-danger">{errorMessage}</p>}

          <button className="btn btn-primary">Cập nhật thông tin xe</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateCarObject;
