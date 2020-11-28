//----------------imports----------------//

import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { firestore } from "../firebase/firebase";
import { useHistory } from 'react-router-dom'
import "../formcss/proposal.css"
import NumberFormat from 'react-number-format'

function ProposalForm() {
  //hook set-up
  const history = useHistory()
  let [artist, setArtist] = useState("");
  let [description, setDescription] = useState("");
  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");

  //do we still want two separate collections??


  async function submitProposal(event) {
    event.preventDefault();

    let showProposal = {
      status: "Proposal",
      title: "Enter Title",
      type: "Enter Type",
      blurb: "Enter blurb",
      description: description,
      artist: artist,
      phone: phone,
      email: email,
    };

    //fetch for sending e-mail notification when form is submitted
    fetch('/send', {
      method: 'POST',
      body: JSON.stringify(showProposal),
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
      },
    }).then((response) => response.json())
      .then((response) => {
        console.log(response.message)
      })

    console.log(showProposal)
    firestore.collection("shows").doc().set(showProposal);

    //clears out form upon submission
    event.target.artist.value = "";
    event.target.description.value = "";
    event.target.phone.value = "";
    event.target.email.value = "";
    alert(`Thank you ${artist}, for submitting your proposal.`)
    history.push('/')
  }

  return (
    <div className="proposal_container">
      <Container
        className="d-flex align-items center justify-content-center mt-5"
        style={{ minHeight: "80vh" }}
      >
        <div className="w-100" style={{ maxWidth: "420px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-2">Show Proposal Form</h2>
              <br />

              <Form id="ArtistForm" onSubmit={submitProposal} method="POST">
                <Form.Group id="artName">
                  <Form.Label>Artist Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="artist"
                    onChange={(evt) => setArtist(evt.target.value)}
                  />
                </Form.Group>
                <Form.Group id="contactPhone">
                  <Form.Label>Contact Phone:</Form.Label>
                  <NumberFormat
                    format="(###) ###-####"
                    mask="_"
                    className="form-control"
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
                <Button id="submit_button" className="w-100" type="submit">
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

export default ProposalForm;
