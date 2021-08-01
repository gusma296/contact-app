import React from 'react';
import {Content, Text, IconButton} from '.';
import PropTypes from 'prop-types';
import {Colors, width} from '../commons';
import {headerStyle, styles} from './style';
const widths = width / 3;
const Header = props => {
  return (
    <Content height={64} row rowBetween paddingHorizontal={16}>
      <Content width={widths - 80}>
        {props.back && (
          <IconButton
            iconSize={22}
            iconColor={Colors.white}
            iconName="arrow-back-ios"
            onPress={props.onBackPress}
          />
        )}
      </Content>
      <Content center width={widths + 80}>
        <Text color={Colors.white} size={20} bold>
          {props.title}
        </Text>
      </Content>
      <Content width={widths - 80} style={headerStyle.iconContent} row>
        <Content row rowCenter>
          {props.edit && (
            <IconButton
              iconSize={24}
              iconColor={Colors.primary_light}
              iconName="edit"
              onPress={props.onEditPress}
            />
          )}
          {props.delete && (
            <IconButton
              iconSize={24}
              iconColor={Colors.primary_light}
              iconName="delete"
              onPress={props.onDeletePress}
            />
          )}
        </Content>
      </Content>
    </Content>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  edit: PropTypes.bool,
  delete: PropTypes.bool,
  back: PropTypes.bool,
  onBackPress: PropTypes.func,
  onDeletePress: PropTypes.func,
  onEditPress: PropTypes.func,
};

export default Header;
