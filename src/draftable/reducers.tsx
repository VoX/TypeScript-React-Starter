
import { EnthusiasmAction } from './actions';
import { StoreState } from './store';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from './constants';

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, selected: state.selected + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, selected: Math.max(1, state.selected - 1) };
    default:
      return state;
  }
}