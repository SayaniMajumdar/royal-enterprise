import React, { useState } from 'react';
import { Phone, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';
import { useNotification } from '../../context/NotificationContext';
import { submitContactEnquiry } from '../../services/api';

const CallToAction = ({ onOpenQuote }) => {
  const { showToast } = useNotification();
  const [phoneInput, setPhoneInput] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleQuickCallback = async (e) => {
    e.preventDefault();
    if (!phoneInput.trim() || phoneInput.length < 8) {
      showToast('Please enter a valid phone number.', 'error');
      return;
    }

    setSubmitting(true);
    try {
      await submitContactEnquiry({
        customerName: 'Quick Callback Request',
        phone: phoneInput,
        email: 'callback@royalenterprisekolkata.com',
        subject: 'Quick Callback Request from Website Banner',
        message: 'Client requested an immediate consultation callback via homepage banner.',
      });
      setSubmitted(true);
      showToast(
        "Got it. We'll call you within 2 hours between 10:00 AM and 8:30 PM IST.",
        'success'
      );
      setPhoneInput('');
    } catch (err) {
      showToast('Unable to request callback. Opening quote form...', 'info');
      onOpenQuote();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FAF7F2]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="bg-[#540D1A] text-white rounded-lg p-8 sm:p-12 shadow-paper-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-[#3E0812]">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase font-bold tracking-wider text-amber-300 block">
              Have a date in mind?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Let's talk through your guest list, menus, and venue options.
            </h2>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-xl font-light">
              Dates during the Kolkata wedding seasons (November–February) fill up quickly. Give us a call or drop your number below, and we'll check our kitchen availability.
            </p>

            {submitted ? (
              <div className="p-4 bg-emerald-950/80 border border-emerald-400/40 rounded text-emerald-200 text-xs sm:text-sm font-medium flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Got it. We'll call you within 2 hours between 10:00 AM and 8:30 PM IST.</span>
              </div>
            ) : (
              <form onSubmit={handleQuickCallback} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-2 max-w-md">
                <div className="flex-1 flex items-center bg-white border border-[#E5DED3] rounded px-3 py-2 text-[#1F1D1A]">
                  <span className="text-xs font-bold text-[#7D756A] mr-2">🇮🇳 +91</span>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    className="w-full text-sm focus:outline-none bg-transparent font-medium"
                    maxLength={15}
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-marigold px-6 py-2.5 text-xs font-semibold whitespace-nowrap shadow-sm shrink-0"
                >
                  {submitting ? 'Sending...' : 'Request callback'}
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20would%20like%20to%20discuss%20an%20event.`}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp py-3 px-5 text-sm font-semibold flex items-center justify-center space-x-2 shadow-sm text-center"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="bg-white/10 hover:bg-white/15 text-white border border-white/20 py-3 px-5 text-sm font-semibold rounded flex items-center justify-center space-x-2 transition-colors text-center"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>Direct call: {COMPANY_INFO.displayPhone}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;
