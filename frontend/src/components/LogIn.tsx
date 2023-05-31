import { useState } from "react";
import Form from "react-bootstrap/Form";
import LoginButton from "./buttons/LogInButton";
import "../styles/LogIn.css";

interface LogInProps {
  LogInButtonProps: {
    label: string;
    onClick: () => void;
  };
}

const LogIn = ({ LogInButtonProps }: LogInProps) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="custom-form-container">
      <h1 className="login-header">Log in</h1>
      <Form.Group className="form-container">
        <Form.Control
          className="login-input"
          type="email"
          placeholder="Username"
        />
        <Form.Label htmlFor="floatingInputCustom"></Form.Label>

        <Form.Control
          className="login-input"
          type="password"
          placeholder="Password"
        />
        <Form.Label htmlFor="floatingPasswordCustom"></Form.Label>

        <p className="sign-up">
          Don’t have an account? Sign up{" "}
          <a className="here-link" href="/createaccount">
            Here
          </a>
        </p>
        <LoginButton {...LogInButtonProps} />
      </Form.Group>
    </div>
  );
};

export default LogIn;
// import { useState } from "react";
// import Form from "react-bootstrap/Form";
// import LoginButton from "./buttons/LogInButton";
// import "../styles/LogIn.css";

// interface LogInProps {
//   LogInButtonProps: {
//     label: string;
//     onClick: () => void;
//   };
// }

// const LogIn = ({ LogInButtonProps }: LogInProps) => {
//   const [isOpen, setOpen] = useState(false);
//   return (
//     <div className="custom-form-container">
//       <h1 className="login-header">Log in</h1>
//       <Form.Group className="form-container">
//         <Form.Control
//           className="login-input"
//           type="email"
//           placeholder="Username"
//         />
//         <Form.Label htmlFor="floatingInputCustom"></Form.Label>

//         <Form.Control
//           className="login-input"
//           type="password"
//           placeholder="Password"
//         />
//         <Form.Label htmlFor="floatingPasswordCustom"></Form.Label>

//         <p className="sign-up">
//           Don’t have an account? Sign up
//           <a className="here-link" href="/createaccount">
//             Here
//           </a>
//         </p>
//         <LoginButton {...LogInButtonProps} />
//       </Form.Group>
//     </div>
//   );
// };

// export default LogIn;
// import React, { useState, ChangeEvent, FormEvent } from "react";
// import "../styles/LogIn.css";

// function LoginForm() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     // Här kan du lägga till logik för att hantera inloggningen
//     console.log("Submitted:", username, password);
//   };

//   return (
//     <div className="layout-container">
//       <div className="form-container">
//         <h1 className="heading">Login</h1>
//         <form className="form" onSubmit={handleSubmit}>
//           <div className="input-container">
//             <label htmlFor="username" className="input-label">
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={handleUsernameChange}
//               className="input-field"
//               placeholder="Enter your username"
//             />
//           </div>

//           <div className="input-container">
//             <label htmlFor="password" className="input-label">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={handlePasswordChange}
//               className="input-field"
//               placeholder="Enter your password"
//             />
//           </div>

//           <p className="text-link">
//             Don't have an account? <a href="#">Sign up</a>
//           </p>

//           <div className="button">
//             <button type="submit" className="button-text">
//               Sign in
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;

// import Form from "react-bootstrap/Form";

// function LogIn() {
//   return (
//     <>
//       <h1>Log in</h1>
//       <Form.Floating className="mb-3">
//         <Form.Control
//           id="floatingInputCustom"
//           type="email"
//           placeholder="name@example.com"
//         />
//         <label htmlFor="floatingInputCustom">Username</label>
//       </Form.Floating>
//       <Form.Floating>
//         <Form.Control
//           id="floatingPasswordCustom"
//           type="password"
//           placeholder="Password"
//         />
//         <label htmlFor="floatingPasswordCustom">Password</label>
//       </Form.Floating>
//       <p>Dont have an account? Sign up</p>
//       <p>
//         <a href="/createaccount">Here</a>
//       </p>
//     </>
//   );
// }

// export default LogIn;
