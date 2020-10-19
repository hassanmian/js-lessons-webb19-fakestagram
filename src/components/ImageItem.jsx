import React, {useState} from 'react'

export default function ImageItem(props) {
  const [likes, setLikes] = useState(props.image.likes)
  const [expanded, setExpanded] = useState(false)

  function handleOnClick() {
    if(props.image.likes === likes) {
      setLikes(props.image.likes + 1)
    } else {
      setLikes(props.image.likes)
    }
  }

  function handleExpand(){
    setExpanded(!expanded)
  }

  return (
    <div className={`${expanded ? "col-md-12": "col-md-4"}`}>
      <img className="img-fluid" src={props.image.imageURL} />
      <p><strong>{props.image.title}</strong></p>
      <p>{props.image.description}</p>
      <button className="btn btn-primary btn-block" onClick={handleOnClick}>
        Likes ({likes})
      </button>
      <button onClick={handleExpand}>Expand</button>
    </div>
  )
}
