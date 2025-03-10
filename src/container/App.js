import HomeScreen from "../components/HomeScreen/HomeScreen";
import CheckoutScreen from "../components/CheckoutScreen/CheckoutScreen";
// import OrderList from "../components/OrderList/OrderList";
import Navbar from "../components/HomeScreen/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      {/* <div className="app" style={{ overflow: "hidden" }}> */}
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/checkout" element={<CheckoutScreen />} />
          {/* <Route exact path="/order" element={<OrderList />} /> */}
          {/* 404 page */}
        </Routes>
        <Footer />
      {/* </div> */}
    </Router>
  );
}

export default App;
