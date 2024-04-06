import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ListPodCast = ({data}) => {
  const navigation = useNavigation();
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('DetailPodCast', {item});
      }}>
      <Image
        source={{uri: item.image}}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.titleItem} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.subTitle} numberOfLines={3}>
          {item.subTitle}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => `_${index}`}
      showsVerticalScrollIndicator={false}
    />
  );
};
export default ListPodCast;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    width: '100%',
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 10,
    flex: 1,
  },
  textContainer: {
    marginLeft: 10,
    // width: '60%',
    flex: 2,
  },
  titleItem: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subTitle: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
});
