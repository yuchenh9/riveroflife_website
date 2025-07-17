import React from "react";

const images = [
  {
    src: "https://i0.wp.com/riveroflifecu.org/wp-content/uploads/2023/08/Baptism.jpeg?resize=1024%2C683&ssl=1",
    alt: "Baptism"
  },
  {
    src: "https://i0.wp.com/riveroflifecu.org/wp-content/uploads/2023/08/DSC04898.jpeg?resize=1024%2C683&ssl=1",
    alt: "DSC04898"
  },
  {
    src: "https://i0.wp.com/riveroflifecu.org/wp-content/uploads/2023/08/DSC04914-8.jpeg?resize=1024%2C683&ssl=1",
    alt: "DSC04914-8"
  },
  {
    src: "https://i0.wp.com/riveroflifecu.org/wp-content/uploads/2023/08/2023-TBF-Graduation-BBQ.jpg?resize=1024%2C768&ssl=1",
    alt: "2023 TBF Graduation BBQ"
  },
  {
    src: "https://i0.wp.com/riveroflifecu.org/wp-content/uploads/2023/08/Fellowship-1.jpeg?resize=1024%2C768&ssl=1",
    alt: "Fellowship-1"
  },
  {
    src: "https://i0.wp.com/riveroflifecu.org/wp-content/uploads/2023/08/2021-Christmas-1.jpeg?resize=1024%2C683&ssl=1",
    alt: "2021 Christmas"
  },
  {
    src: "https://i0.wp.com/riveroflifecu.org/wp-content/uploads/2023/08/2021-Summer-PartyJPG-1.jpg?resize=1024%2C683&ssl=1",
    alt: "2021 Summer Party"
  },
  {
    src: "https://i0.wp.com/riveroflifecu.org/wp-content/uploads/2023/08/2021-%E4%B8%AD%E7%A7%8B%E7%89%B9%E5%88%AB%E8%81%9A%E4%BC%9A-1.jpg?resize=1024%2C768&ssl=1",
    alt: "2021 中秋特别聚会"
  },
  {
    src: "https://i0.wp.com/riveroflifecu.org/wp-content/uploads/2023/08/IMG_5594.jpg?resize=1024%2C683&ssl=1",
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