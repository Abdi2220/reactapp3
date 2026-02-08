import React from "react";
import { appConfig } from "../components/config/appConfig";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Home = () => {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center from-gray-900 via-black to-gray-800 text-white px-6">
        <title>Home</title>
  

        <motion.h2
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-blue-400 text-center tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome {appConfig.appName || "To the Website"}
      </motion.h2>

      <motion.h1
        className="text-1xl md:text-5xl lg:text-6xl font-bold mb-8 text-blue-300 font-sans"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        CHECK OUT {appConfig.appName || "Different Data"}
      </motion.h1>



        <motion.div
          className="grid grid-cols-3 gap-6 p-5 text-blue-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Link to="/post">
            <button className=" border border-white hover:border-blue-500 px-6 py-3 rounded-xl text-lg font-medium transition-all duration-200">
              Go to Post
            </button>
          </Link>
  
          <Link to="/users">
            <button className="border border-white hover:border-blue-500 px-6 py-3 rounded-xl text-lg font-medium transition-all duration-200">
              Go to Users
            </button>
          </Link>

          <Link to="/todos">
            <button className="border border-white hover:border-blue-500 px-6 py-3 rounded-xl text-lg font-medium transition-all duration-200">
              Go to To-do
            </button>
          </Link>
        </motion.div>
      </section>
    );
  };
  
  export default Home;