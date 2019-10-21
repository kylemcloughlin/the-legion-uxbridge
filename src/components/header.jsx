import React from 'react';
import rightLogo from '.././legionImg04black.png'
import leftLogo from '.././legionImg007.png';

class AppHead extends React.Component {

  render() {
    return (
      
      <div id="logo-div">
        <img alt="legion-banner" src={rightLogo} id="legion-logo"/>
        {/* <img alt="logo" src={leftLogo} id="footer-img" /> */}
        <label id="logo-label">Uxbridge, Ontario, Canada</label>
      </div>
    )
  }
}
export default AppHead;