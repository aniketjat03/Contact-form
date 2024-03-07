import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const validatePhoneNumber = (phoneNumber) => {
    const re = /^\d{10}$/;
    return re.test(phoneNumber);
  };
  const validateName = (name) => {
    const re = /^[A-Za-z\s]+$/;
    return re.test(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Perform your validation and submission logic here
    const name = e.target.elements.Name.value;
    const email = e.target.elements.Email.value;
    const phoneNumber = e.target.elements.Phone.value;
    const message = e.target.elements.Message.value;

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Please fill in all fields.');
      setIsSubmitting(false);
      return;
    }
    if (!validateName(name)) {
      alert('Please enter a valid name.');
      setIsSubmitting(false);
      return;
    }
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }
    if (!validatePhoneNumber(phoneNumber)) {
      alert('Please enter a valid phone number.');
      setIsSubmitting(false);
      return;
    }
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbwKDE4SRNYo4ztz99us0HzbJg2atz-Pipt9WtWhnW_3jJxcmU47wNXlP-xj0ioj1m8s/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert('Failed to submit the form. Please try again.');
      })
      .catch((error) => {
        console.error(error);
        // alert('Form submitted successfully!');
      });

    setTimeout(() => {
      alert('Form submitted successfully!');
      setIsSubmitting(false);
      document.getElementById("contactForm").reset();
    }, 1000);
  };

  const clearForm = () => {
    document.getElementById("contactForm").reset();
  };

  return (
    <div className="container">
      <div className="App">
        <div className="heading"><h2>Contact Us</h2></div>
        <form id="contactForm" className="form" onSubmit={handleSubmit}>
          <input placeholder="Your Name" name="Name" type="text" />
          <input placeholder="Your Email" name="Email" type="email" />
          <input placeholder="Your Phone No." name="Phone" type="tel" />
          <textarea placeholder="Your Message" name="Message" rows="4"></textarea>
          <div className="button-group">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            <button type="button" onClick={clearForm} disabled={isSubmitting}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
