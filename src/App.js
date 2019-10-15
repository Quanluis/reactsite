import React, {Component} from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {

constructor(props){
  super(props);
    this.state = {
      count: 0
    }
}

increment = () => {
  this.setState({
    count: this.state.count  + 1
  })
}

decrement = () => {
  this.setState({
    count: this.state.count - 1
  })
}


sayHello(){
  console.log('Hello world')
}


render(){
  return (
    <div>
      <h1>Hello</h1>
      <button onClick = {this.increment} >+</button>
      <p>Count : {this.state.count}</p>
      <button onClick = {this.decrement}>-</button>
      <Person name = "Max" age = '19' />
      <Person name = "Bob" age = '23'>My hobbies: skating </Person>
    </div>
  );
}
}
export default App;