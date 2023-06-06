import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../styles/LogInButton.css";

interface LoginButtonProps {
  label: string;
  onClick: () => void;
}

function LogInButton({ label, onClick }: LoginButtonProps) {
  return (
    <div className="hover">
      <Link to="/homepage">
        <Button variant="join" onClick={onClick}>
          {label}
        </Button>
      </Link>
    </div>
  );
}

export default LogInButton;
