import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../styles/JoinButton.css";

interface JoinButtonProps {
  label: string;
  onClick: () => void;
}

function JoinButton({ label, onClick }: JoinButtonProps) {
  return (
    <div className="hover">
      <Link to="/mysignupform">
        <Button variant="join" onClick={onClick}>
          {label}
        </Button>
      </Link>
    </div>
  );
}

export default JoinButton;

// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";

// interface JoinButtonProps {
//   label: string;
//   onClick: () => void;
// }

// const JoinButton: React.ComponentType<JoinButtonProps> = ({
//   label,
//   onClick,
// }) => {
//   return (
//     <Link to="/">
//       <Button
//         // variant="secondary"
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "center",
//           alignItems: "center;",
//           padding: "16px 22px",
//           gap: "8px",

//           width: "161px",
//           height: "50px",
//           background: "#F7F800",
//           borderRadius: "6px",
//           flex: "none",
//           order: "2",
//           flexGrow: "0",
//           zIndex: "2",
//         }}
//         onClick={onClick}
//       >
//         <span
//           style={{
//             width: "113px",
//             height: "18px",
//             fontFamily: "Clash Grotesk",
//             fontStyle: "normal",
//             fontWeight: 600,
//             fontSize: "16px",
//             lineHeight: "18px",
//             // padding: "8px 20px",
//             color: "#094EC7",
//             transition: "color 0.3s, background 0.3s",
//             textDecoration: "none",
//           }}
//         >
//           {label}
//         </span>
//       </Button>
//     </Link>
//   );
// };

// export default JoinButton;
// function JoinButton() {
//   return (
//     <>
//       <Button href="#">Join the pigsty</Button>
//       <Button type="submit">Button</Button>
//       <Button as="input" type="button" value="Input" />
//       <Button as="input" type="submit" value="Submit" />
//       <Button as="input" type="reset" value="Reset" />
//     </>
//   );
// }

// export default JoinButton;
