const projects = [
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
      title: "Equipment Setup",
      image: "/path-to-image4.jpg",
    },
    {
      id: 5,
      title: "Antenna Installation",
      image: "/path-to-image5.jpg",
    },
    {
      id: 6,
      title: "Cable Management",
      image: "/path-to-image6.jpg",
    },
  ];
  
  const Projects = () => {
    return (
      <div className="py-10 bg-white text-center">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mt-2"></div>
  
        <div className="grid md:grid-cols-3 gap-6 mt-10 px-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="py-3 text-black font-semibold text-lg">
                {project.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;
  