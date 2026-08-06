/* eslint-disable @next/next/no-img-element */
export default function ContactContent() {
  return (
    <>
      <div className="contact-page-wrap sec-mar">
              <div className="container">
                  <div className="row g-lg-4 gy-5">
                      <div className="col-lg-6">
                          <div className="contact-content">
                              <span>CONTACT WITH US</span>
                              <h2>LET'S WORK TOGETHER?</h2>
                              <p>
                                  We are available to respond to your questions, resolve your concerns, and discuss how CLAREx
                                  Tech can help you grow your company. Our team is available to help, whether you need technical
                                  support, have inquiries about our services, or would like to talk about a possible
                                  partnership.
                              </p>
                              <div className="informations">
                                  <div className="single-info">
                                      <div className="icon">
                                          <i className="fas fa-map-marker-alt"></i>
                                      </div>
                                      <div className="info">
                                          <p>336/5, Baridhara DOHS, Dhaka <br />Bangladesh</p>
                                      </div>
                                  </div>
                                  <div className="single-info">
                                      <div className="icon">
                                          <i className="fas fa-phone-alt"></i>
                                      </div>
                                      <div className="info">
                                          <a href="tel:05661111985">+880-1922-599444</a>
                                    
                                      </div>
                                  </div>
                                  <div className="single-info">
                                      <div className="icon">
                                          <i className="far fa-envelope"></i>
                                      </div>
                                      <div className="info">
                                          <a href="mailto:info@clarex.co">info@clarex.co</a>
                                    
                                      </div>
                                  </div>
                              </div>
                              <div className="follow-area">
                                  <h5 className="blog-widget-title">Follow Us</h5>
                                  <p className="para">Follow us on Social Network</p>
                                  <div className="blog-widget-body">
                                      <ul className="follow-list d-flex flex-row align-items-start gap-4">
                                          <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook"></i></a></li>
                                          <li><a href="https://www.twitter.com/"><i className="bx bxl-twitter"></i></a></li>
                                          <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram"></i></a></li>
                                          <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest"></i></a></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="contact-form-wrap">
                              <div className="form-tltle">
                                  <h5>Make a Free Consulting</h5>
                              </div>
                              <div className="contact-form">
                                  <form action="/api/contact" method="POST">
                                      <div className="row">
                                          <div className="col-md-12 mb-20">
                                              <div className="form-inner">
                                                  <label>Name</label>
                                                  <input type="text" id="name" name="name" placeholder="" required />
                                              </div>
                                          </div>

                                          <div className="col-lg-12 mb-20">
                                              <div className="form-inner">
                                                  <label>Company/Organization</label>
                                                  <input type="text" id="company" name="company" placeholder="" required />
                                              </div>
                                          </div>
                                          <div className="col-lg-12 mb-20">
                                              <div className="form-inner">
                                                  <label>Email</label>
                                                  <input type="email" id="email" name="email" placeholder=" " required />
                                              </div>
                                          </div>
                                          <div className="col-lg-12 mb-20">
                                              <div className="form-inner">
                                                  <label>Phone</label>
                                                  <input type="number" id="number" name="phone" placeholder="" required />
                                              </div>
                                          </div>
                                          <div className="col-lg-12 mb-20">
                                              <div className="form-inner">
                                                  <label>Message</label>
                                                  <textarea id="message" name="message" placeholder=""></textarea>
                                              </div>
                                          </div>
                                          <div className="col-lg-12">
                                              <div className="form-inner">
                                                  <button className="primary-btn3" type="submit">Submit</button>
                                              </div>
                                          </div>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="contact-map">
              <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=clarex%20limited+(Clarex%20Limited)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
    </>
  );
}
