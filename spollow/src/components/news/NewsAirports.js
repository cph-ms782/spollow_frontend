import React, { } from "react";
import NewsAirportsRender from "./NewsAirportsRender";

function NewsAirports({ airports }) {
    console.log("NewsAirports");
    console.log("airports", airports);

    return (
        <div>
            <h2>Airports</h2>
            {airports && <NewsAirportsRender airports={airports} />}
        </div>
    )

}

export default NewsAirports;