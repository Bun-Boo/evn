import React from 'react';
import {ReactElement} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import TouchableGlobal from 'src/components/Global/TouchableGlobal';

function ThongBaoScreen(): ReactElement {
  const dataTB = [
    {
      id: 0,
      title: 'Thông báo 1',
      date: '22/12/2022',
      subTitle:
        '(Làm vé tháng xe bus; Đang học tại trường; Thuê nhà ở sinh viên; Cấp lại thẻ BHYT; Đối tượng chính sách; Sổ ưu đãi; Vay vốn)',
      image: '',
    },
    {
      id: 1,
      title: 'Thông báo 2',
      date: '22/12/2022',
      subTitle: '(Bảo lưu kết quả học tập, Xin thôi học, Trở lại học tập)',
      image: '',
    },
    {
      id: 2,
      title: 'Thông báo 3',
      date: '22/12/2022',
      subTitle: '(Xin nghỉ học để điều trị bệnh)',
      image: '',
    },
    {
      id: 3,
      title: 'Thông báo 4',
      date: '22/12/2022',
      subTitle: '(Địa điểm học, Trường học)',
      image: '',
    },
  ];

  const renderItem = ({item}: {item: any}) => (
    <TouchableGlobal
      onPress={() => {
        console.log('chi tiet thong bao');
      }}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subTitle}>{item.subTitle}</Text>
          <Text style={styles.subTitleDate}>{item.date}</Text>
        </View>
      </View>
    </TouchableGlobal>
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={[]}
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
