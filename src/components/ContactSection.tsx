import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Mail, Instagram, MapPin } from "lucide-react";

const services = [
  "Commercial Campaigns",
  "Lifestyle Shoots",
  "Fashion Editorials",
  "Brand Collaborations",
  "Creator Partnerships",
];

export function ContactSection() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Disable reCAPTCHA so AJAX works without redirecting
    formData.append("_captcha", "false");

    try {
      const response = await fetch("https://formsubmit.co/vishnubanavath5@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        form.reset();
        toast.success("Message sent. I'll be in touch shortly.");
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-foreground text-background">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* LEFT */}
        <div className="flex flex-col justify-between p-8 md:p-16 lg:p-20 border-b lg:border-b-0 lg:border-r border-background/15">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-[10px] tracking-wide-xl uppercase opacity-60 mb-8">
              §02 — Contact
            </div>
            <h2 className="font-display tracking-editorial font-semibold leading-[0.85] text-[14vw] lg:text-[7.5vw]">
              Let's
              <br />
              <span className="italic font-normal">work</span>
              <br />
              together.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-16"
          >
            <div className="text-[10px] tracking-wide-xl uppercase opacity-60 mb-6">
              Available for
            </div>
            <ul className="space-y-3">
              {services.map((s, i) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.08 }}
                  className="font-display text-2xl md:text-3xl"
                >
                  — {s}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="p-8 md:p-16 lg:p-20 flex flex-col justify-between">
          <motion.form
            action="https://formsubmit.co/vishnubanavath5@gmail.com"
            method="POST"
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <Field name="name" label="Name" required />
            <Field name="email" label="Email" type="email" required />
            <Field name="phone" label="Phone" type="tel" />
            <div>
              <label className="text-[10px] tracking-wide-xl uppercase opacity-60">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full bg-transparent border-b border-background/30 focus:border-background outline-none py-3 text-lg resize-none transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="group relative overflow-hidden border border-background px-10 py-5 text-[10px] font-semibold tracking-wide-xl uppercase w-full md:w-auto disabled:opacity-60"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-foreground">
                {submitting ? "Sending..." : "Send Message"}
              </span>
              <span className="absolute inset-0 bg-background translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-background/15"
          >
            <Info label="Email" value="vishnubhanavath@gmail.com" icon={Mail} href="mailto:vishnubhanavath@gmail.com" />
            <Info label="Instagram" value="vishnu_2805_" icon={Instagram} href="https://instagram.com/vishnu_2805_" />
            <Info label="Location" value="Hyderabad, India" icon={MapPin} href="https://maps.google.com/?q=Hyderabad,+India" />
          </motion.div>
        </div>
      </div>

      <div className="border-t border-background/15 px-8 md:px-16 py-6 flex flex-col md:flex-row gap-2 md:items-center md:justify-between text-[10px] tracking-wide-xl uppercase opacity-60">
        <div>© MMXXVI — Vishnu</div>
        <div>Represented worldwide</div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-[10px] tracking-wide-xl uppercase opacity-60">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-background/30 focus:border-background outline-none py-3 text-lg transition-colors"
      />
    </div>
  );
}

function Info({ label, value, icon: Icon, href }: { label: string; value: string; icon?: React.ElementType; href?: string }) {
  const content = (
    <>
      <div className="flex items-center gap-2 text-[10px] tracking-wide-xl uppercase opacity-60 mb-2">
        {Icon && <Icon className="w-3.5 h-3.5" />}
        <span>{label}</span>
      </div>
      <div className="font-display text-lg">{value}</div>
    </>
  );

  return (
    <div>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block hover:opacity-70 transition-opacity">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}
