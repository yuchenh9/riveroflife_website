import React from "react";

function TeamPage() {
  return (
    <div className="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
      <h1 style={{ textAlign: "center" }}>同工团队</h1>
      <section style={{ margin: "32px 0" }}>
        <h2 style={{ color: "#0693e3", textAlign: "left" }}>教会牧师-李晖</h2>
        <p style={{ textAlign: "left" }}>
          李晖牧师, 2017年毕业于改革宗神学院（RTS），获道学硕士学位。从2018年开始在伊州的香槟植堂。<br />
          喜爱上帝的话语，盼望帮助更多的人认识上帝和认识基督。和妻子郑瑛育有子女三人。
        </p>
      </section>
      <section style={{ margin: "32px 0" }}>
        <h2 style={{ color: "#0693e3", textAlign: "left" }}>教会同工</h2>
        <p style={{ textAlign: "left" }}>
          庄哲勤（Jer-Chin Chuang）<br />
          教会服侍：目前带领周日英文主日学班, 学生团契的辅导。<br />
          伊利诺伊大学讲师（University of Illinois instructor, English Sunday school teacher）。
        </p>
      </section>
    </div>
  );
}

export default TeamPage; 