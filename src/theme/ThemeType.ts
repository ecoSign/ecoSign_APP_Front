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
    GRAY200: '#EEEEEE';
    GRAY100: '#F5F5F5';
    GRAY50: '#FAFAFA';
    //  GREEN
    GREEN500: '#8BC34A';
    GREEN400: '#9CCC65';
    //  RED
    RED200: '#FF5252';
  };
  typography: {
    size: { L: number; M: number; S: number };
    letterSpacing: { M: number; S: number; L: number };
  };
}
