import React from "react";

function CommunitySchoolPage() {
  return (
    <div className="main-content" style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <h1 style={{ textAlign: "center" }}>社区事工/中文学校</h1>
      <section style={{ margin: "32px 0" }}>
        <p style={{ fontSize: "1.1em", lineHeight: 2 }}>
          中文学校（Chinese School）：通过对社区儿童学业的帮助，引导他们认识上帝。<br />
          中文学校的具体做法：
          <ol>
            <li>针对小学和初中的学生。</li>
            <li>计划设立不同科目对学生的学业进行帮助。例如：中文班、英文班、数学班、家庭作业辅导班等等。目前，只有中文班。</li>
          </ol>
          在开班学习之前，有儿童赞美诗歌的教唱和《圣经》故事分享。<br />
          面前中文学校需要有意教导中文的老师和志愿者。如果您计划参与中文学校，请和我们联系：RiverofLifeCCU@Gmail.com 或者点击下面的菜单。<br />
          如果您愿意参与中文的教导，或您希望您的孩子参加中文的学习，请点击下面的菜单联系我们！
        </p>
      </section>
      <section style={{ margin: "32px 0", textAlign: "center" }}>
        <a href="mailto:RiverofLifeCCU@gmail.com" style={{ display: "inline-block", background: "#0693e3", color: "#fff", padding: "12px 32px", borderRadius: 6, textDecoration: "none", fontWeight: 600 }}>联系我们</a>
      </section>
    </div>
  );
}

export default CommunitySchoolPage; 