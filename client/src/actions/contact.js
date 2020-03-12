import axios from 'axios';
import { setAlert } from './alert';
import { GET_CONTACTS, CONTACT_ERROR, ADD_CONTACT, DELETE_CONTACT, CONTACTS_LOADING } from './types';

// Add post
export const addContact = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/contacts', formData, config);

    dispatch({
      type: ADD_CONTACT,
      payload: res.data
    });

    dispatch(setAlert('Contact Created', 'success'));
  } catch (err) {
    dispatch({
      type: CONTACT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
