import React, { useState } from "react";
import { Button } from "react-bootstrap";
// get the database
import { firestore } from "../firebase/firebase";
import AllShows from "./AllShows";
import AllProposals from "./AllProposals";
import AddShow from "./AddShow";
import "../formcss/dashBoard.css";

function Dashboard() {
  const [toggle, setToggle] = useState("shows");

  function editShow() {
    setToggle("shows");
  }

  function editProposal() {
    setToggle("proposals");
  }

  function addShow() {
    setToggle("add");
  }

  return (
    <div className="dash_board">
      <h2>Admin Dashboard</h2>
      <div className="dash_buttons">
        <div>
          <Button id="dash_button" onClick={editProposal} type="submit">
            Proposals
          </Button>

          <Button id="dash_button" onClick={editShow} type="submit">
            Shows
          </Button>

          <Button id="dash_button" onClick={addShow} type="submit">
            Add a Show
          </Button>
        </div>
        <hr />
        <div>
          {toggle === "add" ? (
            <AddShow />
          ) : toggle === "shows" ? (
            <AllShows />
          ) : (
            <AllProposals />
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
