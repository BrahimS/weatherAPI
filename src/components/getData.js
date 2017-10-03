// Fetch data from the weather API
import React, { Component } from "react";
import axios from "axios";

export default class GetData extends Component {
  constructor(props) {
    super(props);
    this.state = { response: {} };

    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=geneva,sw&APPID=ac0cfa66f282d661a006b687796d1b65&units=metric"
      )
      .then(response => {
        this.setState({ response: response.data.main });
        console.log(this.state.response);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <ul className="weather_list">
        <li key={this.index} className="logo_temperature"><span className="logo__style">{this.state.response.temp}</span></li>
        <li key={this.index} className="logo_presure"><span className="logo__style">{this.state.response.pressure}</span></li>
        <li key={this.index} className="logo_humidity"><span className="logo__style">{this.state.response.humidity}</span></li>
      </ul>
    );
  }
}
