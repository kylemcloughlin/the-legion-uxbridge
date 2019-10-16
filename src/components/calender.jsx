import React from 'react';
import BookingModal from '.././components/bookingsModal.jsx'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'


const localizer = momentLocalizer(moment)
class BookHall extends React.Component {
  constructor(props) {
    super(props)
    const date = new Date()

    const startDate = date.getTime()
    this.state = {
      startDate: new Date(), // Today
      endDate: new Date(startDate).setDate(date.getDate() + 6), // Today + 6 days
        modalIsOpen: false
    
    } 
  }
  openModal = () => {
    this.setState({ modalIsOpen: true });
  }
  
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }
  
  onChange = (startDate, endDate) => {
    this.setState({ startDate, endDate })
  }
  
  render = () => {
    console.log(this.state.startDate)
    const myEventsList = [{
      title: 'tesst',
      start: this.state.startDate,
      end: this.state.endDate,
      allDay: true,
      resource: "blah blah blah",
    }];
    return (
   <div>
        <button onClick={this.openModal}>book the hall</button>
          <Calendar
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
          />
        <BookingModal open={this.state.modalIsOpen} openModal={this.openModal} closeModal={this.closeModal} />    
   </div>
    )
  }
}
export default BookHall;