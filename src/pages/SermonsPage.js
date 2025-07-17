import React from "react";
import { Link } from "react-router-dom";

const sermonSeries = [
  {
    title: "2023 马可福音",
    route: "/mark-2023"
  },
  {
    title: "2022 罗马书",
    route: "/romans-2022",
  },
  {
    title: "2022 约书亚记",
    route: "/joshua-2022",
  },
  {
    title: "2020 创世纪",
    route: "/genesis-2020",
  },
  {
    title: "其他讲道",
    route: "/other-sermons",
  }
];

function SermonsPage() {
  return (
    <div className="main-content" style={{ maxWidth: 1000, margin: "0 auto", padding: 24 }}>
      <p style={{fontSize: "30px",textAlign: 'left',marginTop: "40px",marginLeft: "80px", color: '#000000'}}>讲道信息</p>
      <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 32,
    marginTop: 40,
    // No need for justifyItems or gridTemplateColumns
   }}>
        {sermonSeries.map(series => (
          <div
            key={series.title}
            style={{
              border: "1px solid #bbbbbb",
              borderRadius: 0,
              background: "#ffffff",
              padding: 12,                // reduced padding
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              maxWidth: 400,
              width: "100%",
              boxSizing: "border-box",
              maxHeight: 150,             // add scroll if content overflows
            }}
          >
            <Link to={series.route} style={{
              color: "#000000",
              padding: "8px 24px",
              fontWeight: 600,
              fontSize: "1em",
            }}><h2 style={{ color: "#000000", fontWeight: 700,textDecoration: "underline", fontSize: "1.2em", marginBottom: 12 }}>{series.title}</h2>
            </Link>
            <Link to="/" style={{
              color: "#000000",
              padding: "8px 24px",
              fontWeight: 600,
              fontSize: "1em",
            }}><h2 style={{ color: "#aaaaaa", fontWeight: 700, fontSize: "0.9em", marginBottom: 12 }}>香槟厄巴纳生命河教会</h2>
            </Link>
            <div style={{ marginBottom: 16, color: "#000000", minHeight: 40 }}>{series.description}</div>
            
          </div>
        ))}
      </div>
      <div className="full-width-line" />
      <p style={{fontSize: "15px",textAlign: 'center', color: '#000000',margin: '32px 0 16px'}}>
        Copyright &copy; {new Date().getFullYear()} 香槟厄巴纳生命河教会
      </p>
    </div>
  );
}

export default SermonsPage; 