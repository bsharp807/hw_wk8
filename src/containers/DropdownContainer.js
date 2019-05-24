import { connect } from 'react-redux';
import DropdownBox from '../components/DropdownBox';

const mapStateToProps = (state) => {
  return {
    countries: state.countries
  };
};


export default connect(mapStateToProps)(DropdownBox);
