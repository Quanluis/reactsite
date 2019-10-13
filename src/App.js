import React, {Component} from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {

  

render(){
  return (
    <div>
      <h1>Hello</h1>
      <button>Switch Name</button>
      <Person name = "Max" age = '19' />
      <Person name = "Bob" age = '23'>My hobbies: skating </Person>
    </div>
  );
}
}
export default App;