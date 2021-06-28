import React from 'react';
import { Caption, TypoTag } from '../Typography';
import { StyledButton, StyledButtonProps, StyledButtonIcon, StyledButtonIconProps } from './style';
import clsx from 'clsx';

type ButtonLinkProps = React.ComponentPropsWithoutRef<'a'> & React.ComponentPropsWithoutRef<'button'>;
type ButtonProps = StyledButtonProps & ButtonLinkProps;
type ButtonIconProps = StyledButtonIconProps & ButtonLinkProps;

export const Button = (props: ButtonProps) => {
  const { variant, colorType, icon, className, ...others } = props;

  return (
    <StyledButton
      variant={variant}
      colorType={colorType}
      icon={icon}
      as={others.href ? 'a' : 'button'}
      className={clsx(others.disabled && 'btn-disabled', className)}
      {...others}
    >
      <Caption typoTag={TypoTag.Span}>{others.children}</Caption>
      {icon}
    </StyledButton>
  );
};

export const ButtonIcon = (props: ButtonIconProps) => {
  return (
    <StyledButtonIcon
      icon={props.icon}
      as={props.href ? 'a' : 'button'}
      className={clsx(props.disabled && 'btn-disabled', props.className)}
      {...props}
    >
      {props.icon}
    </StyledButtonIcon>
  );
};
