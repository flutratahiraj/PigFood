import React from "react";
import Button from "react-bootstrap/Button";
import "../../styles/ConfirmPigButton.css";

function ConfirmPigButton() {
  return (
    <div className="hover">
      <Button type="submit" variant="confirm">
        Confirm to shrimp wizard
      </Button>
    </div>
  );
}

export default ConfirmPigButton;
