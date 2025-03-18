import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSatelliteDish, FaWrench, FaHeadset, FaBroadcastTower, FaProjectDiagram, FaNetworkWired } from "react-icons/fa";

const ServicesSolutions = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="max-w-6xl mx-auto text-center py-12 px-3" data-aos="fade-up">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold">Services & Solutions</h1>

      {/* Underline with green accent */}
      <div className="w-16 border-t-4 border-green-500 mx-auto mt-2"></div>

      {/* Description */}
      <p className="mt-4 text-gray-700 leading-relaxed">
        We provide a variety of telecommunication-based services. Customers get bespoke 
        solutions based on extensive context-relevant R&D and post-completion support. 
        Listed below are some of the ways we can help you bring your envisioned communications 
        infrastructure to life. Click on the links below to know more.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {/* Service Items */}
        <ServiceItem 
          icon={<FaSatelliteDish className="text-green-500 text-3xl" />}
          title="Turnkey Solutions"
          description="SALKATECH provides you with bespoke turnkey-based solutions perfectly suited to your needs."
          animation="fade-up"
        />
        
        <ServiceItem 
          icon={<FaBroadcastTower className="text-green-500 text-3xl" />}
          title="Broadcast Solutions"
          description="We are well-versed in the world of broadcast engineering and have developed a range of professional services to suit your needs."
          animation="fade-up"
        />

        <ServiceItem 
          icon={<FaWrench className="text-green-500 text-3xl" />}
          title="Maintenance Contracts"
          description="After our initial integration, we also provide customers with annual equipment and technical maintenance."
          animation="fade-up"
        />

        <ServiceItem 
          icon={<FaHeadset className="text-green-500 text-3xl" />}
          title="Support"
          description="We allocate an on-call team for all our customers to consult in case of any mission-critical emergencies."
          animation="fade-up"
        />

        <ServiceItem 
          icon={<FaProjectDiagram className="text-green-500 text-3xl" />}
          title="Project Integration"
          description="We help your business set up an infrastructure to access satellites through land-based antenna installations."
          animation="fade-up"
        />

        <ServiceItem 
          icon={<FaNetworkWired className="text-green-500 text-3xl" />}
          title="Infrastructure Setup"
          description="SALKATECH will set up all the communication systems required by your business and ensure a reliable and robust solution."
          animation="fade-up"
        />
      </div>
    </div>
  );
};

// Reusable Service Item Component
const ServiceItem = ({ icon, title, description, animation }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-md hover:shadow-lg transition" data-aos={animation}>
      <div>{icon}</div>
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default ServicesSolutions;
