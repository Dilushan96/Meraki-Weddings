import React, { useState } from 'react';
import './request.css';

function Request() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tab) => {
    setActiveTab(tab);

  };
  

  return (
    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className='quote-request' >
        <h1>REQUEST A QUOTE</h1>
      <p>We like to know our clients very well to ensure we are a good fit.
    If you could take just one minute to answer the following questions.</p>
     </div>
      <div className="tabs">
        <button  
         style={{
          backgroundColor: '#e1e1e1',
          color: '',
          fontWeight: 'semibold',
          padding: '10px 20px',
          border: '1px solid gray-400',
          borderRadius: '4px',
          boxShadow: '0px 0px 10px gray'
        }}
        onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''}>
          WEDDINGS
        </button>
        <button 
         style={{
          backgroundColor: '#e1e1e1',
          color: '',
          fontWeight: 'semibold',
          padding: '10px 20px',
          border: '1px solid gray-400',
          borderRadius: '4px',
          boxShadow: '0px 0px 10px gray'
        }}onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active' : ''}>
          ENGAGEMENTS
        </button>
        <button 
         style={{
          backgroundColor: '#e1e1e1',
          color: '',
          fontWeight: 'semibold',
          padding: '10px 20px',
          border: '1px solid gray-400',
          borderRadius: '4px',
          boxShadow: '0px 0px 10px gray'
        }}onClick={() => handleTabClick(3)} className={activeTab === 3 ? 'active' : ''}>
          CASUAL SHOOTS
        </button>
        <button 
         style={{
          backgroundColor: '#e1e1e1',
          color: '',
          fontWeight: 'semibold',
          padding: '10px 20px',
          border: '1px solid gray-400',
          borderRadius: '4px',
          boxShadow: '0px 0px 10px gray'
        }}onClick={() => handleTabClick(4)} className={activeTab === 4 ? 'active' : ''}>
          HOMECOMING
        </button>
      </div>
      {activeTab === 1 && <WeddingsForm />}
      {activeTab === 2 && <EngagementsForm />}
      {activeTab === 3 && <CasualShootsForm />}
      {activeTab === 4 && <HomecomingForm />}
      
    </div>
    
  );
}

function WeddingsForm() {
    const [brideName, setBrideName] = useState('');
    const [groomName, setGroomName] = useState('');
    const [email, setEmail] = useState('');
    const [weddingDate, setWeddingDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [ceremony, setCeremony] = useState('');
    const [guests, setGuests] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // logic to handle the form submit goes here
        console.log(
          'Form data:',
          brideName,
          groomName,
          email,
          weddingDate,
          time,
          location,
          ceremony,
          guests,
          message
        );
      };
  return (
    <div>
      
    <form 
    
    onSubmit={handleSubmit}>
      {/* form components for WEDDINGS tab */}
      
      <div>
        <label htmlFor="bride-name">Bride's Name:</label>
        <input
          type="text"
          id="bride-name"
          value={brideName}
          onChange={(event) => setBrideName(event.target.value)}
        />
      </div>
      
      <div>
        <label htmlFor="groom-name">Groom's Name:</label>
        <input
          type="text"
          id="groom-name"
          value={groomName}
          onChange={(event) => setGroomName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="wedding-date">Wedding Date:</label>
        <input
          type="date"
          id="wedding-date"
          value={weddingDate}
          onChange={(event) => setWeddingDate(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="location">Wedding Location</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="ceremony">Ceremony</label>
        <input
          type="checklist"
          id="ceremony"
          value={time}
          onChange={(event) => setCeremony(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="guests">No.Guests</label>
        <input
          type="number"
          id="guests"
          value={guests}
          onChange={(event) => setGuests(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <input
          type="message"
          id="guests"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>
      
      <button class="bg-white hover:bg-gray-100
       text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"  
       type="submit">Request Quote</button>
      
    </form>
    </div>
  );
}



function EngagementsForm() {
  const [brideName, setBrideName] = useState('');
  const [groomName, setGroomName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add code to submit the form data here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="bride-name">Bride's Name:</label>
        <input
          type="text"
          id="bride-name"
          value={brideName}
          onChange={(event) => setBrideName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="groom-name">Groom's Name:</label>
        <input
          type="text"
          id="groom-name"
          value={groomName}
          onChange={(event) => setGroomName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="time">Time:</label>
        <select
          id="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        >
          <option value="">Select Time</option>
          <option value="morning">Morning</option>
          <option value="evening">Evening</option>
        </select>
      </div>
      <button type="submit">Request A Quote</button>
    </form>
  );
}
function CasualShootsForm() {
  const [coupleName, setCoupleName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add code to submit the form data here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="couple-name">Couple Name:</label>
        <input
          type="text"
          id="couple-name"
          value={coupleName}
          onChange={(event) => setCoupleName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="contact-no">Contact Number:</label>
        <input
          type="text"
          id="contact-no"
          value={contactNo}
          onChange={(event) => setContactNo(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>
      <button type="submit">Request A Quote</button>
    </form>
  );
}


function HomecomingForm() {
  const [clientName, setClientName] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numOfPeople, setNumOfPeople] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add code to submit the form data here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="client-name">Client Name:</label>
        <input
          type="text"
          id="client-name"
          value={clientName}
          onChange={(event) => setClientName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="event-location">Event Location:</label>
        <input
          type="text"
          id="event-location"
          value={eventLocation}
          onChange={(event) => setEventLocation(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="num-of-people">Number of People:</label>
        <input
          type="number"
          id="num-of-people"
          value={numOfPeople}
          onChange={(event) => setNumOfPeople(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>
      <button type="submit">Request A Quote</button>
    </form>
  )
}


export default Request;
