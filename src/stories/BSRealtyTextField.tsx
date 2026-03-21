import React, { useState, forwardRef } from 'react';
import './BSRealtyTextField.css';

export type TextFieldVariant = 'default' | 'error' | 'success';
export type TextFieldState = 'default' | 'hover' | 'focus' | 'filled' | 'disabled' | 'typing';

export interface BSRealtyTextFieldProps {
  /** Input placeholder text */
  placeholder?: string;
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'tel' | 'url';
  /** Current value */
  value?: string;
  /** Default value for uncontrolled component */
  defaultValue?: string;
  /** Visual variant */
  variant?: TextFieldVariant;
  /** Disabled state */
  disabled?: boolean;
  /** Required field */
  required?: boolean;
  /** Error message to display */
  errorMessage?: string;
  /** Success message to display */
  successMessage?: string;
  /** Show password toggle for password fields */
  showPasswordToggle?: boolean;
  /** Change handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Focus handler */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Blur handler */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Input name attribute */
  name?: string;
  /** Input id attribute */
  id?: string;
  /** Accessibility label */
  'aria-label'?: string;
  /** Accessibility described by */
  'aria-describedby'?: string;
}

// Eye icon for password visibility toggle
const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" />
    <circle cx="8" cy="8" r="2" />
  </svg>
);

// Eye off icon for password visibility toggle
const EyeOffIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.5 5.5A4 4 0 0 0 8 4c-4 0-7 5-7 5a13.16 13.16 0 0 0 1.7 2.3M6.5 10.5A4 4 0 0 1 8 12c4 0 7-5 7-5a13.16 13.16 0 0 1-1.7-2.3" />
    <path d="M1 1l14 14" />
    <path d="M6.5 6.5A2 2 0 0 1 10.5 10.5" />
  </svg>
);

// Information circle icon for validation
const InformationCircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="8" r="6" />
    <path d="M8 12V8" />
    <path d="M8 6h.01" />
  </svg>
);

export const BSRealtyTextField = forwardRef<HTMLInputElement, BSRealtyTextFieldProps>(({
  placeholder = 'Input placeholder',
  type = 'text',
  value,
  defaultValue,
  variant = 'default',
  disabled = false,
  required = false,
  errorMessage = '',
  successMessage = '',
  showPasswordToggle = type === 'password',
  onChange,
  onFocus,
  onBlur,
  name,
  id,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  ...props
}, ref) => {
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const isControlled = value !== undefined;
  const inputValue = isControlled ? value : internalValue;
  const hasValue = Boolean(inputValue && inputValue.length > 0);
  
  // Determine the actual variant based on error/success messages
  const actualVariant = errorMessage ? 'error' : successMessage ? 'success' : variant;
  
  // Determine display message
  const displayMessage = errorMessage || successMessage;
  const messageId = id ? `${id}-message` : undefined;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalValue(event.target.value);
    }
    onChange?.(event);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(event);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className="bsr-textfield">
      <div 
        className={[
          'bsr-textfield__container',
          `bsr-textfield__container--${actualVariant}`,
          isFocused && 'bsr-textfield__container--focused',
          hasValue && 'bsr-textfield__container--filled',
          disabled && 'bsr-textfield__container--disabled',
        ].filter(Boolean).join(' ')}
      >
        <input
          ref={ref}
          type={inputType}
          className="bsr-textfield__input"
          placeholder={placeholder}
          value={inputValue}
          disabled={disabled}
          required={required}
          name={name}
          id={id}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedBy || messageId}
          aria-invalid={actualVariant === 'error'}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        
        {showPasswordToggle && type === 'password' && (
          <button
            type="button"
            className="bsr-textfield__icon-button"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            tabIndex={-1}
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        )}
      </div>
      
      {displayMessage && (
        <div 
          className={[
            'bsr-textfield__message',
            `bsr-textfield__message--${actualVariant}`,
          ].join(' ')}
          id={messageId}
        >
          <InformationCircleIcon />
          <span>{displayMessage}</span>
        </div>
      )}
    </div>
  );
});

BSRealtyTextField.displayName = 'BSRealtyTextField';