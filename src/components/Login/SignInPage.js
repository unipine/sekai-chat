import React, {Component} from 'react'
import LoginForm from './LoginForm'

class LoginPage extends Component {

  render () {

    return (
      <div>
        <LoginForm />
      </div>
    )
  }

}

export default LoginPage

/*
class Login extends Component {


  componentDidMount() {

    console.log('DID Mount')

    const {username,postUser} = this.props

    postUser(username)

  }

  componentDidUpdate(prevProps) {

    const {username,postUser} = this.props

    console.log('DID Update')

    if (prevProps.username !== username) {
        postUser(username)
    }

  }

  render() {


      function handleSubmit (event) {
        event.preventDefault()
        console.log(draft)
        createUser(draft)
      }

      function handleChange (event) {
        event.preventDefault()
        console.log(event.target.value)
        changeDraft(event.target.value)
      }


    const {draft,username,changeDraft,createUser,newUser,changeLogin} = this.props

    console.log('User',username)

    return (
      <div className="container">
        <form className="form-signin" onSubmit={handleSubmit}>
           <h1 className="h3 mb-3 font-weight-normal">Por favor ingrese sus datos</h1>
           <label className="sr-only">Email</label>
           <input type="email" className="form-control" value={draft} onChange={handleChange}  autoFocus placeholder="Email de Usuario" />
           <label className="sr-only">Usuario</label>
           <input type="text" className="form-control" value={draft} onChange={handleChange}  autoFocus placeholder="Nombre de Usuario" />
           <label className="sr-only">Password</label>
           <input type="password" className="form-control" value={draft} onChange={handleChange}  autoFocus placeholder="Password de Usuario" />
           <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
         </form>
      </div>
    )


  }

}

const mapStateToProps = state => ({
  username: getUsername(state),
  draft: getDraft(state),
})

const mapDispatchToProps = dispatch => ({
  changeDraft: username => dispatch(changeDraft(username)),
  createUser: username => dispatch(createUser(username)),
  postUser: username => dispatch(postUser(username)),
  newUser: username => dispatch(newUser(username)),
  changeLogin: () => dispatch(changeLogin()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
*/
