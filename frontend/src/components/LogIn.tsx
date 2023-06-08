import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, ErrorMessage } from "formik";
import axios from "axios";
import LoginButton from "./buttons/LogInButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/LogIn.css";
import { useAuth } from "./AuthContext";
const LogIn = () => {
  const { toggleLogin } = useAuth();
  const [loggedIn, setloggedIn] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async (values: {
    userName: string;
    passWord: string;
  }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        values
      );
      const { data } = response;
      console.log(data);
      if (data.message === "Login successful") {
        toggleLogin();
        console.log(toggleLogin());
        toast.success("Login successful", {
          autoClose: 500, // Notisen stängs efter 3 sekunder
        });
        setloggedIn(!loggedIn);
        setTimeout(() => {
          navigate("/homepage");
        }, 2000); // Fördröjning på 3 sekunder innan omdirigering till homepage
        // console.log("Login successful!");
        // navigate("/homepage");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="custom-form-container">
      <h1 className="login-header">Log in</h1>
      <Formik
        initialValues={{ userName: "", passWord: "" }}
        onSubmit={handleLogin}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
              <Field
                className="login-input form-control"
                type="text"
                name="userName"
                placeholder="Username"
              />
              <ErrorMessage
                name="userName"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <Field
                className="login-input form-control"
                type="password"
                name="passWord"
                placeholder="Password"
              />

              <ErrorMessage
                name="passWord"
                component="div"
                className="error-message"
              />
            </div>

            <p className="sign-up">
              Don’t have an account? Sign up{" "}
              <a className="here-link" href="/createaccount">
                Here
              </a>
            </p>
            {/* type="submit" */}
            <LoginButton />
            <ToastContainer
              className="foo"
              style={{
                width: "20rem",
                height: "10rem",
                fontSize: "1rem",
                margin: "1.5rem 1rem 3rem 2rem",
                padding: "1rem",
                textAlign: "center",
                lineHeight: "1.5",
                fontStyle: "italic",
                fontFamily: "Arial, sans-serif",
              }}
              position="bottom-right"
              hideProgressBar={true}
              closeOnClick
              icon={false}
            />
            {error && <div className="error-message">{error}</div>}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LogIn;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Form from "react-bootstrap/Form";
// import axios from "axios";
// import LoginButton from "./buttons/LogInButton";
// import "../styles/LogIn.css";

// const LogIn = () => {
//   const navigate = useNavigate();
//   const [userName, setUserName] = useState("");
//   const [passWord, setPassWord] = useState("");
//   const [error, setError] = useState("");

//   // const validationSchema = Yup.object().shape({
//   //   userName: Yup.string().required("Username is required"),
//   //   passWord: Yup.string().required("Password is required"),
//   // });

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("/api/login", { userName, passWord });
//       console.log("Login successful!");
//       navigate("/homepage");
//     } catch (error) {
//       console.error("An error occurred:", error);
//     }
//   };

//   return (
//     <div className="custom-form-container">
//       <h1 className="login-header">Log in</h1>
//       <Form.Group className="form-container">
//         <Form.Control
//           className="login-input"
//           type="password"
//           placeholder="Username"
//           value={userName}
//           onChange={(e) => setUserName(e.target.value)}
//         />

//         <Form.Control
//           className="login-input"
//           type="password"
//           placeholder="Password"
//           value={passWord}
//           onChange={(e) => setPassWord(e.target.value)}
//         />

//         <p className="sign-up">
//           Don’t have an account? Sign up{" "}
//           <a className="here-link" href="/createaccount">
//             Here
//           </a>
//         </p>
//         <LoginButton />
//       </Form.Group>
//     </div>
//   );
// };

// export default LogIn;

// import { useState } from "react";
// import Form from "react-bootstrap/Form";
// import LoginButton from "./buttons/LogInButton";
// import "../styles/LogIn.css";

// const LogIn = () => {
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
//           Don’t have an account? Sign up{" "}
//           <a className="here-link" href="/createaccount">
//             Here
//           </a>
//         </p>
//         <LoginButton />
//       </Form.Group>
//     </div>
//   );
// };

// export default LogIn;
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
