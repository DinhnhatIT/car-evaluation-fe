import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateCarRepairObject = () => {
  const [inputData, setInputData] = useState({
    nameRepair: '',
    reductionRepair: '',
  });
  const [errorMessage, setErrorMessage] = useState(''); 

  const navigate = useNavigate();
  const { id } = useParams();  // Fetch 'id' from the URL params

  useEffect(() => {
    axios.get(`http://localhost:8080/car/getCarRepair/${id}`)  // Use 'id' in the GET request
      .then((res) => {
        setInputData(res.data.result.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setErrorMessage("Repair not found. Please check the information and try again.");
        } else {
          setErrorMessage("An error occurred while fetching the repair data.");
        }
        console.error("Error fetching repair data:", error);
      });
  }, [id]);  // Dependency array updated to include 'id'
  

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!inputData.nameRepair || !inputData.reductionRepair) {
      setErrorMessage('Vui lòng nhập đầy đủ thông tin cho tất cả các trường bắt buộc.');
      return; 
    }

    if (isNaN(inputData.reductionRepair) || inputData.reductionRepair < 0 || inputData.reductionRepair > 100) {
      setErrorMessage('Giảm giá phải là một số hợp lệ trong khoảng từ 0 đến 100.');
      return;
    }

    setErrorMessage(''); 

    try {
      axios.put(`http://localhost:8080/car/updateCarRepair/${id}`, inputData)  // Use 'id' in the PUT request
        .then(res => {
          alert("Cập nhật thông tin sửa chữa thành công!");
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
            <label htmlFor="nameRepair" className="form-label text-start w-100">Tên bộ phận sửa chữa:</label>
            <input
              type="text"
              name="nameRepair"
              className="form-control"
              value={inputData.nameRepair}
              onChange={e => setInputData({ ...inputData, nameRepair: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="reductionRepair" className="form-label text-start w-100">Phần trăm giảm:</label>
            <input
              type="number"
              name="reductionRepair"
              className="form-control"
              value={inputData.reductionRepair}
              onChange={e => setInputData({ ...inputData, reductionRepair: e.target.value })}
              required
            />
          </div>

          {errorMessage && <p className="text-danger">{errorMessage}</p>}

          <button className="btn btn-primary">Cập nhật thông tin sửa chữa</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateCarRepairObject;
