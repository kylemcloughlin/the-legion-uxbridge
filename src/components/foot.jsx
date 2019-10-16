import React from 'react';
import logo from '.././legionImg007.png';
import BookingModal from '.././components/bookingsModal.jsx'

class AppFoot extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false
    };

  }

  openModal = () => {
  this.setState({ modalIsOpen: true });
}

  closeModal = () => {
  this.setState({ modalIsOpen: false });
}

  render() {
    return (
      <footer id="app-footer">
      <button>Become a Member</button>
      <button onClick={this.openModal}>book the hall</button>
       <BookingModal open={this.state.modalIsOpen} openModal={this.openModal} closeModal={this.closeModal}/>
      <div>
        <label>todays events:</label>
        <p> today's events here</p>
          <label>Upcoming events:</label>
          <p> upcoming's events here</p>
      </div>
    <img alt="logo" src={logo} id="footer-img"/>
        </footer>
    )
  }
}
export default AppFoot;