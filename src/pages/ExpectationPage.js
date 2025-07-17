import React from "react";

function ExpectationPage() {
  return (
    <div className="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
      <p style={{fontSize: "30px",textAlign: 'left',marginTop: "40px",marginLeft: "80px", color: '#000000'}}>期待</p>
      <section style={{ margin: "32px 0" }}>
        <h2 style={{ color: "#0693e3", textAlign: "center" }}>在属灵成长中：</h2>
        <ol style={{ fontSize: "1.1em", lineHeight: 2 }}>
          <li>在教会中敬虔的敬拜</li>
          <li>在基督的身体中合一、彼此相爱的弟兄姐妹</li>
          <li>忠于圣经的教导</li>
          <li>基于圣经的讲道</li>
          <li>在基督里的丰盛生命</li>
          <li>经历生命的转变，忠心跟随基督</li>
          <li>通过服事本地社区的需要，与本地社区更深的联合</li>
        </ol>
      </section>
      <section style={{ margin: "32px 0" }}>
        <h2 style={{ color: "#0693e3", textAlign: "center" }}>在敬拜中：</h2>
        <ol style={{ fontSize: "1.1em", lineHeight: 2 }}>
          <li>欢迎所有人参加</li>
          <li>儿童主日学</li>
          <li>语言：讲道与教导均为中文</li>
          <li>音乐：以符合圣经的方式将我们的赞美献给神</li>
        </ol>
      </section>
      <div className="full-width-line" />
      <p style={{fontSize: "15px",textAlign: 'center', color: '#000000',margin: '32px 0 16px'}}>
        Copyright &copy; {new Date().getFullYear()} 香槟厄巴纳生命河教会
      </p>
    </div>
  );
}

export default ExpectationPage; 