import React, { useState } from "react";
import { firestore } from "../firebase/firebase";
import { storage } from "../firebase/firebase";
import { Form, Button, Card, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import DatesModal from './DatesModal'
import "../formcss/editShow.css"

let id = document.location.hash.substring(1)

let nullShow = {
   title: "title",
   type: "type",
   blurb: "blurb",
   imageLg: "imageLg",
   imageSm: "imageSm",
   status: "status",
   dates: [],
   displayName: "displayName",
   contactName: "contactName",
   phone: "phone",
   email: "email",
   bio: "bio",
   description: "description",
   image1: "image1",
   image2: "image2",
   image3: "image3",
   image4: "image4",
   video1: "video1",
   link1: "link1",
   link2: "link2",
};

export default function EditShow() {
   const history = useHistory();

   const [modal, setModal] = useState(false)
   // create state object to hold values from database
   let [thisShow, setThisShow] = useState(nullShow);

   // create state objects to hold values from input form
   let [title, setTitle] = useState("");
   let [blurb, setBlurb] = useState("");
   let [type, setType] = useState("");
   let [imageLg, setImageLg] = useState("");
   let [imageSm, setImageSm] = useState("");
   let [status, setStatus] = useState("");
   let [dates, setDates] = useState([]);

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

   // get document from database and set it in state
   // then populate form with state values
   async function getOneShow() {
      let id = document.location.hash.substring(1);
      const showRef = await firestore.collection("shows").doc(id);
      const showIn = await showRef.get();
      if (!showIn.exists) {
         alert("no such document", id);
      } else {
         let showInData = showIn.data();

         setThisShow(showInData);

         showInData.title ? setTitle(showInData.title) : setTitle("");
         showInData.blurb ? setBlurb(showInData.blurb) : setBlurb("");
         showInData.type ? setType(showInData.type) : setType("");
         showInData.imageLg ? setImageLg(showInData.imageLg) : setImageLg("");
         showInData.imageSm ? setImageSm(showInData.imageSm) : setImageSm("");
         showInData.status ? setStatus(showInData.status) : setStatus("");
         showInData.dates ? setDates(showInData.dates) : setDates([]);
         showInData.displayName
            ? setDisplayName(showInData.displayName)
            : setDisplayName("");
         showInData.contactName
            ? setContactName(showInData.contactName)
            : setContactName("");
         showInData.phone ? setPhone(showInData.phone) : setPhone("");
         showInData.email ? setEmail(showInData.email) : setEmail("");
         showInData.bio ? setBio(showInData.bio) : setBio("");
         showInData.description
            ? setDescription(showInData.description)
            : setDescription("");
         showInData.image1 ? setImage1(showInData.image1) : setImage1("");
         showInData.image2 ? setImage2(showInData.image2) : setImage2("");
         showInData.image3 ? setImage3(showInData.image3) : setImage3("");
         showInData.image4 ? setImage4(showInData.image4) : setImage4("");
         showInData.video1 ? setVideo1(showInData.video1) : setVideo1("");
         showInData.link1 ? setLink1(showInData.link1) : setLink1("");
         showInData.link2 ? setLink2(showInData.link2) : setLink2("");
      }
   }

   if (thisShow.title === "title") {
      getOneShow();
   }

   //*************************************************** */

   async function enterUpdates(event) {
      event.preventDefault();
      console.log("Updating...");

      let showUpdate = {
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

      console.log("second: ", showUpdate);
      // let id = document.location.hash.substring(1);
      await firestore.collection("shows").doc(id).set(showUpdate);
      history.push("/adminDash");
   }

   const handleModalOpen = () => {
      setModal(true)
      console.log('modal = ', modal)
   }
   const handleModalClose = () => {
      setModal(false)
   }

   return (
      <div className="edit_show">
         <Container
            className="d-flex align-items center justify-content-center mt-5"
            style={{ minHeight: "80vh" }}
         >
            <div className="w-100" style={{ maxWidth: "840px" }}>
               <Card>
                  <Form
                     id="adminForm"
                     onSubmit={enterUpdates}
                     type="submit"
                     value="submit"
                  >
                     <div className="d-flex flex-direction row">
                        {/* left side column of form */}
                        <Card.Body>
                           <h2 className="text-center mb-2">Edit Show:</h2>
                           <br />

                           <Form.Group>
                              <Form.Label>Show Title:</Form.Label>
                              <Form.Control
                                 type="text"
                                 id="title"
                                 name="titleIn"
                                 value={title}
                                 onChange={(evt) => setTitle(evt.target.value)}
                              />
                           </Form.Group>
                           <Form.Group>
                              <Form.Label>Show Blurb:</Form.Label>
                              <Form.Control
                                 type="text"
                                 id="blurb"
                                 name="blurbIn"
                                 value={blurb}
                                 onChange={(evt) => setBlurb(evt.target.value)}
                              />
                           </Form.Group>
                           <Form.Group>
                              <Form.Label>Show Type:</Form.Label>
                              <Form.Control
                                 type="text"
                                 id="type"
                                 name="typeIn"
                                 value={type}
                                 onChange={(evt) => setType(evt.target.value)}
                              />
                           </Form.Group>
                           <Form.Group>
                              <Form.Label>Image (large):</Form.Label>
                              <Form.Control
                                 type="text"
                                 id="imageLg"
                                 name="imageLgIn"
                                 value={imageLg}
                                 onChange={(evt) => setImageLg(evt.target.value)}
                              />
                           </Form.Group>
                           <Form.Group>
                              <Form.Label>Image (small): </Form.Label>
                              <Form.Control
                                 type="text"
                                 id="imageSm"
                                 name="imageSmIn"
                                 value={imageSm}
                                 onChange={(evt) => setImageSm(evt.target.value)}
                              />
                           </Form.Group>
                           <Form.Group>
                              <Form.Label>Status:</Form.Label>
                              <Form.Control
                                 type="text"
                                 id="status"
                                 name="statusIn"
                                 value={status}
                                 onChange={(evt) => setStatus(evt.target.value)}
                              />
                           </Form.Group>
                           <Form.Group>
                              <Button
                              id="show_button"
                                 className="w-100"
                                 onClick={handleModalOpen} >
                                 Add Showtimes
                              </Button>
                              {modal && <DatesModal
                                 closeModal={handleModalClose}
                                 dates={dates}
                                 id={id}
                              />}
                           </Form.Group>
                           <Form.Group>
                              <Form.Label>Showtimes:</Form.Label>
                              {dates.length >= 1 ? <Form.Control type='dateTime-local' className="dates" defaultValue={dates[0]} /> : console.log()}
                              {dates.length >= 2 ? <Form.Control type='dateTime-local' className="dates" defaultValue={dates[1]} /> : console.log()}
                              {dates.length >= 3 ? <Form.Control type='dateTime-local' className="dates" defaultValue={dates[2]} /> : console.log()}
                              {dates.length >= 4 ? <Form.Control type='dateTime-local' className="dates" defaultValue={dates[3]} /> : console.log()}
                              {dates.length >= 5 ? <Form.Control type='dateTime-local' className="dates" defaultValue={dates[4]} /> : console.log()}
                              {dates.length >= 6 ? <Form.Control type='dateTime-local' className="dates" defaultValue={dates[5]} /> : console.log()}
                           </Form.Group>
                        </Card.Body>
                        {/* left side column of form END*/}
                        {/* right side column of form */}
                        <Card.Body>
                           <Form.Group>
                              <br />
                              <br />
                              <br />
                              <Form.Label>Artist Name: </Form.Label>
                              <Form.Control
                                 type="text"
                                 id="displayName"
                                 name="displayNameInput"
                                 value={displayName}
                                 onChange={(evt) => setDisplayName(evt.target.value)}
                              />
                           </Form.Group>
                           <Form.Group>
                              <Form.Label>Contact Name: </Form.Label>
                              <Form.Control
                                 type="text"
                                 id="contactName"
                                 name="contactNameInput"
                                 value={contactName}
                                 onChange={(evt) => setContactName(evt.target.value)}
                              />
                           </Form.Group>
                           <Form.Group>
                              <Form.Label>Phone: </Form.Label>
                              <Form.Control
                                 type="text"
                                 id="phone"
                                 name="phoneInput"
                                 value={phone}
                                 onChange={(evt) => setPhone(evt.target.value)}
                              />
                           </Form.Group>
                           <Form.Group>
                              <Form.Label>Email:</Form.Label>
                              <Form.Control
                                 type="text"
                                 id="email"
                                 name="emailInput"
                                 value={email}
                                 onChange={(evt) => setEmail(evt.target.value)}
                              />
                           </Form.Group>
                           <Form.Group>
                              <Form.Label>Artist Bio:</Form.Label>
                              <Form.Control
                                 type="text"
                                 id="bio"
                                 name="bioInput"
                                 onChange={(evt) => setBio(evt.target.value)}
                              />
                           </Form.Group>
                           <Form.Group>
                              <Form.Label>Description of the Show: </Form.Label>
                              <Form.Control
                                 type="text"
                                 id="showDescription"
                                 name="showDescriptionInput"
                                 rows="6"
                                 value={description}
                                 onChange={(evt) => setDescription(evt.target.value)}
                              />
                           </Form.Group>
                           <Form.Group>
                              <Form.Label>Image 1:</Form.Label>
                              <Form.Control
                                 type="text"
                                 id="image1"
                                 name="image1Input"
                                 value={image1}
                                 onChange={(evt) => setImage1(evt.target.value)}
                              />
                           </Form.Group>
                           <Form.Group>
                              <Form.Label>Image 2:</Form.Label>
                              <Form.Control
                                 type="text"
                                 id="image2"
                                 name="image2Input"
                                 value={image2}
                                 onChange={(evt) => setImage2(evt.target.value)}
                              />
                           </Form.Group>
                           <Form.Group>
                              <Form.Label>Image 3:</Form.Label>
                              <Form.Control
                                 type="text"
                                 id="image3"
                                 name="image3Input"
                                 value={image3}
                                 onChange={(evt) => setImage3(evt.target.value)}
                              />
                           </Form.Group>
                           <Form.Group>
                              <Form.Label>Image 4:</Form.Label>
                              <Form.Control
                                 type="text"
                                 id="image4"
                                 name="image4Input"
                                 value={image4}
                                 onChange={(evt) => setImage4(evt.target.value)}
                              />
                           </Form.Group>
                           <Form.Group>
                              <Form.Label>Video:</Form.Label>
                              <Form.Control
                                 type="text"
                                 id="video1"
                                 name="video1Input"
                                 value={video1}
                                 onChange={(evt) => setVideo1(evt.target.value)}
                              />
                           </Form.Group>
                           <Form.Group>
                              <Form.Label>Link 1: </Form.Label>
                              <Form.Control
                                 type="text"
                                 id="link1"
                                 name="link1Input"
                                 value={link1}
                                 onChange={(evt) => setLink1(evt.target.value)}
                              />
                           </Form.Group>
                           <Form.Group>
                              <Form.Label>Link 2:</Form.Label>
                              <Form.Control
                                 type="text"
                                 id="link2"
                                 name="link2Input"
                                 value={link2}
                                 onChange={(evt) => setLink2(evt.target.value)}
                              />
                           </Form.Group>

                           <Button id="show_button"className="w-100" type="submit">
                              Submit Updates
                           </Button>
                        </Card.Body>
                        {/* right side column of form END */}
                     </div>
                  </Form>
               </Card>
            </div>
         </Container>
      </div>
   );
}
