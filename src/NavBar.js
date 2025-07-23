import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";

const menuItems = [
  { label: "主页", to: "/" },
  {
    label: "关于我们",
    dropdown: [
      { label: "信仰宣言", to: "/declaration" },
      { label: "期待", to: "/expectation" },
      { label: "同工团队", to: "/team" }
    ],
    to: "/about"
  },
  { label: "加入", to: "/join" },
  {
    label: "教会事工",
    dropdown: [
      { label: "福音事工", to: "/gospel-ministry" },
      { label: "门徒建造/小组团契", to: "/discipleship" },
      { label: "大学生事工", to: "/student-ministry" },
      { label: "妇女事工", to: "/women-ministry" },
      { label: "儿童/学生事工", to: "/children-ministry" },
      { label: "社区事工/中文学校", to: "/community-school" }
    ],
    to: "/ministries"
  },
  {
    label: "讲道信息",
    dropdown: [
      { label: "2023 马可福音", to: "/mark-2023" },
      { label: "2022 罗马书", to: "/romans-2022" },
      { label: "2022 约书亚记", to: "/joshua-2022" },
      { label: "2020 创世纪", to: "/genesis-2020" },
      { label: "其他讲道", to: "/other-sermons" }
    ],
    to: "/sermons"
  },
  { label: "活动剪影", to: "/events" },
  { label: "信仰解答", to: "/faq" },
  { label: "奉献", to: "/offering" }
];

// Flatten menu for mobile display
const buildFlatMenu = () => {
  const arr = [];
  menuItems.forEach((item) => {
    arr.push({ label: item.label, to: item.to });
    if (item.dropdown) {
      item.dropdown.forEach((sub) => arr.push({ label: sub.label, to: sub.to }));
    }
  });
  return arr;
};

function NavBar() {
  const [openIdx, setOpenIdx] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleDropdownClick = (to) => {
    setOpenIdx(null);
    navigate(to);
  };

  const toggleMobileMenu = () => setMobileMenuOpen((s) => !s);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("mobile-nav-overlay")) closeMobileMenu();
  };

  const handleMobileItemClick = (to) => {
    closeMobileMenu();
    navigate(to);
  };

  return (
    <div className="nav-bar-outer">
      <div className="nav-title">香槟厄巴纳生命河教会</div>

      {/* Hamburger toggle */}
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <span className={`hamburger-line ${mobileMenuOpen ? "open" : ""}`}></span>
        <span className={`hamburger-line ${mobileMenuOpen ? "open" : ""}`}></span>
        <span className={`hamburger-line ${mobileMenuOpen ? "open" : ""}`}></span>
      </button>

      {/* Desktop navigation */}
      <nav className="nav-bar desktop-nav">
        {menuItems.map((item, idx) => (
          <div
            className="nav-item"
            key={idx}
            onMouseEnter={() => item.dropdown && setOpenIdx(idx)}
            onMouseLeave={() => item.dropdown && setOpenIdx(null)}
          >
            <NavLink
              to={item.to}
              className={({ isActive }) => (isActive ? "nav-link-active" : undefined)}
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
            {item.dropdown && openIdx === idx && (
              <div className="nav-dropdown">
                {item.dropdown.map((sub, subIdx) => (
                  <div
                    className="nav-dropdown-item"
                    key={subIdx}
                    onClick={() => handleDropdownClick(sub.to)}
                  >
                    {sub.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div className="mobile-nav-overlay" onClick={handleOverlayClick}>
          <div className="mobile-nav-menu" onClick={(e) => e.stopPropagation()}>
            {buildFlatMenu().map((item, idx) => (
              <div
                key={idx}
                className="mobile-nav-item"
                onClick={() => handleMobileItemClick(item.to)}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar; 