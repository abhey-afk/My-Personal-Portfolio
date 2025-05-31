import React, {useContext} from "react";
import "./Contact.scss";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import ContactForm from "../../components/contactForm/ContactForm";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className={isDark ? "main contact-margin-top dark-mode" : "main contact-margin-top"} id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
          </div>
          <div className="contact-text-div">
            <ContactForm />
            <div className={isDark ? "dark-mode contact-detail" : "contact-detail"}>
              <h2 className="contact-detail-title">Get in Touch</h2>
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                <i className="fas fa-envelope"></i>
                {contactInfo.email_address}
              </a>
              <a
                className="contact-detail-phone"
                href={"tel:" + contactInfo.number}
              >
                <i className="fas fa-phone-alt"></i>
                {contactInfo.number}
              </a>
              <div className="contact-availability">
                <i className="fas fa-clock"></i>
                <div>
                  <h3>Available Hours</h3>
                  <p>Monday - Friday</p>
                  <p>9:00 AM - 6:00 PM IST</p>
                </div>
              </div>
              <div className="contact-location">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Location</h3>
                  <p>New Delhi, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
