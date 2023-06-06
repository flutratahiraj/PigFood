// import React from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import ConfirmPigButton from "./buttons/ConfirmPigButton";
import "../styles/CreateAccount.css";

// Valideringsschema med Yup
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  userName: Yup.string().required("Username name is required"),
  passWord: Yup.string().required("Password is required"),
  //changed to password, number??
  // email: Yup.string()
  //   .email("Ogiltig e-postadress")
  //   .required("E-postadress är obligatoriskt"),
  dateOfBirth: Yup.date().required("Date of birth is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  checkBox: Yup.string().required("Checkbox is required"),
});

const CreateAccount = () => {
  const navigate = useNavigate();
  const [termsChecked, setTermsChecked] = useState(false);
  const [dataHandlingChecked, setDataHandlingChecked] = useState(false);

  // Hantera formulärinsändning

  const HandleAccount = async (values: {
    firstName: string;
    lastName: string;
    userName: string;
    passWord: string;
  }) => {
    console.log("test");
    try {
      //sparas i response
      const response = await axios.post(
        "http://localhost:8000/api/createaccount",
        {
          firstName: values.firstName,
          lastName: values.lastName,
          userName: values.userName,
          passWord: values.passWord,
        }
      );
      const { data } = response;

      if (data.message === "Account created successfully") {
        console.log("Account created!");
        navigate("/homepage");
      } else {
        console.error("Error creating account");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  //gammal kod
  //   await axios.post("/http://localhost:8000/api", values);
  //   console.log("Account is created!");
  // } catch (error) {
  //   console.error("Ett fel uppstod:", error);
  // }

  //   navigate("/homepage");
  // };
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        userName: "",
        passWord: "",
        dateOfBirth: "",
        phoneNumber: "",
        checkBox: false,
      }}
      validationSchema={validationSchema}
      onSubmit={HandleAccount}
    >
      {({ errors, touched }) => (
        <Form className="create-container">
          <img
            id="cross-down"
            className="close-down"
            alt="closedown"
            src="CloseDown.svg"
          />
          <h1 className="create-header">Creat account</h1>

          <div className="create-interaction">
            <div>
              <label className="create-label" htmlFor="firstName">
                First name
              </label>
              <Field
                className="create-Field"
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Sebastian"
              />
              <ErrorMessage name="firstName" component="div" />
            </div>
            <div>
              <label className="create-label" htmlFor="lastName">
                Last name
              </label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Murphy"
              />
              <ErrorMessage name="lastName" component="div" />
            </div>

            <div>
              <label className="create-label" htmlFor="userName">
                Username
              </label>
              <Field
                type="text"
                id="userName"
                name="userName"
                placeholder="Pigfart69"
              />
              <ErrorMessage name="userName" component="div" />
            </div>

            <div>
              <label className="create-label" htmlFor="passWord">
                Password
              </label>
              <Field
                type="passWord"
                id="password"
                name="passWord"
                placeholder="******"
              />
              <ErrorMessage name="passWord" component="div" />
            </div>

            <div>
              <label className="create-label" htmlFor="dateOfBirth">
                Date of birth
              </label>
              <Field
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                placeholder="YYYY-MM-DD"
              />
              <ErrorMessage name="dateOfBirth" component="div" />
            </div>

            <div>
              <label className="create-label" htmlFor="phoneNumber">
                Phone number (optional)
              </label>
              <Field
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="(+46)070-6167536"
              />
              <ErrorMessage name="phoneNumber" component="div" />
            </div>
            <div className="create-checkbox-container">
              <p className="create-checkbox">
                <label htmlFor="termsCheckbox">
                  Agree to our <a>terms & conditions</a>{" "}
                  <input
                    id="termsCheckbox"
                    type="checkbox"
                    checked={termsChecked}
                    onChange={() => setTermsChecked(!termsChecked)}
                  />
                </label>
              </p>
              <p className="create-checkbox">
                <label htmlFor="dataHandlingCheckbox">
                  Agree on how we handle your data{" "}
                  <input
                    id="dataHandlingCheckbox"
                    type="checkbox"
                    checked={dataHandlingChecked}
                    onChange={() =>
                      setDataHandlingChecked(!dataHandlingChecked)
                    }
                  />
                </label>
              </p>
              {/* <div className="create-checkbox-container"> */}
              {/* Shortend original text to fit mob*/}
              {/* <p className="create-checkbox"> */}
              {/* Check this box to  */}
              {/* Agree to our<a> terms & conditons</a>{" "}
                <img
                  // name="checkBox"
                  id="check-down"
                  className="check-cross"
                  src="/CheckBox.svg"
                  alt="checkbox"
                />
              </p> */}
              {/* Shortend original text to fit mob*/}
              {/* <p className="create-checkbox">
                Agree on how we handle your data{" "}
                <img
                  id="check-down"
                  className="check-cross"
                  src="/CheckBox.svg"
                  alt="checkbox"
                />
              </p> */}

              <ConfirmPigButton />
            </div>
            <p className="create-to-login">
              Already have an existing account? Click{" "}
              <a className="creatlogin-link">Here</a>
            </p>
          </div>
        </Form>
      )}
    </Formik>
    // </div>
  );
};

export default CreateAccount;
