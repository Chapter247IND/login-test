import { Field } from 'formik';
import { Form } from "react-bootstrap";

const FormInput = ({
  type, 
  placeholder, 
  name, 
  values, 
  handleChange, 
  id, 
  label, 
  errors,
  field,
  form,
  ...props
}) => {
  return (
    <Form.Group className="mb-3" controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Field name={name}>
        {({
          field,
          meta,
        }) => (
          <>
            <Form.Control type={type} placeholder={placeholder} {...field}  />
            {meta.touched && meta.error && (
              <div className="text-danger">{meta.error}</div>
            )}
          </>
        )}
        </Field> 
    </Form.Group>
  )
}




export default FormInput;