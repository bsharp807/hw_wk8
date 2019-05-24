import { connect } from 'react-redux';
import InfoCard from '../components/InfoCard';

const mapStateToProps = (state) => {
  return {
    countries: state.initial.countries,
    selected: state.initial.selected
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToBucket: (country) => {
      dispatch({
        type: 'ADD_BUCKET',
        country
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoCard);
