import React, { useState, useContext, useEffect } from "react";
import "./ContactForm.scss";
import emailjs from '@emailjs/browser';
import StyleContext from "../../contexts/StyleContext";

// TODO: Replace these with your EmailJS credentials
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Add a new email service (Gmail recommended)
// 3. Create an email template
// 4. Get your credentials from:
//    - User ID: Account -> API Keys -> User ID
//    - Service ID: Email Services -> [Your Service] -> Service ID
//    - Template ID: Email Templates -> [Your Template] -> Template ID

const ContactForm = () => {
  const { isDark } = useContext(StyleContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  useEffect(() => {
    // Initialize EmailJS with your user ID
    emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID || "YOUR_USER_ID");
  }, []);

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: msg },
      });
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Abhey Mishra",
        reply_to: formData.email,
      };

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        templateParams
      );

      handleServerResponse(true, "Thank you! I'll get back to you soon.");
    } catch (error) {
      console.error("Email sending failed:", error);
      handleServerResponse(false, "Oops! Something went wrong. Please try again later.");
    }
  };

  return (
    <div className={isDark ? "dark-mode contact-form-div" : "contact-form-div"}>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">
            <i className="fas fa-user"></i> Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className={isDark ? "dark-mode form-input" : "form-input"}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <i className="fas fa-envelope"></i> Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className={isDark ? "dark-mode form-input" : "form-input"}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">
            <i className="fas fa-comment-alt"></i> Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Write your message here..."
            className={isDark ? "dark-mode form-input" : "form-input"}
            rows="5"
          />
        </div>
        <button
          type="submit"
          disabled={status.submitting}
          className={`submit-btn ${status.submitting ? "submitting" : ""}`}
        >
          {status.submitting ? (
            <>
              <i className="fas fa-spinner fa-spin"></i> Sending...
            </>
          ) : (
            <>
              <i className="fas fa-paper-plane"></i> Send Message
            </>
          )}
        </button>
        {status.info.error && (
          <div className="error-message">
            <i className="fas fa-exclamation-circle"></i> {status.info.msg}
          </div>
        )}
        {!status.info.error && status.info.msg && (
          <div className="success-message">
            <i className="fas fa-check-circle"></i> {status.info.msg}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm; 