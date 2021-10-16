import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      'red-50': '#ffebee',
      'red-100': '#ffcdd2',
      'red-200': '#ef9a9a',
      'red-300': '#e57373',
      'red-400': '#ef5350',
      'red-500': '#f44336',
      'red-600': '#e53935',
      'red-700': '#d32f2f',
      'red-800': '#c62828',
      'red-900': '#b71c1c',
      'red-a100': '#ff8a80',
      'red-a200': '#ff5252',
      'red-a400': '#ff1744',
      'red-a700': '#d50000',

      'purple-50': '#f3e5f5',
      'purple-100': '#e1bee7',
      'purple-200': '#ce93d8',
      'purple-300': '#ba68c8',
      'purple-400': '#ab47bc',
      'purple-500': '#9c27b0',
      'purple-600': '#8e24aa',
      'purple-700': '#7b1fa2',
      'purple-800': '#6a1b9a',
      'purple-900': '#4a148c',
      'purple-a100': '#ea80fc',
      'purple-a200': '#e040fb',
      'purple-a400': '#d500f9',
      'purple-a700': '#aa00ff',

      'blue-50': '#e3f2fd',
      'blue-100': '#bbdefb',
      'blue-200': '#90caf9',
      'blue-300': '#64b5f6',
      'blue-400': '#42a5f5',
      'blue-500': '#2196f3',
      'blue-600': '#1e88e5',
      'blue-700': '#1976d2',
      'blue-800': '#1565c0',
      'blue-900': '#0d47a1',
      'blue-a100': '#82b1ff',
      'blue-a200': '#448aff',
      'blue-a400': '#2979ff',
      'blue-a700': '#2962ff',

      'green-50': '#e8f5e9',
      'green-100': '#c8e6c9',
      'green-200': '#a5d6a7',
      'green-300': '#81c784',
      'green-400': '#66bb6a',
      'green-500': '#4caf50',
      'green-600': '#43a047',
      'green-700': '#388e3c',
      'green-800': '#2e7d32',
      'green-900': '#1b5e20',
      'green-a100': '#b9f6ca',
      'green-a200': '#69f0ae',
      'green-a400': '#00e676',
      'green-a700': '#00c853',

      'yellow-100': '#fff9c4',
      'yellow-200': '#fff59d',
      'yellow-300': '#fff176',
      'yellow-400': '#ffee58',
      'yellow-500': '#ffeb3b',
      'yellow-600': '#fdd835',
      'yellow-700': '#fbc02d',
      'yellow-800': '#f9a825',
      'yellow-900': '#f57f17',
      'yellow-a100': '#ffff8d',
      'yellow-a200': '#ffff00',
      'yellow-a400': '#ffea00',
      'yellow-a700': '#ffd600',

      'orange-50': '#fff3e0',
      'orange-100': '#ffe0b2',
      'orange-200': '#ffcc80',
      'orange-300': '#ffb74d',
      'orange-400': '#ffa726',
      'orange-500': '#ff9800',
      'orange-600': '#fb8c00',
      'orange-700': '#f57c00',
      'orange-800': '#ef6c00',
      'orange-900': '#e65100',
      'orange-a100': '#ffd180',
      'orange-a200': '#ffab40',
      'orange-a400': '#ff9100',
      'orange-a700': '#ff6d00',

      'grey-50': '#fafafa',
      'grey-100': '#f5f5f5',
      'grey-200': '#eeeeee',
      'grey-300': '#e0e0e0',
      'grey-400': '#bdbdbd',
      'grey-500': '#9e9e9e',
      'grey-600': '#757575',
      'grey-700': '#616161',
      'grey-800': '#424242',
      'grey-900': '#212121',

      white: '#ffffff',
      black: '#000000',
    },
    space: {
      '00': '0',
      '01': '0.25rem',
      '02': '0.5rem',
      '03': '0.75rem',
      '04': '1rem',
      '05': '1.25rem',
      '06': '1.5rem',
      '07': '2rem',
    },
    fontSizes: {
      'size-sm': '0.75rem',
      'size-md': '1rem',
      'size-lg': '1.25rem',
      'size-xl': '1.5rem',
    },
    radii: {
      default: '0.5rem',
    },
  },
  media: {
    xs: '(min-width: 320px)',
    sm: '(min-width: 540px)',
    md: '(min-width: 720px)',
    lg: '(min-width: 960px)',
    xl: '(min-width: 1140px)',
  },
});