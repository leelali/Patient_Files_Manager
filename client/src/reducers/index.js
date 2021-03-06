import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import patientsReducer from './patientsReducers.js';
import recordsReducer from './recordReducers.js';
import patientDetailsReducer from './patientDetailsReducers.js';
import formsReducer from './formsReducers.js';


const rootReducer = combineReducers({
  form: formReducer,
  patients: patientsReducer,
  records: recordsReducer,
  patientDetails: patientDetailsReducer,
  forms: formsReducer,
});

export default rootReducer;