import React, { Component } from 'react';
import Navbar from './Navbar'
import Todos from './Todos'
import CompleteTodos from './CompleteTodos'
import './App.css';


class App extends Component {
 render(){   
  return(
    <div className="App">
      <Navbar />
      <CompleteTodos />
    </div>
  )  
 }
}

export default App;
