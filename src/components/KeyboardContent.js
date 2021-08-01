import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import {IOS} from '../commons';

const KeyboardContent = props => {
  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior={IOS ? 'padding' : null}>
      {props.children}
    </KeyboardAvoidingView>
  );
};

export default KeyboardContent;
