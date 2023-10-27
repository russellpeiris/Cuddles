export function getErrorMessage(errorCode) {
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return {
        email: 'Email is already in use, use a different email or login.',
      };
    case 'auth/invalid-email':
      return {
        email: 'Please enter a valid email.',
      };
    case 'auth/user-not-found':
      return {
        email: 'User not found',
      };
    case 'auth/weak-password':
      return {
        password: 'Please enter a strong password.',
      };
    case 'auth/wrong-password':
      return {
        password: 'Password is incorrect',
      };
    case 'auth/too-many-requests':
      return {
        email: 'Too many requests, please try again later.',
      };
    default:
      return {
        email: 'An error occurred',
      };
  }
}

export const validateUpdateForm = (data) => {
  
  let validationError = {};

  if (!data.firstName) {
    validationError.firstName = 'First name is required';
  }

  if (!data.lastName) {
    validationError.lastName = 'Last name is required';
  }

  if (!data.email) {
    validationError.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    validationError.email = 'Invalid email format';
  }

  if (!data.phoneNumber) {
    validationError.phoneNumber = 'Phone number is required';
  } else if (!isValidPhoneNumber(data.phoneNumber)) {
    validationError.phoneNumber = 'Invalid phone number';
  }

  if (!data.dateOfBirth) {
    validationError.dateOfBirth = 'Date of birth is required';
  } 

  if (!data.city) {
    validationError.city = 'City is required';
  }

  // if (!data.dueDate) {
  //   validationError.dueDate = 'Due date is required';
  // } 

  // if (!data.height) {
  //   validationError.height = 'Height is required';
  // }

  if (Object.keys(validationError).length > 0) {
    return validationError;
  }

  return null;
};

const isValidEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};

const isValidPhoneNumber = (phoneNumber) => {
  return /^\d{10}$/.test(phoneNumber); 
};

