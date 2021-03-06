import './App.css';
import Intro from '../Intro';
import { Component } from 'react';
import Series from '../../containers/Series';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className='App-title'>TV Series List</h1>
        </header>
        <Intro message = 'Here you can find all of your most loved series.' />
        <Series />
      </div>
    );
  }
}

export default App;
