import React from 'react';
import BookingModal from '.././components/bookingsModal.jsx'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)
const myEventsList = [{
  title: "dart League",
  start: new Date('October 16, 2019'),
  end: new Date('October 16, 2019'),
  allDay: true,
  resource: "blahslajsjs"
}, {
  title: "Thursday Wing Night",
  start: new Date('October 17, 2019 05:30:00'),
  end: new Date('October 17, 2019 08:00:00'),
  allDay: false,
  resource: false
    }, {
  title: "Friday Night Euchre",
  start: new Date('October 16, 2019 07:00:00'),
  end: new Date('October 16, 2019 12:00:00'),
  allDay: false,
  resource: false
    }, { title: "Meat Roll",
  start: new Date('October 17, 2019 04:00:00'),
  end: new Date('October 17, 2019 05:00:00'),
  allDay: false,
  resource: false
    }, {
  title: "karaoke .. it's back !!!!",
  start: new Date('October 17, 2019 08:00:00'),
  end: new Date('October 17, 2019 10:00:00'),
  allDay: false,
  resource: false
    }];
class BookHall extends React.Component {
  constructor(props) {
    super(props)
    const date = new Date()

    const startDate = date.getTime()
    this.state = {
      startDate: new Date(), // Today
       endDate: new Date(startDate).setDate(date.getDate() + 6), // Today + 6 days
        modalIsOpen: false,
      eventList: myEventsList,
      
    } 
  }
  openModal = () => {
    this.setState({ modalIsOpen: true });
  }
  
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }
  _handleEvents = (input) => {
    console.log("hit")
    console.table(input)
    let event = {

    }
    let prev = this.state.eventList
    this.setState({
      eventList: [...prev, input]
    })
    console.table(this.state.eventList)
  }

  
  // componentWillReceiveProps(nextProps) {
  //   let prevEvents = this.state
  //   console.table(prevEvents)  
  //   console.log("HEREEEEE", nextProps)
  //   // this.setState({
  //   //   eventList: [nextProps.reviews
  //   // });
  // }
  render = () => {
    console.log(this.state.startDate)
   
    return (
   <div className="calendar-div">
        <button onClick={this.openModal}>book the hall</button>
        {
          this.state.modalIsOpen ? (null) : (
          <Calendar
            localizer={localizer}
          events={this.state.eventList}
            startAccessor="start"
            endAccessor="end"
          />
          
          )
        }
        <BookingModal open={this.state.modalIsOpen} openModal={this.openModal} closeModal={this.closeModal} event={this._handleEvents}/>    
   </div>
    )
  }
}
export default BookHall;