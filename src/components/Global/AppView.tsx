import React, {memo, ReactElement} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {Layout} from '../../utils/layout/layout';

interface AppViewProps {
  children?: React.ReactNode;
  fill?: any;
  flex?: number;
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  backgroundColor?: string;
  opacity?: number;
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  reverse?: boolean;
  row?: boolean;
  rowAlignCenter?: any;
  center?: any;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
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
  height?: number | string;
  width?: number | string;
  size?: number;
  maxHeight?: number | string;
  minHeight?: number | string;
  maxWidth?: number | string;
  minWidth?: number | string;
  radius?: number;
  topLeftRadius?: number;
  topRightRadius?: number;
  bottomLeftRadius?: number;
  bottomRightRadius?: number;
  overflow?: 'visible' | 'hidden' | 'scroll';
  borderTopWidth?: number;
  borderBottomWidth?: number;
  borderLeftWidth?: number;
  borderRightWidth?: number;
  borderTopColor?: string;
  borderBottomColor?: string;
  borderLeftColor?: string;
  borderRightColor?: string;
  borderWidth?: number;
  borderColor?: string;
  zIndex?: number;
  position?: string;
  right?: number | string;
  pointerEvents?: 'auto' | 'none';
  numberOfLines?: number;
  borderStyle?: 'solid' | 'dotted' | 'dashed';
  style?: StyleProp<ViewStyle>;
}

function AppView({
  children,
  fill,
  flex,
  align,
  flexWrap,
  justify,
  center,
  reverse,
  alignSelf,
  row,
  rowAlignCenter,
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
  backgroundColor,
  height,
  maxHeight,
  minHeight,
  maxWidth,
  minWidth,
  width,
  opacity,
  size,
  radius,
  topLeftRadius,
  topRightRadius,
  bottomLeftRadius,
  bottomRightRadius,
  overflow,
  borderBottomColor,
  borderBottomWidth,
  borderLeftColor,
  borderLeftWidth,
  borderRightColor,
  borderRightWidth,
  borderTopColor,
  borderTopWidth,
  borderColor,
  borderWidth,
  zIndex,
  position,
  right,
  pointerEvents = 'auto',
  borderStyle,
  style,
  ...restProps
}: AppViewProps | any): ReactElement {
  return (
    <View
      pointerEvents={pointerEvents}
      {...restProps}
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
        opacity && {opacity},
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
        backgroundColor && {backgroundColor},
        align && {alignItems: align},
        justify && {justifyContent: justify},
        alignSelf && {alignSelf},
        flexWrap && {flexWrap},
        radius && {borderRadius: radius},
        overflow && {overflow},
        topLeftRadius && {
          borderTopLeftRadius: topLeftRadius,
        },
        topRightRadius && {
          borderTopRightRadius: topRightRadius,
        },
        bottomLeftRadius && {
          borderBottomLeftRadius: bottomLeftRadius,
        },
        bottomRightRadius && {
          borderBottomRightRadius: bottomRightRadius,
        },
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
        borderTopWidth && {
          borderTopWidth: borderTopWidth,
        },
        borderBottomWidth && {
          borderBottomWidth: borderBottomWidth,
        },
        borderLeftWidth && {
          borderLeftWidth: borderLeftWidth,
        },
        borderRightWidth && {
          borderRightWidth: borderRightWidth,
        },
        borderTopColor && {borderTopColor},
        borderBottomColor && {borderBottomColor},
        borderLeftColor && {borderLeftColor},
        borderRightColor && {borderRightColor},
        borderColor && {borderColor},
        borderWidth && {borderWidth: borderWidth},
        zIndex && {zIndex: zIndex},
        position && {position: position},
        right && {right: right},
        borderStyle && {borderStyle: borderStyle},
        style,
      ]}>
      {children}
    </View>
  );
}

export default memo(AppView);
