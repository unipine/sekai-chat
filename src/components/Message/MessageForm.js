import React from 'react'
import { reduxForm, Field } from 'redux-form'

let MessageForm = ({handleSubmit, submitting}) =>
      <form className="form-signin" onSubmit={handleSubmit}>
         <div>
           <label className="sr-only" htmlFor="text">Mensaje</label>
           <Field component="input" name="text" type="text" className="form-control" autoFocus placeholder="Texto del Mensaje" />
         </div>
         <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={submitting}>Submit</button>
       </form>


MessageForm = reduxForm({ form: 'message'}) (MessageForm)

export default MessageForm
