const SUN_FLOWER = '#f1c40f';
const ASBESTOS = '#7f8c8d';
const MIDNIGHT_BLUE = '#2c3e50';
const EMERALD = '#2ecc71';
const ERROR = 'rgba(0, 0, 0, 0.03)';
const CLOUDS = '#ecf0f1';
const SILVER = '#bdc3c7';
const MAIN = '#9CCC65';

const common = {
  MAIN,
  PRIMARY: SUN_FLOWER,
  SUCCESS: EMERALD,
  ERROR,
};

const light = {
  ...common,
  BACKGROUND: CLOUDS,
  TEXT: MIDNIGHT_BLUE,
  TEXT_SECONDARY: ASBESTOS,
};

const dark = {
  ...common,
  BACKGROUND: MIDNIGHT_BLUE,
  TEXT: CLOUDS,
  TEXT_SECONDARY: SILVER,
};

export const colors = { light, dark };
