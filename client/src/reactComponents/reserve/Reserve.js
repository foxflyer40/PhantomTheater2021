import React from 'react'
import './Reserve.css'

function Reserve() {
  return (
    <div className="reserve">
      <h1>Reservations</h1>
      <form>
        <div className='name'>
          <label for="fullName">Full Name:</label>
          <br />
          <input type='text' id='firstName' name='firstName' placeholder="First Name"></input>
          <input type='text' id='lastName' name='lastName' placeholder="Last Name"></input>
        </div>

        <div className="contact">
          <div>
            <label for="phone">Phone Number:</label>
            <br/>
            <input type='text' id='phone' name='phone' placeholder="Enter number"></input>
          </div>

          <div>
            <label for="email">Email:</label>
            <br />
            <input type='text' id='email' name='email' placeholder="Enter email"></input>
          </div>
        </div>

        <div className="showInfo">
          <label for="show">Show:</label>
          <select id='show' name='show'>
            <option value="">Please select a show</option>
            <option value="newWorks">New Works</option>
            <option value="everyBrill">Every Brilliant Thing</option>
            <option value="OrlaghC">Orlagh Cassidy</option>
            <option value="JeffC">Jeff Carey</option>
            <option value="DJDance">DJ Dance Party</option>
          </select>

          <br />

          <label for="showDate">Show Date:</label>
          <input type='datetime-local' id='showDate' name='showDate'></input>
          <br />

          <label for="tixNum">Tickets:</label>
          <select id='tixNum' name='tixNum'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br />
        </div>

        <div className="accessInfo">
          <p className="access">I require additional assistance:</p>
          <input type="radio" className="access" name="access" value="yes" />
          <label id="yes" for="yes">Yes</label>
          <input type="radio" className="access" name="access" value="yes" />
          <label id="no" for="no">No</label>
        </div>
        <textarea id="addtlInfo" name="addtlInfo" rows="4" cols="50" placeholder="Enter assistance requirements "></textarea>

        <input id="button" type='submit' value='Reserve Now'></input>

      </form>
    </div >
  )
}

export default Reserve
