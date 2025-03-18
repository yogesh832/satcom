import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Footer = () => {
  const position = [28.5448, 77.3338]; // Coordinates for Noida, update if needed

  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-green-500">SALKA TECH</h2>
          <p className="mt-2 text-gray-400">
            SALKATECH offers a range of end-to-end, unified project services with turnkey solutions.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold">Useful Links</h3>
          <ul className="mt-2 space-y-1 text-gray-400">
            <li><a href="#" className="hover:text-green-500">Home</a></li>
            <li><a href="#" className="hover:text-green-500">About Us</a></li>
            <li><a href="#" className="hover:text-green-500">Services</a></li>
          </ul>
        </div>

        {/* Contact Info & Map */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-gray-400">SALKA GLOBAL TECHNOLOGIES PVT. LTD.</p>
          <p className="text-gray-400">LTC Tower, A-51 Floor, Unit#19, Sector 132, Noida, India</p>
          <p className="text-gray-400">Phone: +91-9999664020</p>
          <p className="text-gray-400">Email: info@saukatech.com</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-green-500"><FaFacebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-green-500"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-green-500"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-8 h-48 md:h-56">
        <MapContainer center={position} zoom={15} className="h-full w-full">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>SALKATECH Office</Popup>
          </Marker>
        </MapContainer>
      </div>
    </footer>
  );
};

export default Footer;
