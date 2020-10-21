export type ColorVariant =
  | 'primary'
  | 'primaryLight'
  | 'primaryDark'
  | 'secondaryLight'
  | 'secondaryDark'
  | 'core'
  | 'accent'
  | 'success'
  | 'danger'
  | 'warning'
  | 'white'
  | 'transparent'
  | 'inherit'
  | 'background';

export type ButtonType = 'standard' | 'outlined' | 'text';

/**
 * Default HTML props that can be applied to any component.
 */
export interface DefaultProps {
  id?: string;
  className?: string;
  /** The tab index of this component for a11y. */
  tabIndex?: number;
}

export type ColorSet = {
  backgroundColor: string;
  backgroundColorHover: string;
  backgroundColorActive: string;
  borderColor: string;
  borderColorHover: string;
  borderColorActive: string;
} & TypographyColorSet;

export interface TypographyColorSet {
  color: string;
  colorHover: string;
  colorActive: string;
}

export type Variant = 'primary' | 'contained' | 'text';

export interface ColorState {
  normal: string;
  hover: string;
  active: string;
}

export type UIState = 'normal' | 'hover' | 'active';

export type WeightVariant = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
