import React from 'react';
import ReactLightCalendar from '@lls/react-light-calendar'
import '@lls/react-light-calendar/dist/index.css'

class Calendar extends React.Component {
  constructor(props) {
    super(props)
    const date = new Date()
    const startDate = date.getTime()
    this.state = {
      startDate, // Today
      endDate: new Date(startDate).setDate(date.getDate() + 6) // Today + 6 days
    }
    console.log(new Date(this.state.startDate))
  }

  onChange = (startDate, endDate) => {
  this.setState({ startDate, endDate })
}

  render = () => {
    const { startDate, endDate } = this.state

    return (
   <div>
     <label>Name</label>
     <input onChange={(e) => {  console.log("1", e.target.value) }  }/>

        <label>Number</label>
        <input onChange={(e) => { console.log("2", e.target.value) }}/>
        <label>Name</label>
        <input onChange={(e) => { console.log("3", e.target.value) }}/>


      <ReactLightCalendar startDate={startDate} endDate={endDate} onChange={this.onChange} range displayTime timeZone="EDT"/>
   </div>
    )
  }
}
export default Calendar;