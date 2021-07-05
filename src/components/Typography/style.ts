import styled from 'styled-components';

type TypoProperties = {
  fontSize: string;
  lineHeight: string;
  fontWeight?: 'regular' | 'medium' | 'semi-bold' | 'bold';
};

type TypoStyle = {
  mobile: TypoProperties;
  tablet?: TypoProperties;
  desktop?: TypoProperties;
};

const responsiveTypo = (device: TypoProperties | undefined) => {
  if (device) {
    return `
      font-size: ${device.fontSize};
      ${device.fontWeight ? `font-weight: var(--font-weight-${device.fontWeight});` : ''}
      line-height: ${device.lineHeight};
    `;
  }
  return '';
};

const StyledTypo = styled.div<TypoStyle>`
  font-size: ${(props) => props.mobile.fontSize};
  font-weight: ${(props) => `var(--font-weight-${props.mobile.fontWeight || 'regular'})`};
  line-height: ${(props) => props.mobile.lineHeight};

  @media screen and (min-width: 768px) {
    ${({ tablet }) => responsiveTypo(tablet)}
  }

  @media screen and (min-width: 1200px) {
    ${({ desktop }) => responsiveTypo(desktop)}
  }
`;

export const HeadingWrapper = styled.div``;
export const SubHeadingWrapper = styled.div``;
export const BodyWrapper = styled.div``;
export const TitleWrapper = styled.div``;
export const CaptionWrapper = styled.div``;

export default StyledTypo;
