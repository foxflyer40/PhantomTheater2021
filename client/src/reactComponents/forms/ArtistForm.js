import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import app, { firestore } from "../firebase/firebase";
import "../formcss/artistForm.css"

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
  let [mainImage, setMainImage] = useState("");

  let [imageTwoFile, setImageTwoFile] = useState("");
  let [imageTwo, setImageTwo] = useState("");

  let [imageThreeFile, setImageThreeFile] = useState("");
  let [imageThree, setImageThree] = useState("");

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
    mainImage: mainImage,
    imageTwo: imageTwo,
    imageThree: imageThree,
    videoLink: videoLink,
  };

  // write current state to artist collection
  async function enterNewArtist(event) {
    event.preventDefault();
    // get artist collection | .doc creates new entry with auto id | .set(artist) populates new artist entry
    firestore.collection("artists").doc().set(artist);
    event.target.displayNameInput.value = "";
    event.target.contactNameInput.value = "";
    event.target.phoneInput.value = "";
    event.target.emailInput.value = "";
    event.target.bioInput.value = "";
    event.target.showNameInput.value = "";
    event.target.showDescInput.value = "";
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
        console.log(url);
        setMainImage(url);
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
        console.log(url);
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
        console.log(url);
        setImageThree(url);
      });
    });
  };

  return (
    <div className="artist_container">
      <Container
        className="d-flex align-items center justify-content-center mt-5"
        style={{ minHeight: "80vh" }}
      >
        <div className="w-100" style={{ maxWidth: "420px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-2">Artist Submission Form</h2>
              <br />

              <Form
                id="ArtistForm"
                onSubmit={(evt) => {
                  enterNewArtist(evt);
                  handleUploadMain(evt);
                  handleUploadTwo(evt);
                  handleUploadThree(evt);
                }}
              >
                <Form.Group id="artName">
                  <Form.Label>Artist Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="displayNameInput"
                    onChange={(evt) => setDisplayName(evt.target.value)}
                  />
                </Form.Group>
                <Form.Group id="contactName">
                  <Form.Label>Contact Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="contactNameInput"
                    onChange={(evt) => setContactName(evt.target.value)}
                  />
                </Form.Group>
                <Form.Group id="contactPhone">
                  <Form.Label>Contact Phone:</Form.Label>
                  <Form.Control
                    type="phone"
                    name="phoneInput"
                    onChange={(evt) => setPhone(evt.target.value)}
                  />
                </Form.Group>
                <Form.Group id="contactEmail">
                  <Form.Label>Contact Email:</Form.Label>
                  <Form.Control
                    type="email"
                    name="emailInput"
                    onChange={(evt) => setEmail(evt.target.value)}
                  />
                </Form.Group>
                <Form.Group id="showName">
                  <Form.Label>Show Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="showNameInput"
                    onChange={(evt) => setShowName(evt.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Description of the Show: </Form.Label>
                  <Form.Control
                    type="text"
                    id="showDesc"
                    name="showDescInput"
                    // I'd like to make it so that this field looks like bio looks
                    height="20px"
                    onChange={(evt) => setShowDesc(evt.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label for="bio">Bio:</Form.Label>
                  <textarea
                    className="form-control"
                    name="bioInput"
                    rows="6"
                    onChange={(evt) => setBio(evt.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Main Image:</Form.Label>
                  <Form.Control className="img_submit" type="file" onChange={handleImgMain} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Image Two:</Form.Label>
                  <Form.Control className="img_submit" type="file" onChange={handleImgTwo} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Image Three:</Form.Label>
                  <Form.Control className="img_submit" type="file" onChange={handleImgThree} />
                </Form.Group>

                <Form.Group id="vidLink">
                  <Form.Label>Video Link:</Form.Label>
                  <Form.Control
                    type="url"
                    name="vidInput"
                    onChange={(evt) => setVideoLink(evt.target.value)}
                  />
                </Form.Group>

                <Button className="w-100" type="submit">
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
