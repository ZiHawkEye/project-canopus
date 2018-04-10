import React from 'react';
import './App.css';
import Routes from './routes';
import Navbar from './components/Navbar';
import Grid from './components/Grid';

class App extends React.Component {
  
  render() {
    return(
      <div className='container'>
        <Navbar />
        <Routes />
        <Grid />
      </div>
      );
  }
}

export default App;