const { Dimensions } = require('react-native');
export const themeConfig = {
  color: {
    primary_button: '#0066FF',
    primary_button_disable: '#CCCCCC',
    secondary_button: '#DD0000',
    white: '#EEEEEE',
  },
  spacing: {
    spacing_xxs: 2,
    spacing_xs: 4,
    spacing_sm: 8,
    spacing_md: 10,
    spacing_lg: 16,
    spacing_xl: 24,
    spacing_xxl: 36,
    spacing_xxxl: 44,
  },
  size: {
    font_size_xxs: 11,
    font_size_xs: 13,
    font_size_sm: 14,
    font_size_md: 16,
    font_size_lg: 18,
    font_size_xl: 24,
  },
  deviceWidth: Math.round(Dimensions.get('window').width),
};