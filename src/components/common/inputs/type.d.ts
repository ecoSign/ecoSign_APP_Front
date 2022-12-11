import { LegacyRef } from 'react';
import {
  ImageSourcePropType,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  TextInputSubmitEditingEventData,
  TextStyle,
} from 'react-native';

interface InputType {
  value: string | undefined;
  placeholder: string;
  onChangeText: ((text: string) => void) | undefined;

  autoCorrect?: boolean | undefined;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  onSubmitEditing?:
    | ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void)
    | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  inputStyle?: StyleProp<TextStyle> | undefined;
  secureTextEntry?: boolean | undefined;
}

interface UserInputType extends InputType {
  leftIcon?: any | undefined;
  rightIcon?: any | undefined;
  inputRef?: LegacyRef<T> | undefined;
}
interface HasResetInputType extends InputType {
  maxLength?: number;
}
