import React from "react";
import { Container, Card, Button, Form } from "react-bootstrap";
import "./Reserve.css";
import NumberFormat from "react-number-format";

function Reserve() {
  return (
    <div className="reserve_seat">
      <Container
        className="d-flex align-items center justify-content-center"
        style={{ minHeight: "80vh" }}
      >
        <div className="w-100" style={{ maxWidth: "420px" }}>
          <Card className="card-body">
            <Card.Body>
              <h2 className="text-center mb-2">Reserve a Seat</h2>
              <br />
              <Form id="reserveForm">
                {/* first name input */}
                <Form.Group className="name">
                  <Form.Label for="fullName">First Name:</Form.Label>
                  <Form.Control
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                  ></Form.Control>
                </Form.Group>
                {/* last name input */}
                <Form.Group className="name">
                  <Form.Label for="fullName">Last Name:</Form.Label>
                  <Form.Control
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                  ></Form.Control>
                </Form.Group>
                {/* phone input */}
                <Form.Group>
                  <Form.Label>Phone Number:</Form.Label>
                  <NumberFormat
                    className="form-control"
                    mask="_"
                    format="(###) ###-####"
                    type="text"
                    id="phone"
                    placeholder="Phone Number"
                  ></NumberFormat>
                </Form.Group>
                {/* email input */}
                <Form.Group className="name">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="text"
                    id="email"
                    placeholder="Email Address"
                  ></Form.Control>
                </Form.Group>
                {/* show select dropdown */}
                <Form.Group className="name">
                  <Form.Label>Show:</Form.Label>
                  <select className="form-control" id="show" name="show">
                    <option defaultValue>Select a Show</option>
                    <option>New Works</option>
                    <option>Every Brilliant Thing</option>
                    <option>Orlagh Cassidy</option>
                  </select>
                </Form.Group>
                {/* ticket # select dropdown */}
                <Form.Group className="name">
                  <Form.Label>Tickets:</Form.Label>
                  <select
                    className="form-control"
                    type="text"
                    id="tixNum"
                    placeholder="First Name"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </Form.Group>
                {/* additional assistance field */}
                <Form.Group>
                  <Form.Label>
                    If you require additional assistance, please tell us so:{" "}
                  </Form.Label>
                  <textarea
                    className="form-control mb-5"
                    id="addtlInfo"
                    name=""
                     placeholder="Do you require additional assistance?"
                    rows="4"
                  />
                </Form.Group>
                <Button
                  id="reserve_button"
                  className="w-100 mt-t"
                  type="submit"
                >
                  Reserve Now
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default Reserve;
