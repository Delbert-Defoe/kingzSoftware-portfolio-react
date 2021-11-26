import React, { useEffect, useState } from "react";

export default function Contact() {
  const initialValues = {
    name: "",
    address: "",
    email: "",
    contact: "",
    reason: "",
  };
  const [values, setValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setIsSubmit(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate());
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("validated");
    }
  }, [values]);

  const validate = () => {
    const errors = {};
    const phoneRegex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!values.name) {
      errors.name = "Full name is required!";
    }
    if (!values.address) {
      errors.address = "Address is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!values.email.match(emailRegex)) {
      errors.email = "Invalid Email!";
    }

    if (!values.contact) {
      errors.contact = "Contact is required!";
    } else if (!values.contact.match(phoneRegex)) {
      errors.contact = "Invalid Contact";
    }

    if (!values.reason) {
      errors.reason = "A message is required!";
    }

    return errors;
  };

  return (
    <main className="flex justify-center content-center pt-20 pb-10 px-5 w-full min-h-screen bg-white">
      <form onSubmit={handleSubmit} className="px-5 py-5 w-full bg-black">
        <section className="input-section">
          <label for="full-name" className="form-label text-white">
            Full name:
          </label>
          <div>
            <input
              type="text"
              name="name"
              id="full-name"
              value={values.name}
              onChange={handleChange}
              placeholder="Ex. John Doe"
              className="input"
            ></input>
          </div>
          <p className="text-accent">
            {formErrors.name ? formErrors.name : ""}
          </p>
        </section>
        <section className="input-section">
          <label for="address" className="form-label text-white">
            Address:
          </label>
          <div>
            <input
              type="text"
              name="address"
              id="address"
              value={values.address}
              onChange={handleChange}
              placeholder="Bellevue Chopin"
              className="input"
            ></input>
          </div>
          <p className="text-accent">
            {formErrors.address ? formErrors.address : ""}
          </p>
        </section>
        <section className="input-section">
          <label for="email" className="form-label text-white">
            Email:
          </label>
          <div>
            <input
              type="text"
              name="email"
              autoComplete="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Ex. example@provider.com"
              className="input"
            ></input>
          </div>
          <p className="text-accent">
            {formErrors.email ? formErrors.email : ""}
          </p>
        </section>
        <section className="input-section">
          <label for="contact-no" className="form-label text-white">
            Contact Number:
          </label>
          <div>
            <input
              type="text"
              name="contact"
              autoComplete="tel"
              id="contact-no"
              value={values.contact}
              onChange={handleChange}
              placeholder="Ex. (767) 225-0000"
              className="input"
            ></input>
          </div>
          <p className="text-accent">
            {formErrors.contact ? formErrors.contact : ""}
          </p>
        </section>
        <section className="input-section">
          <label for="reason" className="form-label text-white">
            Message:
          </label>
          <div>
            <textarea
              name="reason"
              id="reason"
              value={values.reason}
              onChange={handleChange}
              className="p-2 h-60 w-full lg:w-3/4 font-mono focus:outline-none focus:ring focus:ring-accent"
            ></textarea>
          </div>
          <p className="text-accent">
            {formErrors.reason ? formErrors.reason : ""}
          </p>
        </section>
        <section className="grid place-content-center">
          <input
            type="submit"
            className="px-2 py-2 lg:py-2 lg:px-8 font-mono hover:text-white bg-white hover:bg-accent transition-all duration-300 cursor-pointer"
          ></input>
        </section>
      </form>
    </main>
  );
}
