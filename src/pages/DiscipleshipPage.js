import React from "react";

function DiscipleshipPage() {
  // Use a placeholder image if the original is not available
  const imageUrl = process.env.PUBLIC_URL + "/images%20copy/Fellowship-1-e1744837949133.webp";
  return (
    <div className="main-content" style={{ maxWidth: 1000, margin: "0 auto", padding: 24 }}>
      <h1 style={{ textAlign: "center" }}>门徒建造/小组团契</h1>
      {/* Scripture block */}
      <section style={{ margin: "32px 0" }}>
        <div style={{
          background: "#e0f7fa",
          borderRadius: 10,
          padding: "24px 16px",
          textAlign: "center",
          fontWeight: 600,
          fontSize: "1.2em",
          color: "#333"
        }}>
          我们这许多人在基督里成为一身，<br />互相联络做肢体，也是如此。<br /><br />- 罗马书12:5
        </div>
      </section>
      <hr style={{ margin: "32px 0" }} />
      {/* Main content columns */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 32, alignItems: "flex-start" }}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <p style={{ fontSize: "1.1em", lineHeight: 2 }}>
            在生命河教会，我们委身于基督的大使命：在全世界建立主的门徒。我们成人事工的重点是帮助每个人在神的话语与圣灵的能力中成长。我们同时也致力于建立一个强大的同工团队来实现这个目标，因为我们认识到，只有当我们在基督里合一时，我们的工作才能有果效。成人事工的内容包括：接触还未认识耶稣的人，向他们传福音，教导圣经，为有需要的人祷告，以及装备信徒来事奉神。成人事工的最终目标是改变人成为委身基督的门徒。
          </p>
          <p style={{ fontSize: "1.1em", lineHeight: 2 }}>
            在生命河教会，你可以通过大组聚会与小组团契参与我们的成人事工。
          </p>
          <div style={{ margin: "24px 0" }}>
            <p style={{ marginBottom: 12 }}><strong>大组聚会</strong>：每周五晚6:00 pm – 8:45 pm的查经聚会。目前我们有英语查经班与中文查经班。大组聚会使我们有更多的机会去接触和服事想要认识基督的人们。</p>
            <p><strong>小组团契</strong>：我们有一对一门训小组与一对多门训小组。小组团契会给你更多的机会在基督里成长并与弟兄姐妹们在基督里建立亲密的个人关系。各个小组的时间安排会根据小组成员的日程有所调整。</p>
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 240, textAlign: "center" }}>
          {/* Use placeholder image if original is missing */}
          <img src={imageUrl} alt="团契聚会" style={{ maxWidth: "100%", borderRadius: 12, boxShadow: "0 2px 12px #0001" }} />
        </div>
      </div>
      {/* Call to action */}
      <section style={{ margin: "40px 0 0 0", background: "#e0f7fa", borderRadius: 10, padding: 24, textAlign: "center" }}>
        <p style={{ fontWeight: 600, fontSize: "1.1em", marginBottom: 16 }}>想更多了解耶稣， 或者加入我们的事工团队，请用下面的链接联系我们！</p>
        <a
          href="https://goo.gl/forms/0DQFTu98B3857Vpx1"
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
          服侍主
        </a>
      </section>
    </div>
  );
}

export default DiscipleshipPage; 