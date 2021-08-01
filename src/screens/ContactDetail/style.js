import {StyleSheet} from 'react-native';
import {Colors, height, width} from '../../commons';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary_light,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    flex: 1,
  },
  image: {
    width: width - 32,
    height: height - 125,
    marginTop: 16,
  },
  content: {
    width: width - 32,
    height: height - 125,
    marginTop: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  profile: {
    width: width - 32,
    height: height - 100,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContent: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flex: 1,
    paddingBottom: 24,
    flexDirection: 'row',
    paddingHorizontal: 24,
  },
  cardInfo: {
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 16,
    height: 80,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  textContact: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: Colors.primary_dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
