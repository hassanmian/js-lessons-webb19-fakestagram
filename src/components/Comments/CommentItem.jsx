import React from 'react'

export default function CommentItem(props) {
  return (
    <div className="alert alert-info">
      {props.itemData.message}
    </div>
  )
}
