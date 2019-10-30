import React from 'react';
import emailImg from './email-wht.jpg'
import img2 from './email-blk.jpg'
class Contact extends React.Component {
  email = () => {
    window.location.href = `mailto: legion170@powergate.ca`
  }

  render() {
    return (
      <div>
        <div className='important-div'>
          <h2 className='hours-h2'>Contact infomation</h2>

          <table>
            <tbody>
          <tr>
          <td>Telephone</td>
  
                <td className='padding'>905-852-5293</td>
          </tr>
          <tr>
                <td>Location</td>
                <td className='padding'>109 Franklin Street, Uxbridge, Ontario</td>

          </tr>
          <tr>
          <td><img className='email' alt="" src={emailImg} onClick={this.email} onMouseOver={e => (e.currentTarget.src = img2)} onMouseOut={e => (e.currentTarget.src = emailImg)} /></td>        
          <td className='padding'>legion170@powergate.ca</td>
          </tr>
            </tbody>
          </table>

        </div>

        <div className="addresses-div">
          
          <h2>Donations</h2>

          <h4>Mailing Address</h4>
          <span>Royal Canadian Legion Branch 170</span>
          <br />
          <span>Box 137 Uxbridge, Ontario</span>
          <br />
          <span> L9P 1J5 CANADA</span>

          <br />
          <label>
            <i> Donations to the Legion  can be sent to the mailing address above.
          Please make cheques payable to: </i></label>
          <span><b>Royal Canadian Legion, Branch 170.</b></span>
          <br />

          <label><i>If making donations to the Legion Poppy Fund, please make cheques payable:   </i></label>
          <span><b>Uxbridge Legion Poppy Fund</b></span>

        </div>
        <div className='hours-div'>
 
        <h2 className='hours-h2'>Club Room Hours</h2>
        <table>
          <tbody>
            <b>Summer Hours:  June – August</b>
            <tr>
              <td>Monday - Saturday</td>
              <td>2:00 pm – 8:00 pm</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>2:00 pm – 6:00 pm</td>
            </tr>
            <br />
            
            <b>Winter Hours:  September  –  June</b>
            <tr>
              <td>Monday - Saturday</td>
              <td>1:00 pm – 9:00 pm</td>
            </tr><tr>
              <td>Sunday</td>
              <td>2:00 pm – 6:00 pm</td>
            </tr>

         

          </tbody>
        </table>
       </div>
      </div>
    )
  }
}
export default Contact;