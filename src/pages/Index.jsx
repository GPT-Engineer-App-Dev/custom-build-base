import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Interior Design Portfolio</h1>
        <p className="text-lg mb-4">Explore my work and services, and feel free to get in touch!</p>
        <div className="space-x-4">
          <Link to="/introduction" className="px-4 py-2 bg-blue-500 text-white rounded">Introduction</Link>
          <Link to="/portfolio" className="px-4 py-2 bg-blue-500 text-white rounded">Portfolio</Link>
          <Link to="/services" className="px-4 py-2 bg-blue-500 text-white rounded">Services</Link>
          <Link to="/contact" className="px-4 py-2 bg-blue-500 text-white rounded">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Index;