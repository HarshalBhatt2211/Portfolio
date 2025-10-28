import React, { useState } from 'react';
import { Button } from './Button';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xqaqalab', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
    }
  };

  // ⬇️ Your component must RETURN the JSX after the function definitions
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitSuccess && (
        <div className="mb-4 rounded-md bg-white/10 p-4 text-white backdrop-blur-sm">
          Thank you for your message! I'll get back to you soon.
        </div>
      )}
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border border-white/10 bg-white/5 px-4 py-2 text-white backdrop-blur-sm focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border border-white/10 bg-white/5 px-4 py-2 text-white backdrop-blur-sm focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="mt-1 block w-full rounded-md border border-white/10 bg-white/5 px-4 py-2 text-white backdrop-blur-sm focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10"
        />
      </div>

      <Button 
        type="submit" 
        variant="primary" 
        size="lg" 
        className="border border-white text-white hover:bg-white/10"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};
