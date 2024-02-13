import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { AboutPage } from './tests';
import { LandingPage } from './pages/landingPage';
import { Auth} from './auth/auth';
import {NextUIProvider} from "@nextui-org/react";


function App() {
  return (
    <div className="App">
      <NextUIProvider>     
        <Auth/>
        
      </NextUIProvider>
      



     
    </div>
  );
}

export default App;
