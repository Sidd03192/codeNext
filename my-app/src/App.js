import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { AboutPage } from './tests';
import {LandingPage} from './pages/landingPage';
import { Button1 } from './button1';


function App() {
  return (
    <div className="App">
       <LandingPage/>
       <h1>Click here to learn more!</h1>
       <Button1/>
  


     
    </div>
  );
}

export default App;
