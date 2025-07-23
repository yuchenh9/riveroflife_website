import React, { useEffect, useState } from "react";
import "../App.css";
import ImageGallery from "../ImageGallery";

function LatestYouTubeVideo() {
  const [videoId, setVideoId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLatestVideo() {
      try {
        const channelId = "UCsB7atMvcso2DDr2xe8v_fw";
        const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`);
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          const videoId = data.items[0].link.split("v=")[1];
          setVideoId(videoId);
        }
      } catch (e) {
        setVideoId(null);
      } finally {
        setLoading(false);
      }
    }
    fetchLatestVideo();
  }, []);

  if (loading) return <div className="youtube-container">加载中…</div>;
  if (!videoId) return <div className="youtube-container">未找到最新视频</div>;
  return (
    <div className="youtube-container">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ borderRadius: 16 }}
      ></iframe>
    </div>
  );
}

function HomePage() {
  const galleryImages = [
    process.env.PUBLIC_URL + "/homepage_images/20190602-151619_orig-e1744838455976.webp",
    process.env.PUBLIC_URL + "/homepage_images/Fellowship-1-e1744837949133.webp",
  ];
  return (
    <>
      <div className="main-content">
        <p style={{fontSize: "30px",textAlign: 'left',marginTop: "4px",marginLeft: "20px", marginBottom: "0px", color: '#000000'}}>主页</p>
      </div>
      <div style={{marginTop: "0px"}}>
        <ImageGallery images={galleryImages} />
      </div>
      <LatestYouTubeVideo />
      <div className="main-content">
        <p style={{ marginTop: "40px", marginLeft: "80px" }}>香槟-厄巴纳生命河教会是一家以传讲耶稣基督，教导上帝的话语和门徒建造为核心的教会。教会的名字取自启示录22章1-2节有关生命的异象：</p>
        <p style={{marginTop: "40px", marginLeft: "80px",color: '#54aaff', fontWeight: 500}}>
          “有一道生命河明亮如水晶，从神的宝座流出来，在河的这边和那边有生命树，结十二样的果子…”</p>
        <p style={{ marginTop: "40px", marginLeft: "80px" }}>生命河教会的负担是服事这一代的年轻人和城市福音的需要。教会的异象是：建造下一代的门徒, 扩展上帝的国度; 教会的使命是: 传福音建造主的门徒. 生命河教会注重真理的教导，关心人灵魂的得救，弟兄姐妹属灵生命的成长，和门徒及同工的建造。欢迎您和我们同工，一起建造神的教会，顺服主的大使命，见证和荣耀神的名。</p>
        <p style={{textAlign: 'center', margin: '32px 0 16px', color: '#000000'}}>
          地址：<a href="https://www.google.com/maps/place/600+E+Pennsylvania+Ave,+Urbana,+IL+61801" style={{color: '#000000',textDecoration: "underline" }} target="_blank" rel="noopener noreferrer">600 E Pennsylvania Avenue, Urbana, IL 61801<br/>
          Pennsylvania Avenue Baptist Church (PABC)</a><br/>
          公交路线：<a href="https://mtd.org/maps-and-schedules/routes" style={{color: '#327818'}} target="_blank" rel="noopener noreferrer">5/50 Green East (从 Illini Union 出发10分钟可达)</a>
        </p>
        <br />
        <br />
        <h2 style={{textAlign: 'center', color: '#000000', margin: '32px 0 16px'}}>教会每周活动日程</h2>
        <div style={{textAlign: 'center', marginBottom: 16}}>
          <div>周二祷告会　7:30 AM – 8:30 AM</div>
          <div>周五团契　晚餐 中文圣经学习　6:30 PM – 9:00 PM</div>
          <div>周六 免费中文课程　10:00AM – 12:00PM</div>
          <div>周日敬拜　9:30 AM – 10:30 AM（主日学）</div>
          <div>　　　　　　10:45 AM – 12:15 PM（主日敬拜）</div>
        </div>
        <div style={{textAlign: 'center',marginBottom: 16}}>
          <br />
          <br />
          <br /><p>欢迎您前来教会参加主日学，主日敬拜（二楼）和周五晚上的团契。</p>
          <p>除了实体的主日敬拜，我们也提供线上参与联络。主日敬拜 Zoom 链接：<br/>
            <a href="https://zoom.us/j/8866071832?pwd=U2l0a2E5YzhDeGUxUGc5NSswai9sdz09" style={{color: '#000000',textDecoration: "underline"}} target="_blank" rel="noopener noreferrer">
              https://zoom.us/j/8866071832?pwd=U2l0a2E5YzhDeGUxUGc5NSswai9sdz09
            </a>
          </p>
          <p>欢迎到上面讲道信息相关网页或者YouTube频道观看我们的主日讲道：<br/>
            <a href="https://www.youtube.com/channel/UCsB7atMvcso2DDr2xe8v_fw" style={{color: '#000000',textDecoration: "underline"}} target="_blank" rel="noopener noreferrer">
              https://www.youtube.com/channel/UCsB7atMvcso2DDr2xe8v_fw
            </a>
          </p>
          <p>欢迎您浏览教会Facebook网页：<br/>
            <a href="https://www.facebook.com/RiverofLife.CCU" style={{color: '#000000',textDecoration: "underline"}} target="_blank" rel="noopener noreferrer">
              https://www.facebook.com/RiverofLife.CCU
            </a>
          </p>
          <div className="full-width-line" />
          <p  style={{fontSize: "15px",textAlign: 'center', color: '#000000',margin: '32px 0 16px'}}>
            Copyright &copy; {new Date().getFullYear()} 香槟厄巴纳生命河教会
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
