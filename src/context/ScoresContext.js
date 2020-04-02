import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import {AsyncStorage} from 'react-native';
import { navigate} from '../navigationRef';
const guidGenerator = () => {
  const S4 = () => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
};
let id = guidGenerator();
const scoresReducer = (state, action) => {
  switch (action.type) {
    case "get_matches":
      return action.payload;
    case "create_match":
      return [
        ...state,
        {
          id: id,
          match: action.payload
        }
      ];
    case "delete_match":
      return state.filter(match => match.id !== action.payload);
    case "edit_match":
      return state.map(match => {
        return match.id === action.payload.id ? action.payload : match;
      });
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
};


const getMatches = dispatch => {
  return async () => {
    const response = await trackerApi.get('/matches');
    dispatch({type: 'get_matches' ,payload: response.data});
  }
}

const createMatch = dispatch => {
  return (match, callback) => {
    dispatch({ type: "create_match", payload: match });
    callback();
  };
};
const editMatch = dispatch => {
  return (id, match, callback) => {
    dispatch({ type: "edit_match", payload: { id: id, match } });
    callback();
  };
};
const deleteMatch = dispatch => {
  return id => {
    dispatch({ type: "delete_match", payload: id });
  };
};



export const { Context, Provider } = createDataContext(
  scoresReducer,
  { createMatch, deleteMatch, editMatch, getMatches },
  []
);
