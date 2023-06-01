import { createStore } from 'redux';

// Define initial state and reducer
const initialState = {
  users: [],
  selectedUser: null,
  currentPage: 1,
  totalPage: 1,
};

function reducer(state = initialState, action) {
    console.log(action);
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, users: action.payload };
    case 'SET_SELECTED_USER':
      return { ...state, selectedUser: action.payload };
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };
    case 'SET_TOTAL_PAGE':
      return { ...state, totalPage: action.payload };
    default:
      return state;
  }
}

// Create Redux store
const store = createStore(reducer);

export default store;
