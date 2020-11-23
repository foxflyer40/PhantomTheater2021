import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { firestore } from "../firebase/firebase";

function ArtistForm() {
  // create state for each artist field
  let [displayName, setDisplayName] = useState("");
  let [contactName, setContactName] = useState("");
  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");
  let [bio, setBio] = useState("");
  let [date, setDate] = useState("");

  // create artist object from state
  let artist = {
    displayName: displayName,
    contactName: contactName,
    phone: phone,
    email: email,
    bio: bio,
    date: new Date(date).toLocaleDateString(),
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
    event.target.dateInput.value = "";
  }

  return (
    <div>
      <Container
        className="d-flex align-items center justify-content-center mt-5"
        style={{ minHeight: "80vh" }}
      >
        <div className="w-100" style={{ maxWidth: "420px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-2">Artist Submission Form</h2>
              <br />

              <Form id="ArtistForm" onSubmit={enterNewArtist}>
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
                <Form.Group>
                  <Form.Label for="bio">Bio:</Form.Label>
                  <textarea
                    className="form-control"
                    name="bioInput"
                    rows="6"
                    onChange={(evt) => setBio(evt.target.value)}
                  />
                </Form.Group>
                <Form.Group id="date">
                  <Form.Label>Date:</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    name="dateInput"
                    onChange={(evt) => setDate(evt.target.value)}
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
