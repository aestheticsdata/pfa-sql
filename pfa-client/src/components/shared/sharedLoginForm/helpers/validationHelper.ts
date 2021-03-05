import * as Yup from 'yup';

export const validationHelper = () => {

  // //////////////////////////////////////////////////////////////////////
  // https://jaredpalmer.com/formik/docs/guides/validation#field-level-validation
  const validateEmail = async (value: string) => {
    const emailValidationSchema = Yup.string().email();
    let error;

    if (!value) {
      error = 'Required';
    }
    try {
      await emailValidationSchema.validate(value);
    } catch (err) {
      error = err.errors[0];
    }
    return error;
  };

  const validatePassword = async (value: string) => {
    const passwordValidationSchema = Yup.string().min(5);
    let error;

    if (!value) {
      error = 'Password required';
    }
    try {
      await passwordValidationSchema.validate(value);
    } catch (err) {
      error = err.errors[0];
    }

    return error;
  };
  // ////////////////////////////////////////////////////////////////////

  return {
    validateEmail,
    validatePassword,
  }
}

export default validationHelper;
