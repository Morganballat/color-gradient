import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from 'src/components/App';
import store from './store';

const composant = <Provider store={store}><App /></Provider>;
const domElement = document.getElementById('root');

render(composant, domElement);

/*

Pour savoir quoi mettre dans les composants, aller voir
assets/index.html, et pour les div qui sont vide aller voir
src/index-old.js, les 3 premières fonctions

Créer les composants dont on a besoin
en ne faisant QUE du statique

* Counter
* RandomColors
* Colors
* Gradient
* ChangeDirection

Créer les props dont pourraient avoir besoin
ces composants, et leur donner pour de faux
(directement depuis App)

Pensez dans ce fichier ici à importer react-dom,
et le composant App pour le rendre dans le DOM

*/
