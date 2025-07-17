import React, { useState } from "react";

const videos = [
  { id: "ajN8D5Zoj5g", title: "让万国看见你的荣耀｜2022.08.14 主日证道｜李晖牧师" },
  { id: "kvt4za2unx8", title: "上帝的奥秘已经显明｜2022.08.21 主日证道｜李晖牧师" },
  { id: "36_dw4LLIrM", title: "全人类的拯救和盼望｜2020.07.24 主日证道｜吕松宇弟兄" },
  { id: "98EvtINHODA", title: "爱人如己｜2022.04.24 主日证道｜吕松宇弟兄" },
  { id: "D-Kr58FdVbc", title: "出黑暗入光明｜2022.05.29 主日证道｜吕松宇弟兄" },
  { id: "RGmdwZQFNPY", title: "信仰与政治｜2022.02.27 主日证道｜吕松宇弟兄" },
  { id: "RJngEFx_0JA", title: "在爱中生活｜2022.05.08 主日证道｜李晖牧师" },
  { id: "TBw2fLCSRrs", title: "不要论断人｜2022.06.05 主日证道｜刘勇弟兄" },
  { id: "cNbDpK98hGU", title: "宣讲使人顺服的福音｜2020.07.31 主日证道｜李晖牧师" },
  { id: "f2PQu-ffQ7c", title: "彼此接纳｜2022.05.22 主日证道｜李晖牧师" },
  { id: "fFE50wcC-WY", title: "作福音的祭司｜2022.07.17 主日证道｜李晖牧师" },
  { id: "hlUQHQ_KavY", title: "彼此建造上帝的工程｜2022.07.10 主日证道｜李晖牧师" },
  { id: "isVgZKABi5M", title: "劝勉供给殷勤好客｜2022,04.10 主日证道｜李晖牧师" },
  { id: "iscFsMQHYUM", title: "献上自己，为主所用 | 2022.01.23 主日证道| 吕松宇弟兄" },
  { id: "kaRkhl3LCmE", title: "谦卑合理待人待己 | 2022.01.30 主日证道 | 李晖牧师" }
];

function Romans2022Page() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="main-content" style={{ maxWidth: 1200, margin: "0 auto", padding: 24 }}>
      <p style={{fontSize: "30px",textAlign: 'left',marginTop: "40px",marginLeft: "80px", color: '#000000'}}>2022 罗马书</p>
      <h1 style={{ textAlign: "center", position: 'absolute', left: '-9999px' }}>2022 罗马书</h1>
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

export default Romans2022Page; 