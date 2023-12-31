import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';


function ContactUs() {
  const form = useRef();
  const showToastMessage = () => {
    toast.success('Message Sent!', {
        position: toast.POSITION.TOP_RIGHT
    });
};
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm("service_cy3jh3e","template_i29s1e8", form.current, 'aVvQDYz9YapWQt9aj')
      .then((result) => {
        console.log(result.text);
        console.log("Message Sent");
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };
  return (
    <div className="mx-14 my-14 lg:mx-28 lg:my-20 py-12" id="contact">    
      <div className="leading-tight pb-16">
        <h1 className="text-[36px] xs:text-[40px] sm:text-[52px] lg:text-[64px] font-inter text-primary_font font-bold">
          Love to hear from you, Get in touch 👋🏻
        </h1>
      </div>
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label for="first_name" class="text-field-label">
                Your name
              </label>
              <input
                type="text"
                name="username"
                id="first_name"
                class="text-field"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label class="text-field-label">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="text-field"
                placeholder="Doe"
                required
              />
            </div>
            <div>
              <label for="phone" class="text-field-label">
              Your mobile no
              </label>
              <input
                type="tel"
                name="contact_no"
                id="phone"
                class="text-field"
                placeholder="+91 1234567890"
                required
              />
            </div>
            <div>
              <label class="text-field-label">
              What you are interested
              </label>
              <select id="interest" class="text-field" name="interested">
                <option value="product">Product</option>
                <option value="services">Services</option>
                <option value="enquiry">Enquiry</option>
                <option value="join_us">Join Us</option>
              </select>
             
            </div>
          </div>
          <div class="mb-6">
            <label class="text-field-label">
              Message
            </label>
            <input
              type="textarea"
              name="message"
              id="message"
              class="text-field h-28"
              required
            />
          </div>
          <button className="btn-yellow min-w-[100%] lg:min-w-[50%] mt-8" type="submit" value="Send" onClick={showToastMessage}>
            Just Send
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
