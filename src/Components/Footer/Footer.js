import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row textrow">
            <h4>
              Join our exclusive membership to receive the latest news and
              trends
            </h4>
            <br />
            <h5>You can unsubscribe at any time.</h5>
          </div>
            <div className="row searchboxrow">
            <div className="col-8 searchbox">
              <div class="input-group">
                <input
                  type="search"
                  class="form-control rounded "
                  placeholder="Your Email"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
              </div>
            </div>
            <div className="col-4">
              <button type="button" class="btn bg-transparent subscribebtn ">
                Subscribe
              </button>
            </div>
            </div>
        </div>
      </footer>
    </div>
  );
};
