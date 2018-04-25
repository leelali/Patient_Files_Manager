import { SET_FORM_FILTER, SHOW_VITAL_SIGN_FORM, SHOW_PROCEDURE_FORM, SHOW_DISCHARGE_FORM } from './types.js';

export const setFormFilter = filter => ({
  type: 'SET_FORM_FILTER',
  filter
})

export const ShowFormsFilters = {
  SHOW_VITAL_SIGN_FORM: 'SHOW_VITAL_SIGN_FORM',
  SHOW_PROCEDURE_FORM: 'SHOW_PROCEDURE_FORM',
  SHOW_DISCHARGE_FORM: 'SHOW_DISCHARGE_FORM',
}