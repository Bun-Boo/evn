import React, {ReactElement, memo} from 'react';
import {
  StyleSheet,
  TextStyle,
  StyleProp,
  TouchableOpacity,
  ActivityIndicator,
  ViewStyle,
} from 'react-native';
import AppText from './AppText';
import Icon from '../../utils/Icon';

interface AppButtonProps {
  children?: React.ReactNode;
  textLineHeight?: number;
  text?: string;
  textWeight?: string;
  disabled?: boolean;
  loading?: boolean;
  spaceBetween?: boolean;
  center?: boolean;
  disabledTextColor?: string;
  textColor?: string;
  onPress?: () => void;
  opacity?: number;
  iconDirection?: 'left' | 'right';
  disabledBackgroundColor?: string;
  backgroundColor?: string;
  heightButton?: number;
  borderRadius?: number;
  paddingHorizontal?: number;
  padding?: number;
  borderWidth?: number;
  borderColor?: string;
  isIconButton?: ReactElement | null;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  marginLeftIcon?: number;
  marginRightIcon?: number;
  colorIndicator?: string;
  textStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ViewStyle> | ViewStyle;
  style?: StyleProp<ViewStyle> | ViewStyle;
}

function AppButton({
  textLineHeight = 20,
  textSize = 16,
  text = 'title',
  textWeight = '500',
  disabled = false,
  loading = false,
  spaceBetween = false,
  center = true,
  isIconButton = false,
  disabledTextColor = '#white',
  textColor = '#232323',
  opacity = 0.2,
  iconDirection = 'right',
  disabledBackgroundColor = '#white',
  backgroundColor = 'white',
  heightButton = 48,
  paddingHorizontal = 0,
  padding = 0,
  borderRadius = 0,
  borderWidth = 1,
  borderColor = 'white',
  colorIndicator = 'red',
  onPress,
  iconName = 'CollabList',
  iconSize = 16,
  iconColor,
  marginLeftIcon = 0,
  marginRightIcon = 0,
  textStyle,
  iconStyle,
  style,
  ...restProps
}: AppButtonProps | any): ReactElement {
  const styles = StyleSheet.create({
    baseTxt: {
      color: disabled ? disabledTextColor : textColor,
    },
    baseBtn: {
      flexDirection: iconDirection === 'right' ? 'row' : 'row-reverse',
      justifyContent: spaceBetween
        ? 'space-between'
        : center
        ? 'center'
        : 'flex-start',
      alignItems: 'center',
      paddingHorizontal: paddingHorizontal,
      height: heightButton,
      backgroundColor: disabled ? disabledBackgroundColor : backgroundColor,
      borderRadius: borderRadius,
      borderWidth: borderWidth,
      borderColor: borderColor,
      padding: padding,
      width: loading ? 90 : 'auto',
    },
  });
  return (
    <TouchableOpacity
      {...restProps}
      disabled={disabled}
      activeOpacity={opacity}
      onPress={onPress}
      style={[styles.baseBtn, style]}>
      {loading ? (
        <ActivityIndicator color={colorIndicator} />
      ) : (
        <>
          <AppText
            lineHeight={textLineHeight}
            fontSize={textSize}
            fontWeight={textWeight}
            style={[styles.baseTxt, textStyle]}>
            {text}
          </AppText>
          {isIconButton ? (
            <Icon
              icon={iconName}
              size={24}
              color={iconColor}
              style={{
                ...iconStyle,
                marginLeft: marginLeftIcon,
                marginRight: marginRightIcon,
              }}
            />
          ) : null}
        </>
      )}
    </TouchableOpacity>
  );
}

export default memo(AppButton);
