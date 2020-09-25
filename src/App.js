import { clientId } from "./secrets";
import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import "./App.css";
import people from "./data/people";
import dayjs from "dayjs";

class App extends Component {
  constructor() {
    super();

    this.state = {
      googlePeopleUrl:
        "https://people.googleapis.com/v1/people/me/connections?personFields=names,emailAddresses",
      people: people(),
    };
  }

  getData = async (url, accessToken) => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };

  responseGoogle = ({ accessToken }) => {
    this.getData(this.state.googlePeopleUrl, accessToken)
      .then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const people = this.state.people;

    const sortedPeople = array.sort((person) => {
      person.dob;
      return c - d;
    });

    const meDate = dayjs(people[2].dob);
    console.log(dayjs(meDate).format("MM") <= dayjs().format("MM"));

    return (
      <div className="App">
        {/* <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        /> */}
        {people.map(({ name, dob }) => {
          return (
            <div className="container">
              <div className="c-person-card">
                <h1>{name}</h1>
                <h2>Date: {dayjs(dob.toDateString()).format("DD MMMM")}</h2>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
