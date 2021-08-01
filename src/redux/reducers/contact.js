import {
  DELETE_ERROR_CONTACT,
  DELETE_START_CONTACT,
  DELETE_SUCCESS_CONTACT,
  GET_ERROR_CONTACT,
  GET_ERROR_CONTACT_DETAIL,
  GET_START_CONTACT,
  GET_START_CONTACT_DETAIL,
  GET_SUCCESS_CONTACT,
  GET_SUCCESS_CONTACT_DETAIL,
  POST_ERROR_CONTACT,
  POST_START_CONTACT,
  POST_SUCCESS_CONTACT,
} from '../types';

const initialState = {
  loading: false,
  list: [],
  detail: {},
  eror: false,
  message: '',
};

const contact = (state = initialState, action) => {
  switch (action.type) {
    case GET_START_CONTACT:
      return {
        ...state,
        loading: true,
      };
    case GET_SUCCESS_CONTACT:
      return {
        ...state,
        loading: false,
        list: [...action.payload],
      };
    case GET_ERROR_CONTACT:
      return {
        ...state,
        loading: false,
        list: [],
        message: action.message,
        error: true,
      };
    case GET_START_CONTACT_DETAIL:
      return {
        ...state,
        loading: true,
      };
    case GET_SUCCESS_CONTACT_DETAIL:
      return {
        ...state,
        loading: false,
        detail: action.payload,
      };
    case GET_ERROR_CONTACT_DETAIL:
      return {
        ...state,
        loading: false,
        detail: [],
        message: action.message,
        error: true,
      };
    case POST_START_CONTACT:
      return {
        ...state,
        loading: true,
      };
    case POST_SUCCESS_CONTACT:
      return {
        ...state,
        loading: false,
      };
    case POST_ERROR_CONTACT:
      return {
        ...state,
        loading: false,
        message: action.message,
        error: true,
      };
    case DELETE_START_CONTACT:
      return {
        ...state,
        loading: true,
      };
    case DELETE_SUCCESS_CONTACT:
      return {
        ...state,
        loading: false,
      };
    case DELETE_ERROR_CONTACT:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.message,
      };
    default:
      return state;
  }
};

export default contact;
