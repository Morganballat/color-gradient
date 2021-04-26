// J'importe la fonction qui me permet de connecter ce composant
// aux infos dont il a besoin
import { connect } from 'react-redux';
// J'importe le composant à qui je veux donner des props
import Directions from '../components/Directions';
// J'importe les actions creators dont j'ai besoin
import { changeDirection } from '../actions';
// Si pas besoin de mapStateToProps = null
const mapStateToProps = null;

// Si pas besoin de mapDispatchToProps = {}
const mapDispatchToProps = (dispatch) => ({
  onButtonClick: (argument) => {
    const action = changeDirection(argument);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Directions);
