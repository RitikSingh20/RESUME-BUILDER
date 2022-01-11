import React, { useRef } from "react";
import "../styles/resume3.css";
import ReactToPrint from "react-to-print";

function Template3({ value }) {
  const componentRef = useRef();
  return (
    <div ref={componentRef}>
      <div>
        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => componentRef.current}
        />
        <div id="drag" className="cv instaFade breakFastBurrito">
          <div>
            <div className="mainDetails">
              ---
              <div id="name">
                <h1>{value.name}</h1>
                <div className="bioDetails">
                  <div>{value.email}</div>
                  <br />
                  <div>{value.contact}</div>
                  <br />
                  <div>{value.city}</div>
                </div>
              </div>
              <div className="clear"></div>
            </div>

            <div className="primaryContent">
              <div id="personalArea" className="quickFade delayFour">
                <div className="clear"></div>
              </div>

              <div id="mainArea" className="quickFade delayFive">
                <section id="Profile">
                  <article>
                    <div className="sectionTitle">
                      <h1>Objective</h1>
                    </div>

                    <div className="sectionContent">
                      <p>{value.objective}</p>
                    </div>
                  </article>
                  <div className="clear"></div>
                  {/* 2ND */}
                  <section id="credentials">
                    <div className="sectionTitle">
                      <h1>Work Experience</h1>
                    </div>
                    <div className="sectionContent">
                      {value.company1}
                      <br />
                      <br />
                      {value.company2}
                      <br />
                      <br />
                      {value.other}
                    </div>
                    <div className="clear"></div>
                  </section>

                  <section id="credentials">
                    <div className="sectionTitle">
                      <h1>Work Sample</h1>
                    </div>
                    <div className="sectionContent">
                      {value.sample1}
                      <br />
                      <br />
                      {value.sample2}
                      <br />
                      <br />
                      {value.sample3}
                    </div>
                    <div className="clear"></div>
                  </section>

                  <section id="Education">
                    <div className="sectionTitle">
                      <h1>Education</h1>
                    </div>
                    {value.graduation} <br />
                    <br />
                    {value.twth} <br />
                    <br />
                    {value.tnth}
                    <div className="clear"></div>
                  </section>

                  <section id="Work">
                    <div className="sectionTitle">
                      <h1>Skills</h1>
                    </div>
                    {value.skills}
                  </section>
                </section>
              </div>
            </div>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template3;
