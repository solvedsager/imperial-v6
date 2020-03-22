import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import {
  Container,
  Card,
  Row,
  Col,
  Jumbotron,
  Modal,
  Button
} from 'react-bootstrap';
import serviceData from './serviceData';
import e1 from './e1.jpg';
import e2 from './e2.jpg';
import e3 from './e3.jpg';
import e4 from './e4.jpg';

class Services extends Component {

  constructor(props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);


    this.state = {
      showBarriers: false,
      showWater: false,
      showTraffic: false,
      showControl: false,
      showEquipment: true
    }

  }

  componentDidMount() {

  }

  handleToggle(e, id) {
    const { showBarriers, showWater, showControl, showTraffic, showEquipment } = this.state;
    console.log(id);
    if(id == 1) {
      this.setState(prevState => ({
        showWater: false,
        showBarriers: true,
        showTraffic: false,
        showControl: false,
        showEquipment: false
      }));
      console.log('barriers');
    } else if(id ==2 ) {
      this.setState(prevState => ({
        showWater: true,
        showBarriers: false,
        showTraffic: false,
        showControl: false,
        showEquipment: false
      }));
      console.log('water');
    } else if(id == 3 ) {
      this.setState(prevState => ({
        showWater: false,
        showBarriers: false,
        showTraffic: true,
        showControl: false,
        showEquipment: false
      }));
      console.log('traffic');
    } else if(id == 4 ) {
      this.setState(prevState => ({
        showWater: false,
        showBarriers: false,
        showTraffic: false,
        showControl: true,
        showEquipment: false
      }));
      console.log('control');
    } else {
      this.setState(prevState => ({
        showWater: false,
        showBarriers: false,
        showTraffic: false,
        showControl: false,
        showEquipment: true
      }));
      console.log('equipment');
    }
  }

  render() {
    const { showWater, showControl, showTraffic, showEquipment, showBarriers } = this.state;
    return (
    <div>
        <section className="banner_area" data-stellar-background-ratio="0.5">
            <h2>Services</h2>
        </section>
        <section className="our_services_tow">
            <Container>
                <div className="architecture_area services_pages">
                    <div className="portfolio_filter portfolio_filter_2">
                        <ul>

                            <li onClick={(e) => this.handleToggle(e, '1')} key="1" data-filter="*" className="active"><a><i className="fa fa-wrench" aria-hidden="true"></i>COVERED WALKWAYS</a></li>
                            <li onClick={(e) => this.handleToggle(e, '2')} key="2" data-filter=".building"><a><i className="fa fa-cogs" aria-hidden="true"></i>WATER FILLED BARRIER</a></li>
                            <li onClick={(e) => this.handleToggle(e, '3')} key="3"data-filter=".webdesign"><a><i className="fa fa-cog" aria-hidden="true"></i>ENGINEERED TRAFFIC CONTROL PLANS</a></li>
                            <li onClick={(e) => this.handleToggle(e, '4')} key="4"data-filter=".adversting"><a><i className="fa fa-heart" aria-hidden="true"></i>TRAFFIC CONTROL</a></li>
                            <li onClick={(e) => this.handleToggle(e, '5')} key="5" data-filter=".painting"><a><i className="fa fa-paint-brush" aria-hidden="true"></i>EQUIPMENT RENTALS & SALES</a></li>
                        </ul>
                    </div>
                    <div className="portfolio_item portfolio_2">
                        <Col className="single_facilities painting building painting adversting">
                            <div className="who_we_area">
                                { showWater &&
                                  <div>
                                    <div className="subtittle">
                                        <h2>WATER FILLED BARRIER</h2>
                                    </div>
                                    <Row>
                                      <Col>
                                        <div>
                                          <p>Imperial Traffic Solutions rents, sells and delivers Water Filled Barrier to your job site.</p>
                                          <p>Water Filled Barrier (also known as Water Filled Barricade) is a plastic, water-filled Longitudinal Channelizing Device (LCD) used for vehicle & pedestrian channelization, road closures and perimeter fencing for vertical construction. </p>
                                          <p>When assembled as an (LCD), the units are attached end-to-end using a plastic coupler and may be deployed either empty or full. Additional accessories are available that allow the barricade to be used for temporary sign support, perimeter fencing and TL-2 longitudinal barrier applications.</p>
                                          <p>WATER FILLED BARRIER APPLICATIONS:</p>
                                            <ul>
                                              <li>Construction & Temporary Work Zones</li>
                                              <li>Longitudinal Channelizing Device</li>
                                              <li>Perimeter Fencing</li>
                                              <li>Parking Facilities</li>
                                              <li>Municipal & Public Utilities</li>
                                            </ul>
                                          <p>SPECIFICATIONS: </p>
                                          <ul>
                                            <li>6' Length</li>
                                            <li>18" Width</li>
                                            <li>32" Height</li>
                                            <li>Empty: 85 lbs</li>
                                            <li>Full: 900 lbs</li>
                                          </ul>
                                        </div>
                                      </Col>
                                      <Col md={6} xs={12} className="single_facilities painting webdesign">
                                          <img src="images/feature-man-4.jpg" alt=""></img>
                                      </Col>
                                    </Row>
                                  </div>

                                }
                                { showEquipment &&
                                  <div>
                                    <div className="subtittle">
                                        <h2>EQUIPMENT SALES & RENTALS</h2>
                                    </div>
                                    <Container>
                                      <Row>
                                        <Col>
                                        <p>Imperial Traffic Solutions provides only the highest quality and latest technology in Intelligent Work Zone Safety Equipment and Traffic Control Devices. We pride ourselves on being in full compliance with the MUTCD and the most current TXDOT standards.</p>
                                        <p>Imperial Traffic Solutions carries a full line of Intelligent Work Zone Safety Equipment and Traffic Control Products, including: Portable Changeable Message Signs, Arrow Boards, Radar Speed Trailers, Truck Mounted Attenuators (TMA), as well as Traffic Control Signs, Barrels, Cones, Barricades, Channelization Devices and Water Filled Barricades.</p>
                                        <p>Our team has over 20 years experience and can help you determine the right equipment for your project.</p>
                                        </Col>
                                        <Col md={6} xs={12} className="single_facilities painting webdesign">
                                            <img src="images/feature-man-4.jpg" alt=""></img>
                                        </Col>
                                      </Row>
                                      <Container style={{marginTop: '100px'}}>
                                          <section className="price">
                                            <div className="page-section page-section--small text-center">
                                              <div className="price__panel-wrapper">
                                                <Row>
                                                  <Col md={3}>
                                                    <Card className="panel text-center">
                                                      <div className="panel-heading">
                                                        <h4 className="price__title">SILVER</h4>
                                                        <h1 className="price__ammount">&#36;<span className="price__ammount--number">159</span> &#47;Year</h1>
                                                      </div>
                                                      <div className="panel-body">
                                                        <img src={e1} alt=""></img>
                                                        <p>Full-size, full-matrix Wanco Variable Message Signs are the ideal choice when you need to get information to the public. The full matrix allows the greatest flexibility for displaying any type of message — large or small letters, graphics and symbols. Perfect for a wide variety of applications, a multitude of functions and options make these signs extremely versatile.</p>
                                                      </div>
                                                      <div>
                                                        <a className="panel__button" href="#">GET THIS PLAN</a>
                                                      </div>
                                                    </Card>
                                                  </Col>
                                                  <Col md={3}>
                                                    <Card className="panel text-center">
                                                      <div className="panel-heading">
                                                        <h4 className="price__title">GOLD</h4>
                                                        <h1 className="price__ammount">&#36; <span className="price__ammount--number">249</span> &#47;Year</h1>
                                                      </div>
                                                      <div className="panel-body">
                                                        <img src={e2} alt=""></img>
                                                        <p>Wanco Vertical Arrow Board Trailers have a display panel that remains vertical at all times and can be rotated to face traffic. They also feature W|ECO technology, a power system that benefits the environment without sacrificing performance. W|ECO Arrow Boards set the highest standards of quality and performance in the industry.</p>
                                                      </div>
                                                      <div>
                                                        <a className="panel__button" href="#">GET THIS PLAN</a>
                                                      </div>
                                                    </Card>
                                                  </Col>
                                                  <Col md={3}>
                                                    <Card className="panel text-center">
                                                      <div className="panel-heading">
                                                        <h4 className="price__title">PLATINUM</h4>
                                                        <h1 className="price__ammount">&#36; <span className="price__ammount--number">459</span> &#47;Year</h1>
                                                      </div>
                                                      <div className="panel-body">
                                                        <img src={e3} alt=""></img>
                                                        <p>The Wanco Radar-Speed Trailer with full-matrix display features the largest portable speed sign available today. Visible over a standard Jersey barrier traffic divider, the giant display shows motorists’ speed in 26-inch characters, warning motorists to slow down by flashing their excessive speed.</p>
                                                      </div>
                                                      <div>
                                                        <a className="panel__button" href="#">GET THIS PLAN</a>
                                                      </div>
                                                    </Card>
                                                  </Col>
                                                  <Col md={3}>
                                                    <Card className="panel text-center">
                                                      <div className="panel-heading">
                                                        <h4 className="price__title">PLATINUM</h4>
                                                        <h1 className="price__ammount">&#36; <span className="price__ammount--number">459</span> &#47;Year</h1>
                                                      </div>
                                                      <div className="panel-body">
                                                        <img src={e4} alt=""></img>
                                                        <p>Royal TMA (Truck Mounted Attenuator) Trucks are designed to save lives in your work zone. Royal TMA's are built to meet all work zone safety requirements and are engineered to absorb the impact of a high (or low) speed crash, decrease damage made to the vehicle and save workers' lives. </p>
                                                      </div>
                                                      <div>
                                                        <a className="panel__button" href="#">GET THIS PLAN</a>
                                                      </div>
                                                    </Card>
                                                  </Col>
                                                </Row>
                                              </div>
                                            </div>
                                          </section>
                                      </Container>
                                    </Container>
                                  </div>

                                }
                                { showTraffic &&
                                  <div>
                                    <div className="subtittle">
                                        <h2>ENGINEERED TRAFFIC CONTROL PLANS</h2>
                                    </div>
                                    <Row>
                                      <Col>
                                        <p>Imperial Traffic Solutions provides comprehensive engineered traffic control plan services to ensure the safety of workers, pedestrians and drivers.</p>
                                        <p>Our engineering process starts with an extensive review of the project, the scope of work and the objectives for the traffic control plan.  This review will determine any risk factors and unique concerns that may be involved with the site to provide a comprehensive plan that effectively addresses the site conditions.</p>
                                        <p>Upon completion of the plan design process, the customer is provided with a custom engineered traffic control plan for their specific project that meets all municipal, state and federal standards for traffic control.</p>
                                      </Col>
                                      <Col md={6} xs={12} className="single_facilities painting webdesign">
                                          <img src="images/feature-man-4.jpg" alt=""></img>
                                      </Col>
                                    </Row>
                                  </div>

                                }
                                { showControl &&
                                  <div>
                                    <div className="subtittle">
                                        <h2>TRAFFIC CONTROL</h2>
                                    </div>
                                    <Row>
                                      <Col>
                                        <p>As traffic control professionals, Imperial Traffic Solutions offers a full line of turnkey Traffic Control services:</p>
                                        <ul>
                                          <li>LANE CLOSURES</li>
                                          <li>SIDEWALK CLOSURES</li>
                                          <li>BICYCLE LANE CLOSURES</li>
                                          <li>DETOURS</li>
                                          <li>FLAGGING</li>
                                          <li>SPECIAL EVENT TRAFFIC MANAGEMENT</li>
                                          <li>SHADOW VEHICLES</li>
                                          <li>ENGINEERED TRAFFIC CONTROL PLANS</li>
                                          <li>COVERED WALKWAYS</li>
                                          <li>WATER FILLED BARRIER</li>
                                          <li>CONSTRUCTION FENCE</li>
                                          <li>POLICE ESCORTS</li>
                                          <li>TEMPORARY PAVEMENT MARKING</li>
                                        </ul>
                                      </Col>
                                      <Col md={6} xs={12} className="single_facilities painting webdesign">
                                          <img src="images/feature-man-4.jpg" alt=""></img>
                                      </Col>
                                    </Row>
                                  </div>
                                }
                                { showBarriers &&
                                  <div>
                                    <div className="subtittle">
                                        <h2>COVERED WALKWAYS</h2>
                                    </div>
                                    <Row>
                                      <Col>
                                        <p>Imperial Traffic Solutions rents, sells and installs covered/protective walkways which are often required by city codes to shield sidewalks from falling debris during overhead construction, which could potentially harm passing pedestrians.</p>
                                        <p>We provide custom built, site specific covered walkways which can be used as stand alone units or can be built onto any water filled barrier system. </p>
                                        <p>Call us today for more information!</p>
                                      </Col>
                                      <Col md={6} xs={12} className="single_facilities painting webdesign">
                                          <img src="images/feature-man-4.jpg" alt=""></img>
                                      </Col>
                                    </Row>
                                  </div>
                                }
                                <div style={{display: "flex", justifyContent: "center" }}>
                                  <a href="#" className="button_all">Contact Now</a>
                                </div>
                            </div>
                        </Col>

                    </div>
                </div>
            </Container>
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
      </div>
    );
  }
}

export default Services;
