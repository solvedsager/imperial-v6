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





const Home = ({addItem, addContact}) => {
  const [name, setName] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChangeName = (e) => setName(e.target.value);
  const handleFirst = (e) => setFirst(e.target.value);
  const handleLast = (e) => setLast(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name
    };

    // Add item via addItem action
    addItem(newItem);
    console.log('success');
    // Close modal
    handleShow();
  };
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
      <Jumbotron className="header--bg">
        <div className="row">
            <div className="col-md-12">
                <div className="header-text">
                    <h1>Creative Title Goes Here</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br></br> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br></br> nostrud exercitation</p>
                    <button>Read More</button>
                    <button>Explore</button>
                </div>
            </div>
        </div>
      </Jumbotron>

      <div className="container">
        <section className="about">
        <div className="row">
          <div className="col-md-12 equipment-title">
            <h1>About Us</h1>
          </div>
          <div className="col-md-12 equipment-title">
            <p>Imperial Traffic Solutions is a locally owned and operated, turnkey Traffic Control company that specializes in the rentals of Intelligent Work Zone Safety Equipment, including Portable Changeable Message Signs, Arrow Boards, Radar Speed Trailers and Truck-Mounted Attenuators; based in Austin serving Central Texas, San Antonio and the surrounding areas.</p>
            <br></br>
    <p>Whether you need a simple single lane closure or a fully engineered traffic control plan, Imperial Traffic Solutions can handle any and all of your Traffic Control needs.</p>
    <br></br>

    <p>With our vast inventory of the most current electronic sign technology and traffic control devices, we are ready for any size rental request or emergency situation.</p>
    <br></br>

  <p>  Our mission is to provide the absolute highest quality Traffic Control services and Intelligent Work Zone Safety Equipment, with the fastest response time, all at the most competitive price.</p>
          <br></br>
  <p>  Contact us today for any of your Traffic Control or Intelligent Work Zone Safety Equipment rental needs.</p>
          </div>
        </div>
        </section>
      </div>

      <hr></hr>

      <div className="container">
        <div className="row">
          <div className="col-md-12 equipment-title">
            <h1>Services We Offer</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <section className="price">
          <div className="page-section page-section--small text-center">
            <div className="price__panel-wrapper">
              <div className="row gutters-50">
                <div className="col-md-4">
                  <div className="panel text-center">
                    <div className="panel-heading">
                      <h4 className="price__title">SILVER</h4>
                      <h1 className="price__ammount">&#36;<span className="price__ammount--number">159</span> &#47;Year</h1>
                    </div>
                    <div className="panel-body">
                      <img src={e1} alt=""></img>
                      <p>Up To 5 user</p>
                      <p>Max. 100 iteam/month</p>
                      <p>Unlimited queries</p>
                      <p>Full statistics</p>
                    </div>
                    <div>
                      <a className="panel__button" href="#">GET THIS PLAN</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="panel text-center">
                    <div className="panel-heading">
                      <h4 className="price__title">GOLD</h4>
                      <h1 className="price__ammount">&#36; <span className="price__ammount--number">249</span> &#47;Year</h1>
                    </div>
                    <div className="panel-body">
                      <img src={e2} alt=""></img>
                      <p>Up To 10 user</p>
                      <p>Max. 200 iteam/month</p>
                      <p>Unlimited queries</p>
                      <p>Full statistics</p>
                    </div>
                    <div>
                      <a className="panel__button" href="#">GET THIS PLAN</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="panel text-center">
                    <div className="panel-heading">
                      <h4 className="price__title">PLATINUM</h4>
                      <h1 className="price__ammount">&#36; <span className="price__ammount--number">459</span> &#47;Year</h1>
                    </div>
                    <div className="panel-body">
                      <img src={e1} alt=""></img>
                      <p>Up To 5 user</p>
                      <p>Unlimited iteam</p>
                      <p>Unlimited queries</p>
                      <p>Full statistics</p>
                    </div>
                    <div>
                      <a className="panel__button" href="#">GET THIS PLAN</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleOnSubmit}>
          <label>Item</label>
              <div className="item">
                  <input type="text" name="name" placeholder="Item" onChange={handleChangeName} id="item"></input>
              </div>
              <button>submit</button>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>




      <div className="contact--bg">
        <div className="row">
            <div className="col-md-12">
                <div className="header-text">
                    <h1>Request A Quote</h1>
                    <Button variant="primary" onClick={handleShow}>
                      Launch demo modal
                    </Button>
                </div>
            </div>
        </div>
      </div>

      <section className="contact">
          <div className="container">
              <div className="row">
                  <div className="col-md-4 col-sm-12">
                      <div className="contact-text">
                          <h2>Contact US!</h2>
                          <p>Meet Our Awesome Team. Lorem Ipsum dolor sit amet Hola amigos como estas!</p>
                      </div>
                  </div>
                  <div className="col-md-8 col-sm-12">
                      <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <div className="first">
                                <input type="text" name="first" placeholder="First Name" onChange={handleFirst}></input>
                            </div>
                            <div className="last">
                                <input type="text" name="last" placeholder="Last Name" onChange={handleLast}></input>
                            </div>
                            <div className="email">
                                <input type="email" name="email" placeholder="Email Address" onChange={handleEmail}></input>
                            </div>
                            <div className="message">
                                <textarea placeholder="Your Message" onChange={handleMessage}></textarea>
                            </div>
                            <div className="checkbox-submit">
                                <div className="checkbox">
                                    <label><input type="checkbox" name="" checked></input> Allow Newsletter</label>
                                </div>
                                <div className="submit">
                                    <input type="submit" value="SEND"></input>
                                </div>
                            </div>
                        </form>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <footer className="footer">
          <div className="container">
              <div className="row">
                  <div className="col-md-4 col-sm-12">
                      <div className="footer-icon">
                          <h2>Kulo</h2>
                          <p><a href="#"><i aria-hidden="true" className="fab fa-facebook-square"></i></a><a href="#"><i aria-hidden="true" className="fab fa-linkedin"></i></a><a href="#"><i aria-hidden="true" className="fab fa-dribbble"></i></a><a href="#"><i aria-hidden="true" className="fab fa-behance"></i></a><a href="#"><i aria-hidden="true" className="fab fa-google-plus"></i></a></p>
                          <h5>&copy; All Right Reserved. dart theme 2017</h5>
                      </div>
                  </div>
                  <div className="col-md-8">
                      <div className="footer-text">
                          <div className="row">
                              <div className="col-md-3 col-sm-6 col-xs-6">
                                  <div className="footer-text-single">
                                      <h3>About Us</h3>
                                      <p><a href="#">Our Team</a></p>
                                      <p><a href="#">Company</a></p>
                                      <p><a href="#">Jobs</a></p>
                                      <p><a href="#">Newsletter</a></p>
                                  </div>
                              </div>
                              <div className="col-md-3 col-sm-6 col-xs-6">
                                  <div className="footer-text-single">
                                      <h3>Help Center</h3>
                                      <p><a href="#">Documentations</a></p>
                                      <p><a href="#">Tutorials</a></p>
                                      <p><a href="#">Term Of Use</a></p>
                                      <p><a href="#">Privecy Policy</a></p>
                                  </div>
                              </div>
                              <div className="col-md-3 col-sm-6 col-xs-6">
                                  <div className="footer-text-single">
                                      <h3>Tools</h3>
                                      <p><a href="#">Create Account</a></p>
                                      <p><a href="#">Log In</a></p>
                                      <p><a href="#">Services</a></p>
                                      <p><a href="#">Sitemap</a></p>
                                  </div>
                              </div>
                              <div className="col-md-3 col-sm-6 col-xs-6">
                                  <div className="footer-text-single">
                                      <h3>Get In Touch</h3>
                                      <p><a href="#">Contact Us</a></p>
                                      <p><a href="#">Request A Demo</a></p>
                                      <p><a href="#">+12 323 323 323</a></p>
                                      <p><a href="#">support@gmail.com</a></p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
    </div>


  )
}

Home.propTypes = {
  addItem: PropTypes.func.isRequired,
  addContact: PropTypes.func.isRequired,

};

export default connect(null, { addItem, addContact })(Home);
