import { SVGProps } from 'react';

function Flame(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M27.047 11.379a.594.594 0 00-.873.729 5.89 5.89 0 01-.314 5.454C23.922 8.25 19.655 2.834 19.466 2.598a.605.605 0 00-.563-.215.595.595 0 00-.461.388c-.023.064-2.328 6.472-7.517 10.412-5.233 3.973-4.996 9.194-4.984 9.38a13.061 13.061 0 1026.122 0v-.013c-.17-7.875-4.818-11.039-5.016-11.17zM19 34.438a5.35 5.35 0 01-5.344-5.344c0-4.384 4.702-9.674 4.902-9.897a.613.613 0 01.884 0c.2.223 4.902 5.513 4.902 9.897A5.35 5.35 0 0119 34.437z"
        fill="#FF6E42"
      />
    </svg>
  );
}

export default Flame;