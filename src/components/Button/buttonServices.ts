import { ButtonType, ColorVariant } from '../types';
import { DeepPartial } from '../../context/utils/index.js.js';
import { ThemeStyleConstants } from '../../context/utils/constants';

export const getBackgroundColor = (
  theme: DeepPartial<ThemeStyleConstants>,
  color: ColorVariant,
  type: ButtonType,
  // uiState: UIState,
  disabled: boolean
): string => {
  switch (type) {
    case 'standard':
      if (disabled) {
        return `hsl(200, 50%, 50%)`;
      }
      return getColorBasedOnVariant(color, theme);
    case 'outlined':
    case 'text':
      return 'transparent';
  }
};
export const getBorderColor = (
  theme: DeepPartial<ThemeStyleConstants>,
  color: ColorVariant,
  type: ButtonType,
  disabled: boolean
): string => {
  switch (type) {
    case 'standard':
    case 'outlined':
      if (disabled) {
        return `hsl(200, 50%, 50%)`;
      }
      return getColorBasedOnVariant(color, theme);
    case 'text':
    default:
      return 'transparent';
  }
};
export const getTextColor = (
  theme: DeepPartial<ThemeStyleConstants>,
  color: ColorVariant,
  type: ButtonType,
  // uiState: UIState,
  disabled: boolean
): string => {
  switch (type) {
    case 'standard':
      return theme.color.text.white;
    case 'outlined':
    case 'text':
    default:
      if (disabled) {
        return `hsl(200, 50%, 50%)`;
      }
      return getColorBasedOnVariant(color, theme);
  }
};

const getColorBasedOnVariant = (
  color: ColorVariant,
  theme: DeepPartial<ThemeStyleConstants>
) => {
  switch (color) {
    case 'primary':
    case 'accent':
      return theme.color.primary;
    case 'warning':
      return theme.color.warning;
    case 'white':
      return theme.color.white;
    default:
      return theme.color.primary;
  }
};
