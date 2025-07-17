import React from "react";

function JoinPage() {
  return (
    <div className="main-content" style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <h1 style={{ textAlign: "center" }}>加入</h1>
      <section style={{ margin: "32px 0" }}>
        <p>欢迎通过以下的方式参与生命河教会的敬拜与团契：</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <h2 style={{ color: "#0693e3" }}>每周聚会日程</h2>
            <ol style={{ fontSize: "1.1em", lineHeight: 2 }}>
              <li><strong>主日崇拜 (10:45 AM – 12:15 PM):</strong><br />欢迎你加入我们在主日来到神的殿中敬拜神。诗篇100:2说，“你们当乐意侍奉耶和华，当来向他歌唱！”</li>
              <li><strong>主日圣经学习 （9:30 AM – 10:30 AM)</strong><br />主日圣经学习让我们有机会在一起学习神的话语。诗篇119:140说，“你的话极其精炼，所以你的仆人喜爱。”</li>
              <li><strong>周三祷告会 (6:00 PM -8:00 PM):</strong><br />我们通过祷告来认识神、赞美神、荣耀神，并向祂寻求帮助。让我们一起来到神的面前来寻求祂，寻求祂的力量与祂的同在（历代志上16:11）</li>
              <li><strong>周五查经 (6:30 PM -9:00 PM):</strong> 让我们一起来事奉神，因为神喜悦我们一同为祂作工。</li>
            </ol>
          </div>
          <div style={{ flex: 1, minWidth: 280, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src="https://i0.wp.com/riveroflifecu.org/wp-content/uploads/2021/07/wechat-image-201904131249353_2.jpg?resize=823%2C618&ssl=1"
              alt="教会活动"
              style={{ maxWidth: "100%", borderRadius: 8 }}
            />
          </div>
        </div>
      </section>
      <section style={{ background: "#eaf6fb", borderRadius: 8, padding: 24, margin: "32px 0" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
          <div style={{ flex: 1, minWidth: 280, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src="https://i0.wp.com/riveroflifecu.org/wp-content/uploads/2021/07/20190420-151430.jpg?resize=957%2C719&ssl=1"
              alt="团契活动"
              style={{ maxWidth: "100%", borderRadius: 8 }}
            />
          </div>
          <div style={{ flex: 1, minWidth: 280 }}>
            <h2 style={{ color: "#0693e3" }}>小组团契</h2>
            <ol style={{ fontSize: "1.1em", lineHeight: 2 }}>
              <li><strong>学生团契：</strong>提摩太圣经团契（TBF）是生命河教会的学生事工。欢迎加入TBF，在这里，你将有许多机会来事奉基督并在基督里成长。联系我们</li>
              <li><strong>门徒培训：</strong>我们有一对一门训小组与一对多门训小组。我们的目标是通过分享神的话, 圣灵的工作, 和生命影响生命帮助信徒们成长为委身于基督的信徒。</li>
            </ol>
            <div style={{ margin: "16px 0" }}>
              <a
                className="wp-block-button__link"
                href="https://goo.gl/forms/id6zlc7gKHKYwStc2"
                target="_blank"
                rel="noreferrer noopener"
                style={{ display: "inline-block", background: "#fff", color: "#0693e3", border: "2px solid #0693e3", borderRadius: 6, padding: "8px 24px", fontWeight: 600, textDecoration: "none" }}
              >
                注册
              </a>
            </div>
          </div>
        </div>
      </section>
      <section style={{ margin: "32px 0" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
          <div style={{ flex: 1, minWidth: 280, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src="https://i0.wp.com/riveroflifecu.org/wp-content/uploads/2021/07/wechat-image-2019041312393416.jpg?resize=599%2C450&ssl=1"
              alt="大组团契"
              style={{ maxWidth: "100%", borderRadius: 8 }}
            />
          </div>
          <div style={{ flex: 1, minWidth: 280 }}>
            <h2>大组团契</h2>
            <p>我们每周五都会在教会有大组的团契，服事寻求神的人们，帮助他们认识基督并在基督里成长。欢迎加入我们一同在周五晚上服事神。</p>
            <p><strong>如果你感兴趣并愿意参加我们的活动，请与我们联系！也欢迎在这里注册给我们提供你的信息。</strong></p>
            <div style={{ margin: "16px 0" }}>
              <a
                className="wp-block-button__link"
                href="https://goo.gl/forms/id6zlc7gKHKYwStc2"
                target="_blank"
                rel="noreferrer noopener"
                style={{ display: "inline-block", background: "#fff", color: "#0693e3", border: "2px solid #0693e3", borderRadius: 6, padding: "8px 24px", fontWeight: 600, textDecoration: "none" }}
              >
                注册
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default JoinPage; 