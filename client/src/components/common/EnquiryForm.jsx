import React, { useState } from 'react';
import Input from './Input';
import Select from './Select';
import Textarea from './Textarea';
import CheckboxGroup from './CheckboxGroup';
import Button from './Button';
import { submitEventEnquiry } from '../../services/api';
import { useNotification } from '../../context/NotificationContext';
import { Send, CheckCircle2 } from 'lucide-react';

const EnquiryForm = ({
  formFields = [],
  initialValues = {},
  onSubmit,
  title = 'Event Management Enquiry Form',
  subtitle = 'Provide your event specifications below. All submissions are recorded in our master database for immediate executive review.',
  submitButtonText = 'Submit Event Enquiry',
}) => {
  const { showToast } = useNotification();
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Initialize form state dynamically from formFields and initialValues
  const [formData, setFormData] = useState(() => {
    const initialState = {};
    formFields.forEach((field) => {
      if (initialValues[field.name] !== undefined) {
        initialState[field.name] = initialValues[field.name];
      } else if (field.type === 'multiselect') {
        initialState[field.name] = [];
      } else if (field.type === 'select') {
        initialState[field.name] = field.options && field.options.length > 0 ? field.options[0] : '';
      } else {
        initialState[field.name] = '';
      }
    });
    return initialState;
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleMultiSelectChange = (fieldName, selectedValues) => {
    setFormData((prev) => ({ ...prev, [fieldName]: selectedValues }));
    if (errors[fieldName]) {
      setErrors((prev) => ({ ...prev, [fieldName]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    formFields.forEach((field) => {
      const val = formData[field.name];
      if (field.required) {
        if (field.type === 'multiselect') {
          if (!val || val.length === 0) {
            newErrors[field.name] = `${field.label} is required.`;
          }
        } else if (!val || String(val).trim() === '') {
          newErrors[field.name] = `${field.label} is required.`;
        }
      }
    });
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
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Fallback default submit handler
        const payload = {
          ...formData,
          guestCount: formData.guestCount ? parseInt(formData.guestCount, 10) : undefined,
          additionalRequirements: formData.packagePreference
            ? `[Package Preference: ${formData.packagePreference}] ${formData.additionalRequirements || ''}`.trim()
            : formData.additionalRequirements,
        };

        const res = await submitEventEnquiry(payload);
        showToast(res.message || 'Enquiry submitted successfully!', 'success');
        setSubmittedData({
          submissionId: res.submissionId,
          customerName: formData.customerName,
          category: formData.eventCategory || 'Event Management',
        });
      }
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
        showToast(err.message || 'Failed to submit enquiry. Please try again.', 'error');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    const resetState = {};
    formFields.forEach((field) => {
      resetState[field.name] = field.type === 'multiselect' ? [] : '';
    });
    setFormData(resetState);
  };

  return (
    <div id="event-enquiry-form" className="bg-white dark:bg-[#1C1917] border border-[#E8E0D5] dark:border-[#38312B] rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#C5A059]/60 to-transparent -mx-6 -mt-6 sm:-mx-10 sm:-mt-10 mb-6 sm:mb-8" />
      {submittedData ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-14 h-14 bg-[#6B1D2F]/10 border border-[#6B1D2F]/20 rounded-full flex items-center justify-center mx-auto text-[#6B1D2F] dark:text-[#E0CFA6]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#2B2625] dark:text-[#FAF8F5] tracking-tight">
            Enquiry Successfully Submitted
          </h3>
          <p className="text-[#5A524E] dark:text-[#D4CCC2] max-w-md mx-auto text-sm leading-relaxed font-normal">
            Thank you, <span className="text-[#6B1D2F] dark:text-[#E0CFA6] font-semibold">{submittedData.customerName}</span>. Your event request has been received by our team.
          </p>
          <div className="inline-block bg-[#FAF8F5] dark:bg-[#141210] border border-[#E8E0D5] dark:border-[#38312B] px-4 py-2 rounded-lg text-xs text-[#2B2625] dark:text-[#FAF8F5]">
            Reference ID: <span className="font-mono text-[#C5A059] dark:text-[#D4AF37] font-bold">{submittedData.submissionId}</span>
          </div>
          <div className="pt-4">
            <Button variant="outline" size="sm" onClick={handleReset}>
              Submit Another Event Enquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-[#E8E0D5] dark:border-[#38312B] pb-4 mb-6">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2625] dark:text-[#FAF8F5] tracking-tight">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs sm:text-sm text-[#5A524E] dark:text-[#D4CCC2] mt-1 font-normal">
                {subtitle}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {formFields.map((field) => {
              if (field.type === 'multiselect') {
                return (
                  <div key={field.name} className="sm:col-span-2 lg:col-span-3">
                    <CheckboxGroup
                      label={field.label}
                      options={field.options || []}
                      selected={formData[field.name] || []}
                      onChange={(selected) => handleMultiSelectChange(field.name, selected)}
                      error={errors[field.name]}
                      columns={3}
                    />
                  </div>
                );
              }

              if (field.type === 'textarea') {
                return (
                  <div key={field.name} className="sm:col-span-2 lg:col-span-3">
                    <Textarea
                      label={field.label}
                      name={field.name}
                      value={formData[field.name] || ''}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      rows={field.rows || 4}
                      required={field.required}
                      error={errors[field.name]}
                    />
                  </div>
                );
              }

              if (field.type === 'select') {
                return (
                  <div key={field.name} className="w-full">
                    <Select
                      label={field.label}
                      name={field.name}
                      value={formData[field.name] || ''}
                      onChange={handleChange}
                      options={field.options || []}
                      required={field.required}
                      error={errors[field.name]}
                    />
                  </div>
                );
              }

              return (
                <div key={field.name} className="w-full">
                  <Input
                    label={field.label}
                    name={field.name}
                    type={field.type || 'text'}
                    value={formData[field.name] || ''}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required={field.required}
                    error={errors[field.name]}
                  />
                </div>
              );
            })}
          </div>

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
              {submitButtonText}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default EnquiryForm;
