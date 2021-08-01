import axios from 'axios';
import {wait} from '../../commons';
import {
  GET_START_CONTACT,
  GET_SUCCESS_CONTACT,
  GET_ERROR_CONTACT,
  ADD_ALERT,
  REMOVE_ALERT,
  POST_SUCCESS_CONTACT,
  POST_ERROR_CONTACT,
  GET_START_CONTACT_DETAIL,
  GET_SUCCESS_CONTACT_DETAIL,
  GET_ERROR_CONTACT_DETAIL,
  DELETE_START_CONTACT,
  DELETE_SUCCESS_CONTACT,
  DELETE_ERROR_CONTACT,
  UPDATE_SUCCESS_CONTACT,
  UPDATE_ERROR_CONTACT,
} from '../types';
axios.defaults.baseURL = 'https://simple-contact-crud.herokuapp.com';

export const GET_CONTACT = setVisible => async dispatch => {
  dispatch({type: GET_START_CONTACT});
  try {
    const res = await axios.get(`/contact`, {timeout: 8000});
    dispatch({type: GET_SUCCESS_CONTACT, payload: res.data.data.reverse()});
  } catch (error) {
    dispatch({type: GET_ERROR_CONTACT, message: error.message});
    setVisible(true);
    wait(2000).then(() => {
      setVisible(false);
    });
    if (error.code === 'ECONNABORTED') {
      dispatch(addAlertTimeout());
    }
  }
};

export const GET_CONTACT_DETAIL = (id, setVisible) => async dispatch => {
  dispatch({type: GET_START_CONTACT_DETAIL});
  try {
    const res = await axios.get(`/contact/${id}`, {timeout: 8000});
    dispatch({type: GET_SUCCESS_CONTACT_DETAIL, payload: res.data.data});
  } catch (error) {
    dispatch({type: GET_ERROR_CONTACT_DETAIL, message: error.message});
    setVisible(true);
    wait(2000).then(() => {
      setVisible(false);
    });
    if (error.code === 'ECONNABORTED') {
      dispatch(addAlertTimeout());
    }
  }
};

export const POST_CONTACT =
  (body, reset, setVisible, setFile, setValue) => async dispatch => {
    try {
      const res = await axios.post(`/contact`, body, {timeout: 8000});
      await dispatch({type: POST_SUCCESS_CONTACT});
      await dispatch(GET_CONTACT(setVisible));
      if (res.status === 201) {
        reset({});
        setVisible(true);
        wait(2000).then(() => {
          setVisible(false);
        });
        setFile({});
        setValue;
      }
    } catch (error) {
      if (error.code === 'ECONNABORTED') {
        dispatch(addAlertTimeout());
      }
      if (error) {
        dispatch({type: POST_ERROR_CONTACT, message: error.message});
        setVisible(true);
        wait(2000).then(() => {
          setVisible(false);
        });
      }
    } finally {
      dispatch({type: POST_SUCCESS_CONTACT});
    }
  };

export const UPDATE_CONTACT =
  (body, reset, setVisible, setFile, id, setValue, navigation) =>
  async dispatch => {
    try {
      const res = await axios.put(`/contact/${id}`, body, {timeout: 8000});
      if (res.status === 201) {
        dispatch(GET_CONTACT_DETAIL(id, setVisible));
        reset({});
        setVisible(true);
        wait(2000).then(() => {
          setVisible(false);
          navigation.goBack();
        });
        setFile({});
        setValue;
      }
    } catch (error) {
      if (error.code === 'ECONNABORTED') {
        dispatch(addAlertTimeout());
      }
      dispatch({type: UPDATE_ERROR_CONTACT, message: error.message});
      setVisible(true);
      wait(2000).then(() => {
        setVisible(false);
      });
    } finally {
      dispatch({type: UPDATE_SUCCESS_CONTACT});
    }
  };

export const DELETE_CONTACT =
  (id, navigation, setVisible) => async dispatch => {
    dispatch({type: DELETE_START_CONTACT});
    try {
      await axios.delete(`/contact/${id}`, {timeout: 8000});
      dispatch(GET_CONTACT(setVisible));
      dispatch({type: DELETE_SUCCESS_CONTACT});
      setVisible(true);
      wait(2000).then(() => {
        setVisible(false);
        navigation.goBack();
      });
    } catch (error) {
      if (error.code === 'ECONNABORTED') {
        dispatch(addAlertTimeout());
      }
      if (error) {
        dispatch({type: DELETE_ERROR_CONTACT, message: error.message});
        setVisible(true);
        wait(2000).then(() => {
          setVisible(false);
          navigation.goBack();
        });
      }
    }
  };

export function addAlertConnection() {
  return {
    type: ADD_ALERT,
    payload: {
      title: 'Connection Eror',
      type: 'NO_INTERNET',
      message: 'No Internet, Check your internet connection.',
      title_button: 'Try Again',
    },
  };
}

export function addAlertTimeout() {
  return {
    type: ADD_ALERT,
    payload: {
      title: 'Internet Connection',
      type: 'TIMEOUT',
      message: 'Please check your internet connection.',
      title_button: 'Try Again',
    },
  };
}

export function removeAlert(params) {
  return {
    type: REMOVE_ALERT,
  };
}
