import { SVGProps } from 'react';

function Email(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={34} height={34} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.333 5.667H5.667A2.83 2.83 0 002.847 8.5l-.014 17a2.842 2.842 0 002.834 2.833h22.666a2.842 2.842 0 002.834-2.833v-17a2.842 2.842 0 00-2.834-2.833zm-.566 6.02L17.75 17.95a1.433 1.433 0 01-1.502 0L6.233 11.687a1.212 1.212 0 01-.566-1.02c0-.949 1.034-1.515 1.841-1.02L17 15.584l9.492-5.935c.807-.496 1.841.07 1.841 1.02 0 .41-.212.793-.566 1.02z"
        fill="#FF6E42"
      />
    </svg>
  );
}

export default Email;
