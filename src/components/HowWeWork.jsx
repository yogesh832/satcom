import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    id: 1,
    title: "Site Preparation",
    image: "/path-to-image1.jpg",
  },
  {
    id: 2,
    title: "Installation & Commissioning",
    image: "/path-to-image2.jpg",
  },
  {
    id: 3,
    title: "Acceptance Testing",
    image: "/path-to-image3.jpg",
  },
  {
    id: 4,
    title: "Final Inspection",
    image: "/path-to-image4.jpg",
  },
  {
    id: 5,
    title: "Quality Assurance",
    image: "/path-to-image5.jpg",
  },
  {
    id: 6,
    title: "Project Handover",
    image: "/path-to-image6.jpg",
  },
];

const HowWeWork = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="py-10 bg-white text-center" data-aos="fade-up">
      <h2 className="text-3xl font-bold">How We Work</h2>
      <div className="w-16 h-1 bg-green-500 mx-auto mt-2"></div>

      <div className="grid md:grid-cols-3 gap-6 mt-10 px-5">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="relative bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition-all transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={index * 150} // Staggered effect
          >
            {/* Step Number */}
            <div className="absolute top-2 left-2 bg-green-500 text-white text-sm px-3 py-1 rounded-full">
              Step {step.id}
            </div>

            <img
              src={step.image}
              alt={step.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-3">{step.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;
