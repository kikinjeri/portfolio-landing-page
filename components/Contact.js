export default function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="section-inner fade-up">

        <div className="contact-header">
          
          <div className="text-eyebrow">Get in touch</div>
          <h2 className="heading-section">Let’s build something great</h2>
          <h2>Mwihaki Githii</h2>
          <h2>343-322-6546</h2>
          <p className="text-body">
            Send me a message and I’ll get back to you shortly.
          </p>
        </div>

        <form
          className="contact-form"
          action="https://formsubmit.com/githiimwihaki@gmail.com"
          method="POST"
        >
          {/* Disable captcha */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Name */}
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
          </div>

          {/* Message */}
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your message"
              rows="5"
              required
            ></textarea>
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-primary contact-btn">
            Send message
          </button>

        
        </form>

      </div>
    </section>
  );
}



