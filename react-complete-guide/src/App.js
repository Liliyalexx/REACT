import React, { useState, Component } from 'react';
import './App.css';
import Person from './Person/Person';
import {render} from 'react-dom';


const app = props => {
  const [personsState, setPersonsState] = useState({
    persons:[
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    otherState:'some other value'

  });
  console.log (personsState);
  const switchNameHandler = (newName) => {
    //  console.log('Was clicked!');
    //Don't do this :this.state.persons[0].name =  'Maximilian';
    this.setState({
      persons:[
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 27}
      ],
   
    })
  }
  nameChangedHandler = (event) =>{
    this.setState({
      persons:[
        {name: 'Max', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Stephanie', age: 26}
      ]

    } )
  }
   render () 
   {
     const style = {
       backgroundColor:'white',
       font: 'inherit',
       border: '1px solid blue', 
       padding: '8px',
       cursor:'pointer'
     };
    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
        style= {style}
        onClick={() =>this.switchNameHandler('Maximilian!!')}>Swich Name</button>
        <Person
         name = {this.state.persons[0].name} 
         age = {this.state.persons[0].age}/>
        <Person 
        name = {this.state.persons[1].name} 
        age = {this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Max')}
        changed={this.nameChangedHandler}> My Hobbies:Racing
        </Person>
        <Person 
        name = {this.state.persons[2].name} 
        age = {this.state.persons[2].age}/>
      </div>
    
    )
    // return React.createElement('div',{className: 'App'}, React.createElement ('h1', null, 'Does this work now?'));
  };
}

export default app;
