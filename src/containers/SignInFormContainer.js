import {reduxForm} from 'redux-form'
import {SubmissionError} from 'redux-form'
import {postUser} from '../actions/Actions'
import SignInForm from '../components/Login/SignInForm'

//const asyncValidate = values =>

const validate = values => {

  const errors = {}

  if (!values.username) {
    errors.username = 'Required'
  }

  if (!values.password) {
    errors.password = 'Required'
  }

  if (!values.confirm_password) {
    errors.confirm_password = 'Required'
  } else if (values.confirm_password !== values.password) {
    errors.confirm_password = 'Password mismatched'
  }

  return errors

}

const warn = values => {

  const warnings = {}

  if (values.password && values.password.length < 8) {
    warnings.password = 'Password less than 8 characters'
  }

  return warnings

}

const onSubmit = (values,dispatch,props) =>
       dispatch(postUser(values)).catch(err => {
         throw new SubmissionError({_error:err.message})
       })

export default reduxForm({
  form: 'signin',
  validate,
  warn,
//  asyncValidate,
  onSubmit
})(SignInForm)
