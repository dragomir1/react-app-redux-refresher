import React from 'react';

const person = props => {
  return (
    <div onClick={props.clicked}>
      <h2>
        {props.name} is {props.age}
      </h2>
    </div>
  );
};

export default person;
