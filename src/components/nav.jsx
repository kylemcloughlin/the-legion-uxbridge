import React from 'react';
import logo from '.././legionImg007.png'
class Nav extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <navbar id="nav-bar">
      <a className="buttons" onClick={() => this.props.page('Home')}>home</a>
        <a className="buttons" onClick={() => this.props.page('Calender')}>Calender</a>
        <a className="buttons" onClick={() => this.props.page('Contact')}>Contact Us</a>
    </navbar>
    )
  }
}
export default Nav;