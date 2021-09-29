import React from "react";
import Layout from "../components/layout";
import Seo from '../components/seo';

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact" description="ProAca.inc about" />
      <form
        className='contact_form'
        name="Contact Form"
        method="POST"
        data-netlify="true"
        action="/pages/success">
        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Your Role: <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  );
}

export default Contact

