"use client";
import { useState } from "react";
import { site } from "../data/siteContent";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <div className="page-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you.</p>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Info */}
            <div>
              <h2 className="section-title">Find Us</h2>
              <p style={{ marginBottom: ".5rem" }}>{site.address}</p>
              <p style={{ marginBottom: ".5rem" }}>{site.phone}</p>
              <p style={{ marginBottom: "1.5rem" }}>{site.email}</p>

              <h3 style={{ color: "var(--gold)", marginBottom: ".5rem" }}>Opening Hours</h3>
              <table className="hours-table">
                <tbody>
                  {site.hours.map((h) => (
                    <tr key={h.day}>
                      <td>{h.day}</td>
                      <td>{h.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="map-placeholder">Map placeholder</div>
            </div>

            {/* Form */}
            <div>
              <h2 className="section-title">Send a Message</h2>
              {sent ? (
                <p className="success-msg">
                  Thanks for reaching out! We'll get back to you within 24 hours.
                </p>
              ) : (
                <form className="form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      id="name" type="text" required placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email" type="email" required placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message" rows={5} required placeholder="How can we help?"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
