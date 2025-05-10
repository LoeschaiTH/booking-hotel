import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Booking from "../pages/booking";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default App;
