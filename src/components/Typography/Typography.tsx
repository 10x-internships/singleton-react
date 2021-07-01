import React from 'react';
import { TypoTag, getTypoTag } from './getTypoTag';
import StyledTypo from './style';

type TypoProps = {
  typoTag: TypoTag;
  children: React.ReactNode;
};

// Heading typography
export const Heading = ({ typoTag, children }: TypoProps) => {
  return (
    <StyledTypo
      as={getTypoTag(typoTag)}
      mobile={{ fontSize: '40px', fontWeight: 'semi-bold', lineHeight: '48px' }}
      tablet={{ fontSize: '68px', lineHeight: '72px' }}
      desktop={{ fontSize: '72px', fontWeight: 'medium', lineHeight: '78px' }}
    >
      {children}
    </StyledTypo>
  );
};

// SubHeading typography
export const SubHeading = ({ typoTag, children }: TypoProps) => {
  return (
    <StyledTypo
      as={getTypoTag(typoTag)}
      mobile={{ fontSize: '40px', fontWeight: 'medium', lineHeight: '48px' }}
      desktop={{ fontSize: '64px', fontWeight: 'regular', lineHeight: '72px' }}
    >
      {children}
    </StyledTypo>
  );
};

// Title typography
export const Title = ({ typoTag, children }: TypoProps) => {
  return (
    <StyledTypo
      as={getTypoTag(typoTag)}
      mobile={{ fontSize: '18px', fontWeight: 'medium', lineHeight: '24px' }}
      tablet={{ fontSize: '30px', lineHeight: '36px' }}
      desktop={{ fontSize: '32px', fontWeight: 'regular', lineHeight: '40px' }}
    >
      {children}
    </StyledTypo>
  );
};

// Body typography style
export const Body = ({ typoTag, children }: TypoProps) => {
  return (
    <StyledTypo
      as={getTypoTag(typoTag)}
      mobile={{ fontSize: '14px', lineHeight: '20px' }}
      tablet={{ fontSize: '16px', lineHeight: '24px' }}
      desktop={{ fontSize: '18px', lineHeight: '28px' }}
    >
      {children}
    </StyledTypo>
  );
};

// Caption typography style
export const Caption = ({ typoTag, children }: TypoProps) => {
  return (
    <StyledTypo as={getTypoTag(typoTag)} mobile={{ fontSize: '16px', lineHeight: '24px' }}>
      {children}
    </StyledTypo>
  );
};
