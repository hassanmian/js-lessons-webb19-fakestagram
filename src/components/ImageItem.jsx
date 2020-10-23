import React, {useState} from 'react'
import CommentList from './Comments/CommentList'

export default function ImageItem(props) {
  const [likes, setLikes] = useState(props.image.likes)

  const commentURL = `https://image-mock-data.firebaseio.com/comments/${props.index}.json`

  function handleOnClick() {
    if(props.image.likes === likes) {
      setLikes(props.image.likes + 1)
    } else {
      setLikes(props.image.likes)
    }
  }

  return (
    <div className="col-md-12 p-3">
      <img className="img-fluid" src={props.image.imageURL} />
      <p><strong>{props.image.title}</strong></p>
      <p>{props.image.description}</p>
      <button className="btn btn-primary btn-block" onClick={handleOnClick}>
        Likes ({likes})
      </button>
      <CommentList url={commentURL}/>
    </div>
  )
}
