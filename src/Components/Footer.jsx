import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4">
        <div className="col-md-6 mt-md-0 mt-3">
          <h3 className="text-uppercase-1">Footer Content with?</h3>
          <h1 className="text-uppercase-next">Fonditas</h1>
        </div>
        <div className="felement1">
          <p className="menu">Menu</p>
        </div>

        <div className="felement2">
          <p className="subscribe">Subscribe</p>
        </div>

        <div className="search1">
              <input type="text" placeholder="Search" />
              {/* <i class="bi bi-arrow-up-right"></i> */}
            </div>

            <hr></hr>
     
  </footer>
);

export default Footer;
