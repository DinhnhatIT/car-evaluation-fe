import "./App.css";
import FooterComp from "./components/footer/FooterComp";
import NavbarComp from "./components/navigation/NavbarComp";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"; // Use useLocation from react-router-dom
import CarValuation from "./screens/CarValuationScreen/CarValuation";
import UsedCar from "./screens/UsedCarScreen/UsedCar";
import AdminLogin from "./screens/AdminScreen/Login/Login";
import CarList from "./screens/AdminScreen/Product/CarList";
import CreateCarObject from "./screens/AdminScreen/Product/CreateCarObject";
import UpdateCarObject from "./screens/AdminScreen/Product/UpdateCarObject";
import UpdateCarRepairObject from "./screens/AdminScreen/Product/UpdateCarRepairObject";
import HomePage from "./screens/HomeScreen/HomePage";
import ResultValuation from "./screens/ResultValuation/ResultValuation";

function MainLayout() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/admin" && <NavbarComp />}

      <Routes>
        <Route path="/result" element={<ResultValuation />} />
        <Route path="/car-valuation" element={<CarValuation />} />
        <Route path="/price-list-used-car" element={<UsedCar />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/car-list" element={<CarList />} />
        <Route path="/admin/create-car-object" element={<CreateCarObject />} />
        <Route
          path="/admin/update-car-object/:id"
          element={<UpdateCarObject />}
        />
        <Route
          path="/admin/update-car-repair-object/:id"
          element={<UpdateCarRepairObject />}
        />
      </Routes>

      {location.pathname !== "/admin" && <FooterComp />}
    </>
  );
}

function App() {
  return (
      <>
        <title>Car Evaluation</title>
        <div className="App">
          <Router>
            <MainLayout/>
          </Router>
        </div>
      </>
  );
}

export default App;
