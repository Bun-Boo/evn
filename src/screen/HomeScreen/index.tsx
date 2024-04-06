import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ReactElement} from 'react';
import {
  Dimensions,
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Image} from 'react-native-elements';
import AppView from 'src/components/Global/AppView';
import ListPodCast from 'src/components/Global/ListPodCast';
import TextInputGlobal from 'src/components/Global/TextInputGlobal';
import TouchableGlobal from 'src/components/Global/TouchableGlobal';

import {Formik} from 'formik';
import AppButton from 'src/components/Global/AppButton';
import AppText from 'src/components/Global/AppText';
import ApiPodcast from 'src/api/Podcast/ApiPodcast';

function HomeScreen(): ReactElement {
  const navigation = useNavigation();
  const [data, setData] = React.useState([]);
  const [dataPodCast, setDataPodCast] = React.useState([]);
  const handleGetListPodcast = (): void => {
    ApiPodcast.getListPodcast().then(response => {
      setData(response);
    });
    ApiPodcast.getListPodcast().then(response => {
      setDataPodCast(response);
    });
  };
  const renderItem = ({item}: {item: any}) => (
    <TouchableGlobal
      onPress={() => {
        navigation.navigate('DetailPodCast', {item});
      }}
      style={{marginRight: 20, maxWidth: Dimensions.get('screen').width / 3}}>
      <Image
        source={{uri: item.image}}
        style={{
          width: Dimensions.get('screen').width / 3,
          height: 100,
          borderRadius: 10,
        }}
      />
      <Text style={styles.titleItem} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={styles.subTitle} numberOfLines={2}>
        {item.subTitle}
      </Text>
    </TouchableGlobal>
  );
  React.useEffect(() => {
    handleGetListPodcast();
  }, []);
  return (
    <ScrollView
      style={{flex: 1}}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={handleGetListPodcast} />
      }>
      <View style={{padding: 20, marginBottom: 100}}>
        <View style={{marginBottom: 50}}>
          <Text style={styles.title}>PodCard được nghe nhiều nhất</Text>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => `_${index}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Text style={styles.title}>Danh sách PodCard</Text>
        <ListPodCast data={dataPodCast} />
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  titleItem: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subTitle: {
    fontSize: 12,
    color: 'gray',
  },
});
