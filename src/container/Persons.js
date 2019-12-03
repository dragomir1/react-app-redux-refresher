import React, { Component } from 'react';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/actionTypes';

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.addPerson} />
        {this.props.person.map(p => (
          <Person
            key={p.id}
            name={p.name}
            age={p.age}
            clicked={() => this.props.deletePerson(p.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    person: state.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPerson: (name, age) =>
      dispatch({
        type: actionTypes.ADD_PERSON,
        personData: { name: name, age: age }
      }),
    deletePerson: id =>
      dispatch({ type: actionTypes.DELETE_PERSON, personId: id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
