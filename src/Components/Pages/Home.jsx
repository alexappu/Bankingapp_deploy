import React from 'react'
import Video from '../Assets/video.mp4';
// import user_icon from '../Assets/person.jpg'
// import './Home.css'

function Home() {
  return (
    <div>
    {/* <div class="header">
  <a href="#default" class="logo">CompanyLogo</a>
  <div class="header-right">
    <a class="active" href="#home">Home</a>
    <a href="/Login" onClick="active">Login</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
</div>
    <div className='inputs'>
        <img src={user_icon} alt="" />
        <div class="content">
        <div class="text">All in one Banking Service</div>
        </div>
        </div> */}
<main>
<nav className="navbar navbar-expand-lg">                
  <div className="container">
    <a className="navbar-brand d-flex align-items-center" href="index.html">
      <img src="images/coffee-beans.png" className="navbar-brand-image img-fluid" alt="Barista Cafe Template" />
      
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-lg-auto">
        <li className="nav-item">
          <a className="nav-link click-scroll" href="#section_1">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link click-scroll" href="/Login">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link click-scroll" href="#section_2">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link click-scroll" href="#section_3">Our Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link click-scroll" href="#section_4">Reviews</a>
        </li>
        <li className="nav-item">
          <a className="nav-link click-scroll" href="#section_5">Contact</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

<div>
  <section className="hero-section d-flex justify-content-center align-items-center" id="section_1">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-12 mx-auto">
          <em className="small-text">welcome to online banking</em>
          <h1>HDFC Bank</h1>
          <p className="text-white mb-4 pb-lg-2">
            your <em>favourite</em> online banking.
          </p>
          <a className="btn custom-btn custom-border-btn smoothscroll me-3" href="#section_2">
            Our Story
          </a>
          <a className="btn custom-btn smoothscroll me-2 mb-2" href="#section_3"><strong>Check Menu</strong></a>
        </div>
      </div>
    </div>
    
    <div className="hero-slides" >
    <video autoPlay loop muted className="custom-video" poster allowFullScreen>
              <source src="videos/video.mp4" type="video/mp4" />
              {/* <video src="{Video/}" autoPlay loop muted/> */}
              {/* Your browser does not support the video tag. */}
            </video>
      </div>
  </section>
  <section className="about-section section-padding" id="section_2">
    <div className="section-overlay" />
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-12">
          <div className="ratio ratio-1x1">
            <video autoPlay loop muted className="custom-video" poster>
              <source src="videos/pexels-mike-jones-9046237.mp4" type="video/mp4" />
              {/* <video src="{Video/}" autoPlay loop muted/> */}
              {/* Your browser does not support the video tag. */}
            </video>
            <div className="about-video-info d-flex flex-column">
              <h4 className="mt-auto">We Started Since 1994.</h4>
              <h4>HDFC in India.</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-12 mt-4 mt-lg-0 mx-auto">
          <em className="text-white">HDFC Bank Limited </em>
          <h2 className="text-white mb-3">HDB</h2>
          <p className="text-white"> It is India's largest private sector bank by assets and world's fourth largest bank by market capitalisation as of July 2023.</p>
          <p className="text-white"> the second largest company by market capitalisation of $172 billion on the  <a rel="nofollow" href="" target="_blank">Indian stock exchanges</a>.</p>
          <a href="#barista-team" className="smoothscroll btn custom-btn custom-border-btn mt-3 mb-4">Meet Baristas</a>
        </div>
      </div>
    </div>
  </section>
  <section className="barista-section section-padding section-bg" id="barista-team">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-12 text-center mb-4 pb-lg-2">
          <em className="text-white">Creative Baristas</em>
          <h2 className="text-white">Meet People</h2>
        </div>
        <div className="col-lg-3 col-md-6 col-12 mb-4">
          <div className="team-block-wrap">
            <div className="team-block-info d-flex flex-column">
              <div className="d-flex mt-auto mb-3">
                <h4 className="text-white mb-0">H T Parekh</h4>
                <p className="badge ms-4"><em>Founder</em></p>
              </div>
              <p className="text-white mb-0">your favourite bank daily lives tempor.</p>
            </div>
            <div className="team-block-image-wrap">
              <img src="images/team/portrait-elegant-old-man-wearing-suit.jpg" className="team-block-image img-fluid" alt />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12 mb-4">
          <div className="team-block-wrap">
            <div className="team-block-info d-flex flex-column">
              <div className="d-flex mt-auto mb-3">
                <h4 className="text-white mb-0">Mr. Atanu Chakraborty</h4>
                <p className="badge ms-4"><em>Chairman</em></p>
              </div>
              <p className="text-white mb-0">your favourite bank daily lives.</p>
            </div>
            <div className="team-block-image-wrap">
              <img src="images/team/cute-korean-barista-girl-pouring-coffee-prepare-filter-batch-brew-pour-working-cafe.jpg" className="team-block-image img-fluid" alt />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12 mb-4">
          <div className="team-block-wrap">
            <div className="team-block-info d-flex flex-column">
              <div className="d-flex mt-auto mb-3">
                <h4 className="text-white mb-0">Dr. Sunita Maheshwari</h4>
                <p className="badge ms-4"><em>Independent Manager</em></p>
              </div>
              <p className="text-white mb-0">your favourite bank daily lives.</p>
            </div>
            <div className="team-block-image-wrap">
              <img src="images/team/small-business-owner-drinking-coffee.jpg" className="team-block-image img-fluid" alt />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <div className="team-block-wrap">
            <div className="team-block-info d-flex flex-column">
              <div className="d-flex mt-auto mb-3">
                <h4 className="text-white mb-0">Mrs. Renu Karnad​​​​​​​</h4>
                <p className="badge ms-4"><em>Non Executive Director</em></p>
              </div>
              <p className="text-white mb-0">your favourite bank daily consectetur.</p>
            </div>
            <div className="team-block-image-wrap">
              <img src="images/team/smiley-business-woman-working-cashier.jpg" className="team-block-image img-fluid" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="menu-section section-padding" id="section_3">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-12 mb-4 mb-lg-0">
          <div className="menu-block-wrap">
            <div className="text-center mb-4 pb-lg-2">
              <em className="text-white">Services</em>
              <h4 className="text-white">Online Services</h4>
            </div>
            <div className="menu-block">
              <div className="d-flex">
                <h6>24*7 </h6>
                {/* <span className="underline" /> */}
                <strong className="ms-auto">Customer Service</strong>
              </div>
              <div className="border-top mt-2 pt-2">
                <small>Easy to access</small>
              </div>
            </div>
            <div className="menu-block my-4">
              <div className="d-flex">
                <h6>
                  Debit Services
                </h6>
                <span className="underline" />
                <strong className="ms-2">Dedicated online service</strong>
              </div>
              <div className="border-top mt-2 pt-2">
                <small>Banking at your finger tip</small>
              </div>
            </div>
            <div className="menu-block">
              <div className="d-flex">
                <h6>Loan Services
                  <span className="badge ms-3">Recommend</span>
                </h6>
                <span className="underline" />
                <strong className="ms-auto">Apply loan online</strong>
              </div>
              <div className="border-top mt-2 pt-2">
                <small>Customer Friendly</small>
              </div>
            </div>
            <div className="menu-block my-4">
              <div className="d-flex">
                <h6>Credit Card Services</h6>
                <span className="underline" />
                <strong className="ms-auto">Best in the market</strong>
              </div>
              <div className="border-top mt-2 pt-2">
                <small>We Serve People</small>
              </div>
            </div>
            {/* <div className="menu-block">
              <div className="d-flex">
                <h6>Banana Cakes</h6>
                <span className="underline" />
                <strong className="ms-auto">$18.0</strong>
              </div>
              <div className="border-top mt-2 pt-2">
                <small>Rich Milk and Foam</small>
              </div>
            </div> */}
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="menu-block-wrap">
            <div className="text-center mb-4 pb-lg-2">
              <em className="text-white">Clients</em>
              <h4 className="text-white">Our Best Clients</h4>
            </div>
            <div className="menu-block">
              <div className="d-flex">
                <h6>Innovature.ai</h6>
                
              </div>
              <div className="border-top mt-2 pt-2">
                <small>We Serve them</small>
              </div>
            </div>
            <div className="menu-block my-4">
              <div className="d-flex">
                <h6>
                  TCS
                  <span className="badge ms-3"></span>
                </h6>
    
              </div>
              <div className="border-top mt-2 pt-2">
                <small>We are available for them</small>
              </div>
            </div>
            <div className="menu-block">
              <div className="d-flex">
                <h6>Infosis</h6>
                
              </div>
              <div className="border-top mt-2 pt-2">
                <small>Gives a friendly support</small>
              </div>
            </div>
            <div className="menu-block my-4">
              <div className="d-flex">
                <h6>6D Technologies</h6>
                              </div>
              <div className="border-top mt-2 pt-2">
                <small>Have a best offline support</small>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="reviews-section section-padding section-bg" id="section_4">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-12 text-center mb-4 pb-lg-2">
          <em className="text-white">Reviews by Customers</em>
          <h2 className="text-white">Testimonials</h2>
        </div>
        <div className="timeline">
          <div className="timeline-container timeline-container-left">
            <div className="timeline-content">
              <div className="reviews-block">
                <div className="reviews-block-image-wrap d-flex align-items-center">
                  <img src="images/reviews/young-woman-with-round-glasses-yellow-sweater.jpg" className="reviews-block-image img-fluid" alt />
                  <div className>
                    <h6 className="text-white mb-0">Sandra</h6>
                    <em className="text-white"> Customers</em>
                  </div>
                </div>
                <div className="reviews-block-info">
                  <p>Best Service</p>
                  <div className="d-flex border-top pt-3 mt-4">
                    <strong className="text-white">4.5 <small className="ms-2">Rating</small></strong>
                    <div className="reviews-group ms-auto">
                      <i className="bi-star-fill" />
                      <i className="bi-star-fill" />
                      <i className="bi-star-fill" />
                      <i className="bi-star-fill" />
                      <i className="bi-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-container timeline-container-right">
            <div className="timeline-content">
              <div className="reviews-block">
                <div className="reviews-block-image-wrap d-flex align-items-center">
                  <img src="images/reviews/senior-man-white-sweater-eyeglasses.jpg" className="reviews-block-image img-fluid" alt />
                  <div className>
                    <h6 className="text-white mb-0">Don</h6>
                    <em className="text-white"> Customers</em>
                  </div>
                </div>
                <div className="reviews-block-info">
                  <p>Thank You HDFC for the support , I Recommend it.</p>
                  <div className="d-flex border-top pt-3 mt-4">
                    <strong className="text-white">4.5 <small className="ms-2">Rating</small></strong>
                    <div className="reviews-group ms-auto">
                      <i className="bi-star-fill" />
                      <i className="bi-star-fill" />
                      <i className="bi-star-fill" />
                      <i className="bi-star-fill" />
                      <i className="bi-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-container timeline-container-left">
            <div className="timeline-content">
              <div className="reviews-block">
                <div className="reviews-block-image-wrap d-flex align-items-center">
                  <img src="images/reviews/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg" className="reviews-block-image img-fluid" alt />
                  <div className>
                    <h6 className="text-white mb-0">Olivia</h6>
                    <em className="text-white"> Customers</em>
                  </div>
                </div>
                <div className="reviews-block-info">
                  <p>Thank You HDFC, Best Service.</p>
                  <div className="d-flex border-top pt-3 mt-4">
                    <strong className="text-white">4.5 <small className="ms-2">Rating</small></strong>
                    <div className="reviews-group ms-auto">
                      <i className="bi-star-fill" />
                      <i className="bi-star-fill" />
                      <i className="bi-star-fill" />
                      <i className="bi-star-fill" />
                      <i className="bi-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="contact-section section-padding" id="section_5">
    <div className="container">
      <div className="row">   
        <div className="col-lg-12 col-12">
          <em className="text-white">Say Hello</em>
          <h2 className="text-white mb-4 pb-lg-2">Contact</h2>
        </div>
        <div className="col-lg-6 col-12">
          <form action="#" method="post" className="custom-form contact-form" role="form">
            <div className="row">
              <div className="col-lg-6 col-12">
                <label htmlFor="name" className="form-label">Name <sup className="text-danger">*</sup></label>
                <input type="text" name="name" id="name" className="form-control" placeholder="Jackson" required />
              </div>
              <div className="col-lg-6 col-12">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Jack@gmail.com" required />
              </div>
              <div className="col-12">
                <label htmlFor="message" className="form-label">How can we help?</label>
                <textarea name="message" rows={4} className="form-control" id="message" placeholder="Message" required defaultValue={""} />
              </div>
            </div>
            <div className="col-lg-5 col-12 mx-auto mt-3">
              <button type="submit" className="form-control">Send Message</button>
            </div>
          </form>
        </div>
        <div className="col-lg-6 col-12 mx-auto mt-5 mt-lg-0 ps-lg-5">
          <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5039.668141741662!2d72.81814769288509!3d19.043340656729775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c994f34a7355%3A0x2680d63a6f7e33c2!2sLover%20Point!5e1!3m2!1sen!2sth!4v1692722771770!5m2!1sen!2sth" width="100%" height={300} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />  
        </div>
      </div>
    </div>
  </section>
</div>
<footer className="site-footer">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-12 me-auto">
        <em className="text-white d-block mb-4">Where to find us?</em>
        <strong className="text-white">
          <i className="bi-geo-alt me-2" />
          HDFC Central Branch ,Bandra West, Mumbai, Maharashtra 400050, India
        </strong>
        <ul className="social-icon mt-4">
          <li className="social-icon-item">
            <a href="#" className="social-icon-link bi-facebook">
            </a>
          </li>
          <li className="social-icon-item">
            <a href="https://x.com/minthu" target="_new" className="social-icon-link bi-twitter">
            </a>
          </li>
          <li className="social-icon-item">
            <a href="#" className="social-icon-link bi-whatsapp">
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-3 col-12 mt-4 mb-3 mt-lg-0 mb-lg-0">
        <em className="text-white d-block mb-4">Contact</em>
        <p className="d-flex mb-1">
          <strong className="me-2">Phone:</strong>
          <a href="tel: 305-240-9671" className="site-footer-link">
            (+91)
            9846843116
          </a>
        </p>
        <p className="d-flex">
          <strong className="me-2">Email:</strong>
          <a href="mailto:info@yourgmail.com" className="site-footer-link">
           connect@hdfc.co.in
          </a>
        </p>
      </div>
      <div className="col-lg-5 col-12">
        <em className="text-white d-block mb-4">Opening Hours.</em>
        <ul className="opening-hours-list">
          <li className="d-flex">
            Monday - Friday
            <span className="underline" />
            <strong>9:00 - 18:00</strong>
          </li>
          <li className="d-flex">
            Saturday
            <span className="underline" />
            <strong>11:00 - 16:30</strong>
          </li>
          <li className="d-flex">
            Sunday
            <span className="underline" />
            <strong>Closed</strong>
          </li>
        </ul>
      </div>
      <div className="col-lg-8 col-12 mt-4">
        <p className="copyright-text mb-0">Copyright © HDFC 2023 
          - Design: <a rel="sponsored" href="" target="_blank">HDFC</a></p>
      </div>
    </div>
  </div></footer>
  </main>




</div>
  )
}

export default Home
