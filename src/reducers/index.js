import { combineReducers } from 'redux';

import countryReducer from './country_reducer.js';
import bucketReducer from './bucket_reducer.js';

export default combineReducers({
  initial: countryReducer,
  bucket: bucketReducer
});
