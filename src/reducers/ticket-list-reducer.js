import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { id, formattedWaitTime } = action;
  switch (action.type) {
    case c.DELETE_TICKET:
      let newState = { ...state };
      delete newState[id];
      return newState;
    case c.UPDATE_TIME:
      const newTicket = Object.assign({}, state[id], {formattedWaitTime});
      const udpatedState = Object.assign({}, state, {
        [id]: newTicket
      });
      return udpatedState;
  default:
    return state;
  }
};