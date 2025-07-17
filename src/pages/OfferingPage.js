import React from "react";

function OfferingPage() {
  return (
    <div className="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
      <p style={{fontSize: "30px",textAlign: 'left',marginTop: "40px",marginLeft: "80px", color: '#000000'}}>奉献</p>
      <h1 style={{ textAlign: "center", position: 'absolute', left: '-9999px' }}>奉献</h1>
      <section style={{ margin: "32px 0" }}>
        <h2 style={{ color: "#1976d2", fontWeight: 700, fontSize: "1.1em" }}>支票奉献</h2>
        <p>1. 奉献给教会的支票抬头：River of Life Church.<br />
        邮寄地址：River of Life Church, 600 E. Pennsylvania Ave., Urbana 61801.</p>
        <p>如果是特殊奉献，请备注写明奉献目的。请将奉献金额和目的告诉周净。</p>
      </section>
      <section style={{ margin: "32px 0" }}>
        <h2 style={{ color: "#1976d2", fontWeight: 700, fontSize: "1.1em" }}>线上奉献</h2>
        <p>2. 教会也支持线上奉献。可以到北美宣教团网站上作教会的奉献（NAMB）。NAMB会在每个月的月初报告奉献情况，并将奉献支票寄到教会。<br />
        奉献链接：<a href="https://missionaries.namb.net/full/hui-li" target="_blank" rel="noopener noreferrer">https://missionaries.namb.net/full/hui-li</a></p>
      </section>
      <div className="full-width-line" />
      <p style={{fontSize: "15px",textAlign: 'center', color: '#000000',margin: '32px 0 16px'}}>
        Copyright &copy; {new Date().getFullYear()} 香槟厄巴纳生命河教会
      </p>
    </div>
  );
}

export default OfferingPage; 