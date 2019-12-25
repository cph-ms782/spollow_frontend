import React from "react";
import { HashRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import AllAboutTeam from "./news/AllAboutTeam";
import NoMatch from "./news/NoMatch";
import NewsApi from "./news/NewsApi";
import NewsAirports from "./news/NewsAirports";
import NewsNodes from "./news/NewsNodes";
import NewsFlights from "./news/NewsFlights";

function News({
  airports,
  dummyAir,
  teamID,
  teams,
  teamDates,
  teamMatches,
  flightDate,
  flightTime,
  flightAwayCity,
  flightHomeCity,
  updateTicketURL,
  updateShowBuyImage,
  updateTeamPlayers,
  teamName,
  chosenTeam,
  crestURL,
}) {
  console.log("News");
  return (
    <div>
      <Router>
        <div className="newsContainer">
          <div>
            <ul className="newsHeader">
              {teamID.teamID > 0 &&
                <div>
                  <li>
                    <NavLink exact activeClassName="active" to="/flights">
                      Flights
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact activeClassName="active" to="/all">
                      Players
                    </NavLink>
                  </li>
                </div>
              }
              <li>
                <NavLink exact activeClassName="active" to="/airports">
                  Airports
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active" to="/nodes">
                  React
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active" to="/api">
                  API
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="newsContent">
            <Switch>
              <Route exact path="/api">
                <NewsApi />
              </Route>
              <Route exact path="/airports">
                <NewsAirports airports={airports} />
              </Route>
              <Route exact path="/nodes">
                <NewsNodes />
              </Route>
              <Route exact path="/flights">
                <NewsFlights
                  teamDates={teamDates}
                  teamMatches={teamMatches}
                  flightAwayCity={flightAwayCity}
                  teams={teams}
                  airports={airports}
                  flightHomeCity={flightHomeCity}
                  flightTime={flightTime}
                  flightDate={flightDate}
                  updateTicketURL={updateTicketURL}
                  updateShowBuyImage={updateShowBuyImage}
                  dummyAir={dummyAir}
                />
              </Route>
              <Route exact path="/all">
                <AllAboutTeam
                  teamID={teamID}
                  teams={teams}
                  teamDates={teamDates}
                  teamMatches={teamMatches}
                  teamName={teamName}
                />
              </Route>
              <Route>
                <NoMatch />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default News;
