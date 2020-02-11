import createDataContext from './createDataContext';


const scoresReducer = (state, action) => {
    switch (action.type) {
        case 'create_match':
            return [...state, action.payload];
        case 'delete_match':
            return state.filter((match)=>match.id !== action.payload);
        default: 
            return state;
    }
}

const createMatch = dispatch => {
    return (match) => {
        dispatch({type: 'create_match',payload: match})
    }
}
const deleteMatch = dispatch => {
    return (id) => {
        dispatch({type: 'delete_match', payload: id})
    }
}

export const {Context, Provider } = createDataContext(
    scoresReducer,
    { createMatch, deleteMatch},
    []
);