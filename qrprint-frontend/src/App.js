import "./App.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import GenerateQr from "./pages/generateQr/GenerateQr";
import Design from "./pages/design/Design";
import Cart from "./pages/cart/Cart";
import Order from "./pages/order/Order";
import Footer from "./components/footer/Footer";
import TrackOrder from "./pages/trackOrder/TrackOrder";
import Privacy from "./pages/privacy/Privacy";
import About from "./pages/about/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/design" element={<Design />} />
          <Route path="/generateQr" element={<GenerateQr />} />
          <Route path="/order" element={<Order />} />
          <Route path="/trackOrder" element={<TrackOrder />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
