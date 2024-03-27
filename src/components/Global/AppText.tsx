import React, {ReactElement, memo} from 'react';
import {Text, TextProps, StyleSheet, TextStyle, StyleProp} from 'react-native';
import {Layout} from '../../utils/layout/layout';

interface AppTextProps extends TextProps {
  size?: 'default' | 'medium' | 'bold' | 'light';
  textAlign?: 'left' | 'center' | 'right';
  overflow?: 'visible' | 'hidden' | 'scroll';
  fill?: any;
  flex?: number;
  children?: React.ReactNode;
  fontSize?: number;
  color?: string;
  lineHeight?: number;
  fontWeight?: string;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  maxWidth?: number;
  paddingTop?: number;
  padding?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  margin?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  numberOfLines?: number;
  width?: number | string;
  backgroundColor?: string;
  borderRadius?: number;
  textDecorationLine?: string;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
  style?: StyleProp<TextStyle>;
}

function AppText({
  size = 'default',
  textAlign = 'left',
  color = 'black',
  overflow,
  fill,
  flex,
  fontSize = 14,
  lineHeight,
  children,
  fontWeight,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  padding,
  paddingHorizontal,
  paddingVertical,
  maxWidth,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  margin,
  marginHorizontal,
  marginVertical,
  numberOfLines = 0,
  width,
  backgroundColor,
  borderRadius,
  textDecorationLine,
  textTransform = 'none',
  style,
  ...restProps
}: AppTextProps | any): ReactElement {
  let styleType;
  switch (size) {
    case 'medium':
      styleType = styles.textMedium;
      break;
    case 'bold':
      styleType = styles.textBold;
      break;
    case 'light':
      styleType = styles.textLight;
      break;
    default:
      styleType = styles.textDefault;
  }

  return (
    <Text
      numberOfLines={numberOfLines}
      {...restProps}
      style={[
        fill && Layout.fill,
        flex && {flex},
        textAlign && {textAlign},
        color && {color},
        overflow && {overflow},
        fontSize && {fontSize},
        lineHeight && {lineHeight},
        fontWeight && {fontWeight},
        maxWidth && {maxWidth},
        paddingBottom && {
          paddingBottom: paddingBottom,
        },
        paddingLeft && {paddingLeft: paddingLeft},
        paddingRight && {paddingRight: paddingRight},
        paddingTop && {paddingTop: paddingTop},
        padding && {padding: padding},
        paddingHorizontal && {
          paddingHorizontal: paddingHorizontal,
        },
        paddingVertical && {
          paddingVertical: paddingVertical,
        },
        marginBottom && {marginBottom: marginBottom},
        marginLeft && {marginLeft: marginLeft},
        marginRight && {marginRight: marginRight},
        marginTop && {marginTop: marginTop},
        margin && {margin: margin},
        marginHorizontal && {
          marginHorizontal: marginHorizontal,
        },
        marginVertical && {
          marginVertical: marginVertical,
        },
        width && {
          width: width,
        },
        backgroundColor && {
          backgroundColor: backgroundColor,
        },
        borderRadius && {
          borderRadius: borderRadius,
        },
        textDecorationLine && {textDecorationLine: textDecorationLine},
        textTransform && {textTransform: textTransform},
        style,
        styleType,
      ]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  textDefault: {fontFamily: 'SFProDisplay-Regular', letterSpacing: 0.5},
  textMedium: {
    fontFamily: 'SFProDisplay-Medium',
    letterSpacing: 0.5,
  },
  textBold: {fontFamily: 'SFProDisplay-Semibold', letterSpacing: 0.5},
  textLight: {fontFamily: 'SFProDisplay-Light', letterSpacing: 0.5},
});

export default memo(AppText);
