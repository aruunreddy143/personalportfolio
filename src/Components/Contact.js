import React, { useState } from "react";

const Contact = props => {
  const [values, setValues] = useState({});
  const [submitted, setSubmitted] = useState(false);
  if (props.data) {
    var name = props.data.name;
    var street = props.data.address.street;
    var city = props.data.address.city;
    var state = props.data.address.state;
    var zip = props.data.address.zip;
    var phone = props.data.phone;
  }

  const handleSubmit = event => {
    event.preventDefault();

    console.log(values);
    fetch("https://floating-depths-06840.herokuapp.com/contact", {
      method: "post",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(function(data) {
        console.log("Request succeeded with  response", data);
        if (data.success) {
          setSubmitted(true);
        }
      })
      .catch(function(error) {
        console.log("Request failed", error);
      });
    //setState({ username: event.target.value });
  };

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">
            Please provide your details to get in touch with me. I will reach as
            soon as possible.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          {submitted && (
            <div className="contactSubmiited">
              Thank you, Your Data is submitted successfully
            </div>
          )}
          {!submitted && (
            <form
              action=""
              method="post"
              id="contactForm"
              name="contactForm"
              onSubmit={handleSubmit}
            >
              <fieldset>
                <div>
                  <label htmlFor="name">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="name"
                    name="name"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="email">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="email"
                    name="email"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="subject">
                    Subject <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="subject"
                    name="subject"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    cols="20"
                    rows="5"
                    id="message"
                    name="message"
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div>
                  <button className="submit">Submit</button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>
          )}

          <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              {name}
              <br />
              {street} <br />
              {city}, {state} {zip}
              <br />
              <span>{phone}</span>
            </p>
          </div>

          {/*<div className="widget widget_tweets">
                  <h4 className="widget-title">Latest Tweets</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">2 Days Ago</a></b>
                     </li>
                     <li>
                        <span>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">3 Days Ago</a></b>
                     </li>
                  </ul>
    </div>*/}
        </aside>
      </div>
    </section>
  );
};

export default Contact;
