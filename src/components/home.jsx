import React from 'react';
class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div>
        <h1>Welcome to the Uxbridge Legion.</h1>
    <p>Branch 170 recieved its charter in 1930! Active for almost 85 years, the members have met in various 
        places around town including the old post office, and the old marketplace, and finally in the late 40's 
        establishing the location that continues to this day. The original building burned down in 1953, and was 
        rebuilt. It has since had several renovations. It is notable that most of the work on the legion has been done 
        by volunteers.</p>
        <h2>Our MISSION: </h2>
        <p>Serving veterans and their dependents, promoting Remembrance, and acting in the service of Canada and its communities.</p>
    </div>
    )
  }
}
export default Home;