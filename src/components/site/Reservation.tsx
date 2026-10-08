"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OPENING_HOURS, SITE_INFO } from "@/lib/site-data";

type FormState = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  size: string;
  occasion: string;
  notes: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initial: FormState = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  size: "",
  occasion: "",
  notes: "",
};

export function Reservation() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  // Today's date in YYYY-MM-DD for the date min attribute
  const today = new Date().toISOString().split("T")[0];

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    // Clear error on edit
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): Errors {
    const next: Errors = {};
    if (!form.first_name.trim()) next.first_name = "Please enter your first name.";
    if (!form.last_name.trim()) next.last_name = "Please enter your last name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "Please enter a valid email address.";
    if (!form.phone.trim()) next.phone = "Please enter a phone number.";
    if (!form.date) next.date = "Please choose a date.";
    if (!form.time) next.time = "Please choose a time.";
    if (!form.size) next.size = "Please select party size.";
    else {
      const n = Number(form.size);
      if (n < 1 || n > 12)
        next.size = "Parties of 1–12 only. For larger groups, please call us.";
    }
    return next;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // ----- FRONT-END SUCCESS STATE -----
    // To actually receive reservations, wire this up to a backend or service
    // like Formspree / Netlify Forms. See README for examples.
    setSubmitted(true);
    setForm(initial);
    // Hide the success message after 8 seconds
    window.setTimeout(() => setSubmitted(false), 8000);
  }

  return (
    <section
      id="reserve"
      className="bg-[var(--brand-olive)] py-20 text-[var(--brand-cream)] sm:py-28 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Info column */}
        <Reveal>
          <div>
            <Eyebrow light>Reservations</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
              Join Us for Dinner
            </h2>
            <p className="mt-4 max-w-md text-[var(--brand-cream)]/80">
              We hold tables for 15 minutes past the reservation time. If
              you&apos;re running late, a quick call goes a long way — we&apos;ll
              do our best to hold your spot.
            </p>
            <p className="mt-3 max-w-md text-[var(--brand-cream)]/80">
              Walk-ins are always welcome at the bar, where we serve the full
              menu plus a small bites list. Bar seats are first-come,
              first-served.
            </p>

            <div className="mt-8 rounded-xl bg-white p-6 text-[var(--brand-charcoal)] shadow-[0_6px_18px_-10px_rgba(0,0,0,0.4)]">
              <h3 className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[var(--brand-terracotta)]">
                Opening Hours
              </h3>
              <dl className="mt-3">
                {OPENING_HOURS.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-center justify-between border-b border-[var(--brand-line)] py-2 text-sm last:border-b-0"
                  >
                    <dt className="font-medium">{h.day}</dt>
                    <dd
                      className={
                        h.closed ? "text-[var(--brand-terracotta)]" : "text-[var(--brand-muted)]"
                      }
                    >
                      {h.time}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <p className="mt-6 text-sm text-[var(--brand-cream)]/85">
              <strong className="text-[var(--brand-cream)]">Questions?</strong>
              <br />
              Call{" "}
              <a
                href={SITE_INFO.phoneHref}
                className="text-[var(--brand-gold)] hover:underline"
              >
                {SITE_INFO.phone}
              </a>{" "}
              or email{" "}
              <a
                href={`mailto:${SITE_INFO.email}`}
                className="text-[var(--brand-gold)] hover:underline"
              >
                {SITE_INFO.email}
              </a>
            </p>
          </div>
        </Reveal>

        {/* Form column */}
        <Reveal delay={0.1}>
          <form
            noValidate
            onSubmit={onSubmit}
            className="rounded-2xl bg-white p-6 text-[var(--brand-charcoal)] shadow-[0_18px_40px_-24px_rgba(0,0,0,0.45)] sm:p-8"
          >
            {submitted && (
              <div
                role="status"
                className="mb-6 flex items-start gap-3 rounded-lg border border-[var(--brand-olive-soft)] bg-[var(--brand-olive-soft)]/10 p-4 text-[var(--brand-olive)]"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" />
                <div>
                  <strong className="block">Reservation request received.</strong>
                  <span className="text-sm">
                    We&apos;ll confirm by email within a few hours. For same-day
                    bookings, please call us at {SITE_INFO.phone}.
                  </span>
                </div>
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="First Name" required error={errors.first_name}>
                <Input
                  value={form.first_name}
                  onChange={(e) => update("first_name", e.target.value)}
                  autoComplete="given-name"
                  aria-invalid={!!errors.first_name}
                />
              </Field>
              <Field label="Last Name" required error={errors.last_name}>
                <Input
                  value={form.last_name}
                  onChange={(e) => update("last_name", e.target.value)}
                  autoComplete="family-name"
                  aria-invalid={!!errors.last_name}
                />
              </Field>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Field label="Email" required error={errors.email}>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                />
              </Field>
              <Field label="Phone" required error={errors.phone}>
                <Input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  autoComplete="tel"
                  aria-invalid={!!errors.phone}
                />
              </Field>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Field label="Date" required error={errors.date}>
                <Input
                  type="date"
                  min={today}
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                  aria-invalid={!!errors.date}
                />
              </Field>
              <Field label="Time" required error={errors.time}>
                <Select value={form.time} onValueChange={(v) => update("time", v)}>
                  <SelectTrigger aria-invalid={!!errors.time}>
                    <SelectValue placeholder="Select a time…" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Lunch (Sat–Sun only)</SelectLabel>
                      <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                      <SelectItem value="12:30 PM">12:30 PM</SelectItem>
                      <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                      <SelectItem value="1:30 PM">1:30 PM</SelectItem>
                      <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel>Dinner</SelectLabel>
                      <SelectItem value="5:00 PM">5:00 PM</SelectItem>
                      <SelectItem value="5:30 PM">5:30 PM</SelectItem>
                      <SelectItem value="6:00 PM">6:00 PM</SelectItem>
                      <SelectItem value="6:30 PM">6:30 PM</SelectItem>
                      <SelectItem value="7:00 PM">7:00 PM</SelectItem>
                      <SelectItem value="7:30 PM">7:30 PM</SelectItem>
                      <SelectItem value="8:00 PM">8:00 PM</SelectItem>
                      <SelectItem value="8:30 PM">8:30 PM</SelectItem>
                      <SelectItem value="9:00 PM">9:00 PM</SelectItem>
                      <SelectItem value="9:30 PM">9:30 PM</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Field label="Party Size" required error={errors.size}>
                <Select value={form.size} onValueChange={(v) => update("size", v)}>
                  <SelectTrigger aria-invalid={!!errors.size}>
                    <SelectValue placeholder="How many guests?" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 12 }, (_, i) => String(i + 1)).map((n) => (
                      <SelectItem key={n} value={n}>
                        {n}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Occasion (optional)">
                <Select
                  value={form.occasion || "none"}
                  onValueChange={(v) => update("occasion", v === "none" ? "" : v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="None" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="Birthday">Birthday</SelectItem>
                    <SelectItem value="Anniversary">Anniversary</SelectItem>
                    <SelectItem value="Date Night">Date Night</SelectItem>
                    <SelectItem value="Business Dinner">Business Dinner</SelectItem>
                    <SelectItem value="Celebration">Celebration</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </div>

            <div className="mt-4">
              <Field label="Special Requests (optional)">
                <Textarea
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  placeholder="Allergies, seating preferences, accessibility needs, surprise desserts…"
                  className="min-h-[90px] resize-y"
                />
              </Field>
            </div>

            <Button
              type="submit"
              size="lg"
              className="mt-6 w-full rounded-full bg-[var(--brand-terracotta)] py-3 text-white hover:bg-[var(--brand-terracotta-dark)] hover:text-white"
            >
              Request Reservation
            </Button>

            <p className="mt-3 text-center text-xs text-[var(--brand-muted)]">
              This is a request — we&apos;ll confirm by email. No card required.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- helper ---------- */
function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label className="text-sm font-semibold text-[var(--brand-olive)]">
        {label} {required && <span className="text-[var(--brand-terracotta)]">*</span>}
      </Label>
      {children}
      {error && <p className="text-sm text-[var(--brand-terracotta-dark)]">{error}</p>}
    </div>
  );
}
