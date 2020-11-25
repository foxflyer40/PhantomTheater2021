import React, { useState } from "react";
// get the database
import app, { firestore } from "../firebase/firebase";
import { Form, Button, Card, Container } from "react-bootstrap";
import { storage } from "../firebase/firebase";
import DatesModal from './DatesModal'

function AdminForm() {
   const [modal, setModal] = useState(false)
  // create state for show information
  let [title, setTitle] = useState("");
  let [blurb, setBlurb] = useState("");
  let [type, setType] = useState("");

  let [imageLg, setImageLg] = useState("");
  let [imageLgFile, setimageLgFile] = useState("");
  let [imageSm, setImageSm] = useState("");

   let [status, setStatus] = useState(""); //proposed / Booked / archived
   let [numOfShows, setNumOfShows] = useState(0)
  let [dates, setDates] = useState(""); // creates array of dates/times

  // create state for each artist field
  let [displayName, setDisplayName] = useState("");
  let [contactName, setContactName] = useState("");
  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");

  let [bio, setBio] = useState("");
  let [description, setDescription] = useState("");
  let [image1, setImage1] = useState("");
  let [image2, setImage2] = useState("");
  let [image3, setImage3] = useState("");
  let [image4, setImage4] = useState("");
  let [video1, setVideo1] = useState("");
  let [link1, setLink1] = useState("");
  let [link2, setLink2] = useState("");

  // construct object from state to pass to db
  let show = {
    title: title,
    type: type,
    blurb: blurb,
    imageLg: imageLg,
    imageSm: imageSm,
    status: status,
    dates: dates,
    displayName: displayName,
    contactName: contactName,
    phone: phone,
    email: email,
    bio: bio,
    description: description,
    image1: image1,
    image2: image2,
    image3: image3,
    image4: image4,
    video1: video1,
    link1: link1,
    link2: link2,
  };

  // write current state to shows collection
  async function enterNewShow(event) {
    event.preventDefault();
    // get the collection 'shows' | .doc creates new entry with auto ID | .set(show) fills new entry with show object built from state values set by form
    if (!event.target.titleIn.value) {
      alert("please enter a show.");
      console.log(show);
    } else {
      console.log(show);
      // write show data to db
      await firestore.collection("shows").doc().set(show);
      // clear form inputs
      event.target.titleIn.value = "";
      event.target.blurbIn.value = "";
      event.target.typeIn.value = "";
      event.target.imageLgIn.value = "";
      event.target.imageSmIn.value = "";
      event.target.statusIn.value = "";
      event.target.datesIn.value = "";
      event.target.showDescriptionInput.value = "";
      event.target.displayNameInput.value = "";
      event.target.contactNameInput.value = "";
      event.target.phoneInput.value = "";
      event.target.emailInput.value = "";
      event.target.bioInput.value = "";
      event.target.image1Input.value = "";
      event.target.image2Input.value = "";
      event.target.image3Input.value = "";
      event.target.image4Input.value = "";
      event.target.video1Input.value = "";
      event.target.link1Input.value = "";
      event.target.link2Input.value = "";
      // clear state
      setTitle("");
      setType("");
      setBlurb("");
      setImageLg("");
      setImageSm("");
      setStatus("");
      setDates("");
      setDisplayName("");
      setContactName("");
      setPhone("");
      setEmail("");
      setBio("");
      setDescription("");
      setImage1("");
      setImage2("");
      setImage3("");
      setImage4("");
      setVideo1("");
      setLink1("");
      setLink2("");
    }
  }

  const handleChange = (event) => {
    if (event.target.files[0]) {
      setimageLgFile(event.target.files[0]);
    }
  };

  const handleUpload = (evt) => {
    evt.preventDefault();

    let storageRef = app.storage().ref();
    let largeRef = storageRef.child(`/images/${imageLgFile.name}`);

    largeRef.put(imageLgFile).then((snapshot) => {
      console.log(snapshot);
      largeRef.getDownloadURL().then((url) => {
        console.log(url);
        setImageLg(url);
      });
    });
   };
   
      const handleModalOpen = () => {
         setModal(true)
        console.log('open', numOfShows)
      }
      const handleModalClose = () => {
         setModal(false)
         console.log('close', numOfShows)
      }

  console.log(modal)

  // form sets state on input change and fires enterNewShow on submit
  return (
    <div>
      <Container
        className="d-flex align-items center justify-content-center mt-5"
        style={{ minHeight: "80vh" }}
      >
        <div className="w-100" style={{ maxWidth: "840px" }}>
          <Card>
            <Form
              id="adminForm"
              onSubmit={(event) => {
                enterNewShow(event);
                handleUpload(event);
              }}
              type="submit"
              value="submit"
            >
              <div className="d-flex flex-direction row">
                <Card.Body>
                  <h2 className="text-center mb-2">Add A Show:</h2>
                  <br />

                  <Form.Group>
                    <Form.Label>Show Title:</Form.Label>
                    <Form.Control
                      type="text"
                      name="titleIn"
                      onChange={(evt) => setTitle(evt.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Show Blurb:</Form.Label>
                    <Form.Control
                      type="text"
                      name="blurbIn"
                      onChange={(evt) => setBlurb(evt.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Show Type:</Form.Label>
                    <Form.Control
                      type="text"
                      name="typeIn"
                      onChange={(evt) => setType(evt.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Image (large):</Form.Label>
                    <Form.Control
                      type="file"
                      name="imageLgIn"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Image (small): </Form.Label>
                    <Form.Control
                      type="text"
                      name="imageSmIn"
                      onChange={(evt) => setImageSm(evt.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Status:</Form.Label>
                    <Form.Control
                      type="text"
                      name="statusIn"
                      onChange={(evt) => setStatus(evt.target.value)}
                    />
                  </Form.Group>
                          <Form.Group>
                             <Form.Label>Number of Shows: </Form.Label>
                             
                             <input
                                type='number'
                                name='numberOfShows'
                                onChange={(evt) => setNumOfShows(evt.target.value)}>
                             </input>
                             
                             <Button
                                className="w-100"
                                onClick={handleModalOpen} >
                                Enter Dates
                              </Button>
                             
                             {modal && <DatesModal
                                closeModal={handleModalClose}
                                numOfShows={numOfShows} />}
                          
                          </Form.Group>
                </Card.Body>
                <Card.Body>
                  <br />
                  <br />
                   <br />
                  <Form.Group>
                    <Form.Label>Artist Name: </Form.Label>
                    <Form.Control
                      type="text"
                      name="displayNameInput"
                      onChange={(evt) => setDisplayName(evt.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Contact Name: </Form.Label>
                    <Form.Control
                      type="text"
                      name="contactNameInput"
                      onChange={(evt) => setContactName(evt.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Phone: </Form.Label>
                    <Form.Control
                      type="text"
                      name="phoneInput"
                      onChange={(evt) => setPhone(evt.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="text"
                      name="emailInput"
                      onChange={(evt) => setEmail(evt.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Artist Bio:</Form.Label>
                    <Form.Control
                      type="text"
                      name="bioInput"
                      onChange={(evt) => setBio(evt.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label for="showDescription">
                      {" "}
                      Description of the Show:
                    </Form.Label>
                    <textarea
                      className="form-control"
                      name="showDescriptionInput"
                      rows="6"
                      onChange={(evt) => setDescription(evt.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Image 1:</Form.Label>
                    <Form.Control
                      type="text"
                      name="image1Input"
                      onChange={(evt) => setImage1(evt.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Image 2:</Form.Label>
                    <Form.Control
                      type="text"
                      name="image2Input"
                      onChange={(evt) => setImage2(evt.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Image 3:</Form.Label>
                    <Form.Control
                      type="text"
                      name="image3Input"
                      onChange={(evt) => setImage3(evt.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Image 4:</Form.Label>
                    <Form.Control
                      type="text"
                      name="image4Input"
                      onChange={(evt) => setImage4(evt.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Video:</Form.Label>
                    <Form.Control
                      type="text"
                      name="video1Input"
                      onChange={(evt) => setVideo1(evt.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Link 1: </Form.Label>
                    <Form.Control
                      type="text"
                      name="link1Input"
                      onChange={(evt) => setLink1(evt.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Link 2:</Form.Label>
                    <Form.Control
                      type="text"
                      name="link2Input"
                      onChange={(evt) => setLink2(evt.target.value)}
                    />
                  </Form.Group>

                  <Button className="w-100" type="submit">
                    Submit
                  </Button>
                </Card.Body>
              </div>
            </Form>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default AdminForm;
