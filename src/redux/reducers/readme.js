import { README_NEXT } from '../actions/readme';

export default function (state = { page: 0 }, action) {
  switch (action.type) {
    case README_NEXT:
      return { page: state.page + 1 };
    default:
      return state;
  }
}
