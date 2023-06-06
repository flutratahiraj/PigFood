import React from "react";
import Button from "react-bootstrap/Button";
import "../../styles/LogInButton.css";

function LogInButton() {
  return (
    <div className="hover">
      <Button type="submit" variant="login">
        Log in
      </Button>
    </div>
  );
}

export default LogInButton;
