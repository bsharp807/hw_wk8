import { connect } from 'react-redux';
import DropdownBox from '../components/DropdownBox';

const mapStateToProps = (state) => {
  return {
    countries: state.initial.countries
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    updateSelected: (country) => {
      dispatch({
        type: 'UPDATE_SELECTED',
        country
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownBox);
