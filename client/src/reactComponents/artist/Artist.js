// ---------------------Imports --------------------------
import React, { useState } from "react";
import "./Artist.css";
import ArtistImage from "../images/artist.jpg";
import { firestore } from "../firebase/firebase";
import ArtistEvent from '../forms/ArtistEvent'
import '../artist/Artist.css'

const collectAllIdsAndDocs = (doc) => {
  return { id: doc.id, ...doc.data() }
}

// ------- Season function with calendar and show titles and dates
//----------------Artist component function ----------------

function Artist() {
  let [allArtists, setAllArtists] = useState(null)

  async function seeAllArtists() {
    const artistsRef = firestore.collection('shows')
    const artistSnapshot = await artistsRef.where('status', '!=', 'Proposal').get()

    const allArtistsArray = artistSnapshot.docs.map(collectAllIdsAndDocs)
    if (!allArtists) {
      console.log('allArtistsArray = ', allArtistsArray)
      setAllArtists(allArtistsArray)
    }
  }

  seeAllArtists()

  return (
    <div className="artistsContainer">
      <h1>Artists</h1>
      { allArtists ? allArtists.map(show => {
        return <ArtistEvent

          key={show.id}
          id={show.id}
          artist={show.artist}
          image1={show.image1}
          image2={show.image2}
          image3={show.image3}
          blurb={show.blurb}
          email={show.email}
          link1={show.link1}
          link2={show.link2}
        ></ArtistEvent >
      }) : 'loading'

      }


      {/* <div className="artistImageContainer">
          <img className="artistImage" src={ArtistImage} />
          <img className="artistImage" src={ArtistImage} />
          <img className="artistImage" src={ArtistImage} />
        </div>
        <div className="textContainer">
          <p>
            velit laoreet id donec ultrices tincidunt arcu non sodales neque
            sodales ut etiam sit amet nisl purus in mollis nunc sed id semper
            risus in hendrerit gravida rutrum quisque non tellus orci ac auctor
            augue mauris augue neque gravida in fermentum et sollicitudin ac
            orci phasellus egestas tellus rutrum tellus pellentesque eu
            tincidunt tortor aliquam nulla facilisi cras fermentum odio eu
            feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id
            leo in vitae turpis massa sed elementum tempus egestas sed sed risus
            pretium quam vulputate dignissim suspendisse in est ante in nibh
            mauris cursus mattis molestie a iaculis at erat pellentesque
            adipiscing commodo elit at imperdiet dui accumsan sit amet nulla
            facilisi morbi tempus iaculis urna id volutpat lacus laoreet non
            curabitur gravida arcu ac tortor dignissim convallis aenean et
            tortor
          </p>
          <div className="artistContact">
            <h5>
              Contact Info : fake_email@email.com  (802)888-8888
          </h5>
            <a href="#">www.fakeweb.com</a>
          </div>
        </div>
      </div> */}
    </div >
  );
}

//------export the component---------
export default Artist;
