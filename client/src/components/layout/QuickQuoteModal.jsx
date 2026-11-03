import React, { useState } from 'react';
import Modal from '../common/Modal';
import Input from '../common/Input';
import Select from '../common/Select';
import Textarea from '../common/Textarea';
import Button from '../common/Button';
import { useNotification } from '../../context/NotificationContext';
import {
  submitEventEnquiry,
  submitCateringEnquiry,
  submitWeddingEnquiry,
  submitContactEnquiry,
} from '../../services/api';
import { Calendar, Users, MapPin, DollarSign, Send } from 'lucide-react';

const QuickQuoteModal = ({ isOpen, onClose }) => {
  const { showToast } = useNotification();
  const [activeTab, setActiveTab] = useState('events');
  const [loading, setLoading] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    eventCategory: 'Corporate Events',
    eventType: 'Wedding Reception',
    weddingDate: '',
    eventDate: '',
    eventLocation: '',
    guestCount: '',
    foodPreference: 'Both / Multi-Cuisine',
    packageType: 'Complete Wedding Package',
    estimatedBudget: '',
    subject: 'General Business Consultation',
    message: '',
    additionalRequirements: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      customerName: '',
      phone: '',
      email: '',
      eventCategory: 'Corporate Events',
      eventType: 'Wedding Reception',
      weddingDate: '',
      eventDate: '',
      eventLocation: '',
      guestCount: '',
      foodPreference: 'Both / Multi-Cuisine',
      packageType: 'Complete Wedding Package',
      estimatedBudget: '',
      subject: 'General Business Consultation',
      message: '',
      additionalRequirements: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let res;
      if (activeTab === 'events') {
        res = await submitEventEnquiry({
          customerName: formData.customerName,
          phone: formData.phone,
          email: formData.email,
          eventCategory: formData.eventCategory,
          eventDate: formData.eventDate,
          eventLocation: formData.eventLocation,
          guestCount: formData.guestCount ? parseInt(formData.guestCount, 10) : undefined,
          servicesRequired: 'Requested via Quick Quote',
          additionalRequirements: formData.additionalRequirements,
        });
      } else if (activeTab === 'catering') {
        res = await submitCateringEnquiry({
          customerName: formData.customerName,
          phone: formData.phone,
          email: formData.email,
          eventType: formData.eventType,
          eventDate: formData.eventDate,
          eventLocation: formData.eventLocation,
          guestCount: parseInt(formData.guestCount, 10) || 50,
          foodPreference: formData.foodPreference,
          menuRequirements: 'Quick Quote Request',
          additionalRequirements: formData.additionalRequirements,
        });
      } else if (activeTab === 'wedding') {
        res = await submitWeddingEnquiry({
          customerName: formData.customerName,
          phone: formData.phone,
          email: formData.email,
          weddingDate: formData.weddingDate || formData.eventDate,
          venuePreference: formData.eventLocation,
          guestCount: parseInt(formData.guestCount, 10) || 200,
          estimatedBudget: formData.estimatedBudget,
          packageType: formData.packageType,
          additionalRequirements: formData.additionalRequirements,
        });
      } else {
        res = await submitContactEnquiry({
          customerName: formData.customerName,
          phone: formData.phone,
          email: formData.email,
          subject: formData.subject,
          message: formData.message || formData.additionalRequirements || 'Quick quote consultation requested.',
        });
      }

      showToast(
        res.message || 'Your enquiry has been received! Our royal concierge will contact you shortly.',
        'success'
      );
      resetForm();
      onClose();
    } catch (err) {
      showToast(err.message || 'Submission failed. Please check the fields and try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Request a Bespoke Proposal"
      subtitle="Select your desired division and receive a tailored proposal within 24 hours."
      maxWidth="max-w-2xl"
    >
      {/* Division Tabs */}
      <div className="grid grid-cols-3 gap-1.5 bg-[#F6F3EE] p-1.5 rounded-[3px] border border-[#E8E1D5] mb-6">
        <button
          type="button"
          onClick={() => setActiveTab('events')}
          className={`py-2 text-[11px] uppercase tracking-[0.16em] rounded-[2px] transition-all font-medium ${
            activeTab === 'events'
              ? 'bg-maroon text-[#FFF8F0] shadow-sm'
              : 'text-[#6B645C] hover:text-[#141414] hover:bg-white/60'
          }`}
        >
          Event Mgmt
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('catering')}
          className={`py-2 text-[11px] uppercase tracking-[0.16em] rounded-[2px] transition-all font-medium ${
            activeTab === 'catering'
              ? 'bg-maroon text-[#FFF8F0] shadow-sm'
              : 'text-[#6B645C] hover:text-[#141414] hover:bg-white/60'
          }`}
        >
          Catering
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('wedding')}
          className={`py-2 text-[11px] uppercase tracking-[0.16em] rounded-[2px] transition-all font-medium ${
            activeTab === 'wedding'
              ? 'bg-maroon text-[#FFF8F0] shadow-sm'
              : 'text-[#6B645C] hover:text-[#141414] hover:bg-white/60'
          }`}
        >
          Wedding Planner
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Contact info row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            placeholder="e.g. Maharani Gayatri Devi / Mr. Sharma"
            required
          />
          <Input
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            required
          />
        </div>

        <Input
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="concierge@example.com"
          required
        />

        {/* Division specific fields */}
        {activeTab === 'events' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            />
            <Input
              label="Event Date"
              name="eventDate"
              type="date"
              value={formData.eventDate}
              onChange={handleChange}
              required
            />
            <Input
              label="Event City / Venue"
              name="eventLocation"
              value={formData.eventLocation}
              onChange={handleChange}
              placeholder="e.g. Mumbai, New Delhi, Palace Lawn"
              required
            />
            <Input
              label="Estimated Guests"
              name="guestCount"
              type="number"
              value={formData.guestCount}
              onChange={handleChange}
              placeholder="e.g. 250"
            />
          </div>
        )}

        {activeTab === 'catering' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Select
              label="Occasion / Event Type"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              options={[
                'Wedding Ceremony',
                'Reception Party',
                'Corporate Gala',
                'Birthday Party',
                'Anniversary Celebration',
                'Engagement Ceremony',
                'Private Gathering',
              ]}
              required
            />
            <Input
              label="Event Date"
              name="eventDate"
              type="date"
              value={formData.eventDate}
              onChange={handleChange}
              required
            />
            <Input
              label="Expected Guests"
              name="guestCount"
              type="number"
              value={formData.guestCount}
              onChange={handleChange}
              placeholder="e.g. 500"
              required
            />
            <Select
              label="Culinary Preference"
              name="foodPreference"
              value={formData.foodPreference}
              onChange={handleChange}
              options={[
                'Vegetarian Only',
                'Non-Vegetarian Included',
                'Both / Multi-Cuisine',
                'Pure Jain Feast Available',
              ]}
              required
            />
          </div>
        )}

        {activeTab === 'wedding' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Wedding Date"
              name="weddingDate"
              type="date"
              value={formData.weddingDate}
              onChange={handleChange}
              required
            />
            <Select
              label="Service Scope"
              name="packageType"
              value={formData.packageType}
              onChange={handleChange}
              options={[
                'Complete Wedding Package (End-to-End)',
                'Custom Individual Services',
              ]}
              required
            />
            <Input
              label="Preferred Destination / Venue"
              name="eventLocation"
              value={formData.eventLocation}
              onChange={handleChange}
              placeholder="e.g. Udaipur, Jaipur, Goa, Local Palace"
            />
            <Input
              label="Estimated Guest Count"
              name="guestCount"
              type="number"
              value={formData.guestCount}
              onChange={handleChange}
              placeholder="e.g. 400"
              required
            />
          </div>
        )}

        <Textarea
          label="Additional Details or Special Requests"
          name="additionalRequirements"
          value={formData.additionalRequirements}
          onChange={handleChange}
          placeholder="Share any specific dates, theme concepts, culinary preferences or budget ranges..."
          rows={3}
        />

        <div className="pt-2 flex items-center justify-end space-x-3">
          <Button variant="ghost" size="sm" onClick={onClose} disabled={loading}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            size="md"
            loading={loading}
            icon={Send}
            iconPosition="right"
          >
            Submit Enquiry
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default QuickQuoteModal;
