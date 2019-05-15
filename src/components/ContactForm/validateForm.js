export default function validateAuth(values) {
  let errors = {};
  // Email Errors
  if (!values.email) {
    errors.email = "Required Email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  // Name Errors
  if (!values.fullName) {
    errors.fullName = "Name is required";
  } else if (values.fullName.length < 3) {
    errors.fullName = "Name should be at least 3 characters";
  }
  // Message Errors
  if (!values.message) {
    errors.message = "Any Message is required";
  } else if (values.message.length < 5) {
    errors.message = "Oh come on, write more than 5 chars";
  }
  return errors;
}
