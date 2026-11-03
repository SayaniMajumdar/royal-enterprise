import React, { useState } from 'react';
import { Phone, CheckCircle2, ArrowRight } from 'lucide-react';
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
    if (!phoneInput.trim() || phoneInput.length < 10) {
      showToast('Please enter a valid 10-digit phone number.', 'error');
      return;
    }

    setSubmitting(true);
    try {
      await submitContactEnquiry({
        customerName: 'Quick Callback Request',
        phone: phoneInput,
        email: 'callback@royalenterprise.com',
        subject: 'Quick Callback Request from Website Banner',
        message: 'Client requested an immediate consultation callback via homepage banner.',
      });
      setSubmitted(true);
      showToast('Thank you! Our concierge director will call you shortly.', 'success');
      setPhoneInput('');
    } catch (err) {
      showToast('Unable to request callback. Opening quote modal...', 'info');
      onOpenQuote();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* WedMeGood Mobile App / Quick Consultation Band Style (Screenshot 3) */}
        <div className="bg-[#FFF0F3] border border-[#FFE4E8] rounded-2xl p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-roseBrand block">
              Direct Concierge Support
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#1F2937] tracking-tight">
              Plan Your Celebration with Royal Enterprise Today!
            </h2>
            
            {/* 3 Value Points (Screenshot 3 style) */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-2 text-xs sm:text-sm font-semibold text-[#374151]">
              <span className="flex items-center space-x-1.5 text-roseBrand">
                <CheckCircle2 className="w-4 h-4" />
                <span>Save Celebration Ideas</span>
              </span>
              <span className="flex items-center space-x-1.5 text-roseBrand">
                <CheckCircle2 className="w-4 h-4" />
                <span>Live Menu Tastings</span>
              </span>
              <span className="flex items-center space-x-1.5 text-roseBrand">
                <CheckCircle2 className="w-4 h-4" />
                <span>Free Checklist & Budget</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#4B5563] font-light leading-relaxed pt-1">
              Enter your mobile number below to receive an instant call from our chief event director.
            </p>

            {/* Quick Callback Input (Screenshot 3) */}
            {submitted ? (
              <div className="p-3 bg-white border border-emerald-300 rounded-lg text-emerald-800 text-xs sm:text-sm font-semibold flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Callback request received! A director will phone you within 15 minutes.</span>
              </div>
            ) : (
              <form onSubmit={handleQuickCallback} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-2 max-w-md">
                <div className="flex-1 flex items-center bg-white border border-slate-300 rounded-lg overflow-hidden px-3 py-2 shadow-inner focus-within:border-roseBrand">
                  <span className="text-sm font-bold text-[#374151] mr-2">🇮🇳 +91</span>
                  <input
                    type="tel"
                    placeholder="Enter 10-digit mobile number"
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    className="w-full text-xs sm:text-sm focus:outline-none bg-transparent font-medium"
                    maxLength={14}
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-brand px-6 py-2.5 text-xs uppercase font-bold rounded-lg shadow-sm shrink-0"
                >
                  {submitting ? 'Sending...' : 'Request Call'}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Telephone & Action */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4 text-center sm:text-left shadow-sm">
            <h4 className="font-serif text-xl font-bold text-[#1F2937]">
              Prefer an In-Person Consultation?
            </h4>
            <p className="text-xs sm:text-sm text-[#6B7280] font-light leading-relaxed">
              Visit our executive design atelier in Kolkata or speak with our planning director right now.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-lg border border-slate-300 text-xs font-bold text-[#1F2937] hover:border-roseBrand hover:text-roseBrand transition-colors"
              >
                <Phone className="w-4 h-4 text-roseBrand" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <button
                type="button"
                onClick={onOpenQuote}
                className="w-full sm:w-auto btn-brand px-6 py-2.5 text-xs uppercase font-semibold rounded-lg shadow-sm"
              >
                Plan An Event
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;