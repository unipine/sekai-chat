import React from 'react'
import { reduxForm, Field } from 'redux-form'

let ChannelForm = ({handleSubmit, submitting}) =>
      <form className="form-signin" onSubmit={handleSubmit}>
         <h1 className="h3 mb-3 font-weight-normal">Por favor ingrese el nombre del canal</h1>
         <div>
           <label className="sr-only" htmlFor="topic">Canal</label>
           <Field component="input" name="topic" type="text" className="form-control" autoFocus placeholder="Nombre de Canal" />
         </div>
         <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={submitting}>Submit</button>
       </form>


ChannelForm = reduxForm({ form: 'channel'}) (ChannelForm)

export default ChannelForm
