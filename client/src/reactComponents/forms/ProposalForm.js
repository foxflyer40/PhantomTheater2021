import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { firestore } from "../firebase/firebase";

function ProposalForm() {
//   let [title, setTitle] = useState("");
  let [artist, setArtist] = useState("");
  let [description, setDescription] = useState("");
//   let [contactName, setContactName] = useState("");
  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");

  //do we still want two separate collections
  let showProposal = {
   //  title: title,
    status: "proposal",
    description: description,
    artist: artist,
   //  contactName: contactName,
    phone: phone,
    email: email,
  };

  async function submitProposal(event) {
    event.preventDefault();
    console.log(showProposal)
    firestore.collection("shows").doc().set(showProposal);
    //clears out form upon submission
   //  event.target.title.value = "";
    event.target.artist.value = "";
    event.target.description.value = "";
   //  event.target.contactName.value = "";
    event.target.phone.value = "";
    event.target.email.value = "";
  }

  return (
    <Container
      className="d-flex align-items center justify-content-center mt-5"
      style={{ minHeight: "80vh" }}
    >
      <div className="w-100" style={{ maxWidth: "420px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-2">Show Proposal Form</h2>
            <br />

            <Form id="ArtistForm" onSubmit={submitProposal}>
              {/* <Form.Group id="artName">
                <Form.Label>Title?:</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  onChange={(evt) => setTitle(evt.target.value)}
                />
              </Form.Group> */}
              <Form.Group id="artName">
                <Form.Label>Artist Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="artist"
                  onChange={(evt) => setArtist(evt.target.value)}
                />
              </Form.Group>
              {/* <Form.Group id="contactName">
                <Form.Label>Contact Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="contactName"
                  onChange={(evt) => setContactName(evt.target.value)}
                />
              </Form.Group> */}
              <Form.Group id="contactPhone">
                <Form.Label>Contact Phone:</Form.Label>
                <Form.Control
                  type="phone"
                  name="phone"
                  onChange={(evt) => setPhone(evt.target.value)}
                />
              </Form.Group>
              <Form.Group id="contactEmail">
                <Form.Label>Contact Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={(evt) => setEmail(evt.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label for="bio">
                  Brief description of your act:
                </Form.Label>
                <textarea
                  className="form-control"
                  name="description"
                  rows="6"
                  onChange={(evt) => setDescription(evt.target.value)}
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
  );
}

export default ProposalForm;
