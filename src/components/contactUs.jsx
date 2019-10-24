import React from 'react';

class Contact extends React.Component {


  render() {
    return (
    <div>
   
        <label>Our Location:</label>
        <span> 109 Franklin Street, Uxbridge, Ontario Canada</span>
       
        <label>Mailing Address: </label>
        <span>Royal Canadian Legion Branch 170 Box 137 Uxbridge, Ontario. L9P 1J5 CANADA</span>
        
        <label><i> Donations to the Legion  can be sent to the mailing address above. 
          Please make cheques payable to:</i></label>
          <span><b>Royal Canadian Legion, Branch 170.</b></span>
          
         <label><i>If making donations to the Legion Poppy Fund, please make cheques payable: </i></label>
         <span><b>Uxbridge Legion Poppy Fund</b></span>
       
        <label>Email Address:</label>
        <span>legion170@powergate.ca</span>
        
        <label>Telephone: </label>
        <span>905.852.5293</span>
       <div className='hours-div'>
        <h2>Club Room Hours :</h2>
        <label>Summer Hours:  June – August</label>
        <span>Monday –  Saturday – 2:00 pm – 8:00 pm. Sunday – 2:00 pm – 6:00 pm</span>
        <label>Winter Hours:  September  –  June</label>
        <span>Monday to Friday: 1:00 pm – 9:00 pm. Saturday: 1:00 pm – 9:00 pm Sunday: 2:00 pm – 6:00 pm</span>
       </div>
    </div>
    )
  }
}
export default Contact;