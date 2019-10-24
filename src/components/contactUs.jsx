import React from 'react';

class Contact extends React.Component {


  render() {
    return (
    <div>
       <div className='important-div'>
          <h2>Contact infomation:</h2>
        <label>Email Address:</label>
       <br/>
        <span>legion170@powergate.ca</span>
          <br />
       
        <label>Telephone: </label>
          <br />

        <span>905.852.5293</span>
       </div>
       
       <div className="addresses-div">

          <h2>Mailing Address:</h2>
      
        <label>Our Location:</label>
        <span> 109 Franklin Street, Uxbridge, Ontario Canada</span>
          <br />
       
        <label>Mailing Address: </label>
        <span>Royal Canadian Legion Branch 170 Box 137 Uxbridge, Ontario. L9P 1J5 CANADA</span>
          <br />
          <h2>Donations:</h2>
        
        <label><i> Donations to the Legion  can be sent to the mailing address above. 
          Please make cheques payable to:</i></label>
          <span><b>Royal Canadian Legion, Branch 170.</b></span>
          <br />
          
         <label><i>If making donations to the Legion Poppy Fund, please make cheques payable: </i></label>
         <span><b>Uxbridge Legion Poppy Fund</b></span>
        
       </div>
       <div className='hours-div'>
        <h2>Club Room Hours :</h2>
        <label>Summer Hours:  June – August</label>
          <br />     
        <span>Monday –  Saturday – 2:00 pm – 8:00 pm. Sunday – 2:00 pm – 6:00 pm</span>
          <br />
       
        <label>Winter Hours:  September  –  June</label>
          <br />
        
        <span>Monday to Friday: 1:00 pm – 9:00 pm. Saturday: 1:00 pm – 9:00 pm Sunday: 2:00 pm – 6:00 pm</span>
          <br />

       </div>
    </div>
    )
  }
}
export default Contact;