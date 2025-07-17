import React from "react";

function MinistriesPage() {
  return (
    <div className="main-content" style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <p style={{fontSize: "30px",textAlign: 'left',marginTop: "40px",marginLeft: "80px", color: '#000000'}}>教会事工</p>
      <section style={{ margin: "32px 0" }}>
        <p style={{ fontSize: "1.1em", lineHeight: 2 }}>
          我们的主来到这个世界上不是为了受人服事，而是为了事奉人。我们是他的门徒，因此也应当效法他的榜样（马太福音20:28）。<br />
          如果你愿意奉献你的时间与才干，与弟兄姐妹们一同在基督里事奉神的话，请参考下面所列的服事岗位。
        </p>
      </section>
      <section style={{ display: "flex", flexWrap: "wrap", gap: 32, background: "#e6f7ff", borderRadius: 8, padding: 24, margin: "32px 0" }}>
        <div style={{ flex: 1, minWidth: 220 }}>
          <h3>学生团契服事</h3>
          <ol>
            <li>圣经老师</li>
            <li>多媒体团队</li>
            <li>福音小组</li>
          </ol>
        </div>
        <div style={{ flex: 1, minWidth: 220 }}>
          <h3>成人事工服事</h3>
          <ol>
            <li>儿顾团队</li>
            <li>主日学老师</li>
            <li>圣经老师</li>
            <li>传福音小组</li>
            <li>后勤团队</li>
            <li>设备维护</li>
            <li>饭食准备</li>
          </ol>
        </div>
        <div style={{ flex: 1, minWidth: 220 }}>
          <h3>主日崇拜</h3>
          <ol>
            <li>接待</li>
            <li>敬拜团队</li>
            <li>多媒体团队</li>
            <li>儿顾团队</li>
            <li>主日学老师</li>
          </ol>
        </div>
      </section>
      <div className="full-width-line" />
      <p style={{fontSize: "15px",textAlign: 'center', color: '#000000',margin: '32px 0 16px'}}>
        Copyright &copy; {new Date().getFullYear()} 香槟厄巴纳生命河教会
      </p>
    </div>
  );
}

export default MinistriesPage; 