import React from "react";

const images = [
  {
    src: process.env.PUBLIC_URL + "/events_images/Baptism.jpeg",
    alt: "Baptism"
  },
  {
    src: process.env.PUBLIC_URL + "/events_images/DSC04898.jpeg",
    alt: "DSC04898"
  },
  {
    src: process.env.PUBLIC_URL + "/events_images/DSC04914-8.jpeg",
    alt: "DSC04914-8"
  },
  {
    src: process.env.PUBLIC_URL + "/events_images/2023-TBF-Graduation-BBQ.jpg",
    alt: "2023 TBF Graduation BBQ"
  },
  {
    src: process.env.PUBLIC_URL + "/events_images/Fellowship-1.jpeg",
    alt: "Fellowship-1"
  },
  {
    src: process.env.PUBLIC_URL + "/events_images/2021-Christmas-1.jpeg",
    alt: "2021 Christmas"
  },
  {
    src: process.env.PUBLIC_URL + "/events_images/2021-Summer-PartyJPG-1.jpg",
    alt: "2021 Summer Party"
  },
  {
    src: process.env.PUBLIC_URL + "/events_images/20210.jpg",
    alt: "2021 中秋特别聚会"
  },
  {
    src: process.env.PUBLIC_URL + "/events_images/IMG_5594.jpg",
    alt: "IMG_5594"
  }
];

function EventsPage() {
  return (
    <div className="main-content" style={{ maxWidth: 1100, margin: "0 auto", padding: 24 }}>
      <p style={{fontSize: "30px",textAlign: 'left',marginTop: "40px",marginLeft: "80px", color: '#000000'}}>活动剪影</p>
      <h1 style={{ textAlign: "center", position: 'absolute', left: '-9999px' }}>活动剪影</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 24,
        marginTop: 32
      }}>
        {images.map((img, idx) => (
          <div key={idx} style={{ boxShadow: "0 2px 8px #0001", borderRadius: 8, overflow: "hidden", background: "#fff" }}>
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