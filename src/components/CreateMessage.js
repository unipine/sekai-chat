import React from 'react'

const CreateMessage = ({ username, messagetext, changeMessage, newMessage,createMessage }) => {

  function handleSubmit (event) {
    event.preventDefault()
    console.log('User:',username,'Msg:',messagetext)
    createMessage(username, messagetext)
    newMessage(messagetext)
  }

  function handleChange (event) {
    event.preventDefault()
    changeMessage(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" autoFocus className="new-todo" value={messagetext} onChange={handleChange}/>
    </form>
  )
}

export default CreateMessage
