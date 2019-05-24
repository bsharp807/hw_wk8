import { connect } from 'react-redux';
import FlagList from '../components/FlagList';

const mapStateToProps = (state) => {
  return {
    bucket: state.bucket
  };
};


export default connect(mapStateToProps)(FlagList);
