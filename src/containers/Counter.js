// J'importe la fonction qui me permet de connecter ce composant
// aux infos dont il a besoin
import { connect } from 'react-redux';
// J'importe le composant à qui je veux donner des props
import Counter from '../components/Counter';

// Si pas besoin de mapStateToProps = null
const mapStateToProps = (state) => ({
  total: state.nbColors,
});

// Si pas besoin de mapDispatchToProps = {}
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
