import React from "react";
import Portfolio from "../assets/Portfolio.png";
import SpicyBites from "../assets/SpicyBites.png";
import Youtube from "../assets/Youtube.png";
import Webelite from "../assets/Webelite.png";
import Supercar from "../assets/Supercar.png";
import BookStore from "../assets/bookstore.jpeg";
import Cards from "./Cards";
import chatbot from "../assets/chatbot.png";
import wca from "../assets/wca.png";
import news from "../assets/dn.png";

const Projects = () => {
  const projectJson = [
    {
      title: "BookStore",
      desc: "Dynamic platform where users can buy and sell old books as well as purchase new ones",
      image: BookStore,
      live: "https://bookstore-frontend-kzjs.onrender.com/",
      github: "https://github.com/harshit9693/BookStore",
    },
    {
      title: "ChatBot",
      desc: "AI chat bot to answer the query of the users coming to purchase courses on any ed-tech website",
      image: chatbot,
      live: "https://github.com/harshit9693/Chatbot",
      github: "https://github.com/harshit9693/Chatbot",
    },
    {
      title: "News and Payout Dashboard",
      desc: "A responsive web application that provides a dashboard for viewing news articles and managing payouts. The application features user authentication, search and filter capabilities, and export functionality.",
      image: news,
      live: "https://news-dashboard-j886.onrender.com/",
      github: "https://github.com/harshit9693/news-dashboard",
    },
    {
      title: "Whatsapp Chat Analyzer",
      desc: "A tool that allows you to analyze and extract insights from WhatsApp chat exports",
      image: wca,
      live: "https://github.com/harshit9693/Whatsapp-Chat-Analyzer",
      github: "https://github.com/harshit9693/Whatsapp-Chat-Analyzer",
    },
  ];

  return (
    <section id="projects" className="relative bg-gray-700 py-10 px-4">
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {projectJson.map((items, index) => {
            return (
              <div
                key={index}
                className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={items.image}
                  alt={items.title}
                  className="w-full h-56 object-cover object-center transition-transform duration-300 transform hover:scale-105"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {items.title}
                  </h3>
                  <p className="mt-2 text-gray-700">{items.desc}</p>
                  <div className="mt-4 flex space-x-4">
                    <a
                      href={items.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 hover:underline"
                    >
                      View Live
                    </a>
                    <a
                      href={items.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
