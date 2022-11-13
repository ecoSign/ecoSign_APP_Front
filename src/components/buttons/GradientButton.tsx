import { TouchableOpacity, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const BottomGradientButton = ({
  children,
  onPress,
  outerStyle,
  innerStyle,
}) => {
  return (
    <TouchableOpacity style={outerStyle} onPress={onPress}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#7AE0CC', '#47B1D1']}
        style={[styles.btn, innerStyle]}
      >
        <View>{children}</View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderRadius: 15,
    // paddingVertical: 16,
  },
});
