import Link from "next/link";

export default function ThankYouPage() {
  return (
    <section className="section">
      <div className="section-inner fade-up" style={{ textAlign: "center" }}>
        
        {/* Success Icon */}
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✓</div>

        <h1 className="heading-section">Thank you!</h1>

        <p className="text-body" style={{ maxWidth: "480px", margin: "0 auto" }}>
          Your message has been sent successfully. I’ll get back to you shortly.
        </p>

        <Link
          href="/"
          className="btn btn-primary contact-btn"
          style={{ marginTop: "2rem" }}
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
