import React from 'react'

/**
 * Components
 */
import Navigation from '../../components/Navigation/navigation.component'
import ScrollToTopController from '../../components/ScrollTop/scrolltop.component';
import StaticFooter from "../../components/StaticFooter/staticfooter.component";

const Contact = () => {
  return (
    <>
      <ScrollToTopController />
      <div className="contact">
        <header className="section section-wrap contact-header">
          <Navigation />

          <div className="contact-box">
            <div>
              <h1 className="heading-primary contact-heading">
                <div className="heading-primary--main contact-heading--main">
                  Contact Us
                </div>
              </h1>

              <div className="contact-details">
                <header className="heading-primary--sub contact-heading--sub">
                  Address
                </header>
                <p>72 Adebisi Adebanjo Avenue, Hakeem Dickson Way, Sabo, Yaba,Lagos.</p>
              </div>

              <div className="contact-details">
                <header className="heading-primary--sub contact-heading--sub">
                  Opening Hours
                </header>
                <p>09:00AM - 05:00PM</p>
              </div>

              <div className="contact-details">
                <header className="heading-primary--sub contact-heading--sub">
                  Phone Numbers
                </header>
                <p>0802 847 9201, 0816 392 1381</p>
              </div>

            </div>
            <form className="contact-form">
              <h1 className="contact-form__heading">Send us a Message!</h1>
              <input type="text" value="" placeholder="Name" className="contact-form--input" />
              <input type="email" value="" placeholder="email" className="contact-form--input" />
              <input type="number" value="" placeholder="phoneNumber" className="contact-form--input" />
              <textarea className="contact-form--input" placeholder="Message" />

              <button type="submit" className="btn btn--big btn--uppercase btn--round btn--orange btn--shadow contact-form--btn">
                Submit
              </button>
            </form>
          </div>
        </header>
      </div>
      <StaticFooter />
    </>
  )
}

export default Contact;
