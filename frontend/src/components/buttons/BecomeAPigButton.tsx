import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../styles/BecomeAPig.css";

interface BecomeButtonProps {
  label: string;
  onClick: () => void;
}

function BecomeAPigButton({ label, onClick }: BecomeButtonProps) {
  return (
    <div className="hover">
      <Link to="/mysignupform">
        <Button variant="become" onClick={onClick}>
          {label}
        </Button>
      </Link>
    </div>
  );
}

export default BecomeAPigButton;
