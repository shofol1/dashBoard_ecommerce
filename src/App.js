import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Components/Products/Products";
import Footer from "./Shared/Footer/Footer";
import Register from "./Components/Register/Register";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
