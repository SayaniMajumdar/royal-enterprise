import React, { useState, useEffect } from 'react';
import Input from '../common/Input';
import Select from '../common/Select';
import Textarea from '../common/Textarea';
import CheckboxGroup from '../common/CheckboxGroup';
import Button from '../common/Button';
import { submitCateringEnquiry } from '../../services/api';
import { useNotification } from '../../context/NotificationContext';
import { Utensils, Send, CheckCircle2, Sparkles } from 'lucide-react';

const packageOptions = [
  'Package A: Classic Heritage Feast (Standard Non-Veg)',
  'Package B: The Grand Imperial Royal Spread (Premium Non-Veg)',
  'Package C: Pure Vegetarian Shubh Vivah Spread',
  'Custom Multi-Cuisine Menu / Discussion Required',
];

const cuisineOptions = [
  'Kolkata Style Phuchka & Papri Chaat Bar',
  'Live Charcoal Tandoori Kebab Station',
  'Wood-fired Artisanal Pizza & Pasta Bar',
  'Wok-tossed Pan-Asian Dim Sum & Noodles',
  'Live Jalebi, Malpua & Rabri Sweet Station',
  'Turkish Sand Coffee & Signature Mocktail Bar',
  'Royal Awadhi & Mughlai Dum Biryani',
  'Traditional Marwari Dal Baati Churma Counter',
  'Kolkata Bhetki Paturi & Daab Chingri Station',
];

const CateringEnquiryForm = ({ initialPackage = '' }) => {
  const { showToast } = useNotification();
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    eventType: 'Wedding Ceremony',
    selectedPackage: initialPackage || 'Package B: The Grand Imperial Royal Spread (Premium Non-Veg)',
    eventDate: '',
    eventLocation: '',
    guestCount: '',
    foodPreference: 'Vegetarian and Non-Vegetarian',
    budgetPerPlate: '₹1,200 - ₹1,800 / Plate',
    menuRequirements: [],
    additionalRequirements: '',
  });

  const [errors, setErrors] = useState({});

  // Sync when initialPackage changes from outside
  useEffect(() => {
    if (initialPackage) {
      setFormData((prev) => ({
        ...prev,
        selectedPackage: initialPackage,
      }));
    }
  }, [initialPackage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleMenuChange = (selected) => {
    setFormData((prev) => ({ ...prev, menuRequirements: selected }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.customerName.trim()) newErrors.customerName = 'Customer name is required.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!formData.email.trim()) newErrors.email = 'Email address is required.';
    if (!formData.eventType) newErrors.eventType = 'Please select an event type.';
    if (!formData.eventDate) newErrors.eventDate = 'Event date is required.';
    if (!formData.eventLocation.trim()) newErrors.eventLocation = 'Event location is required.';
    if (!formData.guestCount || parseInt(formData.guestCount, 10) < 1) {
      newErrors.guestCount = 'Valid guest count is required.';
    }
    if (!formData.foodPreference) newErrors.foodPreference = 'Food preference is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      showToast('Please correct the highlighted fields and try again.', 'error');
      return;
    }

    setLoading(true);
    try {
      const combinedMenuRequirements = [
        `Package: ${formData.selectedPackage}`,
        ...(formData.menuRequirements || []),
      ];

      const payload = {
        customerName: formData.customerName,
        phone: formData.phone,
        email: formData.email,
        eventType: formData.eventType,
        selectedPackage: formData.selectedPackage,
        eventDate: formData.eventDate,
        eventLocation: formData.eventLocation,
        guestCount: parseInt(formData.guestCount, 10),
        foodPreference: formData.foodPreference,
        budgetPerPlate: formData.budgetPerPlate,
        menuRequirements: combinedMenuRequirements,
        additionalRequirements: formData.additionalRequirements,
      };

      const response = await submitCateringEnquiry(payload);
      showToast(
        "Got it. We'll call you within 2 hours between 10:00 AM and 8:30 PM IST.",
        'success'
      );
      setSubmittedData({
        submissionId: response.submissionId,
        customerName: formData.customerName,
        guestCount: formData.guestCount,
        selectedPackage: formData.selectedPackage,
      });

      // Reset
      setFormData({
        customerName: '',
        phone: '',
        email: '',
        eventType: 'Wedding Ceremony',
        selectedPackage: initialPackage || 'Package B: The Grand Imperial Royal Spread (Premium Non-Veg)',
        eventDate: '',
        eventLocation: '',
        guestCount: '',
        foodPreference: 'Vegetarian and Non-Vegetarian',
        budgetPerPlate: '₹1,200 - ₹1,800 / Plate',
        menuRequirements: [],
        additionalRequirements: '',
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
        showToast(err.message || 'Failed to submit catering enquiry. Please try again.', 'error');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="catering-enquiry-form" className="bg-[#FFFDF9] border border-[#E8E1D5] rounded-[4px] p-6 sm:p-10 shadow-theevexa relative overflow-hidden">
      <div className="h-[2.5px] bg-gradient-to-r from-maroon via-gold-base to-maroon -mx-6 -mt-6 sm:-mx-10 sm:-mt-10 mb-6 sm:mb-8" />
      {submittedData ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-14 h-14 bg-emerald-50 border border-emerald-600/40 rounded-full flex items-center justify-center mx-auto text-emerald-700">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-3xl font-normal text-[#141414] tracking-tight">
            Catering Request Received
          </h3>
          <p className="text-[#554F47] max-w-md mx-auto text-sm leading-relaxed font-light">
            Thank you, <span className="text-maroon font-semibold">{submittedData.customerName}</span>. Your culinary enquiry for{' '}
            <strong className="text-maroon font-medium">{submittedData.guestCount} guests</strong> ({submittedData.selectedPackage}) has been saved to our master schedule.
          </p>
          <div className="inline-block bg-[#F6F3EE] border border-[#E8E1D5] px-4 py-2 rounded-[2px] text-xs text-[#3A352F]">
            Tracking ID: <span className="font-mono text-gold-dark font-bold">{submittedData.submissionId}</span>
          </div>
          <p className="text-xs text-[#524C44] font-medium">
            Got it. We will call you within 2 hours between 10:00 AM and 8:30 PM IST to confirm kitchen availability and schedule your food tasting.
          </p>
          <div className="pt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSubmittedData(null)}
            >
              Submit Another Catering Enquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-[#E8E1D5] pb-4 mb-6">
            <div className="flex items-center space-x-2 text-gold-dark text-xs font-semibold uppercase tracking-widest mb-1">
              <Utensils className="w-4 h-4" />
              <span>Direct Kitchen Reservation</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#141414] tracking-tight">
              Catering Services Enquiry Form
            </h3>
            <p className="text-xs sm:text-sm text-[#6B645C] mt-1 font-light">
              Select your desired package, event date, and guest count. All details are saved to our master Google Sheets database for immediate executive planning.
            </p>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <Input
              label="Customer / Family Name"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              placeholder="e.g. Mr. & Mrs. Singhania"
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
              placeholder="catering@example.com"
              required
              error={errors.email}
            />
          </div>

          {/* Event & Package Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Select
              label="Occasion / Event Type"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              options={[
                'Wedding Ceremony',
                'Reception Party (Boubhat)',
                'Corporate Gala Dinner',
                'Milestone Birthday Party',
                'Anniversary Celebration',
                'Engagement / Ring Ceremony',
                'Rice Ceremony (Annaprashan)',
                'Private Dinner / Cocktail Soiree',
                'Other Special Occasion',
              ]}
              required
              error={errors.eventType}
            />
            <Select
              label="Selected Catering Package"
              name="selectedPackage"
              value={formData.selectedPackage}
              onChange={handleChange}
              options={packageOptions}
              required
              error={errors.selectedPackage}
            />
            <Input
              label="Event Date"
              name="eventDate"
              type="date"
              value={formData.eventDate}
              onChange={handleChange}
              required
              error={errors.eventDate}
            />
            <Input
              label="Number of Guests"
              name="guestCount"
              type="number"
              value={formData.guestCount}
              onChange={handleChange}
              placeholder="e.g. 350"
              required
              error={errors.guestCount}
            />
          </div>

          {/* Venue, Dietary Preferences & Budget Per Plate */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <Input
              label="Event Location / Venue City"
              name="eventLocation"
              value={formData.eventLocation}
              onChange={handleChange}
              placeholder="e.g. ITC Royal Bengal, Kolkata / Destination Resort"
              required
              error={errors.eventLocation}
            />
            <Select
              label="Dietary / Food Preference"
              name="foodPreference"
              value={formData.foodPreference}
              onChange={handleChange}
              options={[
                'Vegetarian and Non-Vegetarian',
                'Pure Vegetarian Only',
                'Non-Vegetarian Only',
                'Pure Jain Preparation Only (No Onion/Garlic)',
                'Mixed with Dedicated Jain Section',
              ]}
              required
              error={errors.foodPreference}
            />
            <Select
              label="Budget Per Plate"
              name="budgetPerPlate"
              value={formData.budgetPerPlate}
              onChange={handleChange}
              options={[
                '₹850 - ₹1,200 / Plate',
                '₹1,200 - ₹1,800 / Plate',
                '₹1,800 - ₹2,500 / Plate',
                '₹2,500 - ₹3,500+ / Plate',
                'Custom / To be discussed',
              ]}
            />
          </div>

          {/* Live Counters and Cuisine Checkboxes */}
          <div>
            <CheckboxGroup
              label="Live Culinary Theatres & Special Counters (Select all that apply)"
              options={cuisineOptions}
              selected={formData.menuRequirements}
              onChange={handleMenuChange}
              columns={3}
            />
          </div>

          {/* Additional Requirements */}
          <Textarea
            label="Additional Culinary & Service Requirements"
            name="additionalRequirements"
            value={formData.additionalRequirements}
            onChange={handleChange}
            placeholder="Specify any signature fish/meat cuts (Pure Vetki vs. Katla, Daab Chingri), live beverage setups, cutlery preferences (Bone China / Brass Handi / Silverware), or timing details..."
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
              Submit Catering Enquiry
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CateringEnquiryForm;
