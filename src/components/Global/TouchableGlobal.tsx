import React, {ReactElement} from 'react';
import {ViewStyle, StyleProp, TouchableOpacity} from 'react-native';
import {Layout} from '../../utils/layout/layout';

interface TouchableGlobalProps {
  onPress?: () => void;
  children?: React.ReactNode;
  flex?: number;
  row?: boolean;
  reverse?: boolean;
  rowAlignCenter?: boolean;
  center?: boolean;
  disabled?: boolean;
  fill?: boolean;
  opacity?: number;
  padding?: any;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  margin?: any;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginVertical?: number;
  marginHorizontal?: number;

  height?: number | string;
  width?: number | string;
  maxHeight?: number | string;
  minHeight?: number | string;
  maxWidth?: number | string;
  minWidth?: number | string;

  backgroundColor?: string;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;

  style?: StyleProp<ViewStyle> | ViewStyle;
}

function TouchableGlobal({
  fill,
  flex,
  onPress,
  children,
  opacity = 0.2,
  row,
  reverse,
  rowAlignCenter,
  center,
  padding,
  paddingBottom,
  paddingHorizontal,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingVertical,
  margin,
  marginBottom,
  marginHorizontal,
  marginLeft,
  marginRight,
  marginTop,
  marginVertical,
  height,
  maxHeight,
  minHeight,
  maxWidth,
  minWidth,
  width,
  borderRadius,
  backgroundColor,
  borderWidth,
  borderColor,
  style,
  ...props
}: TouchableGlobalProps): ReactElement {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={opacity}
      {...props}
      style={[
        row
          ? reverse
            ? Layout.rowReverse
            : Layout.row
          : reverse
          ? Layout.columnReverse
          : Layout.column,
        rowAlignCenter && Layout.rowAlignCenter,
        center && Layout.center,
        fill && Layout.fill,
        flex && {flex},
        backgroundColor && {backgroundColor},
        borderRadius && {borderRadius: borderRadius},
        borderColor && {borderColor},
        borderWidth && {borderWidth: borderWidth},
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
        height && {
          height: height,
        },
        width && {
          width: width,
        },
        maxHeight && {
          maxHeight: maxHeight,
        },
        minHeight && {
          minHeight: minHeight,
        },
        maxWidth && {
          maxWidth: maxWidth,
        },
        minWidth && {
          minWidth: minWidth,
        },
        style,
      ]}>
      {children}
    </TouchableOpacity>
  );
}

export default TouchableGlobal;
