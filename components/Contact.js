"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactSection() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill out all fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const body = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(body?.error || body?.message || "Failed to send message");
      }

      // If stored but email not sent, surface that to the user instead of silently redirecting
      if (body && body.stored && body.emailed === false) {
        setError("Message saved but email wasn't sent: " + (body.reason || "SMTP not configured or send failed"));
        setLoading(false);
        return;
      }

      try {
        router.push("/thank-you");
      } catch (navErr) {
        setError("Message sent but navigation failed.");
        setLoading(false);
      }
    } catch (err) {
      setError(err.message || "An error occurred");
      setLoading(false);
    }
  }

  return (
    <section className="section" id="contact">
      <div className="section-inner fade-up">

        <div className="contact-header">
          <div className="text-eyebrow">Get in touch</div>
          <h2 className="heading-section">Let’s build something great</h2>
          <h2>Mwihaki Githii</h2>
          <h2>343-322-6546</h2>
          <p className="text-body">Send me a message and I’ll get back to you shortly.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} aria-busy={loading}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          {error && (
            <div className="form-error" role="status" aria-live="polite">
              {error}
            </div>
          )}

          <button type="submit" className="btn btn-primary contact-btn" disabled={loading}>
            {loading ? "Sending..." : "Send message"}
          </button>
        </form>

      </div>
    </section>
  );
}
