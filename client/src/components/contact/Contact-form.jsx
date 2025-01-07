import React, { useState } from "react";
import axios from "axios";
import Modal from "../common/Modal";
import ModalContent from "../common/ModalContent";

// TODO: jab submission successful ya error hai to user ko feedback send karna hai

export default function ContactForm() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState("");

  const showPop = (status) => {
    if (status === "success")
      return (
        <ModalContent
          img="/images/green_check.svg"
          title="Success!"
          description="Message sent successfully"
        />
      );
    else if (status === "error")
      return (
        <ModalContent
          img="/images/cross_icon.webp"
          title="Sorry!"
          description="Couldn't send message!"
        />
      );
  };

  // Modal
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.Name.trim()) newErrors.Name = "Name is required.";
    if (!formData.Email.trim()) newErrors.Email = "Email is required.";
    if (!formData.Message.trim()) newErrors.Message = "Message is required.";
    return newErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      setSubmissionStatus("submitting");
      const res = await axios.post(import.meta.env.VITE_FORM_URL, formData);
      if (res.status === 200) {
        setFormData({ Name: "", Email: "", Message: "" });
        setSubmissionStatus("success");
      } else {
        setSubmissionStatus("error");
      }
    } catch (err) {
      setSubmissionStatus("error");
    } finally {
      openModal();
    }
  };

  return (
    <>
      <article className="flex-1 bg-secondary-100 p-8 max-lg:px-4 lg:max-w-[460px]">
        <h2 className="mb-4 font-body text-3xl font-semibold">Send Message</h2>
        <form className="space-y-3 font-body" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="Name"
              className="w-full bg-white px-3 py-2 placeholder:text-sm focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-primary-400 disabled:opacity-70"
              placeholder="Your Name"
              value={formData.Name}
              onChange={handleChange}
              disabled={submissionStatus === "submitting"}
            />
            {errors.Name && (
              <p className="mt-2 text-xs font-semibold text-red-500">
                {errors.Name}
              </p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="Email"
              className="w-full bg-white px-3 py-2 placeholder:text-sm focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-primary-400 disabled:opacity-70"
              placeholder="Your Email"
              value={formData.Email}
              onChange={handleChange}
              disabled={submissionStatus === "submitting"}
            />
            {errors.Email && (
              <p className="mt-2 text-xs font-semibold text-red-500">
                {errors.Email}
              </p>
            )}
          </div>
          <div>
            <textarea
              name="Message"
              rows="4"
              className="block w-full bg-white px-3 py-2 placeholder:text-sm focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-primary-400 disabled:opacity-70"
              placeholder="Your Message"
              value={formData.Message}
              onChange={handleChange}
              disabled={submissionStatus === "submitting"}
            ></textarea>
            {errors.Message && (
              <p className="mt-2 text-xs font-semibold text-red-500">
                {errors.Message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-primary-500 py-3 text-center text-base uppercase leading-none text-white opacity-70"
            disabled={submissionStatus === "submitting"}
          >
            {submissionStatus === "submitting" ? "Sending..." : "Send"}
          </button>
        </form>
      </article>
      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={closeModal}
          content={
            submissionStatus === "success"
              ? showPop("success")
              : showPop("error")
          }
        />
      )}
    </>
  );
}
