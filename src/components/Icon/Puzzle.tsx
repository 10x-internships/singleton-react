import { SVGProps } from 'react';

function Puzzle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={42}
      height={42}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.5 20H28v-4c0-1.1-.9-2-2-2h-4v-1.5a2.5 2.5 0 00-5 0V14h-4c-1.1 0-1.99.9-1.99 2v3.8h1.49c1.49 0 2.7 1.21 2.7 2.7 0 1.49-1.21 2.7-2.7 2.7H11V29c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V31H26c1.1 0 2-.9 2-2v-4h1.5a2.5 2.5 0 000-5z"
      />
    </svg>
  );
}

export default Puzzle;
