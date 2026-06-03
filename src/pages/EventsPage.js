import React from "react";
import useFolderImages from "../hooks/useFolderImages";

function EventsPage() {
  const { images, loading, error } = useFolderImages("events_images");

  return (
    <div className="main-content" style={{ maxWidth: 1100, margin: "0 auto", padding: 24 }}>
      <p style={{fontSize: "30px",textAlign: 'left',marginTop: "40px",marginLeft: "80px", color: '#000000'}}>活动剪影</p>
      <h1 style={{ textAlign: "center", position: 'absolute', left: '-9999px' }}>活动剪影</h1>
      {loading && <p style={{ textAlign: "center" }}>加载图片中…</p>}
      {error && <p style={{ textAlign: "center", color: "#c00" }}>{error}</p>}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 24,
        marginTop: 32
      }}>
        {images.map((img) => (
          <div key={img.src} style={{ boxShadow: "0 2px 8px #0001", borderRadius: 8, overflow: "hidden", background: "#fff" }}>
            <img
              src={img.src}
              alt={img.alt}
              style={{ width: "100%", height: 220, objectFit: "cover", display: "block" }}
              loading="lazy"
            />
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

export default EventsPage;
