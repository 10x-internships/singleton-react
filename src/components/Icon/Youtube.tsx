import { SVGProps } from 'react';

function YouTube(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M14.98 4.28H5.02C3.34 4.28 2 5.64 2 7.3v5.38c0 1.68 1.36 3.02 3.02 3.02h9.96c1.68 0 3.02-1.36 3.02-3.02V7.3a3.03 3.03 0 00-3.02-3.02zM7.9 12.46V7.54L12.1 10l-4.2 2.46z" />
    </svg>
  );
}

export default YouTube;
