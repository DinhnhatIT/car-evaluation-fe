import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateCarObject = () => {
  const [inputData, setInputData] = useState({
    carBrand: '',
    carModel: '',
    carVersion: '',
    yearOfManufacture: '',
    price: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!inputData.carBrand || !inputData.carModel || !inputData.carVersion || !inputData.yearOfManufacture || !inputData.price) {
      setErrorMessage('Vui lòng nhập đầy đủ các trường bắt buộc.');
      return;
    }

    setErrorMessage('');

    try {
      axios.post('http://localhost:8080/addCar', inputData)
        .then(res => {
          alert("Thêm xe thành công!");
          navigate('/admin/car-list');
        })
        .catch(error => {
          alert("Xe đã tồn tại trong hệ thống");
        });
    } catch (error) {
      console.error("Lỗi hệ thống:", error);
    }
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="carBrand" className="form-label text-start w-100">
              Hãng xe <sup className="text-danger">(*)</sup>
            </label>
            <input
              type="text"
              name="carBrand"
              className="form-control"
              onChange={e => setInputData({ ...inputData, carBrand: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="carModel" className="form-label text-start w-100">
              Mẫu xe <sup className="text-danger">(*)</sup>
            </label>
            <input
              type="text"
              name="carModel"
              className="form-control"
              onChange={e => setInputData({ ...inputData, carModel: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="carVersion" className="form-label text-start w-100">
              Phiên bản <sup className="text-danger">(*)</sup>
            </label>
            <input
              type="text"
              name="carVersion"
              className="form-control"
              onChange={e => setInputData({ ...inputData, carVersion: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="yearOfManufacture" className="form-label text-start w-100">
              Năm sản xuất <sup className="text-danger">(*)</sup>
            </label>
            <input
              type="text"
              name="yearOfManufacture"
              className="form-control"
              onChange={e => setInputData({ ...inputData, yearOfManufacture: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label text-start w-100">
              Giá <sup className="text-danger">(*)</sup>
            </label>
            <input
              type="text"
              name="price"
              className="form-control"
              onChange={e => setInputData({ ...inputData, price: e.target.value })}
            />
          </div>

          {errorMessage && <p className="text-danger">{errorMessage}</p>}

          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateCarObject;
