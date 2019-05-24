import { connect } from 'react-redux';
import DropdownBox from '../components/DropdownBox';

const mapStateToProps = (state) => {
  return {
    countries: state.countries
  };
};

const mapDispatchToProps = (dispatch) => {
  updateSelected: (country) => {
    dispatch({
      type: 'UPDATE_SELECTED',
      country
    })
  }
}

export default connect(mapStateToProps)(DropdownBox);
