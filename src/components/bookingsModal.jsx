import React from 'react';
import Modal from 'react-modal';
import { DateTimePicker } from 'react-widgets'
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import 'react-widgets/dist/css/react-widgets.css';

Moment.locale('en')
momentLocalizer()
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

class BookingModal extends React.Component {
 
    afterOpenModal = () => {
      // references are now sync'd and can be accessed.
      this.subtitle.style.color = '#f00';
    }


    render() {
      return (
        <Modal
          isOpen={this.props.open}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.props.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>Booking</h2>
          <button onClick={this.props.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input placeholder="event-title"/>
            <DateTimePicker
              defaultValue={new Date()}

              onChange={(e) => {console.log(e)}}

            />

            <input placeholder="event-discription"/>
          </form>
        </Modal>

      )
    }
  }

  export default BookingModal;
