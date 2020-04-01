import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import {AsyncStorage} from 'react-native';
import { navigate} from '../navigationRef';

const scoresReducer = (state, action) => {
  switch (action.type) {
    
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "signout":
        return { token: null, errorMessage: '' };
    default:
      return state;
  }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if(token){
        dispatch({ type: 'signin', payload: token});
        navigate('SignedIn');
    } else {
        navigate('loginFlow');
    }
}

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
const signout = dispatch => async () => {
    // make api request to express
    //if we sign in, modify the state to true
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
    navigate('loginFlow');

  };


export const { Context, Provider } = createDataContext(
  scoresReducer,
  { signin, signout, tryLocalSignin },
  { token: null, errorMessage: "" },
);
