import { useState } from "react"
import { CONTACT } from "../data/catalog"
import { Breadcrumbs } from "../components/ui/Breadcrumbs"
import { Button } from "../components/ui/Button"
import { Icon } from "../components/ui/Icon"
import { PageHero } from "../components/ui/PageHero"
import "./ContactPage.css"

const INFO = [
  { icon: "phone", label: "Phone", value: CONTACT.phone },
  { icon: "mail", label: "Email", value: CONTACT.email },
  { icon: "pin", label: "Address", value: CONTACT.address },
  { icon: "clock", label: "Working Hours", value: CONTACT.hours },
]

export function ContactPage() {
  const [sent, setSent] = useState(false)

  return (
    <div className="contact">
      <PageHero
        title="Contact Us"
        subtitle="We’d love to hear from you. Reach out with questions, orders, or feedback."
        image="/images/heroes/contact-hero.jpg"
      />

      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Home", to: "/" },
            { label: "Contact Us" },
          ]}
        />

        <section className="contact-grid">
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
          >
            <div className="contact-form__head">
              <Icon name="mail" size={22} />
              <h2>Send Us a Message</h2>
            </div>

            <div className="contact-form__row">
              <label>
                Full Name *
                <input type="text" name="name" required placeholder="Your name" />
              </label>
              <label>
                Email Address *
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label>
              Subject *
              <select name="subject" required defaultValue="">
                <option value="" disabled>
                  Select a subject
                </option>
                <option>Order Inquiry</option>
                <option>Shipping & Delivery</option>
                <option>Returns</option>
                <option>Partnership</option>
                <option>Other</option>
              </select>
            </label>

            <label>
              Message *
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Write your message..."
              />
            </label>

            <Button type="submit" icon={<Icon name="send" size={16} />}>
              Send Message
            </Button>
            {sent ? (
              <p className="contact-form__success" role="status">
                Thanks! Your message has been sent.
              </p>
            ) : null}
          </form>

          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              Prefer to reach us directly? Use any of the details below and our
              team will be happy to help.
            </p>
            <div className="contact-info__list">
              {INFO.map((item) => (
                <div key={item.label} className="contact-info__item">
                  <span className="contact-info__icon">
                    <Icon name={item.icon} size={18} />
                  </span>
                  <div>
                    <strong>{item.label}</strong>
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-map">
          <div className="contact-map__visual">
            <img src="/images/sections/map.jpg" alt="Map showing ZahirBooks location" />
            <div className="contact-map__pin" aria-hidden="true">
              <Icon name="pin" size={22} />
            </div>
          </div>
          <div className="contact-map__cta">
            <div>
              <h3>Find Our Store</h3>
              <p>{CONTACT.address}</p>
            </div>
            <Button
              type="button"
              icon={<Icon name="pin" size={16} />}
              onClick={() =>
                window.open(
                  "https://maps.google.com/?q=I.I.+Chundrigar+Road,+Karachi",
                  "_blank",
                )
              }
            >
              Get Directions
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
