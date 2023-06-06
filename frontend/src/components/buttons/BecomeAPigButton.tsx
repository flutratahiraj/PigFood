import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../styles/BecomeAPig.css";

function BecomeAPigButton() {
  const navigate = useNavigate();

  return (
    <div className="hover">
      <Button onClick={() => navigate("/createaccount")} variant="become">
        Become a pig!
      </Button>
    </div>
  );
}

export default BecomeAPigButton;
