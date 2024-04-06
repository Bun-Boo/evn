import React, { useEffect } from 'react';
import {ReactElement} from 'react';
import ApiHistory, {IHistory} from 'src/api/History/ApiHistory';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import TouchableGlobal from 'src/components/Global/TouchableGlobal';

function ThongBaoScreen(): ReactElement {
  const [data, setData] = React.useState<IHistory[]>([]);

  useEffect(() => {
    ApiHistory.getHistory().then((res) => {
        setData(res);
      }
    );

  }, []);
  

  const renderItem = ({item}: {item: any}) => (
    <TouchableGlobal
      onPress={() => {
        console.log('chi tiet thong bao 1');
      }}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.chonCot==1?"Cột bê tông li tâm":"Cột thép"}</Text>
          <Text style={styles.subTitle}>Địa phương: {item.diaPhuong}</Text>
          <Text style={styles.subTitle}>Loại dây: {item.dayDan}</Text>
          <Text style={styles.subTitle}>Công dụng cột: {item.congDungCot}</Text>
          <Text style={styles.subTitleDate}>Thời gian tạo: {item.dateTime}</Text>
        </View>
      </View>
    </TouchableGlobal>
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `_${index}`}
      />
    </View>
  );
}

export default ThongBaoScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    // borderRadius: 8,
    padding: 16,
    margin: 8,
    width: '96%',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  subTitle: {
    marginTop: 5,
    fontSize: 14,
    color: 'gray',
  },
  subTitleDate: {
    marginTop: 5,
    fontSize: 10,
    color: 'gray',
  },
});
