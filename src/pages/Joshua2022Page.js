import React, { useState } from "react";

const videos = [
  { id: "4s6vNGrrcew", title: "欺骗的代价｜2022.11.20 主日证道｜李晖牧师" },
  { id: "CgO4XuvU-Dw", title: "定晴在基督上 ｜2022.09.18 主日证道｜李晖牧师" },
  { id: "J9ZfV4IVxRc", title: "彼此相顾，携手进永生 ｜2022.09.11 主日证道 ｜李晖牧师" },
  { id: "KfrOGDQt110", title: "远离罪恶，追求圣洁｜2022.01.06 主日证道 ｜吕松宇弟兄" },
  { id: "Mp_aC8qDW4E", title: "从诅咒到祝福 ｜2022.11.13 主日证道｜李晖牧师" },
  { id: "UF0iZ7eJ6vQ", title: "信靠顺服承受产业 ｜2022.09.04 主日证道｜李晖牧师" },
  { id: "WT-inK6FAxU", title: "得胜之路 ｜2022.10.23 主日证道 ｜ 李晖牧师" },
  { id: "af_yqiRiuwM", title: "从误解到和好｜2022.12.11主日证道｜ Joel Schrader" },
  { id: "anJMN4GaoQI", title: "跟随上帝之路 ｜2022.10.02 主日敬拜 ｜李晖牧师" },
  { id: "hQWaVbRzJxE", title: "完全跟随上帝的迦勒 ｜2022.12.04主日证道｜李晖牧师" },
  { id: "lbXQvWuLT7A", title: "让后代学习敬畏上帝｜2022.10.09 主日证道｜李晖牧师" },
  { id: "nF3AlHgPbhA", title: "约书亚的领导力｜2022.11.27主日证道｜李晖牧师" },
  { id: "nNRPxlFXLvo", title: "去除污秽跟随上帝 ｜2022.10.16主日讲道 ｜李晖牧师" },
  { id: "o_uP4IP3JwE", title: "选择侍奉上帝｜2022.12.18 主日敬拜｜李晖牧师" },
  { id: "yHdg5DJj0T8", title: "进入应许之地 ｜2022.08.28 主日证道｜吕松宇弟兄" }
];

function Joshua2022Page() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="main-content" style={{ maxWidth: 1100, margin: "0 auto", padding: 24 }}>
      <h1 style={{ textAlign: "center", marginBottom: 32 }}>2022 约书亚记</h1>
      {/* Large main player */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 32 }}>
        <iframe
          width="100%"
          height="480"
          src={`https://www.youtube.com/embed/${videos[current].id}`}
          title={videos[current].title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ maxWidth: 900, width: "100%", borderRadius: 12, background: "#000" }}
        ></iframe>
        <div style={{ fontWeight: 600, fontSize: 20, textAlign: "center", marginTop: 16 }}>{videos[current].title}</div>
      </div>
      {/* Video grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
        {videos.map((video, idx) => (
          <div
            key={video.id}
            style={{
              background: idx === current ? "#e3f2fd" : "#fff",
              borderRadius: 12,
              boxShadow: "0 2px 8px #0001",
              padding: 16,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              border: idx === current ? "2px solid #1976d2" : "2px solid transparent",
              transition: "border 0.2s, background 0.2s"
            }}
            onClick={() => setCurrent(idx)}
          >
            <div style={{ display: "block", width: "100%", position: "relative", borderRadius: 8, overflow: "hidden", marginBottom: 12 }}>
              <img
                src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                style={{ width: "100%", borderRadius: 8, aspectRatio: "16/9", objectFit: "cover", opacity: idx === current ? 0.7 : 1 }}
              />
              <span style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "rgba(0,0,0,0.6)",
                borderRadius: "50%",
                width: 56,
                height: 56,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="18" fill="#fff" fillOpacity="0.8" />
                  <polygon points="14,11 27,18 14,25" fill="#e53935" />
                </svg>
              </span>
            </div>
            <div style={{ fontWeight: 500, fontSize: 16, textAlign: "center", lineHeight: 1.5 }}>{video.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Joshua2022Page; 