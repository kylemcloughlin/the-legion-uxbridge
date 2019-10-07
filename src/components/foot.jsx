import React from 'react';
import logo from '.././legionImg007.png'
class AppFoot extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer id="app-footer">
    <img src={logo} id="footer-img"/>
        </footer>
    )
  }
}
export default AppFoot;