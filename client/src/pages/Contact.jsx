import React, { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import Input from '../components/common/Input';
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
    subject: '',
    message: '',
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
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      newErrors.message = 'Message must be at least 5 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      showToast('Please correct the highlighted fields.', 'error');
      return;
    }

    setLoading(true);
    try {
      const response = await submitContactEnquiry(formData);
      showToast(response.message || 'Thank you! Your enquiry has been received.', 'success');
      setSubmitted(true);
      setFormData({
        customerName: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
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
    <div className="bg-[#060A13] min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-20 sm:py-28 overflow-hidden border-b border-gold-500/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2.5 mb-3">
            <span className="w-4 h-px bg-gold-400/60" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-gold-400 font-semibold">
              Executive Desk
            </span>
            <span className="w-4 h-px bg-gold-400/60" />
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-100 mb-4 tracking-tight leading-tight">
            Contact Royal Enterprise
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300/90 font-light leading-relaxed">
            Connect with our management team for corporate partnerships, service consultations, or general inquiries.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Company Details Column */}
          <div className="lg:col-span-5 space-y-8 bg-[#090E1B] border border-slate-800/80 rounded-[3px] p-8 shadow-sm">
            <div>
              <h3 className="font-serif text-2xl font-bold text-slate-100 mb-1.5 tracking-wide">
                {COMPANY_INFO.name}
              </h3>
              <p className="text-[10.5px] text-gold-400 uppercase tracking-[0.18em] font-semibold mb-4">
                Corporate Headquarters & Concierge
              </p>
              <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-light">
                We invite you to connect with our client relationship managers to discuss your forthcoming celebration, corporate summit, or catering requirement.
              </p>
            </div>

            <div className="space-y-5 border-y border-slate-800/80 py-6">
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-[2px] bg-navy-950 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-[10.5px] uppercase tracking-wider text-slate-400 font-semibold">Office Address</h5>
                  <p className="text-xs sm:text-sm text-slate-200 mt-1 font-light leading-relaxed">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-[2px] bg-navy-950 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-[10.5px] uppercase tracking-wider text-slate-400 font-semibold">Telephone Desk</h5>
                  <p className="text-xs sm:text-sm text-slate-200 mt-1 font-medium">{COMPANY_INFO.phone}</p>
                  <p className="text-xs text-slate-400 font-light">{COMPANY_INFO.secondaryPhone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-[2px] bg-navy-950 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-[10.5px] uppercase tracking-wider text-slate-400 font-semibold">Email Correspondence</h5>
                  <p className="text-xs sm:text-sm text-slate-200 mt-1 font-light">{COMPANY_INFO.email}</p>
                  <p className="text-xs text-slate-400 font-light">{COMPANY_INFO.bookingEmail}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-[2px] bg-navy-950 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-[10.5px] uppercase tracking-wider text-slate-400 font-semibold">Operating Hours</h5>
                  <p className="text-xs sm:text-sm text-slate-200 mt-1 font-light">{COMPANY_INFO.officeHours}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h5 className="text-[10.5px] uppercase tracking-[0.16em] text-slate-400 font-semibold mb-3">
                Follow Royal Enterprise
              </h5>
              <div className="flex items-center space-x-2.5">
                <a
                  href={COMPANY_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-[2px] bg-navy-950 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-gold-300 hover:border-gold-500/40 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-[2px] bg-navy-950 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-gold-300 hover:border-gold-500/40 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-[2px] bg-navy-950 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-gold-300 hover:border-gold-500/40 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-[2px] bg-navy-950 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-gold-300 hover:border-gold-500/40 transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Business Enquiry Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-[#090E1B] border border-gold-500/25 rounded-[3px] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="h-[2px] bg-gradient-to-r from-transparent via-gold-400/60 to-transparent -mx-6 -mt-6 sm:-mx-10 sm:-mt-10 mb-6 sm:mb-8" />
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 bg-gold-500/15 border border-gold-400/60 rounded-[2px] flex items-center justify-center mx-auto text-gold-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-slate-100 tracking-wide">
                    Message Sent Successfully
                  </h3>
                  <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed font-light">
                    Thank you for reaching out to Royal Enterprise. Your message has been stored in our Contact Enquiries registry. A representative will contact you within one business day.
                  </p>
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-slate-800/80 pb-4 mb-4">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-100 tracking-wide">
                      Send a Business Enquiry
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 font-light">
                      Fill out the form below. All messages are directly integrated with Google Sheets.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input
                      label="Full Name"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleChange}
                      placeholder="e.g. Mr. Rajesh Khanna"
                      required
                      error={errors.customerName}
                    />
                    <Input
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                      error={errors.phone}
                    />
                  </div>

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

                  <Input
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Partnership inquiry, Wedding consultation, Media briefing"
                    required
                    error={errors.subject}
                  />

                  <Textarea
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please specify your requirements, proposed dates, and any relevant details..."
                    rows={5}
                    required
                    error={errors.message}
                  />

                  <div className="flex items-center justify-end pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      loading={loading}
                      icon={Send}
                      iconPosition="right"
                      className="w-full sm:w-auto"
                    >
                      Submit Message
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Google Maps Embed Placeholder */}
        <div className="mt-20">
          <SectionHeader
            badge="Find Our Headquarters"
            title="Location Map"
            subtitle="Visit our executive studio for personalized design and culinary menu tasting sessions."
          />

          <div className="relative rounded-sm overflow-hidden border border-slate-800 h-96 bg-navy-900/60 flex items-center justify-center text-center p-6">
            <iframe
              title="Royal Enterprise Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.21689648937!2d88.26495085845722!3d22.535564936991185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
