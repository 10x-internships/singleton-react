export enum ButtonColor {
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum ButtonVariant {
  Filled = 'filled',
  Outlined = 'outlined',
  Ghost = 'ghost',
}

export type StyledButtonProps = {
  colorType: ButtonColor;
  variant: ButtonVariant;
  icon?: JSX.Element;
};

export type StyledButtonIconProps = {
  icon?: JSX.Element;
};
