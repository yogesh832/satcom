import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
  {
    id: 1,
    title: "VSAT Prodelin Offset Antenna In C-Band Ku-Band",
    description:
      "VSAT Prodelin Offset Antenna is C-band Ku-band for satellite broadband applications. Available in (1.2M/1.8M/2.4M/3.8M), C/Ku Band.",
    image: "/path-to-image1.jpg",
  },
  {
    id: 2,
    title: "Touchscreen TWTAs HPA Redundant System",
    description:
      "Comtech Antennas are a key voice interface for monitoring and controlling the network. The redundant system provides multiple layers of backup to ensure signal amplification, and fault detection.",
    image: "/path-to-image2.jpg",
  },
  {
    id: 3,
    title: "Digital Head-End Equipment",
    description:
      "Staka Offers full range of cable and wireless digital head-end equipment including IRDs, modulators, encoders, decoders, & fiber transmitters.",
    image: "/path-to-image3.jpg",
  },
];

const Products = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="py-10 bg-white text-center" data-aos="fade-up">
      <h2 className="text-3xl font-bold">Products</h2>
      <div className="w-16 h-1 bg-green-500 mx-auto mt-2"></div>

      <div className="grid md:grid-cols-3 gap-6 mt-10 px-5">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="relative bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition-all transform hover:scale-105"
            data-aos="zoom-in"
            data-aos-delay={index * 150} // Staggered delay for smooth effect
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-3">{product.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{product.description}</p>

            <button className="border border-gray-700 px-4 py-2 mt-4 text-gray-700 rounded hover:bg-gray-700 hover:text-white transition">
              🛒 Inquire
            </button>
          </div>
        ))}
      </div>

      <button className="mt-8 border border-black px-6 py-2 text-black rounded hover:bg-black hover:text-white transition">
        See All Products
      </button>
    </div>
  );
};

export default Products;
