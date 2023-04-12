import { Formik } from "formik";
import React from "react";
import "./Login.scss";
import { Button, TextField } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [passwordErr, setPasswordErr] = React.useState([]);
  return (
    <>
      <main className="login">
      <Formik
          initialValues={{ username: "" ,email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              
              if (!values.password) {
                errors.password = "Required";
              } else {
              if (values.password.length < 8) {
                errors.password = "Password must be at least 8 characters";
              } 
              if(!/[A-Z]/.test(values.password)){
                errors.password = "Password must contain at least 1 uppercase letter";
              }
              if(!/[a-z]/.test(values.password)){
                errors.password = "Password must contain at least 1 lowercase letter";
              }
              if(!/[0-9]/.test(values.password)){
                errors.password = "Password must contain at least 1 number";
              }
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            // console.log(`/success/${values.username}`);
            navigate('/success/' + values.username, { replace: true });

          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form className="login__form" onSubmit={handleSubmit}>
              <h1>Login</h1>
              <TextField
                className="login__form--input"
                label="username"
                variant="outlined"
                type="text"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                />
                <TextField
                  className="login__form--input"
                  label="Email"
                  variant="outlined"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  />
              {errors.email && touched.email && <p className="login__error-message">{errors.email}</p>}
              <TextField
                className="login__form--input"
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                onChange={(e) => {
                  handleChange(e);
                  setPasswordErr([]);
                }}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && <p className="login__error-message">{errors.password}</p>}
              <div>
                {passwordErr.map((err, index) => (
                  <p key={index}>{err}</p>
                ))}
              </div>
              <Button
                className="login__form--button btn btn-primary"
                variant="contained"
                type="submit"
                disabled={isSubmitting}
              > 
                Submit
              </Button>
            </form>
          )}
        </Formik>
      </main>
    </>
  );
};

export default Login;
