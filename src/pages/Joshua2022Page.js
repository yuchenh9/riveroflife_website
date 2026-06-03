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
    <div className="main-content" style={{ maxWidth: 1200, margin: "0 auto", padding: 24 }}>
      <p style={{fontSize: "30px",textAlign: 'left',marginTop: "40px",marginLeft: "80px", color: '#000000'}}>2022 约书亚记</p>
      <h1 style={{ textAlign: "center", position: 'absolute', left: '-9999px' }}>2022 约书亚记</h1>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 32 }}>
        <div style={{ width: "100%", maxWidth: 900, aspectRatio: "16/9", marginBottom: 24, background: "#000", borderRadius: 8, overflow: "hidden" }}>
          <iframe
            key={videos[current].id}
            src={`https://www.youtube.com/embed/${videos[current].id}`}
            title={videos[current].title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: "100%", height: "100%", border: 0 }}
          />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, width: "100%", maxWidth: 900 }}>
          {videos.map((video, idx) => (
            <div
              key={video.id}
              onClick={() => setCurrent(idx)}
              style={{
                cursor: "pointer",
                border: idx === current ? "2px solid #1976d2" : "1px solid #ccc",
                borderRadius: 8,
                background: idx === current ? "#e3f2fd" : "#fff",
                boxShadow: idx === current ? "0 2px 8px #1976d233" : "0 1px 4px #0001",
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

export default Joshua2022Page; 