import React from 'react';

const person = props => {
  return (
    <div>
      {/* add props here. also a delete feature */}
      <h2>
        {props.name} is {props.age}
      </h2>
    </div>
  );
};

export default person;
