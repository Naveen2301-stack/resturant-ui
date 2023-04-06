import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="page-footer">
    <div className="col-md-6 mt-md-0 mt-3">
      <p className="text-uppercase-1">Te apasiona ayudar<br />
      a tu comunidad?</p>
      <h1 className="text-uppercase-next">Fonditas</h1>
    </div>
    <div className="felement1">
      <p className="menu">Menu</p>
    </div>

    <div className="felement2">
      <p className="subscribe">Subscribe</p>
    </div>

    <div className="felement3">
      <p className="fsub1">Menu</p>
      <p className="fsub2">Menu</p>
    </div>

    <div className="felement4">
      <p className="fsub3">Menu</p>
      <p className="fsub4">Menu</p>
    </div>


    <div className="search1">
      <input type="text" placeholder="Search" />
      {/* <i class="bi bi-arrow-up-right"></i> */}
    </div>

    <hr className="hr"></hr>
    <div className="end elements">
      <p className="end-elemt-but-one">Terms and conditions</p>
      <p className="end-elemt-last">privacy</p>
    </div>
  </footer>
);

export default Footer;