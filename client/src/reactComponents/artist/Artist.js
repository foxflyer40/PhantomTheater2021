// ---------------------Imports --------------------------
import React from "react";
import "./Artist.css";
import ArtistImage from "../images/artist.jpg";


//----------------Artist component function ----------------

function Artist() {
  return (
    <div className="artistsContainer">
      <div className="artist">
        <h1>Artist Name</h1>
        <div className="artistImageContainer">
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
        <div className="line"></div>
      </div>

      <div className="artist">
        <h1>Artist Name</h1>

        <div className="artistImageContainer">
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
        <div className="line"></div>
      </div>

      <div className="artist">
        <h1>Artist Name</h1>

        <div className="artistImageContainer">
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
      </div>
    </div>
  );
}

//------export the component---------
export default Artist;
