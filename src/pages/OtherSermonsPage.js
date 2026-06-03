import React, { useState } from "react";

const videos = [
  { id: "2GX1kIWuAmU", title: "道成肉身，住在我们中间｜2022.12.25主日证道｜吕松宇" },
  { id: "JUNxyqx3QGs", title: "天国的使者｜2023.01.01主日证道｜傅徳荆传道" },
  { id: "Kdg2J1cGpqg", title: "我为什么要成为教会成员？｜2023.02.26 主日证道｜李晖牧师" },
  { id: "QtPhZFhC9FU", title: "属灵的耕种 ｜2022.09.25 主日证道｜ Michael McQueen" },
  { id: "WknM_hbNLG0", title: "门徒之道｜2023.01.08主日证道｜李晖牧师" },
  { id: "yAoyjmkodTI", title: "教会成员制｜2022.10.30 主日敬拜｜Michael McQueen" },
  { id: "1SKsktcABfA", title: "我们是一家人|2021.12.26 主日证道| Jim Graham" },
  { id: "3rq4Nvh2biA", title: "主的驴驹 ｜2022.08.07 主日证道 ｜洪亮弟兄" },
  { id: "Tz3iJ_QXLC8", title: "父亲的心 ｜2022.06.19 主日证道 ｜李晖牧师" },
  { id: "aiJ_a4niZGY", title: "如何预备主的再来 ｜2022.04.17 复活节主日证道 ｜李晖牧师" },
  { id: "c61t8MKsvoM", title: "蒙神喜悦的服恃 ｜ 2022.03.27 主日敬拜 ｜常运朝" },
  { id: "mCJJwvaDkg4", title: "做主的门徒 - 活出主的生命 | 2022.01.16 主日证道 | 李晖牧师" },
  { id: "nhAhvbaIJ8Y", title: "持守信仰 | 2022.05.01 主日证道 ｜ John Yi" },
  { id: "o8WEIwo1_h8", title: "你们当寻求我的面 ｜ 2022.03.20 主日证道 ｜ 李晖牧师" },
];

function OtherSermonsPage() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="main-content" style={{ maxWidth: 1200, margin: "0 auto", padding: 24 }}>
      <p style={{fontSize: "30px",textAlign: 'left',marginTop: "40px",marginLeft: "80px", color: '#000000'}}>其他讲道</p>
      <h1 style={{ textAlign: "center", position: 'absolute', left: '-9999px' }}>其他讲道</h1>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 32 }}>
        <div style={{ width: "100%", maxWidth: 900, aspectRatio: "16/9", marginBottom: 24, background: "#000", borderRadius: 8, overflow: "hidden" }}>
          <iframe
            key={videos[selected].id}
            src={`https://www.youtube.com/embed/${videos[selected].id}`}
            title={videos[selected].title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: "100%", height: "100%", border: 0 }}
          />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, width: "100%", maxWidth: 900 }}>
          {videos.map((video, idx) => (
            <div
              key={video.id}
              onClick={() => setSelected(idx)}
              style={{
                cursor: "pointer",
                border: idx === selected ? "2px solid #1976d2" : "1px solid #ccc",
                borderRadius: 8,
                background: idx === selected ? "#e3f2fd" : "#fff",
                boxShadow: idx === selected ? "0 2px 8px #1976d233" : "0 1px 4px #0001",
                overflow: "hidden",
                transition: "border 0.2s, background 0.2s"
              }}
            >
              <img
                src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                style={{ width: "100%", aspectRatio: "16/9", display: "block" }}
              />
              <div style={{ padding: 8, fontSize: 14, textAlign: "center" }}>{video.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="full-width-line" />
      <p style={{fontSize: "15px",textAlign: 'center', color: '#000000',margin: '32px 0 16px'}}>
        Copyright &copy; {new Date().getFullYear()} 香槟厄巴纳生命河教会
      </p>
    </div>
  );
}

export default OtherSermonsPage; 