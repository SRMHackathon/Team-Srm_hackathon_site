import React from "react";
import "./FirstPage.css";
import hackLogo from "../media/hackLogo.png";
import neonBallLeft from "../media/neon-ball-left.png";
import neonBallRight from "../media/neon-ball-right.png";
function FirstPage() {
  return (
    <div className="page">
      <div className="navbar">
        <div className="nav-logo">
          <img src={hackLogo} alt="Hackathon Logo" />
        </div>
        <div className="nav-item">
          <ul>
            <li className="li-item">
              <a href="#">Features</a>
            </li>
            <li className="li-item">
              <a href="#">Pricing</a>
            </li>
            <li className="li-item">
              <a href="#">Blog</a>
            </li>
            <li className="li-item">
              <button class="dropbtn">
                About us
                {/* <i class="fa fa-caret-down"></i> */}
              </button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
            <li>
              <button className="btn btn1">
                 Talk to an expert
                </button>
                </li>
            <li>
              <button className="btn btn2">
              Download the App
              </button>
              </li> 
          </ul>
        </div>
      </div>
      <div className="logo">
        <img src={hackLogo} alt="Hackathon logo" />
      </div>
      <div className="neon-ball">
        <img src={neonBallLeft} alt="neon ball" />
        <img src={neonBallRight} alt="neon ball" />
      </div>
      <div className="tagline">
        <p>BUILDING THE FUTURE BIT BY BIT...</p>
      </div>
      <div className="code-caffeine">
        <p>
          | code. caffeine. repeat. | code. caffeine. repeat. | code. caffeine.{" "}
        </p>
      </div>
    </div>
  );
}

export default FirstPage;
