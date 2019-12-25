import React, { } from "react";
import uuid from "uuid/v1";

function NewsTicker({ standings }) {
  console.log("NewsTicker");
  console.log("NewsTicker standings", standings);

  return (
    <div className="marquee">
      <div className="marquee__content">
        <ul className="list-inline">
          <li key={uuid()}>
            <img
              src={require("../images/premier-league-trophy.jpg")}
              className="thumbnailFootball"
              alt="premier-league-trophy1"
            />
          </li>
          {standings.slice(0, 1).map(firstPlace => (
            <li key={uuid()}>
              <img className="thumbnailFootball" src={firstPlace.crestUrl} alt="firstplace" />
            </li>
          ))}
          <li key={uuid()}>
            <img
              src={require("../images/premier-league-trophy.jpg")}
              className="thumbnailFootball"
              alt="premier-league-trophy2"
            />
          </li>
          {standings.slice(1, 16).map(element => (
            <li key={uuid()}>
              <img className="thumbnailFootball" src={element.crestUrl} alt="middleplaces" />
            </li>
          ))}
          <li key={uuid()}>
            <img
              src={require("../images/down-arrow.jpg")}
              className="thumbnailFootball"
              alt="down-arrow1"
            />
          </li>
          {standings.slice(-3).map(movingDown => (
            <li key={uuid()}>
              <img className="thumbnailFootball" src={movingDown.crestUrl} alt="lastplaces" />
            </li>
          ))}
          <li key={uuid()}>
            <img
              src={require("../images/down-arrow.jpg")}
              className="thumbnailFootball"
              alt="down-arrow2"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NewsTicker;




// import React, { useState, useEffect } from "react";
// import URL from "../../settings";
// import uuid from "uuid/v1";

// function NewsTicker() {

//   function handleMarquee(){
//     const marquee = document.querySelectorAll('.marquee');
//     let speed = 4;
//     let lastScrollPos = 0;
//     let timer;

//     marquee.forEach(function(el){
//       const container = el.querySelector('.newsticker');
//       const content = el.querySelector('.newsticker > *');
//       //Get total width
//       const  elWidth = content.offsetWidth;

//       //Duplicate content
//       let clone = content.cloneNode(true);
//       container.appendChild(clone);

//       let progress = 1;
//       function loop(){
//         progress = progress-speed;
//         if(progress <= elWidth*-1) {progress=0;}
//         container.style.transform = 'translateX(' + progress + 'px)';
//         container.style.transform += 'skewX(' + speed*0.4 + 'deg)';

//         window.requestAnimationFrame(loop);
//       }
//       loop();
//     });

//     window.addEventListener('scroll', function(){
//       const maxScrollValue = 12;
//       const newScrollPos = window.scrollY;
//       let scrollValue = newScrollPos - lastScrollPos;

//       if( scrollValue > maxScrollValue ) scrollValue = maxScrollValue;
//       else if( scrollValue < -maxScrollValue ) scrollValue = -maxScrollValue;

//       speed = scrollValue;

//       clearTimeout(timer);
//       timer = setTimeout(handleSpeedClear, 10);
//     });

//     function handleSpeedClear(){
//       speed = 4;
//     }
//   };

//   handleMarquee();

//   return (
//     <div class="newsticker">
//     <div class="inner">
//       <p>Hello world of humans.</p>
//     </div>
//   </div>
//   );

//   function handleErrors(res) {
//     if (!res.ok) {
//       return Promise.reject({ status: res.status, fullError: res.json() });
//     }
//     return res.json();
//   }
// }

// export default NewsTicker;




// import React, { useState, useEffect } from "react";
// import URL from "../../settings";
// import uuid from "uuid/v1";

// function NewsTicker() {
//   const [crest, setCrest] = useState([]);

//   useEffect(() => {
//     console.log("useEffect + NEWSTICKER");

//     let urlCrest = URL + "/api/fb/standings";
//     console.log("NEEEEWSTICKER - useEffect - urlStandings", urlCrest);

//     fetch(urlCrest)
//       .then(handleErrors)
//       .then(data => {
//         console.log("NEWSTICKER - fetch - data", data);
//         console.log(data.crestUrl);
//         setCrest(data);
//       })
//       .catch(console.log.bind(console));
//   }, []);

//   return (
//     // <div className="newsTickerMarquee">
//     <div className="newsTickerMarquee">
//           <marquee behavior="scroll" direction="left">
//             <img src={require("../../images/premier-league-trophy.jpg")} className="thumbnailFootball"/>
//             {crest.splice(0, 1).map(firstPlace => (
//             <img className="thumbnailFootball" src={firstPlace.crestUrl} />
//             ))}

//             <img src={require("../../images/premier-league-trophy.jpg")} className="thumbnailFootball"/>
//             {crest.splice(1, 16).map(element => (
//               <img className="thumbnailFootball" src={element.crestUrl} />
//             ))}

//             <img src={require("../../images/down-arrow.jpg")} className="thumbnailFootball"/>
//             {crest.splice(-3).map(movingDown => (
//               <img className="thumbnailFootball" src={movingDown.crestUrl} />
//             ))}
//             <img src={require("../../images/down-arrow.jpg")} className="thumbnailFootball"/>
//           </marquee>
//     </div>
//   );

//   function handleErrors(res) {
//     if (!res.ok) {
//       return Promise.reject({ status: res.status, fullError: res.json() });
//     }
//     return res.json();
//   }
// }

// export default NewsTicker;
