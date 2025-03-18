const services = [
    {
      id: 1,
      title: "Salka Lab Accreditation",
      image: "/path-to-image1.jpg",
    },
    {
      id: 2,
      title: "Tech Notification",
      image: "/path-to-image2.jpg",
    },
    {
      id: 3,
      title: "Registration",
      image: "/path-to-image3.jpg",
    },
  ];
  
  const TestingServices = () => {
    return (
      <div className="py-10 bg-white text-center">
        <h2 className="text-3xl font-bold">Testing Services</h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mt-2"></div>
  
        <div className="flex justify-center gap-6 mt-10 flex-wrap">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-72 h-48 object-cover"
              />
              <div className="py-3 text-green-600 font-semibold text-lg">
                {service.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TestingServices;
  