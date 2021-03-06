import{ RECEIVE_CURRENT_USER
  ,RECEIVE_SESSION_ERRORS} from '../actions/session_actions';
import merge from 'lodash/merge';


const nullUser = Object.freeze({
  currentUser: null
});


export const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    const currentUser = action.currentUser;
    return merge({}, { currentUser });
    default:
      return state;
  }
};


export default sessionReducer;
