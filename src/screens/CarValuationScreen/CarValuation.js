import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CarValuation() {
  const [carBrands, setCarBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [carModels, setCarModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState();
  const [carVersions, setCarVersions] = useState([]);
  const [selectedVersion, setSelectedVersion] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [allCarData, setAllCarData] = useState([]);
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [purchasePrice, setPurchasePrice] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://car-evaluation-be.tripllery.com/car/brands")
      .then((res) => {
        const data = res.data.result.data;
        setCarBrands(data);
      })
      .catch((error) => {
        console.error("Error fetching car data:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://car-evaluation-be.tripllery.com/car/brand/${selectedBrand}`)
      .then((res) => {
        const data = res.data.result.data;
        setCarModels(data);
      })
      .catch((error) => {
        console.error("Error fetching car data:", error);
      });
  }, [selectedBrand]);

  useEffect(() => {
    axios
      .get(`https://car-evaluation-be.tripllery.com/car/brand/model/${selectedModel}`)
      .then((res) => {
        const data = res.data.result.data;

        setAllCarData(data);
      })
      .catch((error) => {
        console.error("Error fetching car data:", error);
      });
  }, [selectedVersion]);

  const handleBrandChange = (event) => {
    const brand = event.target.value;
    setSelectedBrand(brand);
    setSelectedModel("");
    setCarVersions([]);
    setSelectedVersion("");
    setSelectedYear("");
  };

  const handleModelChange = (event) => {
    const model = event.target.value;
    setSelectedModel(model);
    setSelectedVersion("");
    setSelectedYear("");
  };

  const handleVersionChange = (event) => {
    setSelectedVersion(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleAreaChange = (areaName) => {
    if (selectedAreas.includes(areaName)) {
      setSelectedAreas(selectedAreas.filter((name) => name !== areaName));
    } else {
      setSelectedAreas([...selectedAreas, areaName]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true); // Bắt đầu loading

    if (!selectedBrand || !selectedModel || !selectedYear) {
      toast.warning("Vui lòng nhập đầy đủ thông tin!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        style: {
          backgroundColor: "#01bf4c",
          color: "white",
        },
      });
      setIsLoading(false); // Dừng loading
      return;
    }

    const formData = {
      brand: selectedBrand,
      modelId: selectedModel,
      brandName: selectedBrand,
      version: selectedVersion,
      year: selectedYear,
      price: purchasePrice,
      repairAreas: selectedAreas,
    };

    axios
      .post("https://car-evaluation-be.tripllery.com/car/valuation", formData)
      .then((response) => {
        const valuationResponse = response.data.result.data;
        navigate("/result", {
          state: {
            ...formData,
            valuationResult: valuationResponse,
          },
        });
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error submitting car valuation data:", error);
        toast.error("Không có thông tin định giá về xe này.", {
          position: "top-right",
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          style: {
            backgroundColor: "#01bf4c",
            color: "white",
          },
        });
        setIsLoading(false); // Dừng loading
      });
  };

  const carAreas = [
    {
      id: 1,
      label: "Cửa 1",
      name: "Cua 1",
      img: "/assets/Cua 1.jpg",
      category: "large",
    },
    {
      id: 2,
      label: "Cửa 2",
      name: "Cua 2",
      img: "/assets/Cua 2.jpg",
      category: "large",
    },
    {
      id: 3,
      label: "Cửa 3",
      name: "Cua 3",
      img: "/assets/Cua 3.jpg",
      category: "large",
    },
    {
      id: 4,
      label: "Cửa 4",
      name: "Cua 4",
      img: "/assets/Cua 4.jpg",
      category: "large",
    },
    {
      id: 5,
      label: "Đuôi xe",
      name: "Duoi xe",
      img: "/assets/Duoi xe.jpg",
      category: "large",
    },
    {
      id: 6,
      label: "Mũi xe",
      name: "Mui xe",
      img: "/assets/Mui xe.jpg",
      category: "large",
    },
    {
      id: 7,
      label: "Khung Gầm",
      name: "Volant",
      img: "/assets/Khung gâm.png",
      category: "other",
    },
    {
      id: 8,
      label: "Động Cơ",
      name: "Bang dieu khien",
      img: "/assets/Động cơ.jpeg",
      category: "other",
    },
    {
      id: 9,
      label: "Hệ thống điều hòa",
      name: "He thong dieu hoa",
      img: "/assets/AirConditioning.png",
      category: "other",
    },
    {
      id: 10,
      label: "Thủy Kích",
      name: "Ghe truoc",
      img: "/assets/Thủy kích.jpg",
      category: "other",
    },
    {
      id: 11,
      label: "Nội Thất",
      name: "Ghe sau",
      img: "/assets/Nột thất.png",
      category: "other",
    },
    {
      id: 12,
      label: "Hộp Số",
      name: "Cua kinh ben",
      img: "/assets/Hộp số.png",
      category: "other",
    },
    {
      id: 13,
      label: "Ngoại Thất",
      name: "Kinh chan gio",
      img: "/assets/Ngoại thất.jpg",
      category: "other",
    },
    {
      id: 14,
      label: "Mâm - Lốp",
      name: "He thong am thanh",
      img: "/assets/Mâm, lốp.jpg",
      category: "other",
    },
    {
      id: 15,
      label: "Dầu Máy - Két Nước",
      name: "Tham lot san",
      img: "/assets/Dầu máy.jpeg",
      category: "other",
    },
    {
      id: 16,
      label: "Hệ thống dây điện",
      name: "He thong day dien",
      img: "/assets/WiringSystem.png",
      category: "other",
    },
  ];

  var manufactureYears = [];
  for (let year = 2004; year <= 2024; year++) {
    manufactureYears.push(year);
  }
  return (
    <div
      style={{
        backgroundImage: "url(/assets/background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        margin: "0px",
        marginTop: "100px",
      }}
    >
      <ToastContainer
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          position: "fixed",
          zIndex: 9999,
          width: "auto",
        }}
        closeOnClick={false}
        draggable={false}
      />

      <div></div>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: "85vh" }}
      >
        <Col
          md={8}
          className="bg-light p-4 rounded shadow"
          style={{ margin: "20px 0" }}
        >
          <Form>
            <Row>
              {/* Car Brand */}
              <Col md={6}>
                <Form.Group controlId="carBrand" style={{ paddingTop: "20px" }}>
                  <Form.Label
                    className="text-start w-100"
                    style={{ fontWeight: "500" }}
                  >
                    Hãng xe <sup className="text-danger">(*)</sup>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedBrand}
                    onChange={handleBrandChange}
                    style={{ color: "#595C5F" }}
                  >
                    <option value="" disabled>
                      -- Chọn hãng xe --
                    </option>
                    {carBrands.map((brand) => (
                      <option key={brand.id} value={brand.id}>
                        {brand.name}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              {/* Car Model */}
              <Col md={6}>
                <Form.Group controlId="carModel" style={{ paddingTop: "20px" }}>
                  <Form.Label
                    className="text-start w-100"
                    style={{ fontWeight: "500" }}
                  >
                    Dòng xe <sup className="text-danger">(*)</sup>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedModel}
                    onChange={handleModelChange}
                    style={{ color: "#595C5F" }}
                  >
                    <option value="" disabled>
                      -- Chọn dòng xe --
                    </option>
                    {carModels.length === 0 ? (
                      <option disabled>No data</option>
                    ) : (
                      carModels.map((model) => (
                        <option key={model.id} value={model.id}>
                          {model.name}
                        </option>
                      ))
                    )}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group
                  controlId="carVersion"
                  style={{ paddingTop: "20px" }}
                >
                  <Form.Label
                    className="text-start w-100"
                    style={{ fontWeight: "500" }}
                  >
                    Phiên bản xe
                  </Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedVersion}
                    onChange={handleVersionChange}
                    style={{ color: "#595C5F" }}
                  >
                    <option value="" disabled>
                      -- Chọn phiên bản --
                    </option>
                    {carVersions.length === 0 ? (
                      <option
                        disabled
                        style={{ color: "#989898" }}
                        className="text-center"
                      >
                        No data
                      </option>
                    ) : (
                      carVersions.map((version, index) => (
                        <option key={index} value={version}>
                          {version}
                        </option>
                      ))
                    )}
                  </Form.Control>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group
                  controlId="manufactureYear"
                  style={{ paddingTop: "20px" }}
                >
                  <Form.Label
                    className="text-start w-100"
                    style={{ fontWeight: "500" }}
                  >
                    Năm sản xuất<sup className="text-danger">(*)</sup>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedYear}
                    onChange={handleYearChange}
                    style={{ color: "#595C5F" }}
                  >
                    <option value="" disabled>
                      -- Chọn năm --
                    </option>
                    {manufactureYears.length === 0 ? (
                      <option disabled>No data</option>
                    ) : (
                      manufactureYears.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))
                    )}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row className="justify-content-center">
              {/* Purchase Price */}
              <Col md={6}>
                <Form.Group
                  controlId="purchasePrice"
                  style={{ paddingTop: "20px" }}
                >
                  <Form.Label
                    className="text-start w-100"
                    style={{ fontWeight: "500" }}
                  >
                    Giá xe đã mua (VNĐ)
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập giá xe khi mua..."
                    value={purchasePrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    onChange={(e) => {
                      // Chỉ cho phép nhập số
                      const value = e.target.value.replace(/[^\d]/g, "");
                      setPurchasePrice(value);
                    }}
                    style={{ color: "#595C5F" }}
                  />
                </Form.Group>
              </Col>
            </Row>
            {/* Repair Information - Sửa chữa lớn */}
            <Row>
              <Col md={12}>
                <Form.Group
                  controlId="largeRepairs"
                  style={{ paddingTop: "20px" }}
                >
                  <Form.Label
                    className="text-start w-100"
                    style={{ fontWeight: "500" }}
                  >
                    Sửa chữa lớn
                    <sup style={{ color: "#00b5ad" }}>(nếu có)</sup>
                  </Form.Label>
                  <div className="d-flex flex-wrap justify-content-center">
                    {carAreas
                      .filter((area) => area.category === "large")
                      .map((area) => (
                        <div key={area.id} className="text-center m-2">
                          <input
                            type="checkbox"
                            id={area.id}
                            name="carDamageArea"
                            value={area.name}
                            checked={selectedAreas.includes(area.id)}
                            onChange={() => handleAreaChange(area.id)}
                            className="d-none"
                          />
                          <label htmlFor={area.id}>
                            <img
                              src={area.img}
                              alt={area.label}
                              style={{
                                border: selectedAreas.includes(area.id)
                                  ? "2px solid red"
                                  : "2px solid transparent",
                                width: "100px",
                                height: "auto",
                                cursor: "pointer",
                              }}
                            />
                            <div>{area.label}</div>
                          </label>
                        </div>
                      ))}
                  </div>
                </Form.Group>
              </Col>
            </Row>

            {/* Repair Information - Sửa chữa khác */}
            <Row>
              <Col md={12}>
                <Form.Group
                  controlId="otherRepairs"
                  style={{ paddingTop: "20px" }}
                >
                  <Form.Label
                    className="text-start w-100"
                    style={{ fontWeight: "500" }}
                  >
                    Sửa chữa khác
                    <sup style={{ color: "#00b5ad" }}>(nếu có)</sup>
                  </Form.Label>
                  <div className="d-flex flex-wrap justify-content-center">
                    {carAreas
                      .filter((area) => area.category === "other")
                      .map((area, index) => (
                        <div
                          key={area.id}
                          className="text-center m-2"
                          style={{ flex: "0 0 18%" }}
                        >
                          <input
                            type="checkbox"
                            id={area.id}
                            name="carDamageArea"
                            value={area.name}
                            checked={selectedAreas.includes(area.id)}
                            onChange={() => handleAreaChange(area.id)}
                            className="d-none"
                          />
                          <label htmlFor={area.id}>
                            <img
                              src={area.img}
                              alt={area.label}
                              style={{
                                border: selectedAreas.includes(area.id)
                                  ? "2px solid red"
                                  : "2px solid transparent",
                                width: "100px",
                                height: "auto",
                                cursor: "pointer",
                              }}
                            />
                            <div>{area.label}</div>
                          </label>
                        </div>
                      ))}
                  </div>
                </Form.Group>
              </Col>
            </Row>

            {/* Additional form fields */}
            <Row style={{ paddingTop: "20px" }}>
              <Col md={4}>
                <Form.Group controlId="userName" style={{ paddingTop: "20px" }}>
                  <Form.Label className="text-start w-100">Họ & tên</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập họ & tên..."
                    style={{ color: "#595C5F" }}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group
                  controlId="userPhone"
                  style={{ paddingTop: "20px" }}
                >
                  <Form.Label className="text-start w-100">
                    Điện thoại
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập số điện thoại..."
                    style={{ color: "#595C5F" }}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group
                  controlId="userEmail"
                  style={{ paddingTop: "20px" }}
                >
                  <Form.Label className="text-start w-100">Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Nhập email..."
                    style={{ color: "#595C5F" }}
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Submit Button */}
            <div className="text-end mt-4" style={{ paddingTop: "30px" }}>
              <Button
                style={{
                  backgroundColor: "#01bf4c",
                  borderColor: "#01bf4c",
                  color: "white",
                  fontSize: "18px",
                  paddingLeft: "60px",
                  paddingRight: "60px",
                }}
                type="submit"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? "ĐANG XỬ LÝ..." : "ĐỊNH GIÁ"}
              </Button>
            </div>
          </Form>
        </Col>
      </div>
    </div>
  );
}
export default CarValuation;
