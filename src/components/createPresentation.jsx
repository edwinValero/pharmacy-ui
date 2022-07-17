import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const yupValidation = Yup.object({
  name: Yup.string().max(255).required("Required"),
  product: Yup.string().max(255).required("Required"),
  amount: Yup.number().required("Required"),
  price: Yup.number().required("Required"),
});

// And now we can use these
export const CreatePresentation = () => {
  return (
    <>
      <h1>Crear presentacion</h1>
      <Formik
        initialValues={{
          name: "",
          amount: "",
          price: "",
          product: "",
        }}
        validationSchema={yupValidation}
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
              disabled={true}
              margin="normal"
              id="product"
              name="product"
              label="Producto"
              value={values.product}
              onChange={handleChange}
              error={touched.product && Boolean(errors.product)}
              helperText={touched.product && errors.product}
            />
            <TextField
              fullWidth
              margin="normal"
              id="name"
              name="name"
              label="Nombre de la presentacion"
              value={values.name}
              onChange={handleChange}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />

            <TextField
              fullWidth
              margin="normal"
              id="amount"
              name="amount"
              label="Cantidad"
              value={values.amount}
              onChange={handleChange}
              error={touched.amount && Boolean(errors.amount)}
              helperText={touched.amount && errors.amount}
            />

            <TextField
              fullWidth
              margin="normal"
              id="price"
              name="price"
              label="Precio"
              value={values.price}
              onChange={handleChange}
              error={touched.price && Boolean(errors.price)}
              helperText={touched.price && errors.price}
            />

            <Button
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              margin="normal"
            >
              Guardar
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
