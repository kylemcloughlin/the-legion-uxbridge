import React from 'react';

class Nav extends React.Component {
 
  render() {
    return (
    <navbar id="nav-bar">
      <ul className='button-bar'>
        <a id="one" className="buttons" onClick={() => this.props.page('Home')}>Home</a>
        <a id="two" className="buttons" onClick={() => this.props.page('Calender')}>Events</a>
        <a id="three" className="buttons" onClick={() => this.props.page('Gallery')}>Gallery</a>
        <a id="four" className="buttons" onClick={() => this.props.page('Contact')}>Contact Us</a>
        <hr />
        </ul>

    </navbar>
    )
  }
}
export default Nav;