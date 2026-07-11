import { useState, type FormEvent } from "react";
import Seo from "@/components/Seo";
import { Lines } from "@/lib/motion";
import { site } from "@/data/site";
import { ArrowRight, Check, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "@/components/Icons";

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const WEB3FORMS_ACCESS_KEY = "7ea461f3-5e11-4cf4-8bac-f0fb8c100e8e";

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    setErrors((err) => ({ ...err, [k]: undefined }));
  };

  const validate = (): Errors => {
    const errs: Errors = {};
    if (!values.name.trim()) errs.name = "Please tell us your name.";
    if (!values.email.trim()) errs.email = "We need an email to reply to.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errs.email = "That email doesn't look right — check for typos.";
    if (!values.message.trim()) errs.message = "Tell us a little about the journey you're imagining.";
    return errs;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      const firstInvalid = (["name", "email", "message"] as const).find((k) => errs[k]);
      if (firstInvalid) document.getElementById(`c-${firstInvalid}`)?.focus();
      return;
    }

    setSending(true);
    setSendError(false);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Journey enquiry from ${values.name} — communityyatra`,
          from_name: "Community Yatra website",
          name: values.name,
          email: values.email,
          phone: values.phone || "not provided",
          message: values.message,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message ?? "Submission failed");
      setSent(true);
      setValues({ name: "", email: "", phone: "", message: "" });
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Seo
        title="Contact — Community Yatra"
        description="Plan a journey, ask about a homestay, or just say namaste. Community Yatra, Thamel, Kathmandu."
      />

      <header className="container-site pt-44 pb-14">
        <p data-reveal className="eyebrow text-clay mb-6">Contact</p>
        <h1 data-reveal-line className="display-hero text-[clamp(2.8rem,7vw,6rem)] max-w-4xl">
          <Lines>{["Every yatra starts", "with a namaste."]}</Lines>
        </h1>
      </header>

      <section className="container-site pb-(--spacing-section)">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 lg:gap-20">
          {/* Info column */}
          <div>
            <p data-reveal className="text-[1.08rem] text-ink-soft leading-[1.8] max-w-md">
              Have a question, a season in mind, or just curiosity? Write to us — a real person in
              Kathmandu reads every message, usually over milk tea.
            </p>

            <ul className="mt-10 space-y-6">
              {[
                { Icon: MapPin, label: "Find us", value: site.address, href: undefined },
                { Icon: Mail, label: "Write to us", value: site.email, href: `mailto:${site.email}` },
                { Icon: Phone, label: "Call us", value: site.phone, href: `tel:${site.phone.replace(/[^+\d]/g, "")}` },
              ].map(({ Icon, label, value, href }) => (
                <li key={label} data-reveal className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-paper-deep border border-line text-clay">
                    <Icon />
                  </span>
                  <div>
                    <p className="eyebrow text-ink-faint">{label}</p>
                    {href ? (
                      <a href={href} className="text-[1.05rem] font-medium mt-1 inline-block hover:text-clay transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-[1.05rem] font-medium mt-1">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div data-reveal className="mt-12">
              <p className="eyebrow text-ink-faint mb-4">Follow the journey</p>
              <div className="flex gap-3">
                {[
                  { href: site.social.facebook, label: "Facebook", Icon: Facebook },
                  { href: site.social.instagram, label: "Instagram", Icon: Instagram },
                  { href: site.social.linkedin, label: "LinkedIn", Icon: Linkedin },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Community Yatra on ${label}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-soft transition-all duration-300 hover:bg-clay hover:text-cream hover:border-clay"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form column */}
          <div data-reveal>
            {sent ? (
              <div className="bg-pine-deep text-paper rounded-2xl p-10 md:p-14 h-full flex flex-col justify-center items-start">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-marigold text-ink mb-7">
                  <Check width={24} height={24} />
                </span>
                <h2 className="display-md text-[clamp(1.7rem,3vw,2.4rem)]">Your message is on its way.</h2>
                <p className="text-pine-mist/85 mt-4 leading-relaxed max-w-md">
                  It has landed safely in our inbox in Kathmandu — expect a reply within a day or two.
                  In a hurry? You can always reach us directly at{" "}
                  <a href={`mailto:${site.email}`} className="underline text-marigold-soft">{site.email}</a>.
                </p>
                <button type="button" onClick={() => setSent(false)} className="btn-ghost btn-ghost--light mt-9 cursor-pointer">
                  Write another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="bg-paper-deep border border-line rounded-2xl p-8 md:p-12">
                <h2 className="font-display text-[1.7rem] font-[480] mb-8">Plan your journey</h2>

                <div className="grid sm:grid-cols-2 gap-x-7 gap-y-7">
                  <div>
                    <label htmlFor="c-name" className="field-label">
                      Name <span className="text-clay" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="c-name"
                      type="text"
                      autoComplete="name"
                      className="field-input"
                      value={values.name}
                      onChange={set("name")}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "c-name-err" : undefined}
                      required
                    />
                    {errors.name && (
                      <p id="c-name-err" role="alert" className="text-[0.82rem] text-[#c02b1d] mt-2">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="c-email" className="field-label">
                      Email <span className="text-clay" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      autoComplete="email"
                      className="field-input"
                      value={values.email}
                      onChange={set("email")}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "c-email-err" : undefined}
                      required
                    />
                    {errors.email && (
                      <p id="c-email-err" role="alert" className="text-[0.82rem] text-[#c02b1d] mt-2">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="c-phone" className="field-label">
                      Phone <span className="text-ink-faint font-normal normal-case tracking-normal">(optional)</span>
                    </label>
                    <input
                      id="c-phone"
                      type="tel"
                      autoComplete="tel"
                      className="field-input"
                      value={values.phone}
                      onChange={set("phone")}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="c-message" className="field-label">
                      Your journey <span className="text-clay" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="c-message"
                      rows={5}
                      className="field-input resize-y"
                      placeholder="Season, group size, what you'd love to experience…"
                      value={values.message}
                      onChange={set("message")}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "c-message-err" : undefined}
                      required
                    />
                    {errors.message && (
                      <p id="c-message-err" role="alert" className="text-[0.82rem] text-[#c02b1d] mt-2">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                {sendError && (
                  <p role="alert" className="mt-8 border-l-2 border-[#c02b1d] bg-paper rounded-r-lg px-5 py-4 text-[0.92rem] text-ink-soft">
                    Something went wrong on the way to Kathmandu — please try again, or write to us
                    directly at{" "}
                    <a href={`mailto:${site.email}`} className="underline text-clay">{site.email}</a>.
                  </p>
                )}

                <button type="submit" disabled={sending} className="btn-primary mt-10 disabled:opacity-60 disabled:cursor-wait">
                  {sending ? "Sending…" : <>Send the message <ArrowRight /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
