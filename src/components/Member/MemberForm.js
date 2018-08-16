import React from 'react'
import { reduxForm, Field } from 'redux-form'

let MemberForm = ({handleSubmit, submitting}) =>
      <form className="form-signin" onSubmit={handleSubmit}>
         <div>
           <label className="sr-only" htmlFor="member">Member</label>
           <Field component="input" name="member" type="text" className="form-control" autoFocus placeholder="Nombre..." />
         </div>
         <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={submitting}>Submit</button>
       </form>


MemberForm = reduxForm({ form: 'member'}) (MemberForm)

export default MemberForm
