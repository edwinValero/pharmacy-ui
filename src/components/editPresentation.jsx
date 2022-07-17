import React from "react";
import { Formik, Form, FieldArray, getIn } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button } from "@mui/material";
import FormRow from "./FormRow";

const ERROR_NUMBER = "Debe ser un número!";
const REQUIRED = "Requerido!";

const presentationSchema = Yup.object().shape({
  presentation: Yup.string().max(255).required(REQUIRED),
  amount: Yup.number().typeError(ERROR_NUMBER).required(REQUIRED),
  price: Yup.number().typeError(ERROR_NUMBER).required(REQUIRED),
});

const yupPresentationValidation = Yup.array()
  .of(presentationSchema)
  .min(1, "Minimo una presentación")
  .required("Debes tener presentaciones");

const yupValidation = Yup.object({
  presentations: yupPresentationValidation,
});

// And now we can use these
export const EditPresentation = (props) => {
  const { pres } = props;

  return (
    <>
      <Formik
        initialValues={{
          presentations: pres,
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
            <h3>Presentaciones</h3>
            <FieldArray
              name="presentations"
              error={touched.presentations && Boolean(errors.presentations)}
              helperText={touched.presentations && errors.presentations}
              render={(arrayHelpers) => {
                return (
                  <div>
                    <IconButton
                      onClick={() =>
                        arrayHelpers.push({
                          presentation: "",
                          amount: "",
                          price: "",
                        })
                      }
                    >
                      <AddCircleIcon color="secondary" />
                    </IconButton>
                    {values.presentations.map((item, index) => (
                      <FormRow key={index}>
                        {/** both these conventions do the same */}
                        <TextField
                          sx={{ width: 1 / 3, mr: 1 }}
                          margin="normal"
                          id="presentation"
                          name={`presentations[${index}].presentation`}
                          label="Nombre"
                          value={values.presentations[index].presentation}
                          onChange={handleChange}
                          error={
                            getIn(
                              touched,
                              `presentations[${index}].presentation`
                            ) &&
                            Boolean(
                              getIn(
                                errors,
                                `presentations[${index}].presentation`
                              )
                            )
                          }
                          helperText={
                            getIn(
                              touched,
                              `presentations[${index}].presentation`
                            ) &&
                            getIn(
                              errors,
                              `presentations[${index}].presentation`
                            )
                          }
                        />

                        <TextField
                          sx={{ width: 1 / 5, mr: 1 }}
                          margin="normal"
                          id="amount"
                          name={`presentations[${index}].amount`}
                          label="Cantidad"
                          value={values.presentations[index].amount}
                          onChange={handleChange}
                          error={
                            getIn(touched, `presentations[${index}].amount`) &&
                            Boolean(
                              getIn(errors, `presentations[${index}].amount`)
                            )
                          }
                          helperText={
                            getIn(touched, `presentations[${index}].amount`) &&
                            getIn(errors, `presentations[${index}].amount`)
                          }
                        />

                        <TextField
                          sx={{ width: 1 / 5, mr: 1 }}
                          margin="normal"
                          id="price"
                          name={`presentations[${index}].price`}
                          label="Precio de venta"
                          value={values.presentations[index].price}
                          onChange={handleChange}
                          error={
                            getIn(touched, `presentations[${index}].price`) &&
                            Boolean(
                              getIn(errors, `presentations[${index}].price`)
                            )
                          }
                          helperText={
                            getIn(touched, `presentations[${index}].price`) &&
                            getIn(errors, `presentations[${index}].price`)
                          }
                        />
                        <IconButton onClick={() => arrayHelpers.remove(index)}>
                          <DeleteIcon color="secondary" />
                        </IconButton>
                      </FormRow>
                    ))}
                  </div>
                );
              }}
            />
            <Button
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              margin="normal"
              sx={{ width: 1 / 3, mt: 4 }}
            >
              Guardar
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
