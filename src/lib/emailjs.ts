import emailjs from '@emailjs/browser';

// EmailJS Configuration
export const EMAILJS_CONFIG = {
  // Get these values from your EmailJS dashboard: https://dashboard.emailjs.com/
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
};

// Initialize EmailJS
export const initializeEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};

// Send email function
export const sendEmail = async (templateParams: {
  from_name: string;
  from_email: string;
  company?: string;
  message: string;
}) => {
  try {
    const result = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    );
    
    return {
      success: true,
      message: 'Email sent successfully!',
      result
    };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return {
      success: false,
      message: 'Failed to send email. Please try again.',
      error
    };
  }
};

// Validate email format
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate form data
export const validateFormData = (data: {
  name: string;
  email: string;
  message: string;
}) => {
  const errors: string[] = [];
  
  if (!data.name.trim()) {
    errors.push('Name is required');
  }
  
  if (!data.email.trim()) {
    errors.push('Email is required');
  } else if (!validateEmail(data.email)) {
    errors.push('Please enter a valid email address');
  }
  
  if (!data.message.trim()) {
    errors.push('Message is required');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};
