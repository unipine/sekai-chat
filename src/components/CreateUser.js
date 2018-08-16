import React from 'react'

const CreateUser = ({ username, ChangeUser, SubmitUser }) => {

  function handleSubmit (event) {
    event.preventDefault()
    SubmitUser(username)
  }

  function handleChange (event) {
    event.preventDefault()
    ChangeUser(event.target.value)
  }

  return (
    <form className="form-signin" onSubmit={handleSubmit}>
       <h1 className="h3 mb-3 font-weight-normal">Por favor ingrese nombre de usuario</h1>
       <label className="sr-only">Usuario</label>
       <input type="text" className="form-control" value={username} onChange={handleChange}  placeholder="Nombre de Usuario" required autofocus>
       <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
       <p className="mt-5 mb-3 text-muted">&copy; 2018</p>
     </form>

  )
}

export default CreateUser


/*
<form onSubmit={handleSubmit}>
  <input type="text" autoFocus className="new-todo" value={username} onChange={handleChange}/>
</form>

*/
