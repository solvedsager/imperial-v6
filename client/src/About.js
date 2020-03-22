import React from 'react';
import logo from './logo.svg';
import './App.css';

function About() {
  return (
<div>
    <section class="banner_area" data-stellar-background-ratio="0.5">
        <h2>About Us</h2>
    </section>
    <section class="about_us_area row">
        <div class="container">
            <div class="row about_row">
                <div class="col-md-5 col-sm-6 about_client about_pages_client">
                    <img src="images/feature-man-3.jpg" alt=""></img>
                </div>
                <div class="who_we_area col-md-7 col-sm-6">
                    <div class="subtittle">
                        <h2>WHO WE ARE</h2>
                    </div>
                    <p>Imperial Traffic Solutions is a locally owned and operated, turnkey Traffic Control company that specializes in the rentals of Intelligent Work Zone Safety Equipment, including Portable Changeable Message Signs, Arrow Boards, Radar Speed Trailers and Truck-Mounted Attenuators; based in Austin serving Central Texas, San Antonio and the surrounding areas.
                    <br></br>Whether you need a simple single lane closure or a fully engineered traffic control plan, Imperial Traffic Solutions can handle any and all of your Traffic Control needs.
                    With our vast inventory of the most current electronic sign technology and traffic control devices, we are ready for any size rental request or emergency situation.
                    <br></br>Our mission is to provide the absolute highest quality Traffic Control services and Intelligent Work Zone Safety Equipment, with the fastest response time, all at the most competitive price.
                    Contact us today for any of your Traffic Control or Intelligent Work Zone Safety Equipment rental needs.</p>
                  <a href="#" class="button_all">Contact Now</a>
                </div>
            </div>
        </div>
    </section>
    <section class="call_min_area">
        <div class="container">
            <h2>+880 123 456 789</h2>
            <p>Contact With Us. We are the top Traffic Control Company.</p>
            <div class="call_btn">
                <a href="#" class="button_all">GET IN TOUCH</a>
                <a href="#" class="button_all">QUICK QUOTE</a>
            </div>
        </div>
    </section>
    <section class="our_feature_area">
        <div class="container">
            <div class="feature_row row">
                <div class="col-md-6 feature_img">
                    <img src="images/feature-man.jpg" alt=""></img>
                </div>
                <div class="col-md-6 feature_content">
                    <div class="subtittle">
                        <h2>WHY CHOOSE US</h2>
                    </div>
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                                <i class="fa fa-wrench" aria-hidden="true"></i>
                            </a>
                        </div>
                        <div class="media-body">
                            <a href="#">30+ YEARS OF EXPERIENCE</a>
                            <p>Verifed history of success for over 20 years</p>
                        </div>
                    </div>
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                                <i class="fa fa-rocket" aria-hidden="true"></i>
                            </a>
                        </div>
                        <div class="media-body">
                            <a href="#">QUALIFIED EXPERTS</a>
                            <p>We have everything you need to get the job done</p>

                        </div>
                    </div>
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                                <i class="fa fa-users" aria-hidden="true"></i>
                            </a>
                        </div>
                        <div class="media-body">
                            <a href="#">Best Customer Services</a>
                            <p>Our employees will not stop until the job is done</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="our_partners_area">
        <div class="book_now_aera">
            <div class="container">
                <div class="row book_now">
                    <div class="col-md-10 booking_text">
                        <h4>Booking now if you need build your dream home.</h4>
                    </div>
                    <div class="col-md-2 p0 book_bottun">
                        <a href="#" class="button_all">book now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
);
}

export default About;
