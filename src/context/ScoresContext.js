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

const signin = dispatch => async ({ login, password }) => {
  // make api request to express
  //if we sign in, modify the state to true
  try {
    const response = await trackerApi.post("/signin", { login, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: "signin", payload: response.data.token });
    console.log(response.data)
    navigate('SignedIn');
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign in"
    });
  }
};
const signout = dispatch => {
  return () => {
    // make api request to express
    //if we sign in, modify the state to true
  };
};

export const { Context, Provider } = createDataContext(
  scoresReducer,
  { createMatch, deleteMatch, editMatch, signin, signout },
  { token: null, errorMessage: "" },
  [
    {
      id: "ae13fd06-ad1d-27b3-987d-98d32a8b7a93",
      match: {
        name: "Test",
        games: 3,
        sets: 0,
        name1: "Test2",
        games1: 1,
        sets1: 0
      }
    }
  ]
);
