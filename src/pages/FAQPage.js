import React from "react";

function FAQPage() {
  return (
    <div className="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
      <p style={{fontSize: "30px",textAlign: 'left',marginTop: "40px",marginLeft: "80px", color: '#000000'}}>信仰解答</p>
      <h1 style={{ textAlign: "center", position: 'absolute', left: '-9999px' }}>信仰解答</h1>
      <section style={{ margin: "32px 0" }}>
        <h2 style={{ color: "#1976d2", fontWeight: 700, fontSize: "1.2em" }}>为什么要认识耶稣基督？</h2>
        <p>上帝如此爱你，以至于他给了他的独生子耶稣基督，为你的罪孽而死。如果你相信他，离开你的罪，并让耶稣成为你生命的主，你将在天堂与他获得永生。这就是耶稣基督的福音。</p>
      </section>
      <section style={{ margin: "32px 0" }}>
        <h2 style={{ color: "#1976d2", fontWeight: 700, fontSize: "1.2em" }}>如何从上帝那里获得永生？</h2>
        <p>如果你相信和接受下面的话，现在你就可以获得永生：<br />
        亲爱的上帝，我知道我是个罪人，我请求你的宽恕。我相信耶稣基督是你的儿子。我相信他为我的罪而死，你使他复活。我想相信他是我的救主，从今天起跟随他做我的主。请引导我的生活，帮助我执行你的旨意。</p>
      </section>
      <section style={{ margin: "32px 0" }}>
        <h2 style={{ color: "#1976d2", fontWeight: 700, fontSize: "1.2em" }}>我相信和接受上面的话，现在该怎么办？</h2>
        <p>寻找一家坚持圣经真理，宣讲耶稣基督为主的教会，受洗成为主的门徒跟随主，委身于教会与弟兄姊妹一起敬拜主，认识真理，在基督里成长。</p>
        <p>欢迎您和我们联系：<a href="mailto:RiverofLifeCCU@Gmail.com">RiverofLifeCCU@Gmail.com</a></p>
      </section>
      <div className="full-width-line" />
      <p style={{fontSize: "15px",textAlign: 'center', color: '#000000',margin: '32px 0 16px'}}>
        Copyright &copy; {new Date().getFullYear()} 香槟厄巴纳生命河教会
      </p>
    </div>
  );
}

export default FAQPage; 