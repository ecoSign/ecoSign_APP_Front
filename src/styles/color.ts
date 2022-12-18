import { COMMON_COLOR } from '@styles/commonColor';

const ERROR = 'rgba(0, 0, 0, 0.03)';
const MAIN = '#9CCC65';

const DISABLE = 'rgba(0, 0, 0, 0.03)';

const common = {
  MAIN,
  ERROR,
  DISABLE,
  ...COMMON_COLOR,
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
