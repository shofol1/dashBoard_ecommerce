import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Components/Products/Products";
import Footer from "./Shared/Footer/Footer";
import Register from "./Components/Register/Register";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Products />} />
            <Route path="/update" element={<h1>update page</h1>} />
            <Route path="/add" element={<h1>add page</h1>} />
            <Route path="/profile" element={<h1>profile page</h1>} />
          </Route>
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
