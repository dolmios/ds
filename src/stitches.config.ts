import { createStitches, createTheme, CSS } from '@stitches/react';

export const breakpoints = {
  desktop: '@media only screen and (max-width: 2160px)',
  desktopX: '@media only screen and (min-width: 1481px) and (max-width: 2160px)',
  laptop: '@media only screen and (max-width: 1480px)',
  laptopX: '@media only screen and (min-width: 961px) and (max-width: 1480px)',
  phone: '@media only screen and (max-width: 720px)',
  tablet: '@media only screen and (max-width: 960px)',
  tabletX: '@media only screen and (min-width: 721px) and (max-width: 960px)',
  wide: '@media only screen and (min-width: 2161px)',
};

export const { theme, css, styled, getCssText, globalCss, keyframes } = createStitches({
  theme: {
    colors: {
      background: 'rgb(19, 19, 27)',
      blueBorder: 'rgba(115, 172, 255, 0.4)',
      blueOverlay: 'rgba(115, 172, 255, 0.2)',
      blueText: '#8c9eff',
      border: 'rgb(65, 65, 71)',
      greenBorder: 'rgba(0, 200, 83, 0.4)',
      greenOverlay: 'rgba(0, 200, 83, 0.2)',
      greenText: '#93e0ba',
      orangeBorder: 'rgba(255, 172, 115, 0.4)',
      orangeOverlay: 'rgba(255, 172, 115, 0.2)',
      orangeText: '#FCA67D',
      overlay: 'rgba(255, 255, 255, 0.05)',
      overlayActive: 'rgb(51, 51, 59)',
      overlayHover: 'rgb(66, 66, 74)',
      pinkBorder: 'rgba(255, 115, 172, 0.4)',
      pinkOverlay: 'rgba(255, 115, 172, 0.2)',
      pinkText: '#eb83cc',
      purpleBorder: 'rgba(172, 115, 255, 0.4)',
      purpleOverlay: 'rgba(172, 115, 255, 0.2)',
      purpleText: '#c887f3',
      redBorder: 'rgba(255, 115, 115, 0.4)',
      redOverlay: 'rgba(255, 115, 115, 0.2)',
      redText: '#fa7083',
      text: 'rgb(255, 255, 255)',
    },
    fontSizes: {
      h1: '2.8rem',
      h2: '2.6rem',
      h3: '2.2rem',
      h4: '1.7rem',
      h5: '1.6rem',
      h6: '1.5rem',
      p: '1.4rem',
      small: '1.25rem',
    },
    fontWeights: {
      h1: '700',
      h2: '700',
      h3: '700',
      h4: '500',
      h5: '400',
      h6: '400',
      p: '400',
      small: '400',
    },
    fonts: {
      default: 'DM Sans, apple-system, sans-serif',
    },
    lineHeights: {
      h1: '1.3',
      h2: '1.3',
      h3: '1.4',
      h4: '1.4',
      h5: '1.4',
      h6: '1.45',
      p: '1.4',
      small: '1.4',
    },
    media: breakpoints,
    radii: {
      1: '0.5rem',
      2: '1rem',
      3: '1.5rem',
    },
    space: {
      1: '0.3rem',
      2: '0.5rem',
      3: '1rem',
      4: '1.5rem',
      5: '2rem',
      6: '3rem',
      7: '5rem',
      8: '8rem',
    },
    transitions: {
      default: 'all 0.233s ease-in-out',
    },
    zIndices: {
      dialog: 100,
      popover: 150,
      toast: 200,
    },
  },
  utils: {
    desktop: (value: unknown) => ({
      [breakpoints.desktop]: value,
    }),
    desktopX: (value: unknown) => ({
      [breakpoints.desktopX]: value,
    }),
    hidden: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => ({
      [breakpoints[value]]: {
        display: 'none',
      },
    }),
    laptop: (value: unknown) => ({
      [breakpoints.laptop]: value,
    }),
    laptopX: (value: unknown) => ({
      [breakpoints.laptopX]: value,
    }),
    phone: (value: unknown) => ({
      [breakpoints.phone]: value,
    }),

    tablet: (value: unknown) => ({
      [breakpoints.tablet]: value,
    }),
    tabletX: (value: unknown) => ({
      [breakpoints.tabletX]: value,
    }),
    visible: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => ({
      display: 'none',
      [breakpoints[value]]: {
        display: 'block',
      },
    }),
    visibleInline: (value: 'phone' | 'tablet' | 'tabletX' | 'laptop' | 'laptopX' | 'desktop' | 'desktopX' | 'wide') => ({
      display: 'none',
      [breakpoints[value]]: {
        display: 'inline-block',
      },
    }),
    wide: (value: unknown) => ({
      [breakpoints.wide]: value,
    }),
  },
});

export const lightTheme = createTheme({
  colors: {
    background: 'rgb(255, 255, 255)',
    blueText: '#202f88',
    border: 'rgb(230, 233, 239)',
    greenText: '#178f53',
    orangeText: '#c7541e',
    overlay: '#ebeef5',
    overlayActive: '#d9dde4',
    overlayHover: '#ced3db',
    pinkText: '#ad1680',
    purpleText: '#7017ab',
    redText: '#aa1c2f',
    text: 'rgb(19, 19, 27)',
  },
});

export const reset = {
  '@import': 'url("https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap")',
  // eslint-disable-next-line sort-keys-fix/sort-keys-fix
  '*': {
    MozOsxFontSmoothing: 'grayscale',
    WebkitAppearance: 'none',
    WebkitFontSmoothing: 'antialiased',
    boxSizing: 'inherit',
    letterSpacing: 'normal',
    marginBlockEnd: 0,
    marginBlockStart: 0,
    marginInlineEnd: 0,
    marginInlineStart: 0,
    outline: 'none',
    paddingBlockEnd: 0,
    paddingBlockStart: 0,
    paddingInlineEnd: 0,
    paddingInlineStart: 0,
    wordSpacing: 'normal',
  },
  '*:after': {
    boxSizing: 'inherit',
  },
  '*:before': {
    boxSizing: 'inherit',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  body: {
    backgroundColor: 'inherit',
    border: 0,
    color: '$text',
    fontFamily: '$default',
    fontSize: '1.6rem',
    margin: 0,
    overflowX: 'hidden',
    overflowY: 'auto',
    padding: 0,

    [`.${theme}`]: {
      background: '$background',
      color: '$text',
    },
    [`.${lightTheme}`]: {
      background: '$background',
      color: '$text',
    },
  },
  button: {
    '&::-moz-focus-inner': {
      border: 0,
      outline: 0,
      outlineOffset: 0,
      padding: 0,
    },
    '&:active': {
      outline: 0,
    },
    '&:focus': {
      outline: 0,
    },
    MozOsxFontSmoothing: 'grayscale',
    WebkitAppearance: 'none',
    WebkitFontSmoothing: 'antialiased',
    appearance: 'none',
    background: 'transparent',
    border: 0,
    cursor: 'pointer',
    font: '$default',
    fontFamily: 'inherit',
    margin: 0,
    outline: 'none',
    overflow: 'visible',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: 'auto',
  },
  html: {
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
    fontSize: '62.5%',
    lineHeight: '1.5',
    textRendering: 'optimizeLegibility',
  },
  svg: {
    verticalAlign: 'middle',
  },
};

export interface DefaultProps {
  css?: CSS;
  id?: string;
  spacing?: keyof typeof theme.space;
}

export const fadeIn = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
});

export const fadeOut = keyframes({
  '0%': {
    opacity: 1,
  },

  '100%': {
    opacity: 0,
  },
});
