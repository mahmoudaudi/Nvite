import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

/** Minimal reusable button — styling foundation only, no design system yet. */
export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 disabled:opacity-50"
      {...rest}
    >
      {children}
    </button>
  );
}
