"use client"

import { useState } from "react"
import "./Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus({ success: true, message: "Message sent successfully!" })
        setFormData({ name: "", email: "", message: "" })
      } else {
        const error = await response.json()
        setSubmitStatus({ success: false, message: error.message || "Failed to send message. Please try again." })
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: "Network error. Please check your connection and try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>CONTACT</h1>
      </div>

      <div className="contact-container">
        <div className="contact-heading">
          <h2>Get in Touch</h2>
          <p>
            If you are interested in my work or want to provide feedback about this website, I am open to exchanging
            ideas.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
            ></textarea>
          </div>

          <button type="submit" className="send-button" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send"}
          </button>

          {submitStatus && (
            <div className={`submit-status ${submitStatus.success ? "success" : "error"}`}>{submitStatus.message}</div>
          )}
        </form>
      </div>
    </div>
  )
}

export default Contact
