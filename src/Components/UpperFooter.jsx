import React from "react";
import "./UpperFooter.css";
import IphoneImage from './iphone.png'

const UpperFooter = () => (
    <div className="upper-footer">
     <div className="upper-footer-1">
      <h1>Es tiempo de <br />ayudarnos<br />
      Te unes?</h1>
     </div>
     <div className="upper-footer-image-div">
      <img src={IphoneImage} alt="iphone" />
     </div>
    </div>
);

export default UpperFooter;