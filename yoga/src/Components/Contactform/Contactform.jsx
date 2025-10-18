import { useState } from "react";
import './ContactForm.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
        const newErrors = { ...errors };
        delete newErrors[e.target.name];
        setErrors(newErrors);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setSubmissionMessage("Thank you for your message!");
      // Add email.js logic
    };
  };
  
  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="contact-form__group">
          <label htmlFor="name" className="contact-form__label">Name:</label>
          <input
            type="text" id="name" name="name" placeholder="Your Name" required
            value={formData.name} onChange={handleChange}
            className={errors.name ? 'contact-form__input contact-form__input--error' : 'contact-form__input'}
          />
          {errors.name && <p className="contact-form__error-text">{errors.name}</p>}
        </div>
        <div className="contact-form__group">
          <label htmlFor="email" className="contact-form__label">Email:</label>
          <input
            type="email" id="email" name="email" placeholder="Your Email" required
            value={formData.email} onChange={handleChange}
            className={errors.email ? 'contact-form__input contact-form__input--error' : 'contact-form__input'}
          />
          {errors.email && <p className="contact-form__error-text">{errors.email}</p>}
        </div>
        <div className="contact-form__group">
          <label htmlFor="message" className="contact-form__label">Message:</label>
          <textarea
            id="message" name="message" rows="5" placeholder="Your Message" required
            value={formData.message} onChange={handleChange}
            className={errors.message ? 'contact-form__textarea contact-form__textarea--error' : 'contact-form__textarea'}
          ></textarea>
          {errors.message && <p className="contact-form__error-text">{errors.message}</p>}
        </div>
        <button type="submit" className="btn btn--primary" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {submissionMessage && <p className="contact-form__submission-message">{submissionMessage}</p>}
    </>
  );
};

export default ContactForm;