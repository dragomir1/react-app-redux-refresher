import React, { Component } from 'react';

class AddPersons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: ''
    };
  }

  nameChangeHandler = e =>
    this.setState({
      name: e.target.value
    });

  ageChangeHandler = e =>
    this.setState({
      age: e.target.value
    });

  resetFormHandler = () => {
    this.setState({
      name: '',
      age: ''
    });
  };

  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='name'
          onChange={this.nameChangeHandler}
          value={this.state.name}
        />
        <input
          type='number'
          placeholder='age'
          onChange={this.ageChangeHandler}
          value={this.state.age}
        />
        <button
          onClick={() =>
            this.props.personAdded(this.state.name, this.state.age)
          }>
          Add Person
        </button>
        <button onClick={this.resetFormHandler}>Reset</button>
      </div>
    );
  }
}

export default AddPersons;
