// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   StatusBar,
// } from 'react-native';
import Icon from '../../utils/Icon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import Video from 'react-native-video';
import React, {useState} from 'react';
import {
  Button,
  Modal,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import {VideoPlayer} from './VideoPlayer';

const DetailPodCast = ({route, navigation}) => {
  const {item} = route.params;
  const insets = useSafeAreaInsets();
  console.log('item', item);

  const [visible, setVisible] = React.useState(false);
  const [start, setStart] = React.useState({
    start: 0,
    video: '',
  });
  const hideModal = () => setVisible(false);

  const play = (from: any) => {
    setStart(from);
    setVisible(true);
  };

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
        <ScrollView style={{flex: 1}}>
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
        </ScrollView>
        <View style={styles.listenNow}>
          <TouchableOpacity
            onPress={() =>
              play({
                start: 0,
                video: item.linkVideo,
              })
            }>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                padding: 10,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Nghe ngay
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        visible={visible}
        animationType="fade"
        onDismiss={hideModal}
        onRequestClose={hideModal}
        presentationStyle={'overFullScreen'}>
        <View style={styles.outter}>
          <StatusBar hidden />
          <View style={styles.inner}>
            <VideoPlayer
              start={start.start}
              onFinished={hideModal}
              video={start.video}
            />
          </View>
        </View>
      </Modal>
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
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  outter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listenNow: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: '#99cc33',
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
  },
});
