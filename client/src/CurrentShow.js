import React from 'react'
import Image from './images/kooza-show.jpg'
import './CurrentShow.css'

function CurrentShow() {
  return (
    <div className="currentShowContainer">
      <div className="images">
        <div className="image_row">
          <img src={Image} />
          <h3>Show Title</h3>
          <p>Show description hi hi hi</p>
        </div>
        <div className="image_row">
          <img src={Image} />
          <h3>Show Title</h3>
          <p>Show description hi hi hi</p>
        </div>
        <div className="image_row">
          <img src={Image} />
          <h3>Show Title</h3>
          <p>Show description hi hi hi</p>
        </div>
      </div>
    </div>
  )
}

export default CurrentShow
