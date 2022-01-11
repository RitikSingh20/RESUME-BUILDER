import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ContactFormComponent extends Component {
  DATA;

  constructor(props) {
    super(props);

    this.eventName = this.eventName.bind(this);
    this.eventEmail = this.eventEmail.bind(this);
    this.eventContact = this.eventContact.bind(this);
    this.eventCity = this.eventCity.bind(this);
    this.eventObjective = this.eventObjective.bind(this);
    this.eventGraduation = this.eventGraduation.bind(this);
    this.eventTwth = this.eventTwth.bind(this);
    this.eventTnth = this.eventTnth.bind(this);
    this.eventSkills = this.eventSkills.bind(this);
    this.eventSample1 = this.eventSample1.bind(this);
    this.eventSample2 = this.eventSample2.bind(this);
    this.eventSample3 = this.eventSample3.bind(this);
    this.eventCompany1 = this.eventCompany1.bind(this);
    this.eventCompany2 = this.eventCompany2.bind(this);
    this.eventOther = this.eventOther.bind(this);

    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      contact: "",
      city: "",
      objective: "",
      graduation: "",
      twth: "",
      tnth: "",
      skills: "",
      sample1: "",
      sample2: "",
      sample3: "",
      company1: "",
      company2: "",
      other: "",
    };
  }

  // Event handlers
  eventName(event) {
    this.setState({ name: event.target.value });
  }

  eventEmail(event) {
    this.setState({ email: event.target.value });
  }

  eventContact(event) {
    this.setState({ contact: event.target.value });
  }

  eventCity(event) {
    this.setState({ city: event.target.value });
  }

  eventObjective(event) {
    this.setState({ objective: event.target.value });
  }
  eventGraduation(event) {
    this.setState({ graduation: event.target.value });
  }
  eventTwth(event) {
    this.setState({ twth: event.target.value });
  }
  eventTnth(event) {
    this.setState({ tnth: event.target.value });
  }
  eventSkills(event) {
    this.setState({ skills: event.target.value });
  }

  eventSample1(event) {
    this.setState({ sample1: event.target.value });
  }

  eventSample2(event) {
    this.setState({ sample2: event.target.value });
  }
  eventSample3(event) {
    this.setState({ sample3: event.target.value });
  }
  eventCompany1(event) {
    this.setState({ company1: event.target.value });
  }
  eventCompany2(event) {
    this.setState({ company2: event.target.value });
  }
  eventOther(event) {
    this.setState({ other: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  componentDidMount() {
    this.DATA = JSON.parse(localStorage.getItem("contact_form"));

    if (localStorage.getItem("contact_form")) {
      this.setState({
        name: this.DATA.name,
        email: this.DATA.email,
        contact: this.DATA.contact,
        city: this.DATA.city,
        graduation: this.DATA.graduation,
        twth: this.DATA.twth,
        tnth: this.DATA.tnth,
        skills: this.DATA.skills,
        sample1: this.DATA.sample1,
        sample2: this.DATA.sample2,
        sample3: this.DATA.sample3,
        company1: this.DATA.company1,
        company2: this.DATA.company2,
        other: this.DATA.other,
      });
    } else {
      this.setState({
        name: "",
        email: "",
        contact: "",
        city: "",
        objective: "",
        graduation: "",
        twth: "",
        tnth: "",
        skills: "",
        sample1: "",
        sample2: "",
        sample3: "",
        company1: "",
        company2: "",
        other: "",
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("contact_form", JSON.stringify(nextState));
  }

  render() {
    return (
      <div className="container">
        <h1>Enter Your Details</h1>
        <div className="card">
          <div className="card-body">
            <form onSubmit={this.onFormSubmit}>
              <div className="form-group mb-3">
                <label>
                  <strong>Name</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.eventName}
                />
              </div>
              <div className="form-group mb-3">
                <label>
                  <strong>Email</strong>
                </label>
                <input
                  type="email"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.eventEmail}
                />
              </div>
              <div className="form-group mb-3">
                <label>
                  <strong>Contact</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.contact}
                  onChange={this.eventContact}
                />
              </div>
              <div className="form-group mb-3">
                <label>
                  <strong>City</strong>
                </label>
                <textarea
                  className="form-control"
                  value={this.state.city}
                  onChange={this.eventCity}
                />
              </div>
              <div className="form-group mb-3">
                <label>
                  <strong>Objective</strong>
                </label>
                <textarea
                  className="form-control"
                  value={this.state.objective}
                  onChange={this.eventObjective}
                />
              </div>
              <div className="form-group mb-3">
                <label>
                  <strong>Work Experience</strong>
                </label>
                <textarea
                  className="form-control"
                  placeholder="Company1"
                  value={this.state.company1}
                  onChange={this.eventCompany1}
                />
                <textarea
                  className="form-control"
                  placeholder="Company2"
                  value={this.state.company2}
                  onChange={this.eventCompany2}
                />
                <textarea
                  className="form-control"
                  placeholder="Other"
                  value={this.state.other}
                  onChange={this.eventOther}
                />
              </div>
              <div className="form-group mb-3">
                <label>
                  <strong>Work Samples</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.sample1}
                  onChange={this.eventSample1}
                />
                <input
                  type="text"
                  className="form-control"
                  value={this.state.sample2}
                  onChange={this.eventSample2}
                />
                <input
                  type="text"
                  className="form-control"
                  value={this.state.sample3}
                  onChange={this.eventSample3}
                />
              </div>

              <div className="form-group mb-3">
                <label>
                  <strong>Education</strong>
                </label>
                <textarea
                  className="form-control"
                  placeholder="Graduation"
                  value={this.state.graduation}
                  onChange={this.eventGraduation}
                />
                <textarea
                  className="form-control"
                  placeholder="12th"
                  value={this.state.twth}
                  onChange={this.eventTwth}
                />
                <textarea
                  className="form-control"
                  placeholder="10th"
                  value={this.state.tnth}
                  onChange={this.eventTnth}
                />
              </div>
              <div className="form-group mb-3">
                <label>
                  <strong>Skills</strong>
                </label>
                <textarea
                  className="form-control"
                  value={this.state.skills}
                  onChange={this.eventSkills}
                />
              </div>
              <div className="d-grid mt-3">
                <Link to="/temps">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={() => this.props.sendata(this.state)}
                  >
                    Submit
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
