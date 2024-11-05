import { useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };

  const navItems = [
    {
      to: "/",
      label: "Home",
      description: "Return to our homepage",
      iconPath:
        "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
      to: "/about-us",
      label: "About Us",
      description: "Learn more about our company",
      iconPath: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      to: "/contact-us",
      label: "Contact",
      description: "Get in touch with us",
      iconPath:
        "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-purple-100">
      <main className="flex-grow container max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl mb-4 heading ">
            Oops! Page Not Found
          </h1>
          <p className="mb-8 description">
            It seems you've wandered off the beaten path.
          </p>
        </motion.div>

        {/* Add a cool 404 not found image here */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=300&fit=crop"
            alt="Lost in space illustration"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div> */}

        {/* Search Bar to search the pages on 404 page */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-md mx-auto mb-12"
        >
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              placeholder="Search for pages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow px-4 py-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
            >
              Search
            </button>
          </form>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">
            You might be interested in:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={item.iconPath}
                  />
                </svg>
                <h3 className="font-semibold text-purple-800">{item.label}</h3>
                <p className="text-purple-600">{item.description}</p>
              </NavLink>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
