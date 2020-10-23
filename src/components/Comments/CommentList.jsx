import React, {useEffect, useState} from 'react'
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'

export default function CommentList(props) {
  const [commentListData, setCommentListData] = useState(null)
  
  function fetchCommentList() {
    fetch(props.url)
    .then(res => res.json())
    .then(data => {
      setCommentListData(data)
    })
  }

  useEffect( () => {
    fetchCommentList()
  }, [] )

  return (
    <div>
      <CommentForm url={props.url} handleOnSuccess={fetchCommentList}/>
      {commentListData && Object.entries(commentListData).reverse().map((commentItemData, index) => {
        return <CommentItem key={index} itemData={commentItemData[1]} />
      })}
    </div>
  )
}
