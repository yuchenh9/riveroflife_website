import React from "react";

function WomenMinistryPage() {
  return (
    <div className="main-content" style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <p style={{fontSize: "30px",textAlign: 'left',marginTop: "40px",marginLeft: "80px", color: '#000000'}}>妇女事工</p>
      <section style={{ margin: "32px 0" }}>
        <p style={{ fontSize: "1.1em", lineHeight: 2 }}>
          生命河教会妇女事工通过组织妇女学习《圣经》来认识上帝，透过彼此关怀来互相鼓励。<br />
          根据不同需要，设立不同程度《圣经》学习团契：百合花团契；郁金香团契；橄榄树团契。<br />
          同时也透过探访和郊游来加深大家的彼此了解。
        </p>
      </section>
      <div className="full-width-line" />
      <p style={{fontSize: "15px",textAlign: 'center', color: '#000000',margin: '32px 0 16px'}}>
        Copyright &copy; {new Date().getFullYear()} 香槟厄巴纳生命河教会
      </p>
    </div>
  );
}

export default WomenMinistryPage; 