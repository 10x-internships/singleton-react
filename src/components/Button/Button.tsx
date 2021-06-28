import React from 'react';
import { Caption, TypoTag } from '../Typography';
import { StyledButton, StyledButtonIcon } from './style';
import { StyledButtonProps, StyledButtonIconProps } from './type';

type ButtonLinkProps = React.ComponentPropsWithoutRef<'a'> & React.ComponentPropsWithoutRef<'button'>;
type ButtonProps = StyledButtonProps & ButtonLinkProps;
type ButtonIconProps = StyledButtonIconProps & ButtonLinkProps;

export const Button = (props: ButtonProps) => {
  const { variant, colorType, icon, className, ...others } = props;

  return (
    <StyledButton variant={variant} colorType={colorType} icon={icon} as={others.href ? 'a' : 'button'} {...others}>
      <Caption typoTag={TypoTag.Span}>{others.children}</Caption>
      {icon}
    </StyledButton>
  );
};

export const ButtonIcon = (props: ButtonIconProps) => {
  const { icon, href, ...others } = props;
  return (
    <StyledButtonIcon icon={icon} as={href ? 'a' : 'button'} {...others}>
      {icon}
    </StyledButtonIcon>
  );
};
