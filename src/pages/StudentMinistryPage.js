import React from "react";

const galleryImages = [
  {
    src: process.env.PUBLIC_URL + "/images%20copy/20190602-151619_orig-e1744838455976.webp",
    alt: "学生团契活动1"
  },
  {
    src: process.env.PUBLIC_URL + "/images%20copy/Fellowship-1-e1744837949133.webp",
    alt: "学生团契活动2"
  }
];

function StudentMinistryPage() {
  return (
    <div className="main-content" style={{ maxWidth: 1000, margin: "0 auto", padding: 24 }}>
      <h1 style={{ textAlign: "center" }}>大学生事工</h1>
      {/* Scripture block */}
      <section style={{ margin: "32px 0" }}>
        <div style={{
          background: "#fff",
          borderRadius: 10,
          padding: "24px 16px",
          textAlign: "center",
          fontWeight: 600,
          fontSize: "1.2em",
          color: "#222",
          boxShadow: "0 2px 8px #0001"
        }}>
          不可叫人小看你年轻，<br />总要在言语、行为、爱心、信心 、清洁上，<br />​都作信徒的榜样。<br /><br /><em style={{ fontWeight: 400, color: "#555" }}>​- 提摩太前书 4:12</em>
        </div>
      </section>
      <hr style={{ margin: "32px 0" }} />
      {/* Ministry intro */}
      <section style={{ margin: "32px 0" }}>
        <h2 style={{ textAlign: "center", color: "#0693e3", fontWeight: 700 }}>提摩太圣经团契</h2>
        <p style={{ fontSize: "1.1em", lineHeight: 2 }}>
          我们是属于生命河教会的学生团契，提摩太圣经团契，同时也是在伊利诺伊大学正式注册的学生组织。我们的名字由来是圣经中的提摩太前书4:12。
        </p>
        <p style={{ fontSize: "1.1em", lineHeight: 2 }}>
          我们的使命是建立一个共同学习圣经的社区平台，服事学生，建造学生领袖，将福音传至地极。
        </p>
      </section>
      {/* Gallery */}
      <section style={{ margin: "32px 0" }}>
        <h3 style={{ textAlign: "center", color: "#0693e3", fontWeight: 700 }}>相册</h3>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", alignItems: "center", marginTop: 16 }}>
          {galleryImages.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.alt}
              style={{ maxWidth: 320, width: "100%", borderRadius: 10, boxShadow: "0 2px 12px #0001", marginBottom: 12 }}
            />
          ))}
        </div>
      </section>
      {/* Small group section */}
      <section style={{ margin: "32px 0" }}>
        <p style={{ fontSize: "1.1em", lineHeight: 2 }}>
          小组团契提供了一个学习圣经、以赞美与诗歌敬拜神，并且与其他信徒交通的平台。若是您想要参加我们的小组团契，欢迎您填写下面的表格与我们联系。
        </p>
      </section>
      {/* Contact button */}
      <section style={{ margin: "32px 0", textAlign: "center" }}>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfrC_eSX6hT1Zhz9FAA6nKLM0LGl1hO9YXy-iKKc-YlsVJsjw/viewform?usp=sf_link"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "#0693e3",
            color: "#fff",
            padding: "14px 36px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1.1em"
          }}
        >
          联系我们
        </a>
      </section>
    </div>
  );
}

export default StudentMinistryPage; 