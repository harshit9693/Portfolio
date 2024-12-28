import React from "react";
import gmail from "../assets/gmail.jpeg";
import linkedin from "../assets/linkedin.png";
import github from "../assets/Github.png";
import Lottie from "lottie-react";
import contact from "../assets/Contact.json";

const Contact = () => {
  return (
    <section
      id="contact"
      className="z-50 bg-gray-800 relative py-10 px-5 md:px-0"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left Section */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-red-500">
              Get in Touch
            </h2>
            <p className="text-sm md:text-base text-white/85">
              I'm always open to new opportunities and collaboration. Feel free
              to reach out!
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="mailto:harshitkumar969300@gmail.com"
                className="hover:opacity-80"
              >
                <img
                  src={gmail}
                  alt="Email Harshit Kumar"
                  className="h-8 w-8"
                />
              </a>
              <a
                href="https://github.com/harshit9693"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <img src={github} alt="GitHub" className="h-8 w-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/harshit-kumar-02a607251/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <img src={linkedin} alt="LinkedIn" className="h-8 w-8" />
              </a>
            </div>
            <Lottie
              animationData={contact}
              className="w-[250px] mx-auto lg:w-[400px] md:mx-0"
            />
          </div>

          {/* Right Section (Form) */}
          <form className="w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-5 md:p-10 space-y-4">
            <h1 className="text-gray-900 text-2xl md:text-4xl font-bold">
              Contact Me
            </h1>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring focus:ring-red-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring focus:ring-red-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter Your Message"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-400 focus:ring focus:ring-red-200 focus:ring-opacity-50"
              />
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg w-full md:w-auto hover:bg-red-600 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
