import * as Yup from "yup";

// ---------------------- Signin ----------------------
export const schemaSignin = Yup.object().shape({
  phone_number: Yup.string()
    .min(19, "Invalid phone number")
    .required("Phone is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
      "Password must be at least 6 characters and contain at least one uppercase and one lowercase letter"
    )
    .required("Password is required"),
});

// ---------------------- Signup ----------------------
export const schemaSignup = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  phone_number: Yup.string()
    .min(19, "Invalid phone number")
    .required("Phone is required"),
  email: Yup.string().email("Email invalit ").required("Email is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
      "Password must be at least 6 characters and contain at least one uppercase and one lowercase letter"
    )
    .required("Password is required"),
});

// ---------------------- Category ----------------------
export const schemaCatgory = Yup.object().shape({
  name: Yup.string().required("Category name is required"),
});

// Validation schema for the brand form
export const schemaBrand = Yup.object().shape({
  name: Yup.string().required("Brand name is required"),
  description: Yup.string().required("Description is required"),
  category_id: Yup.number().required("Category is required"),
  file: Yup.mixed().required("Brand file is required"),
});

// ---------------------- Product ----------------------
export const schemaProduct = Yup.object().shape({
  category_id: Yup.number().required("Category is required"),
  brand_id: Yup.number().required("Brand is required"),
  brand_category_id: Yup.number().required("Brand category is required"),
  name: Yup.string().required("Product name is required"),
  price: Yup.number().required("Price is required"),
});
// ---------------------- Product ----------------------
export const schemaProductupdate = Yup.object().shape({
  // category_id: Yup.number().required("Category is required"),
  // brand_id: Yup.number().required("Brand is required"),
  // brand_category_id: Yup.number().required("Brand category is required"),
  name: Yup.string().required("Product name is required"),
  price: Yup.number().required("Price is required"),
});
