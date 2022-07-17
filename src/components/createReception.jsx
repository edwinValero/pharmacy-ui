import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { EditPresentation } from "./editPresentation";
import { Box } from "@mui/system";
import { Divider, Grid } from "@mui/material";

const yupValidation = Yup.object({
  name: Yup.string().max(255).required("Required"),
  product: Yup.string().max(255).required("Required"),
  amount: Yup.number().required("Required"),
  price: Yup.number().required("Required"),
});

function createPresentations(price1, price2, price3) {
  return [
    {
      presentation: "Unidad",
      amount: 1,
      price: price1,
    },
    {
      presentation: "Sobre",
      amount: 10,
      price: price2,
    },
    {
      presentation: "Caja",
      amount: 50,
      price: price3,
    },
  ];
}

// And now we can use these
export const CreateReception = () => {
  return (
    <Box>
      <h1>Recepcion producto</h1>

      <Box sx={{ flexGrow: 1, gap: 4 }}>
        <Grid container spacing={2}>
          <Grid Paper xs={1}></Grid>
          <Grid Paper xs={5}>
            <TextField
              fullWidth
              id="product-name"
              label="Nombre de producto"
              disabled={true}
              sx={{ m: 2 }}
              variant="outlined"
            />
            <TextField
              fullWidth
              id="tax"
              label="% IVA"
              disabled={true}
              sx={{ m: 2 }}
              variant="outlined"
            />
          </Grid>
          <Grid Paper xs={1}></Grid>
          <Grid Paper xs={5}>
            <TextField
              fullWidth
              id="bar-code"
              label="Codigo de barras"
              disabled={true}
              sx={{ m: 2 }}
              variant="outlined"
            />
            <TextField
              fullWidth
              id="stock"
              label="Existencia actual"
              disabled={true}
              sx={{ m: 2 }}
              variant="outlined"
            />
          </Grid>
          <Grid Paper xs={1}></Grid>
          <Grid Paper xs={10}>
            <EditPresentation
              pres={createPresentations(100, 500, 1500)}
            ></EditPresentation>
          </Grid>
          <Grid Paper xs={1}></Grid>
        </Grid>
      </Box>

      <Divider sx={{ mt: 8, mb: 8 }} variant="middle" />

      <Box sx={{ flexGrow: 1, gap: 4 }}>
        <Grid container spacing={2}>
          <Grid Paper xs={6}>
            <Formik
              initialValues={{
                taxPrice: "",
                tax: "",
                withOutTax: "",
                amount: "",
                provider: "",
                billNumber: "",
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
                  <h2>Factura actual</h2>
                  <TextField
                    fullWidth
                    margin="normal"
                    id="taxPrice"
                    name="taxPrice"
                    label="Precion con IVA"
                    value={values.taxPrice}
                    onChange={handleChange}
                    error={touched.taxPrice && Boolean(errors.taxPrice)}
                    helperText={touched.taxPrice && errors.taxPrice}
                  />
                  <TextField
                    fullWidth
                    margin="normal"
                    id="tax"
                    name="tax"
                    label="Valor del IVA"
                    value={values.tax}
                    onChange={handleChange}
                    error={touched.tax && Boolean(errors.tax)}
                    helperText={touched.tax && errors.tax}
                  />

                  <TextField
                    fullWidth
                    margin="normal"
                    id="withOutTax"
                    name="withOutTax"
                    label="Precio sin IVA"
                    value={values.withOutTax}
                    onChange={handleChange}
                    error={touched.withOutTax && Boolean(errors.withOutTax)}
                    helperText={touched.withOutTax && errors.withOutTax}
                  />

                  <TextField
                    fullWidth
                    margin="normal"
                    id="amount"
                    name="amount"
                    label="Cantidad en unidades"
                    value={values.amount}
                    onChange={handleChange}
                    error={touched.amount && Boolean(errors.amount)}
                    helperText={touched.amount && errors.amount}
                  />

                  <TextField
                    fullWidth
                    margin="normal"
                    id="provider"
                    name="provider"
                    label="Proveedir"
                    value={values.provider}
                    onChange={handleChange}
                    error={touched.provider && Boolean(errors.provider)}
                    helperText={touched.provider && errors.provider}
                  />
                  <TextField
                    fullWidth
                    margin="normal"
                    id="billNumber"
                    name="billNumber"
                    label="Factura numero"
                    value={values.billNumber}
                    onChange={handleChange}
                    error={touched.billNumber && Boolean(errors.billNumber)}
                    helperText={touched.billNumber && errors.billNumber}
                  />

                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    margin="normal"
                    sx={{ width: 1 / 3, mt: 4 }}
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </Grid>
          <Grid Paper xs={1} />
          <Grid Paper xs={4}>
            <h2>Ultima factura</h2>
            <TextField
              fullWidth
              disabled={true}
              margin="normal"
              id="taxPrice"
              name="taxPrice"
              label="Precion con IVA"
            />
            <TextField
              fullWidth
              disabled={true}
              margin="normal"
              id="tax"
              name="tax"
              label="Valor del IVA"
            />

            <TextField
              fullWidth
              disabled={true}
              margin="normal"
              id="withOutTax"
              name="withOutTax"
              label="Precio sin IVA"
            />

            <TextField
              fullWidth
              disabled={true}
              margin="normal"
              id="amount"
              name="amount"
              label="Cantidad en unidades"
            />

            <TextField
              fullWidth
              disabled={true}
              margin="normal"
              id="provider"
              name="provider"
              label="Proveedir"
            />
            <TextField
              fullWidth
              disabled={true}
              margin="normal"
              id="billNumber"
              name="billNumber"
              label="Factura numero"
            />
          </Grid>
          <Grid Paper xs={1} />
        </Grid>
      </Box>
    </Box>
  );
};
