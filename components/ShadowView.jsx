import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import * as _ from 'lodash';

const partitionByKeys = (keys, obj) => {
  let pass = {};
  let fail = {};

  for (const key of Object.keys(obj)) {
    if (keys.includes(key)) {
      pass[key] = obj[key];
    } else {
      fail[key] = obj[key];
    }
  }

  return [pass, fail];
};

const innerStyleKeys = [
  'padding', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight',
  'paddingHorizontal', 'paddingVertical',
  'backgroundColor', 'flexDirection', 'justifyContent', 'alignItems',
  'minHeight', 'minHeight',
];

const ShadowView = ({ level = 0, shadows, children, style, ...props }) => {
  const shadow = _.head(shadows);
  const [innerStyle, outerStyle] = style ? partitionByKeys(innerStyleKeys, style) : [{}, {}];

  return (
    <View
      {...props}
      style={{
        shadowColor: shadow.color,
        shadowOffset: shadow.offset,
        shadowOpacity: shadow.opacity,
        shadowRadius: shadow.radius,
        ...(level === 0 ? outerStyle : {}),
        ...(shadows.length === 1 ? innerStyle : {}),
      }}
    >
      { shadows.length === 1 ?
        children :
        <ShadowView level={level + 1} shadows={_.tail(shadows)} style={style}>{children}</ShadowView>
      }
    </View>
  );
};

export default ShadowView;