import React, { useState } from 'react'
import firebase from "../../firebase"

export default function CommentForm(props) {
  const [messageInputData, setMessageInputData] = useState("")

  const database = firebase.database()
  const commentRef = database.ref(props.url)

  function handlePostMessage(e) {
    e.preventDefault()
    commentRef.push({message: messageInputData})
    setMessageInputData("")
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
