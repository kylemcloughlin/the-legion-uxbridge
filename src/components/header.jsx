import React from 'react';
import logo from '.././legionImg04black.png'
class AppHead extends React.Component {

  render() {
    return (
      
      <div id="logo-div">
        <img alt="legion-banner" src={logo} id="legion-logo"/>
        <label id="logo-label">Uxbridge, Ontario, Canada</label>
      </div>
    )
  }
}
export default AppHead;