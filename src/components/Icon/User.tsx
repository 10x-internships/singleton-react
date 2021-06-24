import { SVGProps } from 'react';

function User(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 21a7 7 0 110-14 7 7 0 010 14zm0 3.5c4.672 0 14 2.345 14 7v1.75c0 .962-.788 1.75-1.75 1.75H8.75C7.787 35 7 34.212 7 33.25V31.5c0-4.655 9.328-7 14-7z"
        fill="#F9C45C"
      />
    </svg>
  );
}

export default User;
