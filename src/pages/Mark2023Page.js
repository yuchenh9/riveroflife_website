import React, { useState } from "react";

const videos = [
  { id: "m6Poa7r3M0U", title: "福音与宗教｜2023.04.23主日敬拜｜李晖牧师" },
  { id: "ifFpf5oeJeI", title: "透过比喻，明白真理｜2023.04.16主日证道｜吕松宇弟兄" },
  { id: "gUKi4JKm2qI", title: "耶稣为何来到世上 2｜2023.03.26主日证道｜李晖牧师" },
  { id: "_tNyonqV9-Y", title: "耶稣为何来到世上 1｜2023.03.26主日敬拜｜李晖牧师" },
  { id: "8Bxcd9Kz-a0", title: "话说神迹 ｜2023.03.19主日证道｜吕松宇弟兄" },
  { id: "60byVPTp57o", title: "兴旺上帝的道｜2023.03.05主日敬拜｜李晖牧师" },
  { id: "kBMrv3ofzzs", title: "跟从耶稣为主得人｜2023.02.19主日敬拜｜李晖牧师" },
  { id: "kzvkkL1QFbM", title: "悔改的生命｜2023.02.12主日证道｜李晖牧师" },
  { id: "NvyQI9Xoe98", title: "悔改的福音｜2023.02.05主日敬拜｜吕松宇弟兄" },
  { id: "mTvtA9KrJLo", title: "耶稣上帝的儿子｜2023.01.29主日证道｜李晖牧师" },
  { id: "OPPe4iWUS5U", title: "福音的起头｜2023.01.22主日证道｜李晖牧师" },
  { id: "p_x0JH4DjHY", title: "教会的异象和使命｜2023.01.15主日证道｜李晖牧师" }
];

function Mark2023Page() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="main-content" style={{ maxWidth: 1200, margin: "0 auto", padding: 24 }}>
      <p style={{fontSize: "30px",textAlign: 'left',marginTop: "40px",marginLeft: "80px", color: '#000000'}}>2023 马可福音</p>
      <h1 style={{ textAlign: "center", position: 'absolute', left: '-9999px' }}>2023 马可福音</h1>
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

export default Mark2023Page; 