import { Form as NativeForm, Formik } from "formik";
import React from "react";

/**
 * @description: This component is resuable form component that can be used to create forms.
 * @param {function} onSubmit - This function is called when the form is submitted.
 * @param {object} initialValues - This object contains the initial values of the form.
 * @param {object} validationSchema - This object contains the validation schema for the form.
 * @param {JSX} children - This is the children of the form.
 * @returns {JSX} JSX for Form component
 */

const Form = ({
  onSubmit,
  initialValues = {},
  validationSchema,
  children,
  ...props
}) => {
  return (
    <Formik
      onSubmit={onSubmit} 
      initialValues={initialValues}
      validationSchema={validationSchema}
      enableReinitialize
      {...props}
    >
      <NativeForm  >
        {children}
      </NativeForm>
    </Formik>
  );
};

export default Form;