import React from "react";

const About = props => {
  console.log(props);
  /*var name = this.props.data.name;
  var profilepic = "images/" + this.props.data.image;
  var bio = this.props.data.bio;
  var street = this.props.data.address.street;
  var city = this.props.data.address.city;
  var state = this.props.data.address.state;
  var zip = this.props.data.address.zip;
  var phone = this.props.data.phone;
  var email = this.props.data.email;
  var resumeDownload = this.props.data.resumedownload;*/

  //let { name, image, bio, phone, email, resumeDownload } = props;

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={`images/${props.image}`}
            alt="Arun Reddy Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{props.bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{props.name}</span>
                <br />
                {props.address && (
                  <span>
                    {props.address.street}
                    <br />
                    {props.address.city} {props.address.state},{" "}
                    {props.address.zip}
                  </span>
                )}
                <br />
                <span>{props.phone}</span>
                <br />
                <span>{props.email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={props.resumeDownload} className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
