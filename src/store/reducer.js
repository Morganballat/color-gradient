import { CHANGE_FIRST_COLOR, CHANGE_DIRECTION, CHANGE_LAST_COLOR } from '../actions';

const initialState = {
  firstColor: '#f0f',
  lastColor: '#00f',
  direction: '45deg',
  nbColors: 0,
};

// Un reducer doit TOUJOURS return le state que l'on veut
const reducer = (stateActuel = initialState, action = {}) => {
  // Je souhaite examiner le .type de chaque action
  switch (action.type) {
    case CHANGE_DIRECTION:
      return {
        ...stateActuel,
        direction: action.payload,
      };
    case CHANGE_LAST_COLOR:
      return {
        ...stateActuel,
        lastColor: action.payload,
        nbColors: stateActuel.nbColors + 1,
      };
    case CHANGE_FIRST_COLOR:
      return {
        ...stateActuel,
        firstColor: action.payload,
        nbColors: stateActuel.nbColors + 1,
      };
    default:
      return stateActuel;
  }
};
export default reducer;
