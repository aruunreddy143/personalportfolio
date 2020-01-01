import React from "react";

const SocialLinks = data => {
  var networks = data.social.map(function(network) {
    return (
      <li key={network.name}>
        <a href={network.url} target="_blank">
          <i className={network.className}></i>
        </a>
      </li>
    );
  });
  return <ul className="social">{networks}</ul>;
};

export default SocialLinks;
