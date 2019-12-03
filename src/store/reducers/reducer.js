import * as actionTypes from '../actions/actionTypes';

const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.random(),
        name: action.personData.name,
        age: action.personData.age
      };
      return {
        ...state,
        persons: state.persons.concat(newPerson)
      };
    case actionTypes.DELETE_PERSON:
      return {
        ...state,
        persons: state.persons.filter(id => id.id !== action.personId)
      };
    default:
  }

  return state;
};

export default reducer;
