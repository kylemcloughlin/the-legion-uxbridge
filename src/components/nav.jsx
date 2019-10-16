import React from 'react';

class Nav extends React.Component {
 
  render() {
    return (
    <navbar id="nav-bar">
      <button className="buttons" onClick={() => this.props.page('Home')}>Home</button>
        <button className="buttons" onClick={() => this.props.page('Calender')}>Events</button>
        <button className="buttons" onClick={() => this.props.page('Gallery')}>Gallery</button>
        <button className="buttons" onClick={() => this.props.page('Contact')}>Contact Us</button>
    </navbar>
    )
  }
}
export default Nav;