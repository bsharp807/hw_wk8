import { connect } from 'react-redux';
import VisitList from '../components/VisitList';

const mapStateToProps = (state) => {
  return {
    visited: state.visited
  };
};


export default connect(mapStateToProps)(VisitList);
