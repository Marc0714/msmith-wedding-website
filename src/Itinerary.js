import React from 'react';

function Itinerary() {
  return (
    <div>
        <p><span style={{fontStyle: 'italic'}}>After picking up rental, send license plate # to <a href="sms:678-936-4162" target="_top">Christy</a></span></p>
        <hr/>
        <h2>July 28, 2022</h2>
            <p>4pm: Check into hotel</p>
            <p>5pm-7pm: Cocktails/Welcome Party at Hilton Garden Inn bar area</p>
        <h2>July 29, 2022 </h2>
            <p>6-6:30pm: Ceremony at Vedauwoo</p>
            <p>7-10pm: Reception at Altitude Chop House @ 320 S. 2nd Street Laramie, WY </p>
        <h2>July 30, 2022</h2>
            <p>1pm: Leave for Medicine bow peak for hike </p>
        <h2>July 31, 2022</h2>
            <p>11am: Check out</p>
    </div>
  );
}

export default Itinerary;