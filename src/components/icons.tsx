import type { SVGProps } from 'react';

export function CivitasAILogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 22h16" />
      <path d="M5 22V10l7-5 7 5v12" />
      <path d="m9 14 2 2 4-4" />
    </svg>
  );
}
