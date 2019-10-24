import React from 'react';
import BookingModal from '.././components/bookingsModal.jsx'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)
const myEventsList = [
  {
    title: 'Open Mic',
    start: new Date('October 06 2019 14:00:00'),
    end: new Date('October 06 2019 17:00:00'),
    allDay: false,
    resource: false
  }, {
    title: 'Open Mic',
    start: new Date('October 20 2019 14:00:00'),
    end: new Date('October 20 2019 17:00:00'),
    allDay: false,
    resource: false
  },{
    title: 'Open Mic',
    start: new Date('October 27 2019 14:00:00'),
    end: new Date('October 27 2019 17:00:00'),
    allDay: false,
    resource: false
  }, {
    title: 'Legion Pipes and Drums',
    start: new Date('October 07 2019 19:30:00'),
    end: new Date('October 07 2019 21:30:00'),
    allDay: false,
    resource: false
  },{
    title: 'Legion Pipes and Drums',
    start: new Date('October 14 2019 19:30:00'),
    end: new Date('October 14 2019 21:30:00'),
    allDay: false,
    resource: false
  }, {
    title: 'Legion Pipes and Drums',
    start: new Date('October 21 2019 19:30:00'),
    end: new Date('October 21 2019 21:30:00'),
    allDay: false,
    resource: false
  }, {
    title: 'Legion Pipes and Drums',
    start: new Date('October 28 2019 19:30:00'),
    end: new Date('October 28 2019 21:30:00'),
    allDay: false,
    resource: false
  },{
  title: 'Poppy Campaign',
  start: new Date('October 25 2019 10:00:00'),
  end: new Date('November 10 2019 17:30:00'),
  allDay: false,
  resource: false
},{
  title: 'Ladies Auxiliary Meeting',
  start: new Date('October 01 2019 19:30:00'),
  end: new Date('October 01 2019 20:30:00'),
  allDay: false,
  resource: false
}, {
    title: 'Meat Roll',
    start: new Date('October 05 2019 16:00:00'),
    end: new Date('October 05 2019 17:00:00'),
    allDay: false,
    resource: false
  }, {
    title: 'Meat Roll',
    start: new Date('October 12 2019 16:00:00'),
    end: new Date('October 12 2019 17:00:00'),
    allDay: false,
    resource: false
  }, {
    title: 'Meat Roll',
    start: new Date('October 26 2019 16:00:00'),
    end: new Date('October 26 2019 17:00:00'),
    allDay: false,
    resource: false
  },{
    title: "Senior's Euchre",
    start: new Date('October 08 2019 19:00:00'),
    end: new Date('October 2019 21:00:00'),
    allDay: false,
    resource: false
  }, {
    title: 'Executive Meeting',
    start: new Date('October 15 2019 19:30:00'),
    end: new Date('October 15 2019 21:00:00'),
    allDay: false,
    resource: false
  }, {
    title: 'General Meeting',
    start: new Date('October 22 2019 19:30:00'),
    end: new Date('October 22 2019 21:00:00'),
    allDay: false,
    resource: false
  },{
  title: 'Veterans Afternoon',
  start: new Date('October 21 2019 14:00:00'),
  end: new Date('October 21  2019 16:00:00'),
  allDay: false,
  resource: false
}, {
  title: "Dart League",
  start: new Date('October 02, 2019'),
  end: new Date('October 02, 2019'),
  allDay: true,
  resource: "blahslajsjs"
}, {
    title: "Dart League",
    start: new Date('October 16, 2019'),
    end: new Date('October 16, 2019'),
    allDay: true,
    resource: "blahslajsjs"
  }, {
    title: "Dart League",
    start: new Date('October 09, 2019'),
    end: new Date('October 09, 2019'),
    allDay: true,
    resource: "blahslajsjs"
  }, {
    title: "Dart League",
    start: new Date('October 23, 2019'),
    end: new Date('October 23, 2019'),
    allDay: true,
    resource: "blahslajsjs"
  }, {
    title: "Dart League",
    start: new Date('October 30, 2019'),
    end: new Date('October 30, 2019'),
    allDay: true,
    resource: "blahslajsjs"
  }, {
  title: "Thursday Wing Night",
  start: new Date('October 03, 2019 05:30:00'),
  end: new Date('October 03, 2019 08:00:00'),
  allDay: false,
  resource: false
  }, {
    title: "Thursday Wing Night",
    start: new Date('October 17, 2019 05:30:00'),
    end: new Date('October 17, 2019 08:00:00'),
    allDay: false,
    resource: false
  }, {
  title: "Friday Night Euchre",
  start: new Date('October 04, 2019 07:00:00'),
  end: new Date('October 04, 2019 12:00:00'),
  allDay: false,
  resource: false
  }, {
    title: "Friday Night Euchre",
    start: new Date('October 11, 2019 07:00:00'),
    end: new Date('October 11, 2019 12:00:00'),
    allDay: false,
    resource: false
  }, {
    title: "Friday Night Euchre",
    start: new Date('October 18, 2019 07:00:00'),
    end: new Date('October 18, 2019 12:00:00'),
    allDay: false,
    resource: false
  }, {
    title: "Friday Night Euchre",
    start: new Date('October 25, 2019 07:00:00'),
    end: new Date('October 25, 2019 12:00:00'),
    allDay: false,
    resource: false
  }, { 
    title: "Meat Roll",
    start: new Date('October 19, 2019 04:00:00'),
    end: new Date('October 19, 2019 05:00:00'),
    allDay: false,
    resource: false
  }, {
    title: "karaoke .. it's back !!!!",
    start: new Date('October 17, 2019 08:00:00'),
    end: new Date('October 17, 2019 10:00:00'),
    allDay: false,
    resource: false
  }, {
    title: "karaoke .. it's back !!!!",
    start: new Date('November 09, 2019 08:00:00'),
    end: new Date('November 09, 2019 10:00:00'),
    allDay: false,
    resource: false
  }, {
    title: "Meat Roll",
    start: new Date('November 02, 2019 04:00:00'),
    end: new Date('November 02, 2019 05:00:00'),
    allDay: false,
    resource: false
  }, {
    title: "Meat Roll",
    start: new Date('November 16, 2019 04:00:00'),
    end: new Date('November 16, 2019 05:00:00'),
    allDay: false,
    resource: false
  }, {
    title: "Meat Roll",
    start: new Date('November 23, 2019 04:00:00'),
    end: new Date('November 23, 2019 05:00:00'),
    allDay: false,
    resource: false
  }, {
    title: "Meat Roll",
    start: new Date('November 30, 2019 04:00:00'),
    end: new Date('November 30, 2019 05:00:00'),
    allDay: false,
    resource: false
  }, {
    title: "Friday Night Euchre",
    start: new Date('November 01, 2019 07:00:00'),
    end: new Date('November 01, 2019 12:00:00'),
    allDay: false,
    resource: false
  }, {
    title: "Friday Night Euchre",
    start: new Date('November 08, 2019 07:00:00'),
    end: new Date('November 08, 2019 12:00:00'),
    allDay: false,
    resource: false
  }, {
    title: "Friday Night Euchre",
    start: new Date('November 15, 2019 07:00:00'),
    end: new Date('November 15, 2019 12:00:00'),
    allDay: false,
    resource: false
  }, {
    title: "Friday Night Euchre",
    start: new Date('November 22, 2019 07:00:00'),
    end: new Date('November 22, 2019 12:00:00'),
    allDay: false,
    resource: false
  }, {
    title: "Friday Night Euchre",
    start: new Date('November 29, 2019 07:00:00'),
    end: new Date('November 29, 2019 12:00:00'),
    allDay: false,
    resource: false
  }, {
    title: "Dart League",
    start: new Date('November 06, 2019'),
    end: new Date('November 06, 2019'),
    allDay: true,
    resource: false
  }, {
    title: "Dart League",
    start: new Date('November 13, 2019'),
    end: new Date('November 13, 2019'),
    allDay: true,
    resource: false
  }, {
    title: "Dart League",
    start: new Date('November 20, 2019'),
    end: new Date('November 20, 2019'),
    allDay: true,
    resource: false
  }, {
    title: "Dart League",
    start: new Date('November 27, 2019'),
    end: new Date('November 27, 2019'),
    allDay: true,
    resource: false
  }, {
    title: "Senior's Euchre",
    start: new Date('October 08 2019 19:00:00'),
    end: new Date('October 2019 21:00:00'),
    allDay: false,
    resource: false
  }, {
    title: 'Executive Meeting',
    start: new Date('November 19 2019 19:30:00'),
    end: new Date('November 19 2019 21:00:00'),
    allDay: false,
    resource: false
  }, {
    title: 'General Meeting',
    start: new Date('November 26 2019 19:30:00'),
    end: new Date('November 26 2019 21:00:00'),
    allDay: false,
    resource: false
  }, {
    title: 'Veterans Afternoon',
    start: new Date('November 18 2019 14:00:00'),
    end: new Date('November 18  2019 16:00:00'),
    allDay: false,
    resource: false
  }, {
    title: 'Ladies Auxiliary Meeting',
    start: new Date('November 05 2019 19:30:00'),
    end: new Date('November 05 2019 20:30:00'),
    allDay: false,
    resource: false
  }, {
    title: 'Remembrance Banquet',
    start: new Date('November 02 2019 17:30:00'),
    end: new Date('November 02 2019 19:00:00'),
    allDay: false,
    resource: false
  }, {
    title: 'Tom Newman CD Release',
    start: new Date('November 16 2019 19:00:00'),
    end: new Date('November 16 2019 21:00:00'),
    allDay: false,
    resource: false
  }, {
    title: 'White Elephant Sale',
    start: new Date('November 17 2019 14:00:00'),
    end: new Date('November 17 2019 16:00:00'),
    allDay: false,
    resource: false
  }, {
    title: 'Open Mic',
    start: new Date('November 03 2019 14:00:00'),
    end: new Date('November 03 2019 17:00:00'),
    allDay: false,
    resource: false
  }, {
    title: 'Legion Pipes and Drums',
    start: new Date('November 04 2019 19:30:00'),
    end: new Date('November 04 2019 21:30:00'),
    allDay: false,
    resource: false
  }, {
    title: 'Open Mic',
    start: new Date('November 10 2019 14:00:00'),
    end: new Date('November 10 2019 17:00:00'),
    allDay: false,
    resource: false
  }, {
    title: 'Legion Pipes and Drums',
    start: new Date('November 11 2019 19:30:00'),
    end: new Date('November 11 2019 21:30:00'),
    allDay: false,
    resource: false
  }, {
    title: 'Open Mic',
    start: new Date('November 17 2019 14:00:00'),
    end: new Date('November 17 2019 17:00:00'),
    allDay: false,
    resource: false
  }, {
    title: 'Legion Pipes and Drums',
    start: new Date('November 18 2019 19:30:00'),
    end: new Date('November 18 2019 21:30:00'),
    allDay: false,
    resource: false
  }, {
    title: 'Open Mic',
    start: new Date('November 24 2019 14:00:00'),
    end: new Date('November 24 2019 17:00:00'),
    allDay: false,
    resource: false
  }, {
    title: 'Legion Pipes and Drums',
    start: new Date('November 25 2019 19:30:00'),
    end: new Date('November 25 2019 21:30:00'),
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
              onSelectEvent={(e) => { console.log('hit', e)}}
          />
          
          )
        }
        <BookingModal open={this.state.modalIsOpen} openModal={this.openModal} closeModal={this.closeModal} event={this._handleEvents}/>    
   </div>
    )
  }
}
export default BookHall;