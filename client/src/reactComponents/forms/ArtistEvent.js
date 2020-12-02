import React from 'react'
import '../artist/Artist.css'


function ArtistEvent(props) {
  let artistImage1 = <img src={props.image1} alt="" className="artistImage" />
  let artistImage2 = <img src={props.image2} alt="" className="artistImage" />
  let artistImage3 = <img src={props.image3} alt="" className="artistImage" />
  return (
    <div className="artistsContainer">
      <h3>{props.artist}</h3>

      <div className="artistImageContainer">
        {artistImage1}
        {artistImage2}
        {artistImage3} 
      </div>

      <div className="textContainer">
        <p>{props.bio}</p>

        <div className="artistContact">
          <h5> {props.email}</h5>
          
          <a href={props.link1}>{props.link1}</a>
          <a href={props.link2}>{props.link2}</a>
          <br />
        </div>
      </div>
      <div className="line"></div>
    </div>
  )
}

export default ArtistEvent
