import React, { useState } from 'react'

export default function CommentForm(props) {
  const [messageInputData, setMessageInputData] = useState("")

  function handlePostMessage(e) {
    e.preventDefault()
    fetch(props.url, {
      method: "POST",
      body: JSON.stringify({message: messageInputData})
    }).then(res => {
      props.handleOnSuccess()
      setMessageInputData("")
    })
  }

  return (
    <form onSubmit={handlePostMessage} className="form-inline">
      <div className="form-group">
        <input 
          type="text" 
          className="form-control" 
          value={messageInputData}  
          onChange={e => setMessageInputData(e.target.value)}
          placeholder="Enter your message" 
        />
      </div>
      <button className="btn btn-primary">Send</button>
    </form>
  )
}
