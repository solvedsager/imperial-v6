import React, { Fragment, useState, useEffect } from 'react';
import {
  Container,
  Card,
  Row,
  Col,
  Jumbotron,
  Modal,
  Button
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import banner from './traffic.jpg';
import e1 from './e1.jpg';
import e2 from './e2.jpg';
import e3 from './e3.jpg';
import stripe1 from './stripe3.png';
import stripe2 from './contact-shepe-white.png';
import { connect } from 'react-redux';
import { addItem } from './actions/item';
import { addContact } from './actions/contact';





const Contacts = ({addItem, addContact}) => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFirst = (e) => setFirst(e.target.value);
  const handleLast = (e) => setLast(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      first: first,
      last: last,
      email: email,
      message: message
    };
    // Add item via addItem action
    addContact(newContact);
    console.log('success');
    // Close modal
  };

  return (
    <div>
        <section className="banner_area" data-stellar-background-ratio="0.5">
            <h2>Contact Us</h2>
        </section>
        <div className="contact_map">
          <div style={{width: "100%"}} >
            <iframe src="https://maps.google.com/maps?width=100%&amp;height=500&amp;hl=en&amp;q=13111%20Nutty%20Brown%20Road+(Imperial%20Traffic%20Control)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" ></iframe>
          </div>
        </div>
        {/*

          <div className="contact_map">
            <div style={{width: "100%"}} >
              <iframe style={{width="100%", height="500", frameBorder="0", scrolling="no", marginHeight="0", marginWidth="0"}} src="https://maps.google.com/maps?width=100%&amp;height=500&amp;hl=en&amp;q=13111%20Nutty%20Brown%20Road+(Imperial%20Traffic%20Control)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" ></iframe>
            </div>
          </div>

          */}
        <section className="all_contact_info">
            <div className="container">
                <div className="row contact_row">
                    <div className="col-sm-6 contact_info">
                        <h2>Contact Info</h2>
                        <p>We are located at 13111 Nutty Brown Rd. Feel free to visit us at our location to see the full line of Intelligent Work Zone Safety Equipment we stock, and to discuss your traffic maintenance needs.</p>
                        <p>We look forward to assisting you.</p>
                        <div className="location">
                            <div className="location_laft">
                                <a className="f_location" href="#">location</a>
                                <a href="#">phone</a>
                                <a href="#">fax</a>
                                <a href="#">email</a>
                            </div>
                            <div className="address">
                                <a href="#">13111 Nutty Brown Rd.
                                <br></br> Austin, TX 78737 </a>
                                <a href="#">(844) 467-8723 (IMP-TRAF)</a>
                                <a href="#">1 (844) 467-8723</a>
                                <a href="#">Service@ImperialTrafficSolutions.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 contact_info send_message">
                        <h2>Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="form-inline contact_box">
                            <input type="text" name="first" className="form-control input_box" placeholder="First Name *" onChange={handleFirst}></input>
                            <input type="text"name="last" className="form-control input_box" placeholder="Last Name *" onChange={handleLast}></input>
                            <input type="text" name="email" className="form-control input_box" placeholder="Your Email *" onChange={handleEmail}></input>
                            {/*                             <input type="text" className="form-control input_box" placeholder="Subject"></input> */}
                            <textarea className="form-control input_box" name="message" placeholder="Message" onChange={handleMessage}></textarea>
                            <button type="submit" className="btn btn-default">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
      </div>
  )
}

Contacts.propTypes = {
  addItem: PropTypes.func.isRequired,
  addContact: PropTypes.func.isRequired,

};

export default connect(null, { addItem, addContact })(Contacts);
