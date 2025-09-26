import React from 'react';

function BottomBar() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-around',
      alignItems: 'center',  
      backgroundColor: '#272C2C',
      width: '100vw',
      marginLeft: 'calc(-50vw + 50%)',
      padding: '40px 20px',
      boxSizing: 'border-box',
      minHeight: '150px'
    }}>
      <div>
        <p style={{fontSize: "18px",textAlign: 'left', margin: '32px 0 16px',color: '#dddddd'}}>
          地址：<a href="https://www.google.com/maps/place/600+E+Pennsylvania+Ave,+Urbana,+IL+61801" style={{color: '#dddddd' }} target="_blank" rel="noopener noreferrer">600 E Pennsylvania Avenue, Urbana, IL 61801<br/>
          Pennsylvania Avenue Baptist Church (PABC)</a><br/>
          公交路线：<a href="https://mtd.org/maps-and-schedules/routes" style={{color: '#dddddd'}} target="_blank" rel="noopener noreferrer">5/50 Green East (从 Illini Union 出发10分钟可达)</a>
        </p>
      </div>
      <div>
        <p style={{fontSize: "18px", textAlign: 'left', color: '#ffffff', margin: '32px 0 16px'}}>
          Copyright &copy; {new Date().getFullYear()} 香槟厄巴纳生命河教会
        </p>
      </div>
    </div>
  );
}

export default BottomBar;
