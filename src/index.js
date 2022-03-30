import * as React from 'react';
import ReactDOM from 'react-dom';
import './Style.css';
//Page Sections
import Title from './Title';
import Body from './Body';
import NavBar from "./NavBar";

export default function App() {

  return (
    <div className="App">
      <Title />
      <Body />
      <NavBar />
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
