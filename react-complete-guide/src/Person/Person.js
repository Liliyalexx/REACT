import React from 'react';

import './Person.css';

const person = (props) => {
    return (

      <div clasName = "Person">
      <p onClick={props.onClick}> I'm {props.name} Person and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type ="text" onChange={props.changed} value={props.name} />
      </div>
    )
};

export default person;