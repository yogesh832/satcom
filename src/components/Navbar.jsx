import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-3 flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-2xl font-bold text-green-500">SALKA</span>
        <span className="text-2xl font-bold text-white">TECH</span>
      </div>
      <ul className="flex space-x-6">
        {[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Projects", path: "/projects" },
          { name: "Products", path: "/products" },
          { name: "Our Approach", path: "/approach" },
          { name: "Testing Service", path: "/testing-service" },
          { name: "Our Values", path: "/values" },
          { name: "About", path: "/about" },
          { name: "Contact", path: "/contact" },
        ].map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `hover:text-green-400 ${isActive ? "text-green-400" : ""}`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
