import React from 'react';
import {View} from 'react-native';
import {dividerStyle} from './style';

const Divider = ({
  marginHorizontal,
  marginBottom,
  marginTop,
  width,
  backgroundColor,
}) => {
  return (
    <View
      style={[
        dividerStyle.divider,
        {
          marginHorizontal: marginHorizontal,
          marginTop: marginTop,
          marginBottom: marginBottom,
          width: width,
          opacity: 0.5,
          borderColor: backgroundColor ? backgroundColor : '#AAAAAA',
        },
      ]}
    />
  );
};

export default Divider;
