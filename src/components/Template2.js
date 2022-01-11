import React, { useRef } from "react";
import "../App.css";

import ReactToPrint from "react-to-print";

function Template2({ value }) {
  const componentRef = useRef();
  return (
    <div ref={componentRef}>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <div class="wrapper clearfix">
        <div>
          <div class="name-hero">
            <div class="me-img"></div>

            {/* <div class="name-text">
        
        <h1>Anthony <em>Adamski</em></h1>
        <p>10 Iroquois St Boston, MA 02120</p>
        <p>adamskianthony@gmail.com</p> 
        <p>(956) 500-5558</p>
     
      </div> */}
          </div>
        </div>
        <div>
          <div class="inner">
            <section>
              <h1
                id="name"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                {value.name}
                <br />
                <span id="email"> {value.email}</span>
                <span id=""> {value.contact}</span>
              </h1>
              <br />
              <h1>
                <br />
                <span id="">{/* {value.city} */}</span>
              </h1>
              <br />
              <h1>Objective</h1>
              {value.objective}
              <section>
                <h1>Education</h1>
                <ul class="skill-set">
                  <li>{value.graduation}</li>
                  <br />
                  <li>{value.twth}</li>
                  <br />
                  <li>{value.tnth}</li>
                </ul>
              </section>

              <h1>Work Experience</h1>
              <p>{value.company1}</p>
              <p>{value.company2}</p>
              <p>{value.other}</p>
            </section>
            <section>
              <h1> Skills</h1>
              <ul class="skill-set">
                <li>{value.skills}</li>
              </ul>
            </section>
            <section>
              <h1>Work Sample</h1>
              <p>
                {" "}
                <em>{value.sample1}</em>
              </p>
              <p>
                {" "}
                <em>{value.sample2}</em>
              </p>
              <p>
                {" "}
                <em>{value.sample3}</em>
              </p>
            </section>

            <section></section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template2;
