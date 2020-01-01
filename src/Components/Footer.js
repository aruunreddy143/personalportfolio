import React from "react";
import { SocialLinks } from ".././Components/common/sociallinks";

const Footer = props => {
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          {props.social && <SocialLinks {...props} />}

          <ul className="copyright">
            <li>&copy; Copyright 2020 Arun Reddy</li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
