import React, { Component } from "react";
import "./avengers.css";

class Avengers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avengers: [],
    };
  }
  componentDidMount() {
    fetch("/api/avengers")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((avengers) =>
        this.setState({ avengers }, () =>
          console.log("Friends Fetched", avengers)
        )
      );
  }

  render() {
    return (
      <div>
        <h2>Avengers</h2>
        <ul>
          {this.state.avengers.map((avenger) => {
            return (
              <li
                key={avenger.id}
              >{`${avenger.firstName} ${avenger.lastName} : (${avenger.supName})`}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Avengers;
