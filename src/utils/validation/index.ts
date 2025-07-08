import { VALIDATION_RULES, ERROR_MESSAGES } from '../constants';

// Type definitions
export interface ValidationRule {
  test: (value: any) => boolean;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  message?: string;
  field?: string;
}

export interface FormValidationResult {
  isValid: boolean;
  errors: ValidationResult[];
}

// Common validation rules
export const validationRules = {
  required: (value: any): boolean => {
    if (typeof value === 'string') {
      return value.trim().length > 0;
    }
    return value !== null && value !== undefined;
  },
  
  email: (value: string): boolean => {
    return VALIDATION_RULES.EMAIL.test(value);
  },
  
  phone: (value: string): boolean => {
    return VALIDATION_RULES.PHONE.test(value);
  },
  
  minLength: (min: number) => (value: string): boolean => {
    return value.length >= min;
  },
  
  maxLength: (max: number) => (value: string): boolean => {
    return value.length <= max;
  },
  
  url: (value: string): boolean => {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  },
  
  numeric: (value: string): boolean => {
    return !isNaN(Number(value)) && isFinite(Number(value));
  },
  
  positive: (value: number): boolean => {
    return value > 0;
  },
  
  range: (min: number, max: number) => (value: number): boolean => {
    return value >= min && value <= max;
  },
  
  pattern: (regex: RegExp) => (value: string): boolean => {
    return regex.test(value);
  },
  
  custom: (validator: (value: any) => boolean) => validator,
};

// Validation messages
export const validationMessages = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  phone: 'Please enter a valid phone number',
  url: 'Please enter a valid URL',
  numeric: 'Please enter a valid number',
  positive: 'Please enter a positive number',
  minLength: (min: number) => `Must be at least ${min} characters`,
  maxLength: (max: number) => `Must be no more than ${max} characters`,
  range: (min: number, max: number) => `Must be between ${min} and ${max}`,
  pattern: 'Please enter a valid value',
  custom: 'Please enter a valid value',
};

// Field-specific validators
export const fieldValidators = {
  name: (value: string): ValidationResult => {
    if (!validationRules.required(value)) {
      return { isValid: false, message: validationMessages.required, field: 'name' };
    }
    
    if (!validationRules.minLength(VALIDATION_RULES.NAME_MIN_LENGTH)(value)) {
      return { isValid: false, message: validationMessages.minLength(VALIDATION_RULES.NAME_MIN_LENGTH), field: 'name' };
    }
    
    if (!validationRules.maxLength(VALIDATION_RULES.NAME_MAX_LENGTH)(value)) {
      return { isValid: false, message: validationMessages.maxLength(VALIDATION_RULES.NAME_MAX_LENGTH), field: 'name' };
    }
    
    return { isValid: true, field: 'name' };
  },
  
  email: (value: string): ValidationResult => {
    if (!validationRules.required(value)) {
      return { isValid: false, message: validationMessages.required, field: 'email' };
    }
    
    if (!validationRules.email(value)) {
      return { isValid: false, message: validationMessages.email, field: 'email' };
    }
    
    return { isValid: true, field: 'email' };
  },
  
  phone: (value: string): ValidationResult => {
    if (!validationRules.required(value)) {
      return { isValid: false, message: validationMessages.required, field: 'phone' };
    }
    
    if (!validationRules.phone(value)) {
      return { isValid: false, message: validationMessages.phone, field: 'phone' };
    }
    
    return { isValid: true, field: 'phone' };
  },
  
  password: (value: string): ValidationResult => {
    if (!validationRules.required(value)) {
      return { isValid: false, message: validationMessages.required, field: 'password' };
    }
    
    if (!validationRules.minLength(VALIDATION_RULES.PASSWORD_MIN_LENGTH)(value)) {
      return { isValid: false, message: validationMessages.minLength(VALIDATION_RULES.PASSWORD_MIN_LENGTH), field: 'password' };
    }
    
    return { isValid: true, field: 'password' };
  },
  
  confirmPassword: (password: string, confirmPassword: string): ValidationResult => {
    if (!validationRules.required(confirmPassword)) {
      return { isValid: false, message: validationMessages.required, field: 'confirmPassword' };
    }
    
    if (password !== confirmPassword) {
      return { isValid: false, message: 'Passwords do not match', field: 'confirmPassword' };
    }
    
    return { isValid: true, field: 'confirmPassword' };
  },
  
  url: (value: string): ValidationResult => {
    if (!validationRules.required(value)) {
      return { isValid: false, message: validationMessages.required, field: 'url' };
    }
    
    if (!validationRules.url(value)) {
      return { isValid: false, message: validationMessages.url, field: 'url' };
    }
    
    return { isValid: true, field: 'url' };
  },
  
  message: (value: string): ValidationResult => {
    if (!validationRules.required(value)) {
      return { isValid: false, message: validationMessages.required, field: 'message' };
    }
    
    if (!validationRules.minLength(10)(value)) {
      return { isValid: false, message: validationMessages.minLength(10), field: 'message' };
    }
    
    return { isValid: true, field: 'message' };
  },
};

// Form validation
export const validateForm = (data: Record<string, any>, rules: Record<string, (value: any) => ValidationResult>): FormValidationResult => {
  const errors: ValidationResult[] = [];
  
  for (const [field, validator] of Object.entries(rules)) {
    const result = validator(data[field]);
    if (!result.isValid) {
      errors.push(result);
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  };
};

// Contact form validation
export const validateContactForm = (data: {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}): FormValidationResult => {
  return validateForm(data, {
    name: fieldValidators.name,
    email: fieldValidators.email,
    phone: fieldValidators.phone,
    message: fieldValidators.message,
  });
};

// Sign up form validation
export const validateSignUpForm = (data: {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}): FormValidationResult => {
  const results = validateForm(data, {
    name: fieldValidators.name,
    email: fieldValidators.email,
    password: fieldValidators.password,
  });
  
  // Add confirm password validation
  if (data.password && data.confirmPassword) {
    const confirmResult = fieldValidators.confirmPassword(data.password, data.confirmPassword);
    if (!confirmResult.isValid) {
      results.errors.push(confirmResult);
    }
  }
  
  return {
    isValid: results.errors.length === 0,
    errors: results.errors,
  };
};

// Sign in form validation
export const validateSignInForm = (data: {
  email?: string;
  password?: string;
}): FormValidationResult => {
  return validateForm(data, {
    email: fieldValidators.email,
    password: fieldValidators.password,
  });
};

// Newsletter subscription validation
export const validateNewsletterForm = (data: {
  email?: string;
}): FormValidationResult => {
  return validateForm(data, {
    email: fieldValidators.email,
  });
};

// Real-time validation
export const validateField = (field: string, value: any): ValidationResult => {
  const validators: Record<string, (value: any) => ValidationResult> = {
    name: fieldValidators.name,
    email: fieldValidators.email,
    phone: fieldValidators.phone,
    password: fieldValidators.password,
    message: fieldValidators.message,
    url: fieldValidators.url,
  };
  
  const validator = validators[field];
  if (!validator) {
    return { isValid: true, field };
  }
  
  return validator(value);
};

// Sanitize input
export const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') {
    return '';
  }
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

// Validate and sanitize form data
export const validateAndSanitizeForm = <T extends Record<string, any>>(
  data: T,
  validationRules: Record<keyof T, (value: any) => ValidationResult>
): { data: T; isValid: boolean; errors: ValidationResult[] } => {
  const sanitizedData = {} as T;
  
  // Sanitize string inputs
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      sanitizedData[key as keyof T] = sanitizeInput(value) as T[keyof T];
    } else {
      sanitizedData[key as keyof T] = value;
    }
  }
  
  const validationResult = validateForm(sanitizedData, validationRules);
  
  return {
    data: sanitizedData,
    isValid: validationResult.isValid,
    errors: validationResult.errors,
  };
}; 