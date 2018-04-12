import React from 'react';
import './App.css';
import Routes from './routes';
import Navbar from './components/Navbar';

class App extends React.Component {
  
  render() {
    return(
      <div className='container'>
        <Navbar />
        <Routes />
      </div>
      );
  }
}

export default App;