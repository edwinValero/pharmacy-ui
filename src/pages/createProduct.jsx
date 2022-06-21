import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

// And now we can use these
export const CreateProduct = () => {
  return (
    <>
      <h1>Create Product</h1>
      <Formik
        initialValues={{
          name: "",
          taxes: "",
          barCode: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().max(255).required("Required"),
          taxes: Yup.number().required("Required"),
          barCode: Yup.number().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <Form>
            <TextField
              fullWidth
              margin="normal"
              id="name"
              name="name"
              label="Nombre de producto"
              value={values.name}
              onChange={handleChange}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />

            <TextField
              fullWidth
              margin="normal"
              id="taxes"
              name="taxes"
              label="IVA"
              value={values.taxes}
              onChange={handleChange}
              error={touched.taxes && Boolean(errors.taxes)}
              helperText={touched.taxes && errors.taxes}
            />

            <TextField
              fullWidth
              margin="normal"
              id="barCode"
              name="barCode"
              label="Codigo de barras"
              value={values.barCode}
              onChange={handleChange}
              error={touched.barCode && Boolean(errors.barCode)}
              helperText={touched.barCode && errors.barCode}
            />

            <Button
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              margin="normal"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

ReactDOM.render(<CreateProduct />, document.getElementById("root"));
