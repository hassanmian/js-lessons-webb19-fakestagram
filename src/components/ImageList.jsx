import React from 'react'
import ImageItem from './ImageItem'

export default function ImageList(props) {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
      {props.images.map((image, index) => {
        return <ImageItem key={index} index={index} image={image}/>
      })}
      </div>
    </div>
  )
}
