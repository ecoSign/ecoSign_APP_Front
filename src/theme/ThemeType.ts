export interface ThemeType {
  colors: {
    MAIN: string;
    ERROR: string;
    DISABLE: string;
    WHITE: string;

    // GREEN
    GREEN900: '#33691E';
    GREEN800: '#558B2F';
    GREEN700: '#689F38';
    GREEN600: '#7CB342';
    GREEN500: '#8BC34A';
    GREEN400: '#9CCC65';
    GREEN300: '#AED581';
    GREEN200: '#C5E1A5';
    GREEN100: '#DCEDC8';
    GREEN50: '#F1F8E9';

    // BLUE
    BLUE900: '#0D47A1';
    BLUE800: '#1565C0';
    BLUE700: '#1976D2';
    BLUE600: '#1E88E5';
    BLUE500: '#2196F3';
    BLUE400: '#42A5F5';
    BLUE300: '#64B5F6';
    BLUE200: '#90CAF9';
    BLUE100: '#BBDEFB';
    BLUE50: '#E3F2FD';
    //  GRAY
    GRAY900: '#212121';
    GRAY800: '#424242';
    GRAY700: '#616161';
    GRAY600: '#757575';
    GRAY500: '#9e9e9e';
    GRAY400: '#BDBDBD';
    GRAY300: '#E0E0E0';
    GRAY200: '#EEEEEE';
    GRAY100: '#F5F5F5';
    GRAY50: '#FAFAFA';
    //  RED
    RED900: '#B71C1C';
    RED800: '#C62828';
    RED700: '#D32F2F';
    RED600: '#E53935';
    RED500: '#E35141';
    RED400: '#EF5350';
    RED300: '#E57373';
    RED200: '#EF9A9A';
    RED100: '#FFCDD2';
    RED50: '#FFEBEE';

    //  YELLOW
    YELLOW900: '#F57F17';
    YELLOW800: '#F9A825';
    YELLOW700: '#FBC02D';
    YELLOW600: '#FDD835';
    YELLOW500: '#FFEB3B';
    YELLOW400: '#FFEE58';
    YELLOW300: '#FFF176';
    YELLOW200: '#FFF59D';
    YELLOW100: '#FFF9C4';
    YELLOW50: '#FFFDE7';
  };
  typography: {
    size: { L: number; M: number; S: number };
    letterSpacing: { M: number; S: number; L: number };
  };
}
