import { useState } from 'react';
import './BSRealtyFAQ.css';

export interface BSRealtyFAQProps {
  /** The question text */
  question: string;
  /** The answer text */
  answer: string;
  /** Whether the FAQ is open by default */
  defaultOpen?: boolean;
}

// Chevron icon — rotates when open
const ChevronIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <polyline
      points="6 9 12 15 18 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BSRealtyFAQ = ({
  question,
  answer,
  defaultOpen = false,
}: BSRealtyFAQProps) => {
  // useState tracks whether the answer is visible or hidden
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bsr-faq">
      {/* Question row — clicking this toggles the answer */}
      <button
        className="bsr-faq__question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="bsr-faq__question-text">{question}</span>
        <span className={`bsr-faq__icon ${isOpen ? 'bsr-faq__icon--open' : ''}`}>
          <ChevronIcon />
        </span>
      </button>

      {/* Answer row — only rendered when open */}
      {isOpen && (
        <div className="bsr-faq__answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};
