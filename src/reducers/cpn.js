import { CLICK, CLICK1 } from 'actions/CpnActions';

export default (state = 0, action) => {
  switch (action.type) {
    case CLICK:
      return state + 1;
    case CLICK1:
      return state + 2;
    default:
      return state;
  }
};
