import React, { useState } from "react";
import "./FloatingIcons.css"; // Include the CSS for styling
import cfp from "../assets/cfp.png";
import leetcode from "../assets/leetcode.png";
import codeforces from "../assets/codeforces.jpg";
import gfg from "../assets/gfg.png";

const FloatingIcons = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleIcons = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="floating-container">
      {/* Main Icon */}
      <div className="main-icon" onClick={toggleIcons}>
        <img src={cfp} alt="Menu" />
      </div>
      {/* Additional Icons */}
      {isExpanded && (
        <div className="icon-list">
          <a
            href="https://leetcode.com/u/harshit_9693/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-item"
          >
            <img src={leetcode} alt="LeetCode" />
            <span className="icon-label">LeetCode Profile</span>
          </a>
          <a
            href="https://codeforces.com/profile/noobcoder_08"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-item"
          >
            <img src={codeforces} alt="Codeforces" />
            <span className="icon-label">Codeforce Profile</span>
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/hp96930anex/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-item"
          >
            <img src={gfg} alt="GeeksforGeeks" />
            <span className="icon-label">GFG Profile</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default FloatingIcons;
