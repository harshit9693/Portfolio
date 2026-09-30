import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "RailPrahari",
    company: "Centre for Railway Information Systems (CRIS)",
    role: "Young Professional",
    duration: "Jan 2026 - Present",
    points: [
      "Train escorting and crowd management app for railway officers",
      "Real-time face detection for officer monitoring and identification",
      "AI-powered crowd density analysis",
      "E-train patrolling with digital duty logs and route tracking",
      "QR-based observation capture and reporting",
      "Automated attendance tracking and secure role-based access",
    ],
    skills: ["Flutter", "Dart", "AI/ML"],
  },
  {
    id: 2,
    title: "RailMadad: GRP Integration",
    company: "Centre for Railway Information Systems (CRIS)",
    role: "Young Professional",
    duration: "Jan 2026 - Present",
    points: [
      "Software for GRP to onboard on RailMadad",
      "Pipeline to handle GRP-related issues within RailMadad",
    ],
    skills: ["Full-Stack", "Workflow Automation"],
  },
  {
    id: 3,
    title: "Bellpost",
    company: "Gurugram, Haryana",
    role: "Software Engineer (Sep - Dec 2025), Frontend Engineer (Mar - Aug 2025)",
    duration: "Mar 2025 - Dec 2025",
    points: [
      "Built cross-platform mobile apps with Flutter and Dart",
      "Designed and optimized high-performance search systems",
      "Integrated analytics to support data-driven decisions",
      "Implemented UI/UX and API integrations with cross-functional teams",
    ],
    skills: ["Flutter", "Dart", "Search", "Analytics"],
  },
  {
    id: 4,
    title: "GfG SDE Internship Challenge Hack-a-thon",
    company: "GeeksforGeeks",
    role: "Participant",
    duration: "Apr 2024",
    points: [
      "Built an AI chatbot answering queries from ed-tech course buyers",
      "Fallback to a doubt assistant when users stay unsatisfied",
      "Feedback prompt after resolution, with chats shared with the sales team",
      "Transcripts stored in SQL Server and downloadable as CSV",
    ],
    skills: ["AI Chatbot", "SQL Server"],
  },
  {
    id: 5,
    title: "Amazon ML School",
    company: "Amazon",
    role: "Participant",
    duration: "2024",
    points: [
      "Hands-on machine learning with a focus on real-world problems",
      "Worked with Python and large language models",
    ],
    skills: ["Python", "Machine Learning", "LLMs"],
  },
  {
    id: 6,
    title: "Competitive Programming",
    company: "LeetCode, Codeforces, GeeksforGeeks",
    role: "Knight on LeetCode (max rating 1855)",
    duration: "Ongoing",
    points: [
      "850+ LeetCode problems solved, top 5% globally",
      "Regular contest participation on Codeforces and GeeksforGeeks",
    ],
    skills: ["C++", "Data Structures", "Algorithms"],
  },
];

const Experience = () => {
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
          autoplay={{ delay: 6000, pauseOnMouseEnter: true }}
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
          {experiences.map((item) => (
            <SwiperSlide key={item.id} className="!h-auto">
              <div className="h-full border border-gray-400 shadow-lg shadow-red-500 rounded-lg flex flex-col p-6 bg-white">
                <div className="flex items-center mb-2">
                  <Briefcase className="text-red-500 w-6 h-6 mr-3 shrink-0" />
                  <h2 className="font-bold text-lg text-red-500">
                    {item.title}
                  </h2>
                </div>
                <p className="text-gray-900 font-semibold text-sm">
                  {item.company}
                </p>
                <p className="text-gray-700 text-sm">{item.role}</p>
                <p className="text-gray-600 text-sm italic mb-3">
                  {item.duration}
                </p>
                <ul className="list-disc pl-5 text-gray-800 mb-4 space-y-1 text-sm">
                  {item.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <h3 className="font-semibold text-red-500 mb-2 mt-auto">
                  Skills:
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
          ))}
          <div className="swiper-pagination my-10 gap-1 relative"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Experience;
