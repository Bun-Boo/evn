import React, { useEffect } from 'react';
import {ReactElement} from 'react';
import ApiHistory, {IHistory} from 'src/api/History/ApiHistory';
import {FlatList, Image, StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import TouchableGlobal from 'src/components/Global/TouchableGlobal';
import ApiHome from 'src/api/Home/ApiHome';
import { useNavigation } from '@react-navigation/native';
import RouteName from 'src/routes/RouteName';

function ThongBaoScreen(): ReactElement {
  const [data, setData] = React.useState<IHistory[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const navigation = useNavigation();

  useEffect(() => {
    ApiHistory.getHistory().then((res) => {
        setData(res);
        setLoading(false);
      }
    );

  }, []);
  

  const renderItem = ({item}: {item: any}) => (
    <TouchableGlobal
      onPress={() => {
        setLoading(true);
        ApiHome.patchInput({
          id: '1310',
          diaPhuong: item.diaPhuong,
          vungGio: item.vungGio,
          dangDiaHinh: item.dangDiaHinh,
          doCaoQuyDoiGio: item.doCaoQuyDoiGio,
          thoiGianSuDungCongTrinh: item.thoiGianSuDungCongTrinh,
          capDienApDen: item.capDienApDen,
          dayDan: item.dayDan,
          ungSuatLonNhat: item.ungSuatLonNhat,
          ungSuatTrungBinh: item.ungSuatTrungBinh,
          doCaoTreoDayTrungBinh: item.doCaoTreoDayTrungBinh,
          khoangCachMinChoPhepTuDayDanDenMatDat: item.kcMinChoPhepTuDayDanDenMatDat,
          soLuongPhanPha: item.soLuongPhanPha,
          soLuongDayDanTrenMotTangXa: item.soLuongDayDanTrenMotTangXa,
          khoangCachTuDiemTreoDayToiTamCotH4: item.kcTuDiemTreoDayToiTamCotH4,
          loaiCotBeTongLiTam: item.loaiCotBeTongLiTam,
          chieuCaoCot: item.chieuCaoCot,
          heSoAnToan: item.heSoAnToan??'1.2',
          congDungCot: item.congDungCot,
          loaiCot: item.loaiCot,
          kc: item.kc,
          kcGio: item.kcGio,
          kcTrongLuong: item.kcTrongLuong,
          kcDaiBieu: item.kcDaiBieu,
          gocNeo: item.gocNeo=='0'? '' : item.gocNeo,
          soMach: item.soMach,
        }).then((res) => {
          navigation.navigate(RouteName.Result, {
            cot: item.chonCot,
            diaPhuong: item.diaPhuong,
            loaiDayDan: item.dayDan,
            vungGio: item.vungGio,
            ungSuatLonNhat: item.ungSuatLonNhat,
            ungSuatTrungBinh: item.ungSuatTrungBinh,
          });
          setLoading(false);
        });
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
      {loading ? <ActivityIndicator size="large" color="#0000ff" style={{marginTop: '50%'}}/> :
      <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => `_${index}`}
    />}
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
    textAlign: 'right',
  },
});
