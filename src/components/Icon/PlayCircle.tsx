import { SVGProps } from 'react';

function PlayCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14 2.333C7.56 2.333 2.333 7.56 2.333 14c0 6.44 5.227 11.667 11.667 11.667 6.44 0 11.667-5.227 11.667-11.667C25.667 7.56 20.44 2.333 14 2.333zM11.667 19.25V8.75l7 5.25-7 5.25z"
        fill="currentColor"
      />
    </svg>
  );
}

export default PlayCircle;
