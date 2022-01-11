import React, { useRef } from "react";
import "../App.css";
import ReactToPrint from "react-to-print";

function Template1({ value }) {
  const componentRef = useRef();
  return (
    <div ref={componentRef}>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <div id="container">
        <div id="profile">
          <div id="image">
            <a href="#">
              <i className="fas fa-pen stroke-transparent"></i>
            </a>
          </div>
          <p id="name">
            {value.name}
            <br />

            <span id="email">{value.email}</span>
          </p>

          <hr width="100%" />
          <div id="about">
            <p style={{ display: "inline" }}>Objective</p>
            <br />
            {value.objective}
            <a href="#">
              <i className="fas fa-pen stroke-transparent-blue">
                {value.objective}
              </i>
            </a>
          </div>
          <p id="year-graduation">
            <br />
          </p>

          <hr width="100%" />
          <div id="about">
            <p style={{ display: "inline" }}>Phone</p>
            <br />
            {value.contact}
            <a href="#">
              <i className="fas fa-pen stroke-transparent-blue">
                {value.contact}
              </i>
            </a>
          </div>
          <p id="year-graduation">
            <br />
          </p>

          <hr width="100%" />
          <div id="about">
            <p style={{ display: "inline" }}>City</p>
            <br />
            {value.city}
            <a href="#">
              <i className="fas fa-pen stroke-transparent-blue"></i>
            </a>
          </div>
          <p id="year-graduation">
            <br />
          </p>
        </div>
        <p></p>
        <div id="info-cards">
          <div className="card">
            <p>
              <i className="fas fa-briefcase stroke-transparent"></i>
              &nbsp;&nbsp;&nbsp;Work Experience
            </p>

            <p className="tags">{value.company1}</p>
            <p className="tags">{value.company2} </p>
            <p className="tags">{value.other} </p>
          </div>
          <div className="card">
            <p>
              <i className="fas fa-briefcase stroke-transparent"></i>
              &nbsp;&nbsp;&nbsp;Work Samples
            </p>

            <a href="#">{value.sample1}</a>
            <a href="#"> {value.sample2}</a>
            <a href="#"> {value.sample3} </a>
          </div>
          <div className="card">
            <p>
              <i className="fas fa-graduation-cap stroke-transparent"></i>
              &nbsp;&nbsp;&nbsp;Education
            </p>

            <p className="tags">{value.graduation} </p>
            <p className="tags">{value.twth} </p>
            <p className="tags">{value.tnth}</p>
          </div>
          <div className="card">
            <p>
              <i className="fas fa-briefcase stroke-transparent"></i>
              &nbsp;&nbsp;&nbsp;Skills
            </p>

            <p className="tags"> {value.skills}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template1;
