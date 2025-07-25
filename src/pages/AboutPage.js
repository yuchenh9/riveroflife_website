import React from "react";

function AboutPage() {
  return (
    <div className="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
      <p style={{fontSize: "30px",textAlign: 'left',marginTop: "40px",marginLeft: "80px", color: '#000000'}}>关于我们</p>
      <section>
        <h2 style={{ textAlign: "center" }}>教会的异象</h2>
        <p style={{ textAlign: "center" }}>建造下一代的门徒, 扩展上帝的国度</p>
      </section>
      <section style={{ background: "#8dd2fc", borderRadius: 8, padding: 16, margin: "32px 0" }}>
        <h2 style={{ textAlign: "center" }}>我们的使命</h2>
        <p style={{ textAlign: "center" }}>传福音, 建造主的门徒</p>
      </section>
      <section>
        <h2 style={{ textAlign: "center" }}>核心价值</h2>
        <ol>
          <li>公众敬拜：荣耀上帝，建造教会和见证基督的荣美</li>
          <li>释经讲道：明白和顺服上帝的话语</li>
          <li>祷告：建立和主亲密的关系，听从主的引导</li>
          <li>团契：在主里连接，彼此相爱和相互建造</li>
          <li>团队：团队工作的果效胜于个人成就的总和（箴言30:27）</li>
          <li>慷慨/好客：和需要的人分享自己有的</li>
        </ol>
      </section>
      <section style={{ background: "#e0f7fa", borderRadius: 8, padding: 16, margin: "32px 0" }}>
        <h2 style={{ textAlign: "center" }}>信仰告白</h2>
        <ol>
          <li>
            <strong>关于神</strong><br />
            我们相信神，是因为祂的造物之功，因为圣经的启示，因为基督的到来，因为圣灵的同在。只有一位神，就是那位又真又活的神。祂自有永有，从不改变。祂是智慧、能力、圣洁、公义、良善、真实。
          </li>
          <li>
            <strong>关于耶稣基督</strong><br />
            <strong>神的儿子</strong>：耶稣基督是神的儿子，三位一体神中的第二位格，他是真实永活的神，与圣父同质、同尊、同荣。耶稣基督也是完全的人，他取了人的样式，只是没有犯罪，由圣灵感孕童贞女玛丽亚所生。因此，他是圣洁的神的儿子道成肉身。他必须成为人，才能代替我们成全我们所犯的律法，才能使我们认识神，并通过他的死与复活成为神的儿女。他从死里复活显明了他是神的儿子（罗马书1:4）<br />
            <strong>全世界的救主</strong>：耶稣基督是全世界的救主，因为他将全人类从神的永罚中拯救出来。这永罚是人犯罪的结果。耶稣用他的血，替人还清了罪债，这样所有信他的人都能得救。<br />
            <strong>全宇宙的主</strong>：耶稣基督是全宇宙的主。天上地下的一切都是籍着他造的，也是为他造的（歌罗西书1:16-18）。他也是我们的主，因为我们是他用自己的宝血从罪的权势之下赎买出来的（哥林多前书7:23，罗马书6:22）。一切在天上的、地下的都应承认耶稣基督为主，将荣耀归与父神（腓利比书2:10-11）。<br />
            <strong>全世界的审判者</strong>：当将来耶稣基督第二次荣耀的再来时，他将会审判全世界。各方各族的人都将来到他面前听候他的审判。他将会将相信他的人带入永生，并让拒绝他的人承受永远的刑罚。<br />
            <strong>教会的头</strong>：耶稣基督是教会的头（以弗所书1:22），教会的一切规则与权威都在他的权柄之下。
          </li>
          <li>
            <strong>​关于圣经</strong><br />
            圣经都是神所默示的（提摩太后书3:16）。我们相信且顺服圣经的权威与其绝对真实性乃是因为圣经的作者就是神自己。圣经是完整全备的启示，叫我们能通过耶稣基督认识神，认识救恩以及我们当行的道。并且我们必须依靠圣灵的光照才能明白圣经所启示的真理。
          </li>
          <li>
            <strong>关于教会</strong><br />
            我们爱教会，是因为耶稣用自己的血买赎了教会，又亲手建立。我们爱教会，是因为是基督的身体，由神所拣选的人所组成。我们爱教会，是因为耶稣是教会的头，继续他在地上的工作。我们爱教会，也因为神与祂的教会同在（以弗所书2:20-21）。我们爱教会，是因为世界将会在教会的彼此相爱与合一中看到神在他子民身上的荣耀（约翰福音17:20-23）。我们相信教会需要成长，直到所有的信徒都在真道上同归于一，认识神的儿子，得以长大成人，满有基督长成的身量（以弗所书1:23,4:12）。真正的教会应有一下几个特征：基于真理的讲道、忠于圣经的教导、符合正道的圣礼与圣洁的规条。
          </li>
        </ol>
      </section>
      <div className="full-width-line" />
      <p style={{fontSize: "15px",textAlign: 'center', color: '#000000',margin: '32px 0 16px'}}>
        Copyright &copy; {new Date().getFullYear()} 香槟厄巴纳生命河教会
      </p>
    </div>
  );
}

export default AboutPage; 