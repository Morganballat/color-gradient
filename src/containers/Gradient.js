// J'importe la fonction qui me permet de connecter ce composant
// aux infos dont il a besoin
import { connect } from 'react-redux';
// J'importe le composant à qui je veux donner des props
import Gradient from '../components/Gradient';

// J'ai besoin de décrire comment vont s'appeler les props
// que je veux donner, et quelles parties du state mettre dedans
// Si pas besoin de mapStateToProps = null
const mapStateToProps = (state) => ({
  toto: 'toto',
  firstColor: state.firstColor,
  lastColor: state.lastColor,
  direction: state.direction,
});

// J'ai besoin de décrire comment vont s'appeler les props
// que je veux donner et qui pourront modifier le state (dispatch)
// Si pas besoin de mapDispatchToProps = {}
const mapDispatchToProps = {};

// // Exécuter connect en lui donnant mapStateToProps
// // et mapDispatchToProps va me renvoyer une nouvelle fonction.
// // cette fonction attend que je l'exécute et lui donne en argument
// // le composant à qui je veux donner tous les props.
// const createContainer = connect(mapStateToProps, mapDispatchToProps);

// // Ici je donne au composant de mon choix (Gradient)
// // tous les props dont il a besoin
// const monContainer = createContainer(Gradient);

// // Je ne dois SURTOUT PAS oublier d'utiliser mon container
// // à la place du composant
// export default monContainer;

export default connect(mapStateToProps, mapDispatchToProps)(Gradient);
