import React from "react";

const Contact = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <p className="text-lg">
        If you would like to discuss a project or have any questions, please feel free to contact me.
      </p>
      <form className="mt-4">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
          <input className="w-full p-2 border border-gray-300 rounded" type="text" id="name" name="name" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
          <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" name="email" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
          <textarea className="w-full p-2 border border-gray-300 rounded" id="message" name="message" rows="4" required></textarea>
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded" type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;