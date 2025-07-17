import React from "react";

function GospelMinistryPage() {
  return (
    <div className="main-content" style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <h1 style={{ textAlign: "center" }}>福音事工</h1>
      <section style={{ background: "#e6f7ff", borderRadius: 8, padding: 24, margin: "32px 0" }}>
        <p style={{ fontSize: "1.1em", lineHeight: 2 }}>
          “一切都是出于神；他借着基督使我们与他和好，又将劝人与他和好的职分赐给我们。这就是神在基督里，叫世人与他和好，不将他们的过犯归到他们身上，并且将这和好的道理托付了我们。所以，我们作基督的使者，就好像神借我们劝你们一般。我们替基督求你们与神和好。神使那无罪的，替我们成为罪，好叫我们在他里面成为神的义。”
        </p>
        <p style={{ textAlign: "center", color: "#0693e3", margin: 0 }}>哥林多后书 5:19-21</p>
      </section>
      <section style={{ margin: "32px 0" }}>
        <p>生命河教会注重门徒建造和传福音。</p>
        <p>教会定期会有传福音的培训，并且定期会去校园、超市、公园和社区传福音。每年教会有宣教周鼓励弟兄姐妹成为有福音使命的人，为主作见证。</p>
        <p>在每个主日和周五团契有针对福音真理的教导。</p>
        <p>如果您愿意更多了解，或加入我们的福音事工，请联系我们！</p>
        <div style={{ display: "flex", justifyContent: "center", margin: "32px 0" }}>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfrC_eSX6hT1Zhz9FAA6nKLM0LGl1hO9YXy-iKKc-YlsVJsjw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "12px 32px",
              background: "#0693e3",
              color: "#fff",
              borderRadius: 6,
              fontSize: "1.1em",
              textDecoration: "none",
              fontWeight: 600
            }}
          >
            联系我们
          </a>
        </div>
      </section>
    </div>
  );
}

export default GospelMinistryPage; 