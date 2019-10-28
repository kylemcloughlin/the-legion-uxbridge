import React from 'react';
import logo from '.././legionImg007.png';

class AppFoot extends React.Component {

  openModal = () => {
  this.setState({ modalIsOpen: true });
}

  closeModal = () => {
  this.setState({ modalIsOpen: false });
}

  render() {
    return (
      <footer id="app-footer">
      {/* <div>
        <label>todays events:</label>
        <p> today's events here</p>
          <label>Upcoming events:</label>
          <p> upcoming's events here</p>
      </div> */}
    {/* <img alt="logo" src={logo} id="footer-img"/> */}
        </footer>
    )
  }
}
export default AppFoot;