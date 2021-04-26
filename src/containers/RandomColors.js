// J'importe la fonction qui me permet de connecter ce composant
// aux infos dont il a besoin
import { connect } from 'react-redux';
// J'importe le composant à qui je veux donner des props
import RandomColors from '../components/RandomColors';
// J'importe la fonction qui génere des couleurs aléatoires
import { randomHexColor } from '../utils';

// J'importe mes actions creators
import { changeLastColor, changeFirstColor } from '../actions';

// Si pas besoin de mapStateToProps = null
const mapStateToProps = null;

// Si pas besoin de mapDispatchToProps = {}
const mapDispatchToProps = (dispatch) => ({
  randFirst: () => {
    const color = randomHexColor();
    const action = changeFirstColor(color);
    dispatch(action);
  },
  randLast: () => {
    const color = randomHexColor();
    const action = changeLastColor(color);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RandomColors);
