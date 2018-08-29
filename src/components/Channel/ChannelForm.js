import React from 'react'
import { reduxForm, Field } from 'redux-form'

let ChannelForm = ({handleSubmit, submitting}) =>
      <form className="form-signin" onSubmit={handleSubmit}>
         <div>
           <label className="sr-only" htmlFor="topic">New Channel:</label>
           <Field
           component="input"
           name="topic"
           type="text"
           className="form-control" 
           autoFocus
           placeholder="Nombre de Canal" />
         </div>
         <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={submitting}>New</button>
       </form>


ChannelForm = reduxForm({ form: 'channel'}) (ChannelForm)

export default ChannelForm
