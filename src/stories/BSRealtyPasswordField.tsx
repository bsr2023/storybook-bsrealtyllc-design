import React, { useState, useId } from 'react';
import './BSRealtyPasswordField.css';

export type PasswordFieldState = 'default' | 'error' | 'seeing';

export interface BSRealtyPasswordFieldProps {
  /** Field label */
  label?: string;
  /** Placeholder text shown when field is empty */
  placeholder?: string;
  /** Controlled value */
  value?: string;
  /** Visual state */
  state?: PasswordFieldState;
  /** Error message shown below input in error state */
  errorMessage?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Name attribute */
  name?: string;
  /** Id attribute */
  id?: string;
}

// Eye open — password visible
const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// Eye off — password hidden
const EyeOffIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

// Info circle — used for error message
const InfoIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export const BSRealtyPasswordField = ({
  label = 'Password',
  placeholder = '',
  value,
  state = 'default',
  errorMessage = 'Your password must contain atleast 12 characters',
  disabled = false,
  onChange,
  name,
  id,
}: BSRealtyPasswordFieldProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  // 'seeing' state starts visible, others start hidden
  const [visible, setVisible] = useState(state === 'seeing');

  const inputType = visible ? 'text' : 'password';
  const isError = state === 'error';

  return (
    <div className={`bsr-password${disabled ? ' bsr-password--disabled' : ''}`}>
      {/* Label */}
      <label className="bsr-password__label" htmlFor={inputId}>
        {label}
      </label>

      {/* Input wrapper */}
      <div className={`bsr-password__input-wrap${isError ? ' bsr-password__input-wrap--error' : ''}`}>
        <input
          id={inputId}
          name={name}
          type={inputType}
          className="bsr-password__input"
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={onChange}
          aria-invalid={isError}
          aria-describedby={isError ? `${inputId}-error` : undefined}
          autoComplete="current-password"
        />

        {/* Toggle visibility button */}
        <button
          type="button"
          className="bsr-password__toggle"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? 'Hide password' : 'Show password'}
          tabIndex={-1}
          disabled={disabled}
        >
          {visible ? <EyeIcon /> : <EyeOffIcon />}
        </button>
      </div>

      {/* Error message */}
      {isError && errorMessage && (
        <div id={`${inputId}-error`} className="bsr-password__error" role="alert">
          <InfoIcon />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};
