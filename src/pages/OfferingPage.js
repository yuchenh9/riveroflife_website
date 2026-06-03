import React from "react";

function OfferingPage() {
  return (
    <div className="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
      <p style={{fontSize: "30px",textAlign: 'left',marginTop: "40px",marginLeft: "80px", color: '#000000'}}>奉献</p>
      <h1 style={{ textAlign: "center", position: 'absolute', left: '-9999px' }}>奉献</h1>
      <section style={{ margin: "32px 0" }}>
        <h2 style={{ color: "#1976d2", fontWeight: 700, fontSize: "1.1em" }}>支票奉献</h2>
        <p>奉献给教会的支票抬头：River of Life Church.<br />
        邮寄地址：River of Life Church, 600 E. Pennsylvania Ave., Urbana 61801.</p>
        
      </section>
 
      <div className="full-width-line" />
      <p style={{fontSize: "15px",textAlign: 'center', color: '#000000',margin: '32px 0 16px'}}>
        Copyright &copy; {new Date().getFullYear()} 香槟厄巴纳生命河教会
      </p>
    </div>
  );
}

export default OfferingPage; 