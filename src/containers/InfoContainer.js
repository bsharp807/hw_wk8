import { connect } from 'react-redux';
import DropdownBox from '../components/DropdownBox';

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    selected: state.selected
  };
};

const mapDispatchToProps = (dispatch) => {
  addToBucket: (country) => {
    dispatch({
      type: 'ADD_BUCKET',
      country
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownBox);
