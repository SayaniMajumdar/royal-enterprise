import React, { useState } from 'react';
import Input from '../common/Input';
import Select from '../common/Select';
import Textarea from '../common/Textarea';
import CheckboxGroup from '../common/CheckboxGroup';
import Button from '../common/Button';
import { submitWeddingEnquiry } from '../../services/api';
import { useNotification } from '../../context/NotificationContext';
import { HeartHandshake, Send, CheckCircle2 } from 'lucide-react';

const brideServiceOptions = [
  'Bridal HD / Airbrush Makeup',
  'Hairstyling & Floral Tresses',
  'Designer Bridal Lehengas & Sarees',
  'Heritage Jewellery & Ornaments',
  'Bridal Mehendi Artist',
  'Bridal Accessories & Draping',
];

const groomServiceOptions = [
  'Groom Grooming & Hair Styling',
  'Designer Sherwani & Kurtas',
  'Safa (Turban) & Kalgi Brooch',
  'Royal Sword & Mojaris',
  'Baraat Band & Vintage Car Entry',
];

const decorationOptions = [
  'Vedic Mandap with Fresh Florals',
  'Royal Wedding Stage & Backdrop',
  'Grand Entrance Archways',
  'Ambient Architectural & Fairy Lighting',
  'Themed Mehendi & Sangeet Sets',
];

const photographyOptions = [
  'Cinematic 4K Wedding Film',
  'Pre-Wedding & Teaser Shoot',
  'Candid & Portrait Photography',
  'Drone Aerial Coverage',
  'Handcrafted Leather Albums',
];

const coreWeddingServices = [
  { id: 'venueBooking', label: 'Venue Booking', key: 'venueBookingRequired' },
  { id: 'decoration', label: 'Decoration & Mandap', key: 'decorationRequired' },
  { id: 'bridalMakeup', label: 'Bridal Makeup', key: 'bridalMakeupRequired' },
  { id: 'jewellery', label: 'Jewellery', key: 'jewelleryRequired' },
  { id: 'weddingSaree', label: 'Wedding Saree / Attire', key: 'weddingSareeRequired' },
  { id: 'photography', label: 'Photography & Film', key: 'photographyRequired' },
  { id: 'catering', label: 'Catering Services', key: 'cateringRequired' },
  { id: 'entertainment', label: 'Entertainment & DJ', key: 'entertainmentRequired' },
];

const WeddingEnquiryForm = ({ initialPackageType = 'Complete Wedding Package' }) => {
  const { showToast } = useNotification();
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const [serviceChecks, setServiceChecks] = useState({
    venueBookingRequired: true,
    decorationRequired: true,
    bridalMakeupRequired: true,
    jewelleryRequired: true,
    weddingSareeRequired: true,
    photographyRequired: true,
    cateringRequired: true,
    entertainmentRequired: true,
  });

  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    weddingDate: '',
    venuePreference: '',
    guestCount: '',
    estimatedBudget: '₹25 Lakhs - ₹50 Lakhs',
    brideServices: [],
    groomServices: [],
    decorationRequirements: [],
    cateringRequirements: 'Imperial Royal Feast (Veg & Non-Veg)',
    photographyRequirements: 'Cinematic Film + Candid Coverage',
    packageType: initialPackageType,
    additionalRequirements: '',
  });

  const [errors, setErrors] = useState({});

  const handleServiceCheck = (key) => {
    setServiceChecks((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.customerName.trim()) newErrors.customerName = 'Customer name is required.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!formData.email.trim()) newErrors.email = 'Email address is required.';
    if (!formData.weddingDate) newErrors.weddingDate = 'Wedding date is required.';
    if (!formData.guestCount || parseInt(formData.guestCount, 10) < 1) {
      newErrors.guestCount = 'Expected guest count is required.';
    }
    if (!formData.packageType) newErrors.packageType = 'Please select package type.';

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
        guestCount: parseInt(formData.guestCount, 10),
        totalWeddingBudget: formData.estimatedBudget,
        weddingVenueLocation: formData.venuePreference,
        venueBookingRequired: serviceChecks.venueBookingRequired ? 'Yes' : 'No',
        decorationRequired: serviceChecks.decorationRequired ? 'Yes' : 'No',
        bridalMakeupRequired: serviceChecks.bridalMakeupRequired ? 'Yes' : 'No',
        jewelleryRequired: serviceChecks.jewelleryRequired ? 'Yes' : 'No',
        weddingSareeRequired: serviceChecks.weddingSareeRequired ? 'Yes' : 'No',
        photographyRequired: serviceChecks.photographyRequired ? 'Yes' : 'No',
        cateringRequired: serviceChecks.cateringRequired ? 'Yes' : 'No',
        entertainmentRequired: serviceChecks.entertainmentRequired ? 'Yes' : 'No',
        otherRequirements: formData.additionalRequirements,
      };

      const response = await submitWeddingEnquiry(payload);
      showToast(
        "Got it. We'll call you within 2 hours between 10:00 AM and 8:30 PM IST.",
        'success'
      );
      setSubmittedData({
        submissionId: response.submissionId,
        customerName: formData.customerName,
        packageType: formData.packageType,
      });

      // Reset
      setFormData({
        customerName: '',
        phone: '',
        email: '',
        weddingDate: '',
        venuePreference: '',
        guestCount: '',
        estimatedBudget: '₹25 Lakhs - ₹50 Lakhs',
        brideServices: [],
        groomServices: [],
        decorationRequirements: [],
        cateringRequirements: 'Imperial Royal Feast (Veg & Non-Veg)',
        photographyRequirements: 'Cinematic Film + Candid Coverage',
        packageType: initialPackageType,
        additionalRequirements: '',
      });
      setServiceChecks({
        venueBookingRequired: true,
        decorationRequired: true,
        bridalMakeupRequired: true,
        jewelleryRequired: true,
        weddingSareeRequired: true,
        photographyRequired: true,
        cateringRequired: true,
        entertainmentRequired: true,
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
        showToast(err.message || 'Failed to submit wedding enquiry.', 'error');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="wedding-enquiry-form" className="bg-[#FFFDF9] border border-[#E8E1D5] rounded-[4px] p-6 sm:p-10 shadow-theevexa relative overflow-hidden">
      <div className="h-[2.5px] bg-gradient-to-r from-maroon via-gold-base to-maroon -mx-6 -mt-6 sm:-mx-10 sm:-mt-10 mb-6 sm:mb-8" />
      {submittedData ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-14 h-14 bg-emerald-50 border border-emerald-600/40 rounded-full flex items-center justify-center mx-auto text-emerald-700">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-3xl font-normal text-[#141414] tracking-tight">
            Wedding Proposal Request Confirmed
          </h3>
          <p className="text-[#554F47] max-w-md mx-auto text-sm leading-relaxed font-light">
            Congratulations, <span className="text-maroon font-semibold">{submittedData.customerName}</span>. Your wedding inquiry for{' '}
            <span className="text-maroon font-semibold">{submittedData.packageType}</span> has been logged into our master database.
          </p>
          <div className="inline-block bg-[#F6F3EE] border border-[#E8E1D5] px-4 py-2 rounded-[2px] text-xs text-[#3A352F]">
            Tracking ID: <span className="font-mono text-gold-dark font-bold">{submittedData.submissionId}</span>
          </div>
          <p className="text-xs text-[#524C44] font-medium">
            Got it. We will call you within 2 hours between 10:00 AM and 8:30 PM IST to discuss dates and venue possibilities.
          </p>
          <div className="pt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSubmittedData(null)}
            >
              Submit Another Wedding Enquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-[#E8E1D5] pb-4 mb-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#141414] tracking-tight">
              Wedding Planner Enquiry Form
            </h3>
            <p className="text-xs sm:text-sm text-[#6B645C] mt-1 font-light">
              Share your wedding aspirations. All responses are logged automatically into Google Sheets for confidential executive planning.
            </p>
          </div>

          {/* Couple / Contact Information */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <Input
              label="Couple / Family Contact Name"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              placeholder="e.g. Ananya Roy & Rohan Mehra"
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
              placeholder="wedding@example.com"
              required
              error={errors.email}
            />
          </div>

          {/* Wedding Logistics */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
            <Input
              label="Auspicious Wedding Date"
              name="weddingDate"
              type="date"
              value={formData.weddingDate}
              onChange={handleChange}
              required
              error={errors.weddingDate}
            />
            <Input
              label="Venue Preference / Destination"
              name="venuePreference"
              value={formData.venuePreference}
              onChange={handleChange}
              placeholder="e.g. Udaipur Palace / Local 5-Star"
            />
            <Input
              label="Expected Guest Count"
              name="guestCount"
              type="number"
              value={formData.guestCount}
              onChange={handleChange}
              placeholder="e.g. 500"
              required
              error={errors.guestCount}
            />
            <Select
              label="Estimated Budget Range"
              name="estimatedBudget"
              value={formData.estimatedBudget}
              onChange={handleChange}
              options={[
                '₹10 Lakhs - ₹25 Lakhs',
                '₹25 Lakhs - ₹50 Lakhs',
                '₹50 Lakhs - ₹1 Crore',
                '₹1 Crore - ₹3 Crores',
                '₹3 Crores+ (Ultra Luxury / Destination)',
                'Flexible / Discussion Required',
              ]}
            />
          </div>

          {/* Package Type Radio / Select */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 bg-[#050811] p-4 border border-slate-800/80 rounded-[2px]">
            <Select
              label="Package Scope"
              name="packageType"
              value={formData.packageType}
              onChange={handleChange}
              options={[
                'Complete Wedding Package (End-to-End Responsibility)',
                'Custom Individual Services Only',
              ]}
              required
              error={errors.packageType}
            />
            <Select
              label="Catering Arrangement Scope"
              name="cateringRequirements"
              value={formData.cateringRequirements}
              onChange={handleChange}
              options={[
                'Full Wedding Feast (Veg & Non-Veg Banquets)',
                'Pure Vegetarian & Jain Royal Feast',
                'Multi-Cuisine Global Live Counters',
                'Already Arranged by Venue',
              ]}
            />
          </div>

          {/* Key Wedding Services Checklist (Mapped to Database Columns) */}
          <div className="bg-[#FAF8F4] p-5 sm:p-6 border border-[#E8E1D5] rounded-[3px]">
            <label className="block text-[11px] uppercase tracking-[0.2em] text-gold-dark font-medium mb-3">
              Required Wedding Services Scope (Database Synchronized)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {coreWeddingServices.map((svc) => (
                <label
                  key={svc.id}
                  className={`flex items-center space-x-2 text-xs p-3 rounded-[3px] border cursor-pointer transition-colors ${
                    serviceChecks[svc.key]
                      ? 'border-maroon/60 bg-maroon/5 text-maroon font-medium'
                      : 'border-[#E8E1D5] bg-[#FFFDF9] text-[#3A352F] hover:border-[#D5CCC0]'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={serviceChecks[svc.key]}
                    onChange={() => handleServiceCheck(svc.key)}
                    className="w-4 h-4 rounded-[2px] border-[#D5CCC0] text-maroon focus:ring-maroon cursor-pointer"
                  />
                  <span className="select-none">{svc.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Bride Services Multi-select */}
          <div>
            <CheckboxGroup
              label="Bride Services Required"
              options={brideServiceOptions}
              selected={formData.brideServices}
              onChange={(items) => setFormData((p) => ({ ...p, brideServices: items }))}
              columns={3}
            />
          </div>

          {/* Groom Services Multi-select */}
          <div>
            <CheckboxGroup
              label="Groom Services Required"
              options={groomServiceOptions}
              selected={formData.groomServices}
              onChange={(items) => setFormData((p) => ({ ...p, groomServices: items }))}
              columns={3}
            />
          </div>

          {/* Decoration & Themes */}
          <div>
            <CheckboxGroup
              label="Decoration & Theme Requirements"
              options={decorationOptions}
              selected={formData.decorationRequirements}
              onChange={(items) => setFormData((p) => ({ ...p, decorationRequirements: items }))}
              columns={3}
            />
          </div>

          {/* Photography Requirements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Select
              label="Photography & Videography Scope"
              name="photographyRequirements"
              value={formData.photographyRequirements}
              onChange={handleChange}
              options={[
                'Complete Cinematic Film + Candid + Drone + Heirloom Albums',
                'Pre-Wedding Shoot + Traditional Wedding Coverage',
                'Candid Photography Only',
                'Already Arranged by Client',
              ]}
            />
          </div>

          {/* Additional Requirements */}
          <Textarea
            label="Additional Wedding Wishes, Rituals & Special Requests"
            name="additionalRequirements"
            value={formData.additionalRequirements}
            onChange={handleChange}
            placeholder="Tell us about specific cultural rituals, celebrity performances, logistics, hospitality desires, or color palettes..."
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
              Submit Wedding Enquiry
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default WeddingEnquiryForm;
