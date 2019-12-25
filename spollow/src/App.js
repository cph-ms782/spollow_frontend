import React, { useState, useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";
// import loginFacade from "./components/loginFacade";
import URL from "./settings";
import dummyAir from "./dummyAir.js";
import TeamCrest from "./components/TeamCrest";
import News from "./components/News";
import Search from "./components/Search";
import UserInfo from "./components/UserInfo";
import Leaderboard from "./components/Leaderboard";
import Buy from "./components/Buy";
// import NewsTicker from "./components/NewsTicker";
import Map from "./components/Map";
import NextMatch from "./components/NextMatch";

function App({ apiFacade }) {
  console.log("App");
  const savedChosenTeam = localStorage.getItem("chosenTeam");
  const savedCrestURL = localStorage.getItem("chosenTeamCrestUrl");

  const [airports, setAirports] = useState([]);
  const [chosenTeam, setChosenTeam] = useState(savedChosenTeam ? savedChosenTeam : "");
  const [crestURL, setCrestURL] = useState(savedCrestURL ? savedCrestURL : "");
  const [flightDate, setFlightDate] = useState("");               //useState("12/02/2019");
  const [flightTime, setFlightTime] = useState("");               //useState("15:00");
  const [flightAwayCity, setFlightAwayCity] = useState("");       //useState("Arsenal FC");
  const [flightHomeCity, setFlightHomeCity] = useState("");       //useState("Norwich City FC");
  const [showBuyImage, setShowBuyImage] = useState(false);
  const [standings, setStandings] = useState([]);
  const [teams, setTeams] = useState([]);
  const [teamID, setTeamID] = useState(0);
  const [teamDates, setTeamDates] = useState([]);
  const [teamMatches, setTeamMatches] = useState([]);
  const [teamName, setTeamName] = useState(chosenTeam ? chosenTeam : "");
  const [teamPlayers, setTeamPlayers] = useState([]);
  const [ticketURL, setTicketURL] = useState();

  // const savedTeamMatches = localStorage.getItem("chosenTeamMatches");
  // const [teamMatches, setTeamMatches] = useState(savedTeamMatches ? savedTeamMatches : []);

  // const savedTeamDates = localStorage.getItem("chosenTeamDates");
  // const [teamDates, setTeamDates] = useState(savedTeamDates ? savedTeamDates : []);

  console.log("App teamMatches", teamMatches);
  console.log("App teamDates", teamDates);
  console.log("App dummyAir", dummyAir);
  console.log("App teamPlayers" + teamPlayers);
  console.log("App standings", standings);

  const updateChosenTeam = index => {
    console.log("updateChosenTeam - index", index);
    setChosenTeam(index);
  };
  const updateTeamPlayers = index => {
    console.log("updateTeamPlayers - index", index);
    setTeamPlayers(index);
  };
  const updateTeamName = index => {
    console.log("updateTeamName - index", index);
    setTeamName(index);
  };
  const updateCrestURL = index => {
    console.log("updateCrestURL - index", index);
    setCrestURL(index);
  };
  const updateTeamID = index => {
    console.log("updateTeamID - index", index);
    setTeamID(index);
  };
  const updateTeamDates = index => {
    console.log("updateTeamDates - index", index);
    setTeamDates(index);
  };
  const updateTeamMatches = index => {
    console.log("updateTeamMatches - index", index);
    setTeamMatches(index);
  };
  const updateFlightHomeCity = index => {
    console.log("updateFlightHomeCity - index", index);
    setFlightHomeCity(index);
  };
  const updateFlightAwayCity = index => {
    console.log("updateFlightAwayCity - index", index);
    setFlightAwayCity(index);
  };
  const updateFlightDate = index => {
    console.log("updateFlightDate - index", index);
    setFlightDate(index);
  };
  const updateFlightTime = index => {
    console.log("updateFlightTime - index", index);
    setFlightTime(index);
  };
  const updateShowBuyImage = index => {
    console.log("updateShowBuyImage - index", index);
    setShowBuyImage(index);
  };
  const updateTicketURL = index => {
    console.log("updateTicketURL - index", index);
    setTicketURL(index);
  };

  function handleHttpErrors(res) {
    if (!res.ok) {
      return Promise.reject({ status: res.status, fullError: res.json() });
    }
    return res.json();
  }

  useEffect(
    () => {
      console.log("useEffect");

      console.log("App useEffect standings");
      let urlStandings = URL + "/api/fb/standings";
      console.log("App useEffect - urlStandings", urlStandings);

      fetch(urlStandings)
        .then(handleHttpErrors)
        .then(standingsData => {
          console.log("App useEffect standings - fetch - urlStandings - standingsData", standingsData);
          setStandings(standingsData);
        })
        .catch(console.log.bind(console));

      console.log("App useEffect teams");
      let urlTeam = URL + "/api/fb/teams";
      console.log("App - useEffect - urlTeam", urlTeam);
      fetch(urlTeam)
        .then(handleHttpErrors)
        .then(data => {
          console.log("App  useEffect - fetch - urlTeam - data", data);
          setTeams(data.sort((a, b) => a.name.localeCompare(b.name)));
        })
        .catch(console.log.bind(console));

      console.log("App useEffect airports");
      let urlAir = URL + "/api/air/airports";
      console.log("App - useEffect - urlAir", urlAir);
      fetch(urlAir)
        .then(handleHttpErrors)
        .then(data => {
          console.log("App - fetch - urlAir - data", data);
          setAirports(data.airports.sort((a, b) => a.localeCompare(b)));
        })
        .catch(console.log.bind(console));

    },
    [],
    apiFacade
  );

  console.log("teamName", teamName);
  return (
    <div>
      <Router>
        <div>
          <div className="container">
            <button type="button" name="daynight" id="daynight">
              <i className="fa fa-sun-o" aria-hidden="true" id="sun"></i>
              <i className="fa fa-moon-o" aria-hidden="true" id="moon"></i>
            </button>
            <div id="top-content">
              <Search
                chosenTeam={chosenTeam}
                crestURL={crestURL}
                teamID={teamID}
                teams={teams}
                teamName={teamName}
                URL={URL}
                updateCrestURL={updateCrestURL}
                updateTeamID={updateTeamID}
                updateTeamDates={updateTeamDates}
                updateTeamMatches={updateTeamMatches}
                updateTeamName={updateTeamName}
                teamName={teamName}
              />
            </div>
          </div>

          <div className="container">
            <div id="header">
              <div id="logo">
                <img alt="icon" src={require("./images/BDlogo_150px.png")} />
              </div>
              <div id="banner">
                <img src={require("./images/banner.png")}
                  style={{ 'height': "100%" }}
                  alt="banner"
                />
              </div>
            </div>
          </div>

          <div className="container">
            <div id="newsticker">
              {/* <NewsTicker
                standings={standings}
              /> */}
            </div>
          </div>

          <div className="container">
            <div id="cont-1">
              <div id="team">
                <TeamCrest
                  crestURL={crestURL}
                  teamName={teamName}
                />
              </div>
              <div id="userinfo">
                <UserInfo
                  teamName={teamName}
                  chosenTeam={chosenTeam}
                  crestURL={crestURL}
                  teamMatches={teamMatches}
                  teamDates={teamDates}
                  updateChosenTeam={updateChosenTeam}
                  updateFlightDate={updateFlightDate}
                  updateFlightTime={updateFlightTime}
                  updateFlightHomeCity={updateFlightHomeCity}
                  updateFlightAwayCity={updateFlightAwayCity}
                />
              </div>
            </div>
            <div id="cont-2">
              <div id="part-1">
                <div id="map"><Map /></div>
                <div id="nextmatch">
                  <NextMatch
                    teamDates={teamDates}
                  /></div>
                <div id="buy">
                  <Buy
                    showBuyImage={showBuyImage}
                    ticketURL={ticketURL}
                  />
                </div>
              </div>
              <div id="news">
                <News
                  airports={airports}
                  dummyAir={dummyAir}
                  teams={teams}
                  teamID={teamID}
                  teamDates={teamDates}
                  teamMatches={teamMatches}
                  flightHomeCity={flightHomeCity}
                  flightAwayCity={flightAwayCity}
                  flightTime={flightTime}
                  flightDate={flightDate}
                  updateTicketURL={updateTicketURL}
                  updateShowBuyImage={updateShowBuyImage}
                  updateTeamPlayers={updateTeamPlayers}
                  teamName={teamName}
                  standings={standings}
                  dummyAir={dummyAir}
                  updateTeamPlayers={updateTeamPlayers}
                  teamID={teamID}
                />
              </div>
            </div>
            <div id="cont-3">
              <div id="leaderboard">
                <Leaderboard
                  standings={standings}
                  teams={teams}
                />
              </div>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}


export default App;
