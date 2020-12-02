import React, { useState } from "react";
// get the database
import app, { firestore } from "../firebase/firebase";
import { Form, Button, Card, Container } from "react-bootstrap";
import { storage } from "../firebase/firebase";
import { useHistory } from 'react-router-dom'
import NumberFormat from 'react-number-format'
import "../formcss/addShow.css";

function AdminForm() {
   // create state for show information
   const history = useHistory()
   let [title, setTitle] = useState("");
   let [blurb, setBlurb] = useState("");
   let [type, setType] = useState("");

   let [imageLg, setImageLg] = useState("");
   let [imageLgFile, setimageLgFile] = useState("");

   let [status, setStatus] = useState("Booked");
   let [numOfShows, setNumOfShows] = useState(0);
   let [dates, setDates] = useState([]); // creates array of dates/times

   // create state for each artist field
   let [artist, setArtist] = useState("");
   let [contactName, setContactName] = useState("");
   let [phone, setPhone] = useState("");
   let [email, setEmail] = useState("");

   let [bio, setBio] = useState("");
   let [description, setDescription] = useState("");
   let [image1, setImage1] = useState("");
   let [image2, setImage2] = useState("");
   let [image3, setImage3] = useState("");
   let [video1, setVideo1] = useState("");
   let [link1, setLink1] = useState("");
   let [link2, setLink2] = useState("");

   // construct object from state to pass to db
   let show = {
      title: title,
      type: type,
      blurb: blurb,
      imageLg: imageLg,
      status: status,
      dates: dates,
      artist: artist,
      contactName: contactName,
      phone: phone,
      email: email,
      bio: bio,
      description: description,
      image1: image1,
      image2: image2,
      image3: image3,
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
         // event.target.statusIn.value = "";
         event.target.showDescriptionInput.value = "";
         event.target.artistInput.value = "";
         event.target.contactNameInput.value = "";
         event.target.phoneInput.value = "";
         event.target.emailInput.value = "";
         event.target.bioInput.value = "";
         event.target.image1Input.value = "";
         event.target.image2Input.value = "";
         event.target.image3Input.value = "";
         event.target.video1Input.value = "";
         event.target.link1Input.value = "";
         event.target.link2Input.value = "";
         alert("Show has been added!")
         history.push('/adminDash')
         // clear state
         setTitle("");
         setType("");
         setBlurb("");
         setImageLg("");
         setArtist("");
         setContactName("");
         setPhone("");
         setEmail("");
         setBio("");
         setDescription("");
         setImage1("");
         setImage2("");
         setImage3("");
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


   // form sets state on input change and fires enterNewShow on submit
   return (
      <div className="add_show">
         {/* Add show container */}
         <Container
            id="container_add"
            className="d-flex align-items center justify-content-center mt-5"
            style={{ minHeight: "80vh" }}
         >
            <div className="w-100" style={{ maxWidth: "840px" }}>
               <Card>
                  {/* Start Of the First Column Card */}
                  {/* Start of the form Container. */}
                  <Form
                     id="adminForm"
                     onSubmit={(event) => {
                        enterNewShow(event);
                        handleUpload(event);
                     }}
                     type="submit"
                     value="submit"
                  >
                     <div id="form" className="d-flex flex-direction row">
                        {/* Add Show section  */}
                        <Card.Body>
                           <h2 className="text-center mb-2">Add A Show:</h2>
                           <br />
                           {/* Insert Show Title */}
                           <Form.Group>
                              <Form.Label>Show Title:</Form.Label>
                              <Form.Control
                                 type="text"
                                 name="titleIn"
                                 placeholder="Enter Title"
                                 onChange={(evt) => setTitle(evt.target.value)}
                              />
                           </Form.Group>
                           {/* End of Show Title */}
                           {/* Show Blurb Container */}
                           <Form.Group>
                              <Form.Label>Show Blurb:</Form.Label>
                              <Form.Control
                                 type="text"
                                 name="blurbIn"
                                 placeholder="Enter Blurb"
                                 onChange={(evt) => setBlurb(evt.target.value)}
                              />
                           </Form.Group>
                           {/* End of Blurb */}
                           {/* Insert Show Type */}
                           <Form.Group>
                              <Form.Label>Show Type:</Form.Label>
                              <Form.Control
                                 type="text"
                                 name="typeIn"
                                 placeholder="Enter Type"
                                 onChange={(evt) => setType(evt.target.value)}
                              />
                           </Form.Group>
                           {/* End of Show Type */}
                           {/*Container To choose a image */}
                           {/* Choose a large image */}
                           <Form.Group>
                              <Form.Label>Image (large):</Form.Label>
                              <Form.Control
                                 id="file_button"
                                 type="file"
                                 name="imageLgIn"
                                 onChange={handleChange}
                              />
                           </Form.Group>
                           {/* Image 1 Container */}
                           <Form.Group>
                              <Form.Label>Image 1:</Form.Label>
                              <Form.Control
                                 type="file"
                                 name="image1Input"
                                 onChange={(evt) => setImage1(evt.target.value)}
                              />
                           </Form.Group>
                           {/* End of Image 1 Container */}
                           {/* Image 2 Container */}
                           <Form.Group>
                              <Form.Label>Image 2:</Form.Label>
                              <Form.Control
                                 type="file"
                                 name="image2Input"
                                 onChange={(evt) => setImage2(evt.target.value)}
                              />
                           </Form.Group>
                           {/* End Of image 2 container */}
                           {/* Image 3 Container */}
                           <Form.Group>
                              <Form.Label>Image 3:</Form.Label>
                              <Form.Control
                                 type="file"
                                 name="image3Input"
                                 onChange={(evt) => setImage3(evt.target.value)}
                              />
                           </Form.Group>
                           {/* End of Image 3 container */}
                           {/* Video link container */}
                           <Form.Group>
                              <Form.Label>Video:</Form.Label>
                              <Form.Control
                                 type="text"
                                 name="video1Input"
                                 onChange={(evt) => setVideo1(evt.target.value)}
                                 style={{ width: 400 }}
                              />
                           </Form.Group>
                           {/* Link 1 field containeer */}
                           <Form.Group>
                              <Form.Label>Link 1: </Form.Label>
                              <Form.Control
                                 type="text"
                                 name="link1Input"
                                 placeholder="Enter Link"
                                 onChange={(evt) => setLink1(evt.target.value)}
                                 style={{ width: 400 }}
                              />

                           </Form.Group>
                           {/* End of field 1 */}
                           {/*link 2 container */}
                           <Form.Group>
                              <Form.Label>Link 2:</Form.Label>
                              <Form.Control
                                 type="text"
                                 name="link2Input"
                                 placeholder="Enter Link"
                                 onChange={(evt) => setLink2(evt.target.value)}
                                 style={{ width: 400 }}
                              />
                           </Form.Group>

                        </Card.Body>

                        {/* START OF Second Card Body */}
                        <Card.Body>
                           <br />
                           <br />
                           <br />
                           {/* Line breaks to bring the form down */}
                           {/* Container to insert Artist Name */}
                           <Form.Group>
                              <Form.Label>Artist Name: </Form.Label>
                              <Form.Control
                                 type="text"
                                 name="artistInput"
                                 placeholder="Enter Artist Name"
                                 onChange={(evt) => setArtist(evt.target.value)}
                              />
                           </Form.Group>
                           {/* End of Artist Name */}
                           {/* Contact Name container */}
                           <Form.Group>
                              <Form.Label>Contact Name: </Form.Label>
                              <Form.Control
                                 type="text"
                                 name="contactNameInput"
                                 placeholder="Enter Contact Name"
                                 onChange={(evt) => setContactName(evt.target.value)}
                              />
                           </Form.Group>
                           {/* End of Contact container */}
                           {/* Phone Container */}
                           <Form.Group>
                              <Form.Label>Phone: </Form.Label>
                              <NumberFormat
                                 type="text"
                                 name="phoneInput"
                                 placeholder="Enter Phone"
                                 className='form-control'
                                 format="(###) ###-####"
                                 mask="_"
                                 onChange={(evt) => setPhone(evt.target.value)}
                              />
                           </Form.Group>
                           {/* End of phone container */}
                           {/* Email Container */}
                           <Form.Group>
                              <Form.Label>Email:</Form.Label>
                              <Form.Control
                                 type="text"
                                 name="emailInput"
                                 placeholder="Enter Email"
                                 onChange={(evt) => setEmail(evt.target.value)}
                              />
                           </Form.Group>
                           {/* End of email container */}
                           {/* Artist Bio container */}
                           <Form.Group>
                              <Form.Label>Artist Bio:</Form.Label>
                              <Form.Control
                                 type="text"
                                 name="bioInput"
                                 placeholder="Enter Artist Bio"
                                 onChange={(evt) => setBio(evt.target.value)}
                              />
                           </Form.Group>
                           {/* End of Artist Bio container */}
                           {/* Show Description Container */}
                           <Form.Group>
                              <Form.Label for="showDescription">
                                 Description of the Show:
                           </Form.Label>
                              <textarea
                                 className="form-control"
                                 name="showDescriptionInput"
                                 placeholder="Enter Show Description"
                                 rows="6"
                                 onChange={(evt) => setDescription(evt.target.value)}
                              />
                              {/* End of Show Description Container */}
                           </Form.Group>
                        </Card.Body>
                        {/* End of Second Card Body */}
  

                        
                        <Button id="add_submit" className="w-100" type="submit" >
                           Submit
                        </Button>

                     </div>
                  </Form>
               </Card>
            </div>
         </Container>
      </div>
   );
}

//------export the component---------
export default AdminForm;
