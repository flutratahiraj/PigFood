import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

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
  try {
    // Skicka data till servern
    await axios.post("/api/create-account", values);
    console.log("Konto skapat!");
  } catch (error) {
    console.error("Ett fel uppstod:", error);
  }
};

const CreateAccountForm = () => {
  return (
    <div style={{ backgroundColor: "blue", padding: "20px" }}>
      <h1 style={{ color: "yellow", padding: "10px" }}>Skapa konto</h1>
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
              <label htmlFor="firstName">Förnamn</label>
              <Field type="text" id="firstName" name="firstName" />
              <ErrorMessage name="firstName" component="div" />
            </div>

            <div>
              <label htmlFor="lastName">Efternamn</label>
              <Field type="text" id="lastName" name="lastName" />
              <ErrorMessage name="lastName" component="div" />
            </div>

            <div>
              <label htmlFor="username">Användarnamn</label>
              <Field type="text" id="username" name="username" />
              <ErrorMessage name="username" component="div" />
            </div>

            <div>
              <label htmlFor="email">E-postadress</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <label htmlFor="dateOfBirth">Födelsedatum</label>
              <Field type="date" id="dateOfBirth" name="dateOfBirth" />
              <ErrorMessage name="dateOfBirth" component="div" />
            </div>

            <div>
              <label htmlFor="phoneNumber">Telefonnummer</label>
              <Field type="tel" id="phoneNumber" name="phoneNumber" />
              <ErrorMessage name="phoneNumber" component="div" />
            </div>

            <div>
              <p>Redan ett befintligt konto? Klicka här</p>
            </div>

            <button type="submit" style={{ backgroundColor: "yellow" }}>
              Confirm
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateAccountForm;
