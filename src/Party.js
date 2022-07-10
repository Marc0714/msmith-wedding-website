import React from 'react';

import TextField from '@mui/material/TextField';

export default function Party() {
  
  const [value, setValue] = React.useState();

  const iten = <div>
  <h2>July 28, 2022</h2>
    <p>3pm: Rehearsal/walk through at Vedauwoo</p>
    <p>4pm: Check into hotel</p>
    <p>5-7pm: Cocktails/Welcome Party at Hilton Garden Inn bar area</p>
    <p>7:30pm: Rehearsal Dinner at WY Rib & Chop House (for 32) Vergil- Manager! (is 2 min walking from hotel)</p>
  <h2>July 29, 2022 </h2>
    <p>2:30pm: Leave for Medicine bow for first look</p>
    <p>3:30-4:15pm: First look, photos and vows</p>
    <p>4:15-5:15pm: Return to Laramie</p>
    <p>6-6:30pm: Ceremony at Vedauwoo </p>
    <p>7-10pm: Reception at Altitude Chop House @ 320 S. 2nd Street Laramie, WY </p>
    <p>11pm-2am: After party at Vedauwoo </p>
  <h2>July 30, 2022</h2>
    <p>1pm: Leave for Medicine bow peak for hike </p>
    <p>5pm: Return from hike</p> 
  <h2>July 31, 2022</h2>
    <p>11am: Check out</p>
  </div>

  return (
    <div>
    <TextField
      id="standard-password-input"
      label="Password"
      type="password"
      autoComplete="current-password"
      variant="standard"
      value={value}
      onChange={(e) => setValue(e.target.value)} 
    />
    {value == "password" ? iten : ""}
    </div>
  );
}