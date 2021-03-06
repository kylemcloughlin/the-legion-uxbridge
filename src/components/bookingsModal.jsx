import React from 'react';
import Modal from 'react-modal';
import { DateTimePicker } from 'react-widgets'
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
// import {Carousel} from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import hall01 from './hall01.jpeg';
// import hall02 from './hall02.jpg';
// import hall03 from './hall03.jpg'
import 'react-widgets/dist/css/react-widgets.css';

Moment.locale('en')
momentLocalizer()
const customStyles = {

  content: {
    top: '50%',
    width: '80%',
    height: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

class BookingModal extends React.Component {
  constructor(props){
    super(props)
    let start = new Date();
    let end = new Date();
    start.setDate(start.getDate() + 1)
    start.setHours(12) 
    start.setMinutes(30)
    end.setHours(start.getHours() + 1)
    end.setMinutes(30)
    this.state = {
      title: null,
      start: start,
      end: end,
      discription: null,
      allDay: false

    }
  }
    afterOpenModal = () => {
      // references are now sync'd and can be accessed.
      this.subtitle.style.color = '#f00';
    }
   _handleTitle = (e) => {
    console.log(`title: ${e.target.value}`, e)
    this.setState({
      title: e.target.value
    })
  }
   _handleStartDate = (e) => { 
    let stringE = e.toString();
    stringE = stringE.split(" ")
     let newDate = [stringE[1], stringE[2], ",", stringE[3] , stringE[4]]
    console.log(newDate.join(" "))
    console.log(stringE)
     this.setState({
      date: e
     })
  }
  _handleEndDate = (e) => {
    console.log(`date ${e}`)
    this.setState({
      end: e
    })
  }
   _handleDiscription = (e) => { 
    console.log(`discription: ${e.target.value}`)
     this.setState({
      discription: e.target.value
     })
  }
  _handleSubmit = () => {
    let startToString = this.state.start.toString();
    let endToString = this.state.end.toString();
    startToString = startToString.split(" ")
    endToString = endToString.split(" ")
    let newStartDate = [startToString[1], startToString[2], ",", startToString[3], startToString[4]]
    let newEndDate = [startToString[1], startToString[2], ",", startToString[3], endToString[4]]
    let output = {
      title: this.state.title,
      start: new Date(newStartDate.join(" ")),
      end: new Date(newEndDate.join(" ")),
      allDay: false,
      resource: false
    }
    this.props.event(output)
  
    this.props.closeModal()
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
          <button id='exit' onClick={this.props.closeModal}>close</button>
          <h2 id='modal-title' ref={subtitle => this.subtitle = subtitle}>Book Your Events</h2>
          <form>
           <div className='label-handler'>
            <label className='modal-label'>Event</label>
            <input className='modal-input' placeholder="event title" onChange={this._handleTitle}/>
           </div>
            <div className='label-handler'>
              <label className='modal-label'>Discription</label>            
            <input className='modal-input-2' placeholder="event discription" onChange={this._handleDiscription}/>
            </div>
            <span lassName='label-handler'>
              <label className='modal-label'>Date</label>
            <DateTimePicker className='date-inputs'
              defaultValue={this.state.start}
              format="MMM, DD, YYYY"
              onChange={this._handleStartDate}/>
            </span>

            <span className='label-handler'>
              <label className='modal-label'>
              Time
              </label>
            <DateTimePicker className='date-inputs'
              defaultValue={this.state.start}
              date={false}
              onChange={this._handleEndDate} />
              </span>
          </form>
          <button className='button-modal' onClick={this._handleSubmit}>submit</button>
        </Modal>

      )
    }
  }

  export default BookingModal;



