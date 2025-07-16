import React, { useState } from "react";
import "./NavBar.css";

const menuItems = [
  { label: "主页" },
  {
    label: "关于我们",
    dropdown: ["信仰宣言", "期待", "同工团队"]
  },
  { label: "加入" },
  {
    label: "教会事工",
    dropdown: [
      "福音事工",
      "门徒建造/小组团契",
      "大学生事工",
      "妇女事工",
      "儿童/学生事工",
      "社区事工/中文学校"
    ]
  },
  {
    label: "讲道信息",
    dropdown: [
      "2023 马可福音",
      "2022 罗马书",
      "2022 约书亚记",
      "2020 创世纪",
      "其他讲道"
    ]
  },
  { label: "活动剪影" },
  { label: "信仰解答" },
  { label: "奉献" }
];

function NavBar() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="nav-bar-outer">
      <div className="nav-title">香槟厄巴纳生命河教会</div>
      <nav className="nav-bar">
        {menuItems.map((item, idx) => (
          <div
            className="nav-item"
            key={idx}
            onMouseEnter={() => item.dropdown && setOpenIdx(idx)}
            onMouseLeave={() => item.dropdown && setOpenIdx(null)}
          >
            {item.label}
            {item.dropdown && <span className="nav-arrow">▼</span>}
            {item.dropdown && openIdx === idx && (
              <div className="nav-dropdown">
                {item.dropdown.map((sub, subIdx) => (
                  <div className="nav-dropdown-item" key={subIdx}>{sub}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

export default NavBar; 