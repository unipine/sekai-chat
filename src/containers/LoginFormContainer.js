import { reduxForm } from 'redux-form'
import { SubmissionError } from 'redux-form'
import { postAuth} from '../actions/Actions'
import LoginForm from '../components/Login/LoginForm'

const validate = values => {

  const errors = {}

  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username < 3 ){
    errors.username = 'Menos de 3 caracteres...'
  }

  return errors

}

const onSubmit = (values,dispatch,props) => {

   return dispatch(postAuth(values))
      .catch(err => {
        throw new SubmissionError({_error:err.response.data.message})
      })

}

export default reduxForm({
  form: 'login',
  validate,
  onSubmit
})(LoginForm)
