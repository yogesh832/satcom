import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ServicesSolutions from "./components/ServicesSolutions";
import LandingPage from "./pages/LandingPage";
const Projects = () => <div className="text-center p-5">Our Projects</div>;
const Products = () => <div className="text-center p-5">Our Products</div>;
const Approach = () => <div className="text-center p-5">Our Approach</div>;
const TestingService = () => <div className="text-center p-5">Testing Service</div>;
const Values = () => <div className="text-center p-5">Our Values</div>;
const About = () => <div className="text-center p-5">About Us</div>;
const Contact = () => <div className="text-center p-5">Contact Us</div>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/services" element={<ServicesSolutions />} />

        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/products" element={<Products />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/testing-service" element={<TestingService />} />
        <Route path="/values" element={<Values />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

