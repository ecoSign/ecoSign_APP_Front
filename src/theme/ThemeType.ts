export interface ThemeType {
  colors: {
    PRIMARY: string;
    SUCCESS: string;
    ERROR: string;
    BACKGROUND: string;
    TEXT: string;
    TEXT_SECONDARY: string;
    MAIN: string;
  };
  typography: {
    size: { L: number; M: number; S: number };
    letterSpacing: { M: number; S: number; L: number };
  };
}
