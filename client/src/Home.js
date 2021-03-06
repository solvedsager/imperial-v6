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
import './App.css';
import logo from './logo.png';





const Home = ({addItem, addContact}) => {
  const [name, setName] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [address, setAddress] = useState('');
  const [referal, setReferal] = useState('');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChangeName = (e) => setName(e.target.value);
  const handleFirst = (e) => setFirst(e.target.value);
  const handleLast = (e) => setLast(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleCompany = (e) => setCompany(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);
  const handleReferal = (e) => setReferal(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      first: first,
      last: last,
      email: email,
      company: company,
      address: address,
      referal: referal
    };

    // Add item via addItem action
    addItem(newItem);
    console.log('success');
    // Close modal
    handleClose();
  };

  return (
    <div>
      <div className="header--bg">
        <div className="row">
            <div className="col-md-12">
                <div className="header-text">
                    <h1>IMPERIAL TRAFFIC SOLUTIONS</h1>
                    <p>THE CENTRAL TEXAS AUTHORITY IN TRAFFIC CONTROL AND INTELLIGENT WORK ZONE SAFETY EQUIPMENT</p>
                    <Button variant="primary" onClick={handleShow}>
                      Request a quote
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Quote Form</Modal.Title>
                      </Modal.Header>

                      <Modal.Body>
                        <form onSubmit={handleOnSubmit}>
                          <input type="text" name="first" className="form-control input_box" placeholder="First Name *" onChange={handleFirst}></input>
                          <input type="text"name="last" className="form-control input_box" placeholder="Last Name *" onChange={handleLast}></input>
                          <input type="text" name="email" className="form-control input_box" placeholder="Your Email *" onChange={handleEmail}></input>
                          <input type="text" name="company" className="form-control input_box" placeholder="Your Company *" onChange={handleCompany}></input>
                          <input type="text" name="address" className="form-control input_box" placeholder="Your Delivery Address *" onChange={handleAddress}></input>
                          <input type="text" name="referal" className="form-control input_box" placeholder="How Did You Hear About Us *" onChange={handleReferal}></input>
                        </form>


                        {/*

                          <form onSubmit={handleSubmit} className="form-inline contact_box">
                              <input type="text" name="first" className="form-control input_box" placeholder="First Name *" onChange={handleFirst}></input>
                              <input type="text"name="last" className="form-control input_box" placeholder="Last Name *" onChange={handleLast}></input>
                              <input type="text" name="email" className="form-control input_box" placeholder="Your Email *" onChange={handleEmail}></input>
                              <input type="text" className="form-control input_box" placeholder="Subject"></input>
                              <textarea className="form-control input_box" name="message" placeholder="Message" onChange={handleMessage}></textarea>
                              <button type="submit" className="btn btn-default">Send Message</button>
                          </form>

                          */}
                      </Modal.Body>

                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={handleOnSubmit}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
      </div>



      <section className="about_us_area row">
          <div className="container">
              <div className="row about_row">
                  <div className="who_we_area col-md-7 col-sm-6">
                      <div className="subtittle">
                          <h2>WHO WE ARE</h2>
                      </div>
                      <p>IMPERIAL TRAFFIC SOLUTIONS IS THE CENTRAL TEXAS AUTHORITY IN TRAFFIC CONTROL AND INTELLIGENT WORK ZONE SAFETY EQUIPMENT. WE RENT AND SELL THE LATEST IN ELECTRONIC MESSAGE SIGN TECHNOLOGY & TRAFFIC CONTROL EQUIPMENT.</p>
                      <a href="/contact" className="button_all">Contact Now</a>
                  </div>
                  <div className="col-md-5 col-sm-6 about_client">
                      <img src="images/about_client.jpg" alt=""></img>
                  </div>
              </div>
          </div>
      </section>
      <section className="professional_builder row">
          <div className="container">
             <div className="row builder_all">
                  <div className="col-md-4 col-sm-6 builder">
                      <i className="fa fa-building" aria-hidden="true"></i>
                      <h4>We Deliver Quality</h4>
                      <p>We supply only the top brands in safety equipment</p>
                  </div>
                  <div className="col-md-4 col-sm-6 builder">
                      <i className="fa fa-clock-o" aria-hidden="true"></i>
                      <h4>Always On Time</h4>
                      <p>Offering the fastest response time and delivery</p>
                  </div>
                  <div className="col-md-4 col-sm-6 builder">
                      <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                      <h4>We Are Pasionate</h4>
                      <p>In emergency situations, we go the extra mile</p>
                  </div>
             </div>
          </div>
      </section>



      <section className="what_we_area row">
          <div className="container">
              <div className="tittle wow fadeInUp">
                  <h2>WHAT WE OFFER</h2>
              </div>
              <div className="row construction_iner">



{/*

  <Container>
    <Row>
      <Col xs={12} md={8}>
        xs=12 md=8
      </Col>
      <Col xs={6} md={4}>
        xs=6 md=4
      </Col>
    </Row>
  </Container>

  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>

  */}


              <Container>
                <section className="price">
                  <div className="page-section page-section--small text-center">
                    <div className="price__panel-wrapper">
                      <Row>
                      <Col md={4}>
                        <Card className="panel text-center">
                          <div className="panel-heading">
                            <h4 className="price__title">SILVER</h4>
                            <h1 className="price__ammount">&#36;<span className="price__ammount--number">159</span> &#47;Year</h1>
                          </div>
                          <div className="panel-body">
                            <img src={e1} alt=""></img>
                            <p>SOLAR POWERED MESSAGE BOARDS</p>
                            <hr></hr>
                            <p>large or small letters</p>
                            <p>Perfect for a wide array of apps</p>
                          </div>
                          <div>
                            <a className="panel__button" href="#" onClick={handleShow} >GET THIS PLAN</a>
                          </div>
                        </Card>
                      </Col>
                      <Col md={4}>
                        <Card className="panel text-center">
                            <div className="panel-heading">
                              <h4 className="price__title">GOLD</h4>
                              <h1 className="price__ammount">&#36; <span className="price__ammount--number">249</span> &#47;Year</h1>
                            </div>
                            <div className="panel-body">
                              <img src={e2} alt=""></img>
                              <p>SOLAR POWERED ARROW BOARDS</p>
                              <hr></hr>
                              <p>Feature W|ECO green technology</p>
                              <p>Highest standards of quality and performance</p>
                            </div>
                            <div>
                              <a className="panel__button" href="#" onClick={handleShow} >GET THIS PLAN</a>
                            </div>
                          </Card>
                        </Col>
                        <Col md={4}>
                          <Card className="panel text-center">
                            <div className="panel-heading">
                              <h4 className="price__title">PLATINUM</h4>
                              <h1 className="price__ammount">&#36; <span className="price__ammount--number">459</span> &#47;Year</h1>
                            </div>
                            <div className="panel-body">
                              <img src={e3} alt=""></img>
                              <p>RADAR SPEED TRAILERS</p>
                              <hr></hr>
                              <p>Largest portable speed sign available</p>
                              <p>26-inch characters</p>
                            </div>
                            <div>
                              <a className="panel__button" href="#" onClick={handleShow} >GET THIS PLAN</a>
                            </div>
                          </Card>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </section>
              </Container>

              </div>
          </div>
      </section>
      <section className="our_achievments_area" data-stellar-background-ratio="0.3">
          <div className="container">
              <div className="tittle wow fadeInUp">
                  <h2>Our Achievments</h2>
              </div>
              <div className="achievments_row row">
                  <div className="col-md-3 col-sm-6 p0 completed">
                      <i className="fa fa-connectdevelop" aria-hidden="true"></i>
                      <span className="counter">800</span>
                      <h6>PROJECT COMPLETED</h6>
                  </div>
                  <div className="col-md-3 col-sm-6 p0 completed">
                      <i className="fa fa-home" aria-hidden="true"></i>
                      <span className="counter">230</span>
                      <h6>CLOSURES</h6>
                  </div>
                  <div className="col-md-3 col-sm-6 p0 completed">
                      <i className="fa fa-child" aria-hidden="true"></i>
                      <span className="counter">1390</span>
                      <h6>WORKERS EMPLOYED</h6>
                  </div>
                  <div className="col-md-3 col-sm-6 p0 completed">
                      <i className="fa fa-trophy" aria-hidden="true"></i>
                      <span className="counter">125</span>
                      <h6>AWARDS WON</h6>
                  </div>
              </div>
          </div>
      </section>
      <section className="our_feature_area">
          <div className="container">
              <div className="tittle wow fadeInUp">
                  <h2>Our Features</h2>
              </div>
              <div className="feature_row row">
                  <div className="col-md-6 feature_img">
                      <img src="images/feature-man.jpg" alt=""></img>
                  </div>
                  <div className="col-md-6 feature_content">
                      <div className="subtittle">
                          <h2>WHY CHOOSE US</h2>
                      </div>
                      <div className="media">
                          <div className="media-left">
                              <a href="#">
                                  <i className="fa fa-wrench" aria-hidden="true"></i>
                              </a>
                          </div>
                          <div className="media-body">
                              <a href="#">20+ YEARS OF EXPERIENCE</a>
                              <p>Verifed history of success for over 20 years</p>
                          </div>
                      </div>
                      <div className="media">
                          <div className="media-left">
                              <a href="#">
                                  <i className="fa fa-rocket" aria-hidden="true"></i>
                              </a>
                          </div>
                          <div className="media-body">
                              <a href="#">QUALIFIED EXPERTS</a>
                              <p>We have everything you need to get the job done</p>

                          </div>
                      </div>
                      <div className="media">
                          <div className="media-left">
                              <a href="#">
                                  <i className="fa fa-users" aria-hidden="true"></i>
                              </a>
                          </div>
                          <div className="media-body">
                              <a href="#">Best Customer Services</a>
                              <p>Our employees will not stop until the job is done</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>


      <section className="featured_works row" data-stellar-background-ratio="0.3">
          <div className="featured_gallery">
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
  <Row>
    <Col md={3} sm={4} xs={6} >
      <img src="images/gallery/gl-1.jpg" alt=""></img>
    </Col>
    <Col md={3} sm={4} xs={6} >
      <img src="images/gallery/gl-2.jpg" alt=""></img>
    </Col>
    <Col md={3} sm={4} xs={6} >
      <img src="images/gallery/gl-3.jpg" alt=""></img>
    </Col>
    <Col md={3} sm={4} xs={6} >
      <img src="images/gallery/gl-4.jpg" alt=""></img>
    </Col>
    <Col md={3} sm={4} xs={6} >
      <img src="images/gallery/gl-5.jpg" alt=""></img>
    </Col>
    <Col md={3} sm={4} xs={6} >
      <img src="images/gallery/gl-6.jpg" alt=""></img>
    </Col>
    <Col md={3} sm={4} xs={6} >
      <img src="images/gallery/gl-7.jpg" alt=""></img>
    </Col>
    <Col md={3} sm={4} xs={6} >
      <img src="images/gallery/gl-8.jpg" alt=""></img>
    </Col>
  </Row>

  {/*


    <Row>
      <Col xs={6} md={4}>
        xs=6 md=4
      </Col>
      <Col xs={6} md={4}>
        xs=6 md=4
      </Col>
      <Col xs={6} md={4}>
        xs=6 md=4
      </Col>
      <Col xs={6} md={4}>
        xs=6 md=4
      </Col>
    </Row>



    Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}



              {/*

                <div className="col-md-3 col-sm-4 col-xs-6 p0">
                    <img src="images/gallery/gl-1.jpg" alt=""></img>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-6 p0">
                    <img src="images/gallery/gl-2.jpg" alt=""></img>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-6 p0">
                    <img src="images/gallery/gl-3.jpg" alt=""></img>
                </div>
                      <div className="col-md-3 col-sm-4 col-xs-6 p0">
                        <img src="images/gallery/gl-4.jpg" alt=""></img>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-6  p0">
                        <img src="images/gallery/gl-5.jpg" alt=""></img>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-6  p0">
                        <img src="images/gallery/gl-6.jpg" alt=""></img>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-6 gallery_iner p0">
                        <img src="images/gallery/gl-7.jpg" alt=""></img>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-6 gallery_iner p0">
                        <img src="images/gallery/gl-8.jpg" alt=""></img>
                    </div>
                     */}

          </div>
      </section>
      <section className="our_partners_area">
          <div className="container">
              <div className="tittle wow fadeInUp">
                  <h2>Our Partners</h2>
              </div>
              <div className="partners">
                  <div className=""><img src="images/s2.png" alt=""></img></div>
                  <div className=""><img src="images/s3.png" alt=""></img></div>
                  <div className=""><img src="images/s1.png" alt=""></img></div>
                  <div className=""><img src="images/s5.jpg" alt=""></img></div>
              </div>
          </div>
          <div className="book_now_aera">
              <div className="container">
                  <div className="row book_now">
                      <div className="col-md-10 booking_text">
                          <h4>Let us help you keep your work zone safe</h4>
                      </div>
                      <div className="col-md-2 p0 book_bottun">
                          <Button variant="dark" className="button_all" onClick={handleShow}>
                            Request a quote
                          </Button>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </div>


  )
}

Home.propTypes = {
  addItem: PropTypes.func.isRequired,
  addContact: PropTypes.func.isRequired,

};

export default connect(null, { addItem, addContact })(Home);
