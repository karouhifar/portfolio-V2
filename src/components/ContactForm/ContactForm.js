import React from "react";

import { Form } from "react-bootstrap";

import { Input, TextArea, Button } from "../Core";

const ContactForm = ({ theme = "dark", ...rest }) => {
  return (
    <Form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      {...rest}
    >
      {/* You still need to add the hidden input with the form name to your JSX form */}
      <input type="hidden" name="form-name" value="contact" />
      <div className="mt-4">
        <Input type="text" placeholder="Your name" required name="name" />
      </div>
      <div className="mt-4">
        <Input type="email" placeholder="Email address" required name="email" />
      </div>
      <div className="mt-4">
        <Input type="text" placeholder="Subject" required name="subject" />
      </div>
      <div className="mt-4 ">
        <TextArea
          rows={4}
          placeholder="Write your message"
          required
          name="message"
        />
      </div>
      <div className="mt-4 mt-lg-5">
        <Button arrowRight variant="primary" type="submit">
          SEND
        </Button>
      </div>
    </Form>
  );
};

export default ContactForm;
