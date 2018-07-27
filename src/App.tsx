import * as React from 'react';
import './App.css';
import Draftable from './draftable/Draftable';
import { DisplayDraftable } from './draftable/DisplayDraftable';

const logo = require('./logo.svg');
const draftable: DisplayDraftable = {
  DraftableId: 1,
  ImageUrl: 'https://d327rxwuxd0q0c.cloudfront.net/m/mlb_65/392121.png',
  Name: 'Someone',
  Position: 'P',
  Salary: 41847
};

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Draftable draftable={draftable} />
    </div>
  );
}

export default App;
