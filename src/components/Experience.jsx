import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Amazon ML Summer School",
      duration: "Summer 2024",
      description:
        "Gained hands-on experience with machine learning techniques, focusing on real-world applications and problem-solving.",
      skills: ["Python", "Machine Learning", "LLMs"],
    },
    {
      id: 2,
      title: "Web Development Internship",
      duration: "2 Months",
      description:
        "Worked as a full-stack developer, creating dynamic and responsive web applications using the MERN stack.",
      skills: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      id: 3,
      title: "Competitive Programming Enthusiast",
      duration: "Ongoing",
      description:
        "Solved over 1200+ DSA problems across various platforms, participating in coding contests and enhancing problem-solving skills.",
      skills: ["C++", "Data Structures", "Algorithms"],
    },
  ];

  return (
    <div id="experience" className="py-10 bg-gray-100 relative">
      <h1 className="text-center text-2xl lg:text-4xl font-bold text-red-500">
        My Experience
      </h1>
      <div className="max-w-6xl mx-auto py-10 px-5">
        <Swiper
          style={{
            "--swiper-pagination-color": "#EF4444",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          }}
          className="mySwiper"
        >
          {experiences.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="border border-gray-400 shadow-lg shadow-red-500 rounded-lg flex flex-col p-6 bg-white">
                  <div className="flex items-center mb-4">
                    <Briefcase className="text-red-500 w-6 h-6 mr-3" />
                    <h2 className="font-bold text-lg text-red-500">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 text-sm italic mb-3">
                    {item.duration}
                  </p>
                  <p className="text-gray-800 mb-4">{item.description}</p>
                  <h3 className="font-semibold text-red-500 mb-2">
                    Skills Learned:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm font-semibold text-red-500 bg-red-100 rounded-full cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <div className="swiper-pagination my-10 gap-1 relative"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Experience;
