import React from 'react'
import ImageItem from './ImageItem'

export default function ImageList(props) {
  return (
    <div className="row">
      {props.images.map((image, index) => {
        return <ImageItem key={index} image={image}/>
      })}
    </div>
  )
}
