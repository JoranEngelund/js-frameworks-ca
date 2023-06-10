import { useForm } from "react-hook-form";
import * as styled from "./styled";

/**
 * Contact Form component.
 *
 * This component renders a contact form with input fields for full name, subject, email, and body.
 * It utilizes form validation and error handling using the react-hook-form library.
 *
 * @component
 * @example
 * return (
 *   <Contact />
 * )
 */

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <styled.FormContainer id="form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Contact Form</h1>
      <div>
        <label htmlFor="fullName">Full name *</label>
        <input
          {...register(`fullName`, {
            required: true,
            minLength: {
              value: 3,
              message: "Minimum 3 characters",
            },
          })}
          aria-invalid={errors.fullName ? "true" : "false"}
          type="text"
          name="fullName"
          placeholder="Required, Min 3 characters"
        />
        {errors.fullName?.type === "required" && (
          <p role="alert">Full name is required</p>
        )}
        {errors.fullName?.message && <p>{errors.fullName?.message}</p>}
      </div>

      <div>
        <label htmlFor="subject">Subject *</label>
        <input
          {...register(`subject`, {
            required: true,
            minLength: {
              value: 3,
              message: "Minimum 3 characters",
            },
          })}
          aria-invalid={errors.subject ? "true" : "false"}
          type="text"
          name="subject"
          placeholder="Required, Min 3 characters"
        />
        {errors.subject?.type === "required" && (
          <p role="alert">Subject is required</p>
        )}
        {errors.subject?.message && <p>{errors.subject?.message}</p>}
      </div>
      <div>
        <label htmlFor="email">Email *</label>
        <input
          {...register(`email`, {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          type="email"
          name="email"
          placeholder="Email@Address.com"
        />
        {errors.email?.type === "required" && (
          <p role="alert">Email is required</p>
        )}
        {errors.email?.message && <p>{errors.email?.message}</p>}
      </div>
      <div>
        <label htmlFor="body">Message *</label>
        <input
          {...register(`body`, {
            required: true,
            minLength: {
              value: 3,
              message: "Minimum 3 characters",
            },
          })}
          type="text"
          name="body"
          placeholder="Required, Min 3 characters"
        />
        {errors.body?.type === "required" && (
          <p role="alert">Message is required</p>
        )}
        {errors.body?.message && <p>{errors.body?.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </styled.FormContainer>
  );
}

const onSubmit = (data) => {
  console.log(data);
  const form = document.querySelector("#form");
  form.reset();
};
