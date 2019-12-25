import React, { } from "react";

function Map() {
  console.log("Map");

  const selectTeam = (evt) => {
    console.log("Map selectTeam");
    const target = evt.target;
    console.log("Map selectTeam target", target);
    const id = target.id;
    console.log("Map selectTeam id", id);

  }

  return (
    <div onClick={selectTeam}>
      <img src={require("../images/plmap.svg")} alt="PL map" className="map" />
    </div >
  )

}

export default Map;
