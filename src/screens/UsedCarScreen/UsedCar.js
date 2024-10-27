import React from 'react';
import { Row, Col, ListGroup, Form, Button } from 'react-bootstrap';
import './UsedCar.css';

function UsedCar() {
  const carBrands = [
    { 
      letter: 'A', 
      brands: [
        { name: 'Acura', logo: '/assets/acura.png' },
        { name: 'Alfa Romeo', logo: '/assets/acura.png' },
        { name: 'Asia', logo: '/assets/acura.png' },
        { name: 'Aston Martin', logo: '/assets/acura.png' },
        { name: 'Audi', logo: '/assets/acura.png' }
      ]
    },
    { 
      letter: 'B', 
      brands: [
        { name: 'Baic', logo: '/assets/acura.png' },
        { name: 'Beijing', logo: '/assets/acura.png' },
        { name: 'Bentley', logo: '/assets/acura.png' },
        { name: 'BMW', logo: '/assets/acura.png' },
        { name: 'Buick', logo: '/assets/acura.png' },
        { name: 'BYD', logo: '/assets/acura.png' }
      ]
    },
    { 
      letter: 'C', 
      brands: [
        { name: 'Cadillac', logo: '/assets/acura.png' },
        { name: 'Changan', logo: '/assets/acura.png' },
        { name: 'Chery', logo: '/assets/acura.png' },
        { name: 'Chevrolet', logo: '/assets/acura.png' },
        { name: 'Chrysler', logo: '/assets/acura.png' },
        { name: 'Citroen', logo: '/assets/acura.png' }
      ]
    },
    { 
      letter: 'D', 
      brands: [
        { name: 'Daewoo', logo: '/assets/acura.png' },
        { name: 'Daihatsu', logo: '/assets/acura.png' },
        { name: 'Dodge', logo: '/assets/acura.png' }
      ]
    },
    { 
      letter: 'F', 
      brands: [
        { name: 'Ferrari', logo: '/assets/acura.png' },
        { name: 'Fiat', logo: '/assets/acura.png' },
        { name: 'Ford', logo: '/assets/acura.png' }
      ]
    },
    { 
      letter: 'G', 
      brands: [
        { name: 'Gaz', logo: '/assets/acura.png' },
        { name: 'Geely', logo: '/assets/acura.png' },
        { name: 'Genesis', logo: '/assets/acura.png' },
        { name: 'GMC', logo: '/assets/acura.png' }
      ]
    },
    { 
      letter: 'H', 
      brands: [
        { name: 'Haima', logo: '/assets/acura.png' },
        { name: 'Hãng khác', logo: '/assets/acura.png' },
        { name: 'Haval', logo: '/assets/acura.png' },
        { name: 'Honda', logo: '/assets/acura.png' },
        { name: 'Hongqi', logo: '/assets/acura.png' },
        { name: 'Hyundai', logo: '/assets/acura.png' }
      ]
    },
    { 
      letter: 'I', 
      brands: [
        { name: 'Infiniti', logo: '/assets/acura.png' },
        { name: 'Isuzu', logo: '/assets/acura.png' }
      ]
    },
    { 
      letter: 'J', 
      brands: [
        { name: 'Jaguar', logo: '/assets/acura.png' },
        { name: 'Jeep', logo: '/assets/acura.png' }
      ]
    },
    { 
      letter: 'K', 
      brands: [
        { name: 'KIA', logo: '/assets/acura.png' }
      ]
    },
    { 
      letter: 'L', 
      brands: [
        { name: 'Lada', logo: '/assets/acura.png' },
        { name: 'Lamborghini', logo: '/assets/acura.png' },
        { name: 'Land Rover', logo: '/assets/acura.png' },
        { name: 'Lexus', logo: '/assets/acura.png' },
        { name: 'Lifan', logo: '/assets/acura.png' },
        { name: 'Lincoln', logo: '/assets/acura.png' },
        { name: 'Lotus', logo: '/assets/acura.png' },
        { name: 'Luxgen', logo: '/assets/acura.png' },
        { name: 'Lynk&Co', logo: '/assets/acura.png' }
      ]
    },
    { 
      letter: 'M', 
      brands: [
        { name: 'Maserati', logo: '/assets/acura.png' },
        { name: 'Maxus', logo: '/assets/acura.png' },
        { name: 'Maybach', logo: '/assets/acura.png' },
        { name: 'Mazda', logo: '/assets/acura.png' },
        { name: 'McLaren', logo: '/assets/acura.png' },
        { name: 'Mekong', logo: '/assets/acura.png' },
        { name: 'Mercedes-Benz', logo: '/assets/acura.png' },
        { name: 'Mercury', logo: '/assets/acura.png' },
        { name: 'MG', logo: '/assets/acura.png' },
        { name: 'Mini', logo: '/assets/acura.png' },
        { name: 'Mitsubishi', logo: '/assets/acura.png' }
      ]
    },
    { 
      letter: 'N', 
      brands: [
        { name: 'Nissan', logo: '/assets/acura.png' }
      ]
    },
    { 
      letter: 'O', 
      brands: [
        { name: 'Omoda', logo: '/assets/acura.png' },
        { name: 'Opel', logo: '/assets/acura.png' }
      ]
    },
    { 
      letter: 'P', 
      brands: [
        { name: 'Perodua', logo: '/assets/acura.png' },
        { name: 'Peugeot', logo: '/assets/acura.png' },
        { name: 'Polestar', logo: '/assets/acura.png' },
        { name: 'Pontiac', logo: '/assets/acura.png' },
        { name: 'Porsche', logo: '/assets/acura.png' },
        { name: 'Proton', logo: '/assets/acura.png' }
      ]
    },
    { 
      letter: 'R', 
      brands: [
        { name: 'Ram', logo: '/assets/acura.png' },
        { name: 'Renault', logo: '/assets/acura.png' },
        { name: 'Rivian', logo: '/assets/acura.png' },
        { name: 'Rolls-Royce', logo: '/assets/acura.png' }
      ]
    },
    { 
      letter: 'S', 
      brands: [
        { name: 'Samsung', logo: '/assets/acura.png' },
        { name: 'Skoda', logo: '/assets/acura.png' },
        { name: 'Smart', logo: '/assets/acura.png' },
        { name: 'Ssangyong', logo: '/assets/acura.png' },
        { name: 'Subaru', logo: '/assets/acura.png' },
        { name: 'Suzuki', logo: '/assets/acura.png' },
        { name: 'SYM', logo: '/assets/acura.png' }
      ]
    },
    { 
      letter: 'T', 
      brands: [
        { name: 'Tesla', logo: '/assets/acura.png' },
        { name: 'Toyota', logo: '/assets/acura.png' }
      ]
    },
    { 
      letter: 'U', 
      brands: [
        { name: 'UAZ', logo: '/assets/acura.png' }
      ]
    },
    { 
      letter: 'V', 
      brands: [
        { name: 'Vauxhall', logo: '/assets/acura.png' },
        { name: 'VinFast', logo: '/assets/acura.png' },
        { name: 'Volkswagen', logo: '/assets/acura.png' },
        { name: 'Volvo', logo: '/assets/acura.png' }
      ]
    },
    { 
      letter: 'W', 
      brands: [
        { name: 'Wuling', logo: '/assets/acura.png' }
      ]
    },
    { 
      letter: 'Z', 
      brands: [
        { name: 'Zeekr', logo: '/assets/acura.png' },
        { name: 'Zotye', logo: '/assets/acura.png' }
      ]
    }
  ];
  

  const vehicleTypes = [
    { name: 'Sedan', image: '/assets/sedan.png'},
    { name: 'SUV', image: '/assets/sedan.png' },
    { name: 'Crossover', image: '/assets/sedan.png' },
    { name: 'MPV', image: '/assets/sedan.png' },
    { name: 'Bán tải', image: '/assets/sedan.png' },
    { name: 'Hatchback', image: '/assets/sedan.png' },
    { name: 'Coupe', image: '/assets/sedan.png' },
    { name: 'Station wagon', image: '/assets/sedan.png' },
    { name: 'Convertible', image: '/assets/sedan.png' },
    { name: 'Van', image: '/assets/sedan.png' },
    { name: 'Fastback', image: '/assets/sedan.png' },
    { name: 'Mini SUV', image: '/assets/sedan.png' },
    { name: 'Electric', image: '/assets/sedan.png' },
    { name: 'Sports', image: '/assets/sedan.png' },
    { name: 'Kiểu dáng khác', image: '/assets/sedan.png' }
  ];
  

  return (
    <div className ="container">
      <Row className="header">
        <Col className="text-start page-heading">
          Giá xe ô tô đã qua sử dụng của tất cả các dòng xe tại Việt Nam
        </Col>
      </Row>

      <Row className="no-gutters">
        {/* Sidebar */}
        <Col md={3} className="sidebar-container">
          <ListGroup as="ul" className="sidebar-letters">
            {carBrands.map((group, index) => (
              <div key={index} className = "letter">
                <ListGroup.Item as="li" className="letter-title">
                  {group.letter}
                </ListGroup.Item>
                {group.brands.map((brand, brandIndex) => (
                  <ListGroup.Item as="li" key={brandIndex} className="brand-item">
                    <img src={brand.logo} alt={brand.name} className="brand-logo" />
                    <span>{brand.name}</span>
                  </ListGroup.Item>
                ))}
              </div>
            ))}
          </ListGroup>
        </Col>

        {/* Main content area */}
        <Col className="main-content">
            <Row>
              <Col md="auto" className="text-start" style={{paddingTop: "10px", paddingLeft: "0px", fontWeight:"500"}}> Ngân sách</Col>
              <Col md={3} style={{paddingTop:"5px"}}> <Form.Control type="text" placeholder="Từ" /> </Col>
              <Col md={3} style={{paddingTop:"5px"}}> <Form.Control type="text" placeholder="Đến" /></Col>
              <Col md={3} className="d-flex align-items-end" style={{paddingTop:"5px"}}>
              <Button style={{ backgroundColor: "#ff5e14", borderColor: "#ff5e14", color: "white" }} type="submit">
                Tìm kiếm
              </Button>
              </Col>
            </Row>
            <Row>
              <Row className="text-start" style={{backgroundColor:"antiquewhite", marginTop: "20px"}}>
                <div style={{padding:"5px",fontSize:"1.1rem", fontWeight:"500"}}>Tìm kiếm theo kiểu dáng xe</div>
              </Row>
              <Row className="vehicle-types mt-4">
                {vehicleTypes.map((type, index) => (
                  <Col key={index} md={3} className="text-center">
                    <img src={type.image} alt={type.name} className="vehicle-image" />
                    <div style={{fontWeight:"400"}}>{type.name}</div>
                  </Col>
                ))}
              </Row>
            </Row>
            <Row style={{paddingTop: "20px"}}>
              <Row className="text-start" style={{backgroundColor:"antiquewhite", marginTop: "10px"}}>
                <div style={{padding:"5px",fontSize:"1.1rem", fontWeight:"500"}}>Acura</div>
              </Row>
              <Row className="mt-4">
                <Col md={4} className="text-start">
                  <Row>
                    <div style={{fontWeight:"500"}}>MDX</div>
                    <div>15 xe đã bán, 298 triệu đến 660 triệu</div>
                  </Row >
                  <Row >
                    <div style={{paddingTop:"10px", fontWeight:"500"}}>ZDX</div>
                    <div>7 xe đã bán, 600 triệu đến 799 triệu</div>
                  </Row>
                  <Row>
                    <div style={{paddingTop:"10px", fontWeight:"500"}}>Dòng khác</div>
                    <div>2 xe đã bán, 53 triệu đến 288 triệu</div>
                  </Row>
                </Col>

                <Col md={4} className="text-start">
                  <Row>
                    <div style={{fontWeight:"500"}}>CL</div>
                    <div>6 xe đã bán, 145 triệu đến 295 triệu</div>
                  </Row >
                  <Row >
                    <div style={{paddingTop:"10px", fontWeight:"500"}}>MDX</div>
                    <div>30 xe đã bán, 79 triệu đến 580 triệu</div>
                  </Row>
                  <Row>
                    <div style={{paddingTop:"10px", fontWeight:"500"}}>Legend</div>
                    <div>2 xe đã bán, 53 triệu đến 288 triệu</div>
                  </Row>
                </Col>
              
                <Col md={4} className="text-start">
                  <Row>
                    <div style={{fontWeight:"500"}}>MDX</div>
                    <div>15 xe đã bán, 298 triệu đến 660 triệu</div>
                  </Row >
                  <Row >
                    <div style={{paddingTop:"10px", fontWeight:"500"}}>ZDX</div>
                    <div>7 xe đã bán, 600 triệu đến 799 triệu</div>
                  </Row>
                  <Row>
                    <div style={{paddingTop:"10px", fontWeight:"500"}}>Dòng khác</div>
                    <div>2 xe đã bán, 53 triệu đến 288 triệu</div>
                  </Row>
                </Col>
              </Row>
            </Row>

            <Row style={{paddingTop: "20px"}}>
              <Row className="text-start" style={{backgroundColor:"antiquewhite", marginTop: "10px"}}>
                <div style={{padding:"5px",fontSize:"1.1rem", fontWeight:"500"}}>Acura</div>
              </Row>
              <Row className="mt-4">
                <Col md={4} className="text-start">
                  <Row>
                    <div style={{fontWeight:"500"}}>MDX</div>
                    <div>15 xe đã bán, 298 triệu đến 660 triệu</div>
                  </Row >
                  <Row >
                    <div style={{paddingTop:"10px", fontWeight:"500"}}>ZDX</div>
                    <div>7 xe đã bán, 600 triệu đến 799 triệu</div>
                  </Row>
                  <Row>
                    <div style={{paddingTop:"10px", fontWeight:"500"}}>Dòng khác</div>
                    <div>2 xe đã bán, 53 triệu đến 288 triệu</div>
                  </Row>
                </Col>

                <Col md={4} className="text-start">
                  <Row>
                    <div style={{fontWeight:"500"}}>CL</div>
                    <div>6 xe đã bán, 145 triệu đến 295 triệu</div>
                  </Row >
                  <Row >
                    <div style={{paddingTop:"10px", fontWeight:"500"}}>MDX</div>
                    <div>30 xe đã bán, 79 triệu đến 580 triệu</div>
                  </Row>
                  <Row>
                    <div style={{paddingTop:"10px", fontWeight:"500"}}>Legend</div>
                    <div>2 xe đã bán, 53 triệu đến 288 triệu</div>
                  </Row>
                </Col>
              
                <Col md={4} className="text-start">
                  <Row>
                    <div style={{fontWeight:"500"}}>MDX</div>
                    <div>15 xe đã bán, 298 triệu đến 660 triệu</div>
                  </Row >
                  <Row >
                    <div style={{paddingTop:"10px", fontWeight:"500"}}>ZDX</div>
                    <div>7 xe đã bán, 600 triệu đến 799 triệu</div>
                  </Row>
                  <Row>
                    <div style={{paddingTop:"10px", fontWeight:"500"}}>Dòng khác</div>
                    <div>2 xe đã bán, 53 triệu đến 288 triệu</div>
                  </Row>
                </Col>
              </Row>
            </Row>
        </Col>
      </Row>
    </div>
  );
}

export default UsedCar;
