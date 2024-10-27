import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CarList = () => {
  const [records, setRecords] = useState([]);
  const [repairs, setRepairs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const Data = records.slice(firstIndex, lastIndex);
  const npage = Math.ceil(records.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  useEffect(() => {
    axios.get('http://localhost:8080/getCars')
      .then(res => {
        setRecords(res.data.result.data);
      })
      .catch(error => {
        console.error('Error fetching car data:', error);
      });

    axios.get('http://localhost:8080/car/getCarRepairs')
      .then(res => {
        setRepairs(res.data.result.data);
      })
      .catch(error => {
        console.error('Error fetching car repairs:', error);
      });
  }, []);

  const handleDelete = (id) => {
    const conf = window.confirm("Bạn có chắc chắn muốn xoá không!!!");
    
    if (conf) {
      axios.delete(`http://localhost:8080/deleteCar/${id}`)
        .then(res => {
          alert('Hàng dữ liệu đã được xoá');
          setRecords(records.filter(record => record.id !== id));
        })
        .catch(err => {
          console.log(err);
          alert("Xoá không thành công");
        });
    }
  };

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changePage = (id) => {
    setCurrentPage(id);
  };

  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };

const renderRepairs = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên bộ phận</th>
          <th>Phần trăm giảm</th>
          <th>Hình ảnh</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {repairs.map((repair, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{repair.nameRepair}</td>
            <td>{repair.reductionRepair}%</td>
            <td>
              <img
                src={`/assets/${repair.nameRepair}.jpg`} 
                alt={repair.nameRepair}
                style={{ width: "100px", height: "auto" }}
              />
            </td>
            <td>
              <Link to={`/admin/update-car-repair-object/${repair.id}`} className="btn btn-sm btn-success">
                Cập nhật
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
  return (
    <div className="container mt-5">
      <div style={{fontWeight:"bold", fontSize:"20px", color:"#ff5e14"}}>
        Danh sách xe
      </div>
      <div className="text-end">
        <Link to="/admin/create-car-object" className="btn btn-primary">Tạo xe mới</Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Hãng xe</th>
            <th>Dòng xe</th>
            <th>Phiên bản</th>
            <th>Năm sản xuất</th>
            <th>Giá</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((d, i) => (
            <tr key={i}>
              <td>{d.carBrand}</td>
              <td>{d.carModel}</td>
              <td>{d.carVersion}</td>
              <td>{d.yearOfManufacture}</td>
              <td>{d.price}</td>
              <td> 
                <Link to={`/admin/update-car-object/${d.id}`} className="btn btn-sm btn-success">Cập nhật</Link>
                <button onClick={() => handleDelete(d.id)} className="btn btn-sm ms-1 btn-danger">Xoá</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prePage}>Trước</a>
          </li>
          {numbers.map((n, i) => (
            <li key={i} className={`page-item ${currentPage === n ? 'active' : ''}`}>
              <a href="#" className="page-link" onClick={() => changePage(n)}>{n}</a>
            </li>
          ))}
          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>Tiếp</a>
          </li>
        </ul>
      </nav>
      <div
        style={{
          marginTop: "50px",
          background: '#ff5e14',
          height: '3px',
        }}
      />
      <div style={{marginTop: "50px"}}>
        <div style={{marginBottom:"50px", fontWeight:"bold", fontSize:"20px", color:"#ff5e14"}}>
          Các bộ phận sửa chữa
        </div>
        <div className="text-center">
          {renderRepairs()};
        </div>
      </div>
    </div>


  );
};

export default CarList;
