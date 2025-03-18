import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="py-10 px-5 text-center bg-white">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <div className="w-16 h-1 bg-green-500 mx-auto mt-2"></div>
      <p className="text-gray-600 mt-3">Looking forward to talking with you!</p>

      <div className="grid md:grid-cols-3 gap-10 mt-8 max-w-4xl mx-auto border-t border-gray-300 pt-6">
        {/* Address Section */}
        <div className="text-center">
          <FaMapMarkerAlt className="text-green-500 text-3xl mx-auto" />
          <h3 className="text-lg font-semibold mt-2">SALKA GLOBAL TECHNOLOGIES PVT. LTD.</h3>
          <p className="text-gray-600 mt-1">
            LTC Tower, A-51 Floor, Unit#19, Sector - 132, <br />
            Express Way, Noida UP 201304
          </p>
        </div>

        {/* Phone Section */}
        <div className="text-center border-l border-r border-gray-300 px-4">
          <FaPhoneAlt className="text-green-500 text-3xl mx-auto" />
          <h3 className="text-lg font-semibold mt-2">Phone Number</h3>
          <p className="text-gray-600 mt-1">+91-9999664020</p>
          <p className="text-gray-600">+91-9595171500</p>
        </div>

        {/* Email Section */}
        <div className="text-center">
          <FaEnvelope className="text-green-500 text-3xl mx-auto" />
          <h3 className="text-lg font-semibold mt-2">Email</h3>
          <p className="text-gray-600 mt-1">info@saukatech.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
