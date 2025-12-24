import Link from "next/link";

export default function ThankYouPage() {
  return (
    <section className="section">
      <div className="section-inner fade-up">
        <h1 className="heading-section">Thank you!</h1>
        <p className="text-body">
          Your message has been sent successfully. I’ll get back to you shortly.
        </p>

        <Link href="/" className="btn btn-primary contact-btn" style={{ marginTop: "2rem" }}>
          Back to Home
        </Link>
      </div>
    </section>
  );
}
