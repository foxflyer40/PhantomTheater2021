import React from 'react'

function ArtistEvent(props) {
  let artistImage1 = <img src={props.image1} alt="" style={{ width: 100 + 'px' }} />
  let artistImage2 = <img src={props.image2} alt="" style={{ width: 100 + 'px' }} />
  let artistImage3 = <img src={props.image3} alt="" style={{ width: 100 + 'px' }} />
  return (
    <div>
      {props.name}
      <br />
      {artistImage1}
      {artistImage2}
      {artistImage3}
      <br />
      {props.blurb}
      <br />
      {props.email}
      <br />
      {props.link1}
      {props.link2}
      <br />

    </div>
  )
}

export default ArtistEvent
