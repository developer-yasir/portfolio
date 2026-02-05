import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post('/api/contact', formData);
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const characterCount = formData.message.length;
  const maxCharacters = 500;

  return (
    <div className="max-w-2xl">
      <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
        Send Me a Message
      </h3>
      <p className="text-[var(--text-secondary)] mb-6">
        Have a question or want to work together? Fill out the form below.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[var(--text-primary)] mb-2"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg bg-[var(--card-bg)] border ${errors.name ? 'border-red-500' : 'border-[var(--card-border)]'
              } text-[var(--text-primary)] placeholder-gray-500 focus:outline-none focus:border-[var(--accent-color)] transition-colors`}
            placeholder="Your name"
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[var(--text-primary)] mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg bg-[var(--card-bg)] border ${errors.email ? 'border-red-500' : 'border-[var(--card-border)]'
              } text-[var(--text-primary)] placeholder-gray-500 focus:outline-none focus:border-[var(--accent-color)] transition-colors`}
            placeholder="your.email@example.com"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[var(--text-primary)] mb-2"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            maxLength={maxCharacters}
            className={`w-full px-4 py-3 rounded-lg bg-[var(--card-bg)] border ${errors.message ? 'border-red-500' : 'border-[var(--card-border)]'
              } text-[var(--text-primary)] placeholder-gray-500 focus:outline-none focus:border-[var(--accent-color)] transition-colors resize-none`}
            placeholder="Your message..."
            disabled={isSubmitting}
          />
          <div className="flex justify-between items-center mt-1">
            {errors.message ? (
              <p className="text-sm text-red-500">{errors.message}</p>
            ) : (
              <span></span>
            )}
            <p className={`text-sm ${characterCount > maxCharacters * 0.9 ? 'text-orange-500' : 'text-[var(--text-secondary)]'
              }`}>
              {characterCount}/{maxCharacters}
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${isSubmitting
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-[var(--accent-color)] hover:bg-emerald-600 hover:scale-105 active:scale-95'
            } text-[var(--background-color)] flex items-center justify-center gap-2`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;