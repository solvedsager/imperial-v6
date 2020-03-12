import axios from 'axios';
import { setAlert } from './alert';
import { GET_ITEMS, ITEM_ERROR, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

// Add post
export const addItem = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/items', formData, config);

    dispatch({
      type: ADD_ITEM,
      payload: res.data
    });

    dispatch(setAlert('Item Created', 'success'));
  } catch (err) {
    dispatch({
      type: ITEM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
