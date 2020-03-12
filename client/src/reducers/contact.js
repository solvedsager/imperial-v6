import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT
} from '../actions/types';

const initialState = {
  contacts: [],
  loading: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: payload,
        loading: false
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact._id !== payload)
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [payload, ...state.contacts]
        loading: false
      };
    default:
      return state;
  }
}
