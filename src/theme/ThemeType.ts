export interface ThemeType {
  colors: {
    MAIN: string;
    ERROR: string;
    DISABLE: string;
    WHITE: string;

    // GRAY
    GRAY900: '#212121';
    GRAY600: '#757575';
    GRAY500: '#9e9e9e';
    GRAY400: '#BDBDBD';
    GRAY300: '#E0E0E0';
  };
  typography: {
    size: { L: number; M: number; S: number };
    letterSpacing: { M: number; S: number; L: number };
  };
}
