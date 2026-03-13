"use client";

import { useState } from "react";
import css from "./BookingForm.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!email.includes("@")) newErrors.email = "Invalid email";
    if (!date) newErrors.date = "Booking date is required";
    return newErrors;
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={css.success}>
        🎉 Booking successful! We will contact you soon.
      </div>
    );
  }

  return (
    <div className={css.form}>
      <div className={css.text}>
        <h3 className={css.title}>Book your car now</h3>
        <p className={css.subtitle}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <div className={css.fields}>
        <div className={css.fieldWrapper}>
          <input
            className={`${css.input} ${errors.name ? css.inputError : ""}`}
            type="text"
            placeholder="Name*"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setErrors((p) => ({ ...p, name: "" }));
            }}
          />
          {errors.name && <span className={css.error}>{errors.name}</span>}
        </div>

        <div className={css.fieldWrapper}>
          <input
            className={`${css.input} ${errors.email ? css.inputError : ""}`}
            type="email"
            placeholder="Email*"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((p) => ({ ...p, email: "" }));
            }}
          />
          {errors.email && <span className={css.error}>{errors.email}</span>}
        </div>

        <div className={css.fieldWrapper}>
          <DatePicker
            selected={date}
            onChange={(d: Date | null) => {
              setDate(d);
              setErrors((p) => ({ ...p, date: "" }));
            }}
            placeholderText="Booking date*"
            dateFormat="dd.MM.yyyy"
            minDate={new Date()}
            className={`${css.input} ${errors.date ? css.inputError : ""}`}
          />
          {errors.date && <span className={css.error}>{errors.date}</span>}
        </div>

        <textarea
          className={css.textarea}
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>

      <button className={css.submitBtn} onClick={handleSubmit}>
        Send
      </button>
    </div>
  );
}
