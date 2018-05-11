import React from 'react';
import './App.css';
import Header from './components/Header';
import Routes from './routes';
import Navbar from './components/Navbar';

class App extends React.Component {
  // look into dynamic rendering of styles via states maybe?
  // look into errors logged in console
  // start node server and webpack server separately for app to function

  render() {
    return (
      <div className='container'>
        <Header />
        <Navbar />
        <Routes />
      </div>
    );
  }
}

export default App;