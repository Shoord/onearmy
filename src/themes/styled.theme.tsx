export const colors = {
  white: 'white',
  black: 'black',
  blue: '#b6d8e6',
  blue2: '#3f51b5',
  blue3: '#2d5786',
  green: '#88e3c7',
  yellow: '#ffe495',
  grey: '#dddddd',
  grey2: '#9b9b9b',
  grey3: '#656565',
  grey4: '#E9E9E9',
  greyStroke: '#AEAEAE',
  greyTag: '#E4E4E4',
  greyBg: '#F6F6F6',
  error: '#f44336',
}

export type ButtonVariants =
  | 'primary'
  | 'outline'
  | 'disabled'
  | 'dark'
  | 'light'

const buttons = {
  height: '40px',
  primary: {
    color: colors.black,
    backgroundColor: colors.white,
  },
  outline: {
    color: colors.black,
    border: '1px solid ' + colors.greyStroke,
    backgroundColor: 'white',
  },
  disabled: {
    color: colors.grey,
    backgroundColor: colors.black,
    opacity: 0.3,
  },
  dark: {
    color: colors.white,
    backgroundColor: colors.black,
  },
  light: {
    backgroundColor: colors.grey,
    color: colors.black,
  },
}

const space = [0, 4, 8, 16, 32, 64, 128]
const radii = space
const fontSizes = [10, 12, 15, 18, 24, 32, 40, 56, 72]
const breakpoints = ['32em', '48em', '64em']
const maxContainerWidth = 1280
const regular = 400
const bold = 600

export default {
  colors,
  buttons,
  breakpoints,
  space,
  radii,
  fontSizes,
  maxContainerWidth,
  regular,
  bold,
}
