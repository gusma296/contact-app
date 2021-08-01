import React from 'react';
import {FlatList, Image} from 'react-native';
import {Colors, getFirstString, validBase64, validURL} from '../../../commons';
import {randomColor} from '../../../commons/randomColor';
import {Content, Touchable, Text} from '../../../components';
import Divider from '../../../components/Divider';
import {styles} from '../style';

const Contact = ({data, navigation, loading}) => {
  function onPressItem(item, color) {
    navigation.navigate('ContactDetail', {
      id: item.id.replace(/\"/g, ''),
      color: color,
    });
  }

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <FlatList
      data={data}
      style={styles.flatlist}
      contentContainerStyle={styles.flatlistContent}
      renderItem={({item, index}) => {
        const validUrls = validURL(item.photo);
        const validBase = validBase64(item.photo);
        return (
          <>
            <Touchable
              color={Colors.ripple_black}
              style={styles.buttonItem}
              onPress={() => onPressItem(item, randomColor[index])}>
              <Content paddingVertical={12} row centerTop>
                {validUrls || validBase === 'data:image' ? (
                  <Image
                    resizeMode="cover"
                    style={styles.image}
                    source={{uri: item.photo}}
                  />
                ) : (
                  <Content
                    style={[
                      styles.profile,
                      {backgroundColor: randomColor[index]},
                    ]}>
                    <Text color={Colors.primary_light} size={24} bold>
                      {getFirstString(item.firstName) +
                        getFirstString(item.lastName.toUpperCase())}
                    </Text>
                  </Content>
                )}
                <Text size={18}>{item.firstName + ' ' + item.lastName}</Text>
              </Content>
              {index < data.length - 1 && <Divider />}
            </Touchable>
          </>
        );
      }}
      keyExtractor={item => item.id}
    />
  );
};

export default React.memo(Contact);
