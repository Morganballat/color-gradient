// 1. Je crée un type d'action
// par convention, la string comme le nom de la variable
// s'écrivent TOUT EN MAJUSCULE.

export const CHANGE_FIRST_COLOR = 'CHANGE_FIRST_COLOR';
export const CHANGE_LAST_COLOR = 'CHANGE_LAST_COLOR';
export const CHANGE_DIRECTION = 'CHANGE_DIRECTION';

// Je fais une fonction pour fabriquer
// un objet d'action

export const changeFirstColor = (payload) => ({
  type: CHANGE_FIRST_COLOR,
  payload,
});

export const changeLastColor = (payload) => ({
  type: CHANGE_LAST_COLOR,
  payload,
});

export const changeDirection = (payload) => ({
  type: CHANGE_DIRECTION,
  payload,
});

// Maintenant, dans mon app, si je souhaite dispatcher
// l'action pour changer firstColor, je peux exécuter cette
// fonction, et j'obtiendrais un objet formatté comme il faut
