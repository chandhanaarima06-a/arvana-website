import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

/**
 * GetStarted — Lead Collection Form
 *
 * Four fields: Name, Business Name, WhatsApp Number, Email Address.
 * Client-side validation, loading state, success/error handling, and
 * duplicate-submission prevention.
 *
 * Submission posts to a serverless API route. Because no backend credentials
 * exist yet, this file defines the integration contract and lists the
 * environment variables you must configure (see README / DEPLOY.md).
 */
const FORM_FIELDS = [
  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
  { id: 'businessName', label: 'Business Name', type: 'text', placeholder: 'Your business name' },
  { id: 'whatsapp', label: 'WhatsApp Number', type: 'tel', placeholder: '+91 77084 31829' },
  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'you@business.com' },
] as const;

interface FormData {
  name: string;
  businessName: string;
  whatsapp: string;
  email: string;
}

const EMPTY_FORM: FormData = {
  name: '',
  businessName: '',
  whatsapp: '',
  email: '',
};

export function GetStarted() {
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submittedIds, setSubmittedIds] = useState<Set<string>>(new Set());
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const isSubmitting = status === 'loading';
  const isDuplicate = submittedIds.has(form.email.trim().toLowerCase());

  const handleChange = (id: string, value: string) => {
    setForm((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: '' }));
    setSubmissionError(null);
  };

  const validate = (): boolean => {
    const next: Record<string, string> = {};
    let valid = true;

    if (!form.name.trim()) {
      next.name = 'Please enter your name.';
      valid = false;
    }
    if (!form.businessName.trim()) {
      next.businessName = 'Please enter your business name.';
      valid = false;
    }
    if (!form.whatsapp.trim()) {
      next.whatsapp = 'Please enter your WhatsApp number.';
      valid = false;
    } else if (!/^\+?[\d\s\-()]{7,}$/.test(form.whatsapp)) {
      next.whatsapp = 'Please enter a valid WhatsApp number.';
      valid = false;
    }
    if (!form.email.trim()) {
      next.email = 'Please enter your email address.';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.';
      valid = false;
    }

    setErrors(next);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (isDuplicate) {
      setSubmissionError('This email has already submitted an enquiry.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setSubmissionError(null);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error('Submission failed. Please try again.');

      setSubmittedIds((prev) => new Set([...prev, form.email.trim().toLowerCase()]));
      setForm(EMPTY_FORM);
      setStatus('success');
    } catch (err) {
      setSubmissionError(err instanceof Error ? err.message : 'Something went wrong.');
      setStatus('error');
    } finally {
      setStatus('idle');
    }
  };

  return (
    <section id="contact" className="section-light py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <motion.h2
            className="text-[clamp(1.8rem,5vw,2.6rem)] font-[600] leading-[1.15] tracking-tight text-warm-white mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            className="text-arvana-grey text-[16px] leading-relaxed max-w-xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Tell us a little about your business. Let's discover how automation can make your everyday work easier.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card p-8 sm:p-12 lg:p-16 rounded-[24px] relative"
        >
          {status === 'success' ? (
            <SuccessState />
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {submissionError && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-lg border border-white/10 bg-black/40 text-[13px] text-arvana-grey/40"
                >
                  {submissionError}
                </motion.div>
              )}
              <div className="space-y-4">
                {FORM_FIELDS.map((field) => (
                  <motion.div key={field.id} className="space-y-2">
                    <label
                      htmlFor={field.id}
                      className="text-[13px] font-[500] text-arvana-offwhite/90 block"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      value={form[field.id as keyof FormData]}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      disabled={isSubmitting}
                      className={cnInput(
                        'w-full px-4 py-3 rounded-lg bg-white/[0.03] border text-[13px] text-warm-white placeholder-arvana-grey/50 focus:outline-none focus:ring-1 focus:ring-gold transition-colors',
                        errors[field.id] && 'border-red-500/60 focus:ring-red-500/70'
                      )}
                      placeholder={field.placeholder}
                      required
                    />
                    {errors[field.id] && (
                      <span className="text-[11px] text-red-400/80">{errors[field.id]}</span>
                    )}
                  </motion.div>
                ))}
                <Button
                  variant="primary"
                  type="submit"
                  loading={isSubmitting}
                  className="w-full mt-8 px-8 py-4 text-base"
                  disabled={isSubmitting || isDuplicate}
                >
                  {isSubmitting ? 'Sending…' : isDuplicate ? 'Already Submitted' : 'Get Started'}
                </Button>
              </div>
              <p className="mt-4 text-[11px] text-arvana-grey/50 text-center">
                By submitting, you agree to be contacted about ARVANA automation services.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function SuccessState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-12"
    >
      <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
        <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-warm-white text-[clamp(1.5rem,3vw,1.75rem)] font-[600] mb-3">Enquiry received.</h3>
      <p className="text-arvana-grey text-[14px] leading-relaxed max-w-md mx-auto">
        Thanks — we've received your details and will get back to you on WhatsApp shortly.
      </p>
      <Button
        variant="outline"
        onClick={() => window.dispatchEvent(new CustomEvent('arvana:reset-form'))}
        className="mt-8 px-8 py-3 text-base"
      >
        Submit another
      </Button>
    </motion.div>
  );
}

function cnInput(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
