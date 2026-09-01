/**
 * Shared TypeScript types for BSRealty* components.
 *
 * These are prop fields that are copy-pasted identically across multiple
 * components today. Extracting them here means a field only needs to be
 * defined (and documented) once, and every component's props type picks
 * it up the same way.
 *
 * NOTE: only fields that are truly identical are pulled in here. Fields
 * that look similar but differ in shape (e.g. onChange handlers — some
 * components pass the raw ChangeEvent, others pass just the string value)
 * are deliberately left alone rather than forced into a shared shape.
 */

/** Standard HTML disabled state, used by Button, TextField, PasswordField. */
export interface Disableable {
  /** Disabled state */
  disabled?: boolean;
}

/** Standard form-field identity attributes, used by TextField, PasswordField. */
export interface FieldIdentity {
  /** Input name attribute */
  name?: string;
  /** Input id attribute */
  id?: string;
}

/** Standard ARIA labelling props, used by TextField today; other input-like
 *  components currently hardcode their aria-label instead of accepting one
 *  — worth revisiting so consumers can override it per instance. */
export interface AriaLabelled {
  /** Accessibility label */
  'aria-label'?: string;
  /** Accessibility described-by reference */
  'aria-describedby'?: string;
}
