import { SVGProps } from 'react';

function SvgComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18 18v-5.86c0-2.88-.62-5.08-3.98-5.08-1.62 0-2.7.88-3.14 1.72h-.04V7.32H7.66V18h3.32v-5.3c0-1.4.26-2.74 1.98-2.74 1.7 0 1.72 1.58 1.72 2.82v5.2H18V18zM2.26 7.32h3.32V18H2.26V7.32zM3.92 2C2.86 2 2 2.86 2 3.92s.86 1.94 1.92 1.94 1.92-.88 1.92-1.94S4.98 2 3.92 2z" />
    </svg>
  );
}

export default SvgComponent;
