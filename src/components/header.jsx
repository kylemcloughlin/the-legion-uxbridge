import React from 'react';
import logo from '.././legionImg04black.png'
class AppHead extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="logo-div">
        <img src={logo} id="legion-logo"/>
        <label id="logo-label">Uxbridge, Ontario, Canada</label>
      </div>
    )
  }
}
export default AppHead;