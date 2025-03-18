const aboutCards = [
    {
      id: 1,
      title: "Our Mission",
      image: "/path-to-mission-image.jpg",
      icon: "✔️",
      description:
        "At SAUKATICA, our aim is to provide the highest flexibility and quality-driven solutions, ensuring seamless communication.",
    },
    {
      id: 2,
      title: "Our Plan",
      image: "/path-to-plan-image.jpg",
      icon: "📋",
      description:
        "We have a well-planned approach for R&D, ensuring the best possible service for our customers with top-notch management.",
    },
    {
      id: 3,
      title: "Our Vision",
      image: "/path-to-vision-image.jpg",
      icon: "👁️",
      description:
        "We apply strategic industry-driven research to transform telecommunication services with transparency and efficiency.",
    },
  ];
  
  const AboutPage = () => {
    return (
      <div className="py-10 px-5 text-center bg-white">
        <h2 className="text-3xl font-bold">About</h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mt-2"></div>
  
        <p className="max-w-4xl mx-auto mt-6 text-gray-600 text-lg">
          SAUKATICA offers a wide array of professional project services with
          survey-based solutions. We cater to manufacturers, suppliers, service
          providers, and integrators, ensuring top-notch telecom and broadcast
          support.
        </p>
  
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {aboutCards.map((card) => (
            <div
              key={card.id}
              className="bg-white border rounded-lg shadow-md p-5 hover:shadow-lg transition-all"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <div className="text-center mt-4">
                <span className="text-2xl">{card.icon}</span>
                <h3 className="text-xl font-semibold mt-2">{card.title}</h3>
                <p className="text-gray-600 mt-2">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default AboutPage;
  