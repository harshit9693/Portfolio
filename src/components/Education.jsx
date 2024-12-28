import React from "react";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const educationDetails = [
    {
      id: 1,
      institution: "The Earth Public School",
      year: "2019",
      degree: "10th Grade",
      grade: "92.8%",
    },
    {
      id: 2,
      institution: "The Earth Public School",
      year: "2021",
      degree: "12th Grade",
      grade: "87.6%",
    },
    {
      id: 3,
      institution: "National Institute of Technology Patna",
      year: "2021-25",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      grade: "7.85 CGPA",
    },
  ];

  return (
    <div id="education" className="py-12 bg-gray-50 relative">
      <h1 className="text-center text-3xl lg:text-4xl font-bold text-red-600">
        My Education
      </h1>
      <div className="max-w-5xl mx-auto py-10 px-4 grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
        {educationDetails.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center bg-white border-t-4 border-red-500 rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105"
          >
            <GraduationCap className="text-red-500 w-12 h-12 mb-4" />
            <h2 className="font-bold text-xl text-gray-800 text-center">
              {item.institution}
            </h2>
            <p className="text-gray-600 text-sm mt-2 italic">{item.year}</p>
            <p className="text-gray-700 font-medium mt-3">{item.degree}</p>
            <p className="text-gray-900 font-bold mt-2">Grade: {item.grade}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
