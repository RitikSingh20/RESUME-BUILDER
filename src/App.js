import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'

import Form from "./components/Form";
import Template1 from "./components/Template1";
import Template2 from "./components/Template2";
import Template3 from "./components/Template3";
import Temps from "./components/Temps";

export default class App extends Component {
  constructor(props) {
    super(props);
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

  sendata = (value) => {
    this.setState({name:value.name,
      email:value.email,
      contact:value.contact,
      city:value.city,
      objective:value.objective,
      graduation:value.graduation,
      twth:value.twth,
      tnth:value.tnth,
      skills:value.skills,
      sample1:value.sample1,
      sample2:value.sample2,
      sample3:value.sample,
      company1:value.company1,
      company2:value.company2,
      other:value.other


    })
  };

  render() {
    return (
      <div>
        <Routes>
          {/* <Form /> */}
          <Route exact path="/" element={<Form sendata={this.sendata} />} />
          <Route path="temps" element={<Temps value={this.state} />} />
          
          <Route path="temp1" element={<Template1 value={this.state} />} />
          <Route path="temp2" element={<Template2 value={this.state} />} />
          <Route path="temp3" element={<Template3 value={this.state} />} />
        </Routes>
      </div>
    );
  }
}
