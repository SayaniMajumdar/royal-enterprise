import React, { useState } from 'react';
import Input from '../common/Input';
import Select from '../common/Select';
import Textarea from '../common/Textarea';
import CheckboxGroup from '../common/CheckboxGroup';
import Button from '../common/Button';
import { submitEventEnquiry } from '../../services/api';
import { useNotification } from '../../context/NotificationContext';
import { Send, CheckCircle2 } from 'lucide-react';

const serviceOptions = [
  'Corporate Conference & Summit',
  'Product Launch & Reveal',
  'Annual Award Ceremony',
  'Press Conference & Media Event',
  'Custom Stage & 3D Set Design',
  'Acoustic Sound & Concert Audio',
  'Intelligent Stage Lighting & Trussing',
  'Milestone Birthday Celebration',
  'Cultural & Social Gathering',
  'College / Institutional Fest',
  'Artist & Celebrity Management',
  'Turnkey Event Production',
];

const EventEnquiryForm = ({ initialCategory = '' }) => {
  const { showToast } = useNotification();
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    eventCategory: initialCategory || 'Corporate Events',
    eventDate: '',
    eventLocation: '',
    guestCount: '',
    servicesRequired: [],
    additionalRequirements: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleServicesChange = (selectedServices) => {
    setFormData((prev) => ({ ...prev, servicesRequired: selectedServices }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.customerName.trim()) newErrors.customerName = 'Customer name is required.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!formData.email.trim()) newErrors.email = 'Email address is required.';
    if (!formData.eventCategory) newErrors.eventCategory = 'Please select an event category.';
    if (!formData.eventDate) newErrors.eventDate = 'Event date is required.';
    if (!formData.eventLocation.trim()) newErrors.eventLocation = 'Event location is required.';

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
      const payload = {
        ...formData,
        guestCount: formData.guestCount ? parseInt(formData.guestCount, 10) : undefined,
      };

      const response = await submitEventEnquiry(payload);
      showToast(
        "Got it. We'll call you within 2 hours between 10:00 AM and 8:30 PM IST.",
        'success'
      );
      setSubmittedData({
        submissionId: response.submissionId,
        customerName: formData.customerName,
        eventCategory: formData.eventCategory,
      });

      // Reset form
      setFormData({
        customerName: '',
        phone: '',
        email: '',
        eventCategory: initialCategory || 'Corporate Events',
        eventDate: '',
        eventLocation: '',
        guestCount: '',
        servicesRequired: [],
        additionalRequirements: '',
      });
    } catch (err) {
      if (err.validationErrors && err.validationErrors.length > 0) {
        const backendErrors = {};
        err.validationErrors.forEach((e) => {
          backendErrors[e.field] = e.message;
        });
        setErrors(backendErrors);
      }
      showToast(err.message || 'Failed to submit enquiry. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="event-enquiry-form" className="bg-[#FFFDF9] border border-[#E8E1D5] rounded-[4px] p-6 sm:p-10 shadow-theevexa relative overflow-hidden">
      <div className="h-[2.5px] bg-gradient-to-r from-maroon via-gold-base to-maroon -mx-6 -mt-6 sm:-mx-10 sm:-mt-10 mb-6 sm:mb-8" />
      {submittedData ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-14 h-14 bg-emerald-50 border border-emerald-600/40 rounded-full flex items-center justify-center mx-auto text-emerald-700">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-3xl font-normal text-[#141414] tracking-tight">
            Enquiry Successfully Submitted
          </h3>
          <p className="text-[#554F47] max-w-md mx-auto text-sm leading-relaxed font-light">
            Thank you, <span className="text-maroon font-semibold">{submittedData.customerName}</span>. Your event request for{' '}
            <span className="text-maroon font-semibold">{submittedData.eventCategory}</span> has been logged into our master database.
          </p>
          <div className="inline-block bg-[#F6F3EE] border border-[#E8E1D5] px-4 py-2 rounded-[2px] text-xs text-[#3A352F]">
            Tracking ID: <span className="font-mono text-gold-dark font-bold">{submittedData.submissionId}</span>
          </div>
          <p className="text-xs text-[#524C44] font-medium">
            Got it. We will call you within 2 hours between 10:00 AM and 8:30 PM IST to discuss dates and technical logistics.
          </p>
          <div className="pt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSubmittedData(null)}
            >
              Submit Another Event Enquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-[#E8E1D5] pb-4 mb-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#141414] tracking-tight">
              Event Management Enquiry Form
            </h3>
            <p className="text-xs sm:text-sm text-[#6B645C] mt-1 font-light">
              Provide your event specifications below. All submissions are recorded in our master database for immediate executive review.
            </p>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <Input
              label="Customer / Organization Name"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              placeholder="e.g. Reliance / Mr. Aditya Birla"
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
            <Input
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="events@company.com"
              required
              error={errors.email}
            />
          </div>

          {/* Event Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <Select
              label="Event Category"
              name="eventCategory"
              value={formData.eventCategory}
              onChange={handleChange}
              options={[
                'Corporate Events',
                'Media Events',
                'Other Events and Programs',
                'Stage and Set Design',
              ]}
              required
              error={errors.eventCategory}
            />
            <Input
              label="Proposed Event Date"
              name="eventDate"
              type="date"
              value={formData.eventDate}
              onChange={handleChange}
              required
              error={errors.eventDate}
            />
            <Input
              label="Event Location / Venue City"
              name="eventLocation"
              value={formData.eventLocation}
              onChange={handleChange}
              placeholder="e.g. Mumbai, BKC, Hyatt Ballroom"
              required
              error={errors.eventLocation}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <Input
              label="Expected Guest / Delegate Count"
              name="guestCount"
              type="number"
              value={formData.guestCount}
              onChange={handleChange}
              placeholder="e.g. 500"
              error={errors.guestCount}
            />
          </div>

          {/* Multi-select Services */}
          <div>
            <CheckboxGroup
              label="Services Required (Select all that apply)"
              options={serviceOptions}
              selected={formData.servicesRequired}
              onChange={handleServicesChange}
              columns={3}
            />
          </div>

          {/* Additional Requirements */}
          <Textarea
            label="Additional Event Requirements / Theme Vision"
            name="additionalRequirements"
            value={formData.additionalRequirements}
            onChange={handleChange}
            placeholder="Describe your audiovisual needs, stage specifications, celebrity artists, or security protocols..."
            rows={4}
          />

          <div className="flex items-center justify-end pt-4">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={loading}
              icon={Send}
              iconPosition="right"
              className="w-full sm:w-auto"
            >
              Submit Event Enquiry
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default EventEnquiryForm;
