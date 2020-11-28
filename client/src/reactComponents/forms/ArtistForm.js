import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import app, { firestore } from "../firebase/firebase";
import NumberFormat from 'react-number-format'
import "../formcss/artistForm.css";

function ArtistForm() {
  // create state for each artist field
  let [displayName, setDisplayName] = useState("");
  let [contactName, setContactName] = useState("");
  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");
  let [bio, setBio] = useState("");
  let [showName, setShowName] = useState("");
  let [showDesc, setShowDesc] = useState("");

  let [imageFile, setImageFile] = useState("");
  let [image1, setimageOne] = useState("");

  let [imageTwoFile, setImageTwoFile] = useState("");
  let [image2, setImageTwo] = useState("");

  let [imageThreeFile, setImageThreeFile] = useState("");
  let [image3, setImageThree] = useState("");

  let [videoLink, setVideoLink] = useState("");

  // create artist object from state
  let artist = {
    displayName: displayName,
    contactName: contactName,
    phone: phone,
    email: email,
    showName: showName,
    showDesc: showDesc,
    bio: bio,
    image1: image1,
    image2: image2,
    image3: image3,
    videoLink: videoLink,
  };

  // write current state to artist collection
  async function enterNewArtist(event) {
    event.preventDefault();
    // get artist collection | .doc creates new entry with auto id | .set(artist) populates new artist entry
    firestore.collection("shows").doc().set(artist);
    event.target.displayNameInput.value = "";
    event.target.contactNameInput.value = "";
    event.target.phoneInput.value = "";
    event.target.emailInput.value = "";
    event.target.bioInput.value = "";
    event.target.showNameInput.value = "";
    event.target.showDescInput.value = "";
    // event.target.imageOne.value = "";
    // event.target.imageTwo.value = "";
    // event.target.imageThree.value = "";
    event.target.vidInput.value = "";
  }

  //-----------------------------------image uploading/handling-------------------------//

  //because of the code above, the url is not being set in the img fields in DB but we do have access to them
  //the files are being submitted but we still need to get the URLs to be entered

  //-----------main img--------//

  const handleImgMain = (event) => {
    if (event.target.files[0]) {
      setImageFile(event.target.files[0]);
    }
  };

  const handleUploadMain = (evt) => {
    evt.preventDefault();

    let storageRef = app.storage().ref();
    let mainRef = storageRef.child(`/images/${imageFile.name}`);

    mainRef.put(imageFile).then((snapshot) => {
      mainRef.getDownloadURL().then((url) => {
        setimageOne(url);
      });
    });
  };

  //--------------second img---------------//

  const handleImgTwo = (event) => {
    if (event.target.files[0]) {
      setImageTwoFile(event.target.files[0]);
    }
  };

  const handleUploadTwo = (evt) => {
    evt.preventDefault();

    let storageRef = app.storage().ref();
    let imgTwoRef = storageRef.child(`/images/${imageTwoFile.name}`);

    imgTwoRef.put(imageTwoFile).then((snapshot) => {
      imgTwoRef.getDownloadURL().then((url) => {
        setImageTwo(url);
      });
    });
  };

  //-----------third img-----------//

  const handleImgThree = (event) => {
    if (event.target.files[0]) {
      setImageThreeFile(event.target.files[0]);
    }
  };

  const handleUploadThree = (evt) => {
    evt.preventDefault();

    let storageRef = app.storage().ref();
    let imgThreeRef = storageRef.child(`/images/${imageThreeFile.name}`);

    imgThreeRef.put(imageThreeFile).then((snapshot) => {
      imgThreeRef.getDownloadURL().then((url) => {
        setImageThree(url);
      });
    });
  };

  return (
    /* Artist Form container */
    <div className="artist_container">
      {/* Container of the artist form */}
      <Container
        className="d-flex align-items center justify-content-center mt-5"
        style={{ minHeight: "80vh" }}
      >
        <div className="w-100" style={{ maxWidth: "420px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-2">Fucken Artist Information Form 'n shit</h2>
              <br />
              {/* Start of the form */}
              <Form
                id="ArtistForm"
                onSubmit={(evt) => {
                  enterNewArtist(evt);
                  handleUploadMain(evt);
                  handleUploadTwo(evt);
                  handleUploadThree(evt);
                }}
              >
                {/* Artist name container */}
                <Form.Group id="artName">
                  <Form.Label>Artist Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="displayNameInput"
                    placeholder="Enter Artist Name"
                    onChange={(evt) => setDisplayName(evt.target.value)}
                  />
                </Form.Group>
                {/* End of Artist Name Container */}
                {/* Contact Name container */}
                <Form.Group id="contactName">
                  <Form.Label>Contact Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="contactNameInput"
                    placeholder="Enter Contact Name"
                    onChange={(evt) => setContactName(evt.target.value)}
                  />
                </Form.Group>
                {/* End of Contact container */}
                {/* Phone container */}
                <Form.Group id="contactPhone">
                  <Form.Label>Contact Phone:</Form.Label>
                  <NumberFormat
                    className="form-control"
                    mask="_"
                    format="(###) ###-####"
                    placeholder="Enter Phone"
                    type="phone"
                    name="phoneInput"
                    onChange={(evt) => setPhone(evt.target.value)}
                  />
                </Form.Group>
                {/* End of Phone container */}
                {/* Email container */}
                <Form.Group id="contactEmail">
                  <Form.Label>Contact Email:</Form.Label>
                  <Form.Control
                    type="email"
                    name="emailInput"
                    placeholder="Enter Email"
                    onChange={(evt) => setEmail(evt.target.value)}
                  />
                </Form.Group>
                {/* End of email container */}
                {/* Show name container*/}
                <Form.Group id="showName">
                  <Form.Label>Show Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="showNameInput"
                    placeholder="Enter Show Name"
                    onChange={(evt) => setShowName(evt.target.value)}
                  />
                </Form.Group>
                {/* End of show name container */}
                {/* Description of the show container */}
                <Form.Group>
                  <Form.Label>Description of the Show: </Form.Label>
                  <Form.Control
                    type="text"
                    id="showDesc"
                    name="showDescInput"
                    placeholder="Enter Show Description"
                    // I'd like to make it so that this field looks like bio looks
                    height="20px"
                    onChange={(evt) => setShowDesc(evt.target.value)}
                  />
                </Form.Group>
                {/* End of description container */}
                {/* Bio Container */}
                <Form.Group>
                  <Form.Label for="bio">Bio:</Form.Label>
                  <textarea
                    className="form-control"
                    name="bioInput"
                    rows="6"
                    placeholder="Enter Artist Bio"
                    onChange={(evt) => setBio(evt.target.value)}
                  />
                </Form.Group>
                {/*End of bio container */}
                {/* Main image container */}
                <Form.Group>
                  <Form.Label>Image One:</Form.Label>
                  <Form.Control
                    className="img_submit"
                    type="file"
                    onChange={handleImgMain}
                  />
                </Form.Group>
                {/* End of MAIN image container */}
                {/* Image two container */}
                <Form.Group>
                  <Form.Label>Image Two:</Form.Label>
                  <Form.Control
                    className="img_submit"
                    type="file"
                    onChange={handleImgTwo}
                  />
                </Form.Group>
                {/* End of image two container  */}
                {/* Image three Container */}
                <Form.Group>
                  <Form.Label>Image Three:</Form.Label>
                  <Form.Control
                    className="img_submit"
                    type="file"
                    onChange={handleImgThree}
                  />
                </Form.Group>
                {/* End of Image three container */}
                {/* Video link COntainer */}
                <Form.Group id="vidLink">
                  <Form.Label>Video Link:</Form.Label>
                  <Form.Control
                    type="url"
                    name="vidInput"
                    onChange={(evt) => setVideoLink(evt.target.value)}
                    placeholder="Enter Video Link"
                  />
                </Form.Group>
                {/* End of video link container */}
                {/* Submit Button */}
                <Button id="form_button" className="w-100" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default ArtistForm;
