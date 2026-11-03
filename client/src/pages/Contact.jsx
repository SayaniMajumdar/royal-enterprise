import React, { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import Input from '../components/common/Input';
import Select from '../components/common/Select';
import Textarea from '../components/common/Textarea';
import Button from '../components/common/Button';
import { submitContactEnquiry } from '../services/api';
import { useNotification } from '../context/NotificationContext';
import { COMPANY_INFO } from '../data/mockData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  ExternalLink,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
} from 'lucide-react';

const Contact = () => {
  const { showToast } = useNotification();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    eventType: 'Wedding Ceremony & Reception',
    eventDate: '',
    guestCount: '',
    notes: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.customerName.trim()) newErrors.customerName = 'Full name is required.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!formData.email.trim()) newErrors.email = 'Email address is required.';
    if (!formData.eventDate) newErrors.eventDate = 'Event date (or target month) is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      showToast('Please fill in the required fields.', 'error');
      return;
    }

    setLoading(true);
    try {
      const subject = `Enquiry for ${formData.eventType} (${formData.eventDate})`;
      const message = `Event Type: ${formData.eventType}\nDate: ${formData.eventDate}\nApproximate Guests: ${
        formData.guestCount || 'Not specified'
      }\nDetails: ${formData.notes || 'Please contact me to discuss options.'}`;

      const response = await submitContactEnquiry({
        customerName: formData.customerName,
        phone: formData.phone,
        email: formData.email,
        subject,
        message,
      });

      showToast(
        "Got it. We'll call you within 2 hours between 10:00 AM and 8:30 PM IST.",
        'success'
      );
      setSubmitted(true);
      setFormData({
        customerName: '',
        phone: '',
        email: '',
        eventType: 'Wedding Ceremony & Reception',
        eventDate: '',
        guestCount: '',
        notes: '',
      });
    } catch (err) {
      if (err.validationErrors && err.validationErrors.length > 0) {
        const backendErrors = {};
        err.validationErrors.forEach((e) => {
          backendErrors[e.field] = e.message;
        });
        setErrors(backendErrors);
        const detail = err.validationErrors.map((e) => e.message).join(' • ');
        showToast(detail, 'error');
      } else {
        showToast(err.message || 'Unable to submit enquiry. Please try again.', 'error');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#1F1D1A]">
      
      {/* Hero Banner */}
      <section className="bg-white pt-32 sm:pt-40 pb-14 sm:pb-20 border-b border-[#E5DED3]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-3">
            <span className="stamp-tag">Direct Desk • Kolkata</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#1F1D1A] leading-tight">
              Get in touch with Royal Enterprise.
            </h1>
            <p className="text-base sm:text-lg text-[#524C44] leading-relaxed">
              Tell us about your date and guest count. We'll check our central kitchen calendar and call you back directly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Real Address, Phone, Hours, Google Maps */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct WhatsApp Callout Banner */}
            <div className="p-6 bg-[#E8F5E9] border border-emerald-300 rounded-lg space-y-3">
              <div className="flex items-center space-x-2 text-emerald-900 font-bold text-sm">
                <MessageSquare className="w-5 h-5 text-emerald-700" />
                <span>Prefer a quick WhatsApp chat?</span>
              </div>
              <p className="text-xs text-emerald-800 leading-relaxed">
                Send us a message directly with your event date and estimated guests. We respond during business hours within minutes.
              </p>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20would%20like%20to%20discuss%20an%20event.`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp py-2.5 px-4 text-xs font-semibold inline-flex items-center space-x-2 rounded shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message us on WhatsApp: {COMPANY_INFO.displayPhone}</span>
              </a>
            </div>

            {/* Address & Office Details */}
            <div className="bg-white border border-[#E5DED3] rounded-lg p-6 sm:p-7 space-y-6 shadow-paper-sm">
              <div className="space-y-1">
                <h3 className="font-serif text-xl font-bold text-[#1F1D1A]">
                  Royal Enterprise Office
                </h3>
                <span className="text-xs text-[#6E1423] font-medium">
                  Events • Catering • Wedding Planning
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#3B3630]">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#6E1423] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#1F1D1A]">Address:</span>
                    <span className="leading-relaxed block text-[#524C44]">{COMPANY_INFO.address}</span>
                    <a
                      href={COMPANY_INFO.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#6E1423] font-semibold hover:underline inline-flex items-center space-x-1 mt-1 text-xs"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-[#6E1423] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#1F1D1A]">Phone / WhatsApp:</span>
                    <a
                      href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-[#6E1423] font-semibold hover:underline block"
                    >
                      {COMPANY_INFO.displayPhone}
                    </a>
                    <span className="text-xs text-[#7D756A] block">Alternate: {COMPANY_INFO.secondaryPhone}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-[#6E1423] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#1F1D1A]">Email:</span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-[#6E1423] font-semibold hover:underline"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-[#6E1423] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#1F1D1A]">Working Hours:</span>
                    <span className="text-[#524C44] block">{COMPANY_INFO.officeHours}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[#E5DED3]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7D756A] block mb-2">
                  Social Channels
                </span>
                <div className="flex items-center space-x-2 text-[#524C44]">
                  <a
                    href={COMPANY_INFO.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-[#FAF7F2] rounded hover:text-[#6E1423] hover:bg-[#FAF2F3] transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={COMPANY_INFO.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-[#FAF7F2] rounded hover:text-[#6E1423] hover:bg-[#FAF2F3] transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={COMPANY_INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-[#FAF7F2] rounded hover:text-[#6E1423] hover:bg-[#FAF2F3] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={COMPANY_INFO.socials.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-[#FAF7F2] rounded hover:text-[#6E1423] hover:bg-[#FAF2F3] transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Clean, Direct Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E5DED3] rounded-lg p-7 sm:p-10 shadow-paper-sm">
              <div className="border-b border-[#E5DED3] pb-4 mb-6">
                <span className="text-xs uppercase font-bold tracking-wider text-[#6E1423] block mb-1">
                  Enquiry Form
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1D1A]">
                  Check dates and ask questions
                </h2>
                <p className="text-xs text-[#524C44] mt-1">
                  We ask only for what we need to verify dates and catering requirements.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 bg-emerald-50 border border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-700">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1F1D1A]">
                    Got it. Your enquiry is received.
                  </h3>
                  <p className="text-sm text-[#524C44] max-w-md mx-auto leading-relaxed">
                    We will call you within <strong>2 hours</strong> between <strong>10:00 AM and 8:30 PM IST</strong> to confirm details.
                  </p>
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn-outline px-5 py-2 text-xs font-semibold"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Your Name"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleChange}
                      placeholder="e.g. Subir Mukherjee"
                      required
                      error={errors.customerName}
                    />
                    <Input
                      label="Phone / WhatsApp Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98300 00000"
                      required
                      error={errors.phone}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      required
                      error={errors.email}
                    />
                    <Select
                      label="Event Type"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      options={[
                        'Wedding Ceremony & Reception',
                        'In-House Catering Banquet',
                        'Corporate Conference & Summit',
                        'Milestone Birthday / Anniversary',
                        'Stage Design & Audio Setup',
                        'General Question / Other',
                      ]}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Event Date (or target month)"
                      name="eventDate"
                      type="text"
                      value={formData.eventDate}
                      onChange={handleChange}
                      placeholder="e.g. 15 Dec 2026 or Jan 2027"
                      required
                      error={errors.eventDate}
                    />
                    <Input
                      label="Approximate Guest Count"
                      name="guestCount"
                      type="text"
                      value={formData.guestCount}
                      onChange={handleChange}
                      placeholder="e.g. 250 or 800"
                    />
                  </div>

                  <Textarea
                    label="Notes or specific requests"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Tell us about the venue, dietary preferences (e.g. pure-veg Marwari or Bengali Biye Bari), or budget..."
                    rows={4}
                  />

                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <span className="text-xs text-[#7D756A]">
                      We respect your privacy. No promotional spam calls.
                    </span>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-maroon px-7 py-3 text-xs font-semibold inline-flex items-center justify-center space-x-2 shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{loading ? 'Submitting...' : 'Send enquiry'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
