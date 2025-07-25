import React from "react";

function ChildrenMinistryPage() {
  return (
    <div className="main-content" style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <p style={{fontSize: "30px",textAlign: 'left',marginTop: "40px",marginLeft: "80px", color: '#000000'}}>儿童/学生事工</p>
      <section style={{ margin: "32px 0" }}>
        <p style={{ fontSize: "1.1em", lineHeight: 2 }}>
          生命河教会儿童/学生事工：在主日和周五的团契，通过教导儿童赞美诗歌和儿童《圣经》来帮助儿童认识上帝。<br />
          在未来希望通过向日葵学校的开办来从各方面帮助孩子成长。
        </p>
      </section>
      <div className="full-width-line" />
      <p style={{fontSize: "15px",textAlign: 'center', color: '#000000',margin: '32px 0 16px'}}>
        Copyright &copy; {new Date().getFullYear()} 香槟厄巴纳生命河教会
      </p>
    </div>
  );
}

export default ChildrenMinistryPage; 