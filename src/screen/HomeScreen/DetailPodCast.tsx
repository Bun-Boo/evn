import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from '../../utils/Icon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const DetailPodCast = ({route, navigation}) => {
  const {item} = route.params;
  const insets = useSafeAreaInsets();
  console.log('item', item);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={[styles.container, {paddingTop: insets.top}]}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => navigation.goBack()}>
            <Icon icon="ArrowLeft" size={25} color="black" />
          </TouchableOpacity>
          <Text numberOfLines={1} style={styles.title}>
            {item.title}
          </Text>
        </View>
        <View style={styles.body}>
          <Image source={{uri: item.image}} style={styles.image} />
          <View style={styles.wrapper}>
            <Text style={styles.titleText} numberOfLines={2}>
              {item.title}
            </Text>

            <Text style={styles.description} numberOfLines={4}>
              {item.subTitle}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default DetailPodCast;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    padding: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    width: '80%',
  },
  body: {
    padding: 10,
    alignItems: 'center',
  },
  wrapper: {
    width: '80%',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  titleText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    marginTop: 20,
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
});
