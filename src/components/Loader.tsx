import styled, { keyframes } from 'styled-components';

const spinAnim = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderWrapper = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    animation: ${spinAnim} 1s linear infinite;
  }
`;

function Loader() {
  return (
    <LoaderWrapper>
      <svg width={160} height={160} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M80 160c44.183 0 80-35.817 80-80S124.183 0 80 0 0 35.817 0 80s35.817 80 80 80zm0-3c42.526 0 77-34.474 77-77S122.526 3 80 3 3 37.474 3 80s34.474 77 77 77z"
          fill="#F8F8F8"
        />
        <mask id="prefix__a" maskUnits="userSpaceOnUse" x={0} y={0} width={160} height={160}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M80 160c44.183 0 80-35.817 80-80S124.183 0 80 0 0 35.817 0 80s35.817 80 80 80zm0-3c42.526 0 77-34.474 77-77S122.526 3 80 3 3 37.474 3 80s34.474 77 77 77z"
            fill="#793BFF"
          />
        </mask>
        <g mask="url(#prefix__a)">
          <path fill="#793BFF" d="M0 0h80v80H0z" />
        </g>
      </svg>
    </LoaderWrapper>
  );
}

export default Loader;
