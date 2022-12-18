const ERROR = 'rgba(0, 0, 0, 0.03)';
const MAIN = '#9CCC65';

// GRAY
const GRAY900 = '#212121';
const GRAY800 = '#424242';
const GRAY700 = '#616161';
const GRAY600 = '#757575';
const GRAY500 = '#9e9e9e';
const GRAY400 = '#BDBDBD';
const GRAY300 = '#E0E0E0';
const GRAY200 = '#EEEEEE';
const GRAY100 = '#F5F5F5';
const GRAY50 = '#FAFAFA';
// GREEN

const GREEN500 = '#8BC34A';
const GREEN400 = '#9CCC65';

// RED
const RED200 = '#FF5252';

const DISABLE = 'rgba(0, 0, 0, 0.03)';
const WHITE = '#fff';

const TEST = {
  test: 'red',
};

const common = {
  TEST,
  MAIN,
  ERROR,
  DISABLE,
  WHITE,

  GRAY900,
  GRAY800,
  GRAY700,
  GRAY600,
  GRAY500,
  GRAY400,
  GRAY300,
  GRAY200,
  GRAY100,
  GRAY50,

  GREEN500,
  GREEN400,

  RED200,
};

const light = {
  ...common,
  // BACKGROUND: CLOUDS,
  // TEXT: MIDNIGHT_BLUE,
  // TEXT_SECONDARY: ASBESTOS,
};

const dark = {
  ...common,
  // BACKGROUND: MIDNIGHT_BLUE,
  // TEXT: CLOUDS,
  // TEXT_SECONDARY: SILVER,
};

export const colors = { light, dark };
