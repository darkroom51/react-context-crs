export default function validateAuth(values) {
  let errors = {};
  // Email Errors
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  // Password Errors
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 7) {
    errors.password = "Password must be at least 7 characters";
  }
  return errors;
}
