import React, { useState } from "react";

const videos = [
  { id: "1am_cS62XqM", title: "上帝实现他的应许 | 2020.11.29 主日证道 | Nathan" },
  { id: "4k3IhJg8u48", title: "求主帮我明白他的话 | 09.27.2020 主日证道 | 荘哲勤弟兄" },
  { id: "9133XM-QjQc", title: "金子般称义的信心 | 2020.11.08" },
  { id: "FEscphUftvM", title: "基督徒的十一奉献 | 2020.11.01 主日证道 | 李晖牧师" },
  { id: "Js4DgaPJf70", title: "去分散到全地 | 10.04.2020 主日证道 | 李晖牧师" },
  { id: "QXRztQORzig", title: "挪亚之约 | 09.06.2020主日证道 | 李晖牧师" },
  { id: "SXnyph-FBeY", title: "上帝的呼召 | 10.11.2020 主日证道 | 李晖牧师" },
  { id: "XSNO_AOFdPw", title: "和平之道 | 2020.10.18 主日证道 | 李晖牧师" },
  { id: "YrF_oHHbhTs", title: "耶稣基督为永远的大祭司 | 10.25.2020 主日证道 | 李晖牧师" },
  { id: "egXE-TuLu1s", title: "人的盼望 | 06.07.2020主日证道 | 李晖牧师" },
  { id: "mJwukeKqF7A", title: "是谁的儿女 | 09.20.2020主日证道 | 李晖牧师" },
  { id: "vh9AvNTikpg", title: "成为上帝的儿女 | 2020.11.15 主日证道 | 李晖牧师" },
];

function Genesis2020Page() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="main-content" style={{ maxWidth: 1200, margin: "0 auto", padding: 24 }}>
      <p style={{fontSize: "30px",textAlign: 'left',marginTop: "40px",marginLeft: "80px", color: '#000000'}}>2020 创世纪</p>
      <h1 style={{ textAlign: "center", position: 'absolute', left: '-9999px' }}>2020 创世纪</h1>
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

export default Genesis2020Page; 