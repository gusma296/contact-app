import React from 'react';
import {StatusBar} from 'react-native';
import {containerStyle} from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../commons';

const Container = props => {
  return (
    <SafeAreaView edges={['top']} style={containerStyle.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.primary} />
      {props.children}
    </SafeAreaView>
  );
};

export default Container;
