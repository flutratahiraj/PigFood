import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../styles/CreateAccount.css";
import JoinButton from "./buttons/JoinButton";

interface CreateAccountProps {
  joinButtonProps: {
    label: string;
    onClick: () => void;
  };
}

// Valideringsschema med Yup
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Förnamn är obligatoriskt"),
  lastName: Yup.string().required("Efternamn är obligatoriskt"),
  username: Yup.string().required("Användarnamn är obligatoriskt"),
  email: Yup.string()
    .email("Ogiltig e-postadress")
    .required("E-postadress är obligatoriskt"),
  dateOfBirth: Yup.date().required("Födelsedatum är obligatoriskt"),
  phoneNumber: Yup.string().required("Telefonnummer är obligatoriskt"),
});

// Hantera formulärinsändning
const handleSubmit = async (values: any) => {
  // Skicka data till servern
  try {
    await axios.post("/http://localhost:8000/api", values);
    console.log("Konto skapat!");
  } catch (error) {
    console.error("Ett fel uppstod:", error);
  }
};

const CreateAccountForm = ({ joinButtonProps }: CreateAccountProps) => {
  return (
    // <div style={{ backgroundColor: "blue", padding: "20px" }}>
    //   <h1 style={{ color: "yellow", padding: "10px" }}>create an account</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        dateOfBirth: "",
        phoneNumber: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <label htmlFor="firstName">First name</label>
            <Field type="text" id="firstName" name="firstName" />
            <ErrorMessage name="firstName" component="div" />
          </div>

          <div>
            <label htmlFor="lastName">Last name</label>
            <Field type="text" id="lastName" name="lastName" />
            <ErrorMessage name="lastName" component="div" />
          </div>

          <div>
            <label htmlFor="username">User name</label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage name="username" component="div" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="dateOfBirth">Date of birth</label>
            <Field type="date" id="dateOfBirth" name="dateOfBirth" />
            <ErrorMessage name="dateOfBirth" component="div" />
          </div>

          <div>
            <label htmlFor="phoneNumber">Phone number (optional)</label>
            <Field type="tel" id="phoneNumber" name="phoneNumber" />
            <ErrorMessage name="phoneNumber" component="div" />
          </div>

          <div>
            <p>Already have an existing account? Click Here</p>
          </div>
          <JoinButton {...joinButtonProps} />
          {/* <button type="submit" style={{ backgroundColor: "yellow" }}>
            Confirm
          </button> */}
        </Form>
      )}
    </Formik>
    // </div>
  );
};

export default CreateAccountForm;
