import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ReactElement} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
} from 'react-native';
import AppView from 'src/components/Global/AppView';
import { Formik } from 'formik';
import RouteName from 'src/routes/RouteName';
import Input1 from './input1';
import Input2 from './input2';
import Input3 from './input3';
import Input4 from './input4';
import * as yup from 'yup';
import ApiHome from 'src/api/Home/ApiHome';
import getCurrentDateTime from 'src/utils/getCurrentDateTime';
import SyncStorage from 'sync-storage';

function HomeScreen(): ReactElement {
  const navigation = useNavigation();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  // role
  const [role, setRole] = useState(null);
  const loginBody = SyncStorage.get('loginBody');
  if (loginBody && !role) {
    setRole(loginBody.role);
    if (Number(loginBody.role) === 1) {
      setPage(1);
    }
  }

  //start stage of the form
  const [cot, setCot] = useState('1');
  const [tinh, setTinh] = useState('');
  const [huyen, setHuyen] = useState('');
  const [xa, setXa] = useState('');
  const [vungGio, setVungGio] = useState('');
  const [dangDiaHinh, setDangDiaHinh] = useState('');
  const [doCaoQuyDoiGio, setDoCaoQuyDoiGio] = useState<Number>(0);
  const [thoiGianSuDungCongTrinh, setThoiGianSuDungCongTrinh] = useState<Number>(0);
  const [capDienApDen, setCapDienApDen] = useState('');
  const [dayDan, setDayDan] = useState('');
  const [ungSuatLonNhat, setUngSuatLonNhat] = useState<Number>(0);
  const [ungSuatTrungBinh, setUngSuatTrungBinh] = useState<Number>(0);
  const [doCaoTreoDayTrungBinh, setDoCaoTreoDayTrungBinh] = useState<Number>(0);
  const [kcMinChoPhepTuDayDanDenMatDat, setKcMinChoPhepTuDayDanDenMatDat] = useState<Number>(0);
  const [soLuongPhanPha, setSoLuongPhanPha] = useState('1');
  const [soLuongDayDanTrenMotTangXa, setSoLuongDayDanTrenMotTangXa] = useState('1');
  const [kcTuDiemTreoDayToiTamCotH4, setKcTuDiemTreoDayToiTamCotH4] = useState<Number>(0);
  const [loaiCotBeTongLiTam, setLoaiCotBeTongLiTam] = useState('');
  const [chieuCaoCot, setChieuCaoCot] = useState('');
  const [heSoAnToan, setHeSoAnToan] = useState<Number>(1.2);
  const [congDungCot, setCongDungCot] = useState('');
  const [loaiCot, setLoaiCot] = useState('');
  const [kc, setKc] = useState<Number>(0);
  const [kcGio, setKcGio] = useState<Number>(0);
  const [kcTrongLuong, setKcTrongLuong] = useState<Number>(0);
  const [kcDaiBieu, setKcDaiBieu] = useState<Number>(0);
  const [gocNeo, setGocNeo] = useState<Number>(0);
  const [soMach, setSoMach] = useState('1');

  //end stage of the form

  const validationSchemaPage1 = yup.object().shape({
    doCaoQuyDoiGio: yup.number().min(0, 'Độ cao tối thiểu').required('Độ cao quy đổi gió không được để trống'),
    thoiGianSuDungCongTrinh: yup.number().min(0, 'Thời gian sử dụng công trình tối thiểu').required('Thời gian sử dụng công trình không được để trống'),
  });

  const validationSchemaPage2 = yup.object().shape({
    ungSuatLonNhat: yup.number().min(0, 'Ứng suất lớn nhất tối thiểu').required('Ứng suất lớn nhất không được để trống'),
    ungSuatTrungBinh: yup.number().min(0, 'Ứng suất trung bình tối thiểu').required('Ứng suất trung bình không được để trống'),
  });

  const validationSchemaPage3 = yup.object().shape({
    doCaoTreoDayTrungBinh: yup.number().min(0, 'Độ cao trung bình tối thiểu').required('Độ cao trung bình không được để trống'),
    kcMinChoPhepTuDayDanDenMatDat: yup.number().min(0, 'Khoảng cách tối thiểu').required('Khoảng cách tối thiểu không được để trống'),
    kcTuDiemTreoDayToiTamCotH4: yup.number().min(0, 'Khoảng cách tối thiểu').required('Khoảng cách không được để trống'),
    // chieuCaoCot: yup.string().required('Chiều cao không được để trống'),
    heSoAnToan: yup.number().min(0, 'Hệ số an toàn tối thiểu').required('Hệ số an toàn không được để trống'),
  });

  const validationSchemaPage4 = yup.object().shape({
    kc: yup.number().min(0, 'Khoảng cách tối thiểu').required('Khoảng cách không được để trống'),
    kcGio: yup.number().min(0, 'Khoảng cách tối thiểu').required('Khoảng cách không được để trống'),
    kcTrongLuong: yup.number().min(0, 'Khoảng cách tối thiểu').required('Khoảng cách không được để trống'),
    kcDaiBieu: yup.number().min(0, 'Khoảng cách tối thiểu').required('Khoảng cách không được để trống'),
    // gocNeo: yup.number().min(0, 'Góc neo tối thiểu').required('Góc neo không được để trống'),
  });

  const changeValidationSchema = (page: number) => {
    switch (page) {
      case 2:
        return validationSchemaPage2;
      case 3:
        return validationSchemaPage3;
      case 4:
        return validationSchemaPage4;
      default:
        return validationSchemaPage1;
    }
  };


  const changePage = (page: number, { handleSubmit, handleBack}: { handleSubmit: () => void, handleBack: () => void }) => {
    // console.log(">>> page", page);
    switch (page) {
      case 1:
        return <Input1
          cot={cot}
          tinh={tinh}
          huyen={huyen}
          xa={xa}
          vungGio={vungGio}
          dangDiaHinh={dangDiaHinh}
          doCaoQuyDoiGio={doCaoQuyDoiGio}
          thoiGianSuDungCongTrinh={thoiGianSuDungCongTrinh}
          capDienApDen={capDienApDen}
          setCot={setCot}
          setTinh={setTinh}
          setHuyen={setHuyen}
          setXa={setXa}
          setVungGio={setVungGio}
          setDangDiaHinh={setDangDiaHinh}
          setCapDienApDen={setCapDienApDen}
          handleSubmit={handleSubmit}
          handleBack={handleBack}
          />;
      case 2:
        return <Input2
          dayDan={dayDan}
          ungSuatLonNhat={ungSuatLonNhat}
          ungSuatTrungBinh={ungSuatTrungBinh}
          setDayDan={setDayDan}
          handleSubmit={handleSubmit}
          handleBack={handleBack}
          />;
      case 3:
        return <Input3
          doCaoTreoDayTrungBinh={doCaoTreoDayTrungBinh}
          kcMinChoPhepTuDayDanDenMatDat={kcMinChoPhepTuDayDanDenMatDat}
          soLuongPhanPha={soLuongPhanPha}
          soLuongDayDanTrenMotTangXa={soLuongDayDanTrenMotTangXa}
          kcTuDiemTreoDayToiTamCotH4={kcTuDiemTreoDayToiTamCotH4}
          loaiCotBeTongLiTam={loaiCotBeTongLiTam}
          chieuCaoCot={chieuCaoCot}
          heSoAnToan={heSoAnToan}
          setSoLuongPhanPha={setSoLuongPhanPha}
          setSoLuongDayDanTrenMotTangXa={setSoLuongDayDanTrenMotTangXa}
          handleSubmit={handleSubmit}
          handleBack={handleBack}
          />;
      case 4:
        return <Input4
          congDungCot={congDungCot}
          loaiCot={loaiCot}
          kc={kc}
          kcGio={kcGio}
          kcTrongLuong={kcTrongLuong}
          kcDaiBieu={kcDaiBieu}
          gocNeo={gocNeo}
          soMach={soMach}
          setCongDungCot={setCongDungCot}
          setLoaiCot={setLoaiCot}
          setSoMach={setSoMach}
          handleSubmit={handleSubmit}
          handleBack={handleBack}
          />;
      default:
        return <Text style={{marginTop: '100%', fontSize: 15, textAlign: 'center'}}>Bạn không có quyền truy cập mục này</Text>
    }
  };

  const handleBack = () => {
    if (page === 1) {
      
      return;
    }
    setPage(page - 1);
  };

  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={{padding: 20, marginBottom: 100}}>
        {loading ? <ActivityIndicator size="large" color="#0000ff" style={{marginTop: '50%'}}/> :
        <AppView fill marginHorizontal={16}>
          <Formik
            enableReinitialize
            initialValues={{
              doCaoQuyDoiGio: '',
              thoiGianSuDungCongTrinh: '',
              ungSuatLonNhat: '',
              ungSuatTrungBinh: '',
              doCaoTreoDayTrungBinh: '',
              kcMinChoPhepTuDayDanDenMatDat: '',
              kcTuDiemTreoDayToiTamCotH4: '',
              loaiCotBeTongLiTam: '',
              chieuCaoCot: '',
              heSoAnToan: '',
              kc: '',
              kcGio: '',
              kcTrongLuong: '',
              kcDaiBieu: '',
              gocNeo: '',
            }}
            validationSchema={changeValidationSchema(page)}
            onSubmit={(values) => {
              console.log(">>> values", values);
              if (page === 4) {
                setLoading(true);
                let diaPhuong = huyen;
                if (xa && xa != '' && xa != diaPhuong) {
                  diaPhuong = `${huyen} - ${xa}`;
                }

                ApiHome.patchInput({
                  id: '1310',
                  diaPhuong: diaPhuong,
                  vungGio: vungGio,
                  dangDiaHinh: dangDiaHinh,
                  doCaoQuyDoiGio: Number(values.doCaoQuyDoiGio),
                  thoiGianSuDungCongTrinh: Number(values.thoiGianSuDungCongTrinh),
                  capDienApDen: capDienApDen,
                  dayDan: dayDan,
                  ungSuatLonNhat: Number(values.ungSuatLonNhat),
                  ungSuatTrungBinh: Number(values.ungSuatTrungBinh),
                  doCaoTreoDayTrungBinh: Number(values.doCaoTreoDayTrungBinh)??0,
                  khoangCachMinChoPhepTuDayDanDenMatDat: Number(values.kcMinChoPhepTuDayDanDenMatDat)??0,
                  soLuongPhanPha: soLuongPhanPha,
                  soLuongDayDanTrenMotTangXa: soLuongDayDanTrenMotTangXa,
                  khoangCachTuDiemTreoDayToiTamCotH4: Number(values.kcTuDiemTreoDayToiTamCotH4)??0,
                  loaiCotBeTongLiTam: values.loaiCotBeTongLiTam,
                  chieuCaoCot: values.chieuCaoCot,
                  heSoAnToan: values.heSoAnToan??'1.2',
                  congDungCot: congDungCot,
                  loaiCot: loaiCot,
                  kc: Number(values.kc)??0,
                  kcGio: Number(values.kcGio)??0,
                  kcTrongLuong: Number(values.kcTrongLuong)??0,
                  kcDaiBieu: Number(values.kcDaiBieu)??0,
                  gocNeo: values.gocNeo=='0'? '' : values.gocNeo,
                  soMach: soMach,
                }).then((res) => {
                  navigation.navigate(RouteName.Result, {
                    cot: cot=='1',
                    diaPhuong: diaPhuong,
                    loaiDayDan: dayDan,
                    vungGio: vungGio,
                    ungSuatLonNhat: values.ungSuatLonNhat,
                    ungSuatTrungBinh: values.ungSuatTrungBinh,
                  });
                });

                ApiHome.postHistory({
                  id: 'INCREMENT',
                  diaPhuong: diaPhuong,
                  vungGio: vungGio,
                  dangDiaHinh: dangDiaHinh,
                  doCaoQuyDoiGio: Number(values.doCaoQuyDoiGio),
                  thoiGianSuDungCongTrinh: Number(values.thoiGianSuDungCongTrinh),
                  capDienApDen: capDienApDen,
                  dayDan: dayDan,
                  ungSuatLonNhat: Number(values.ungSuatLonNhat),
                  ungSuatTrungBinh: Number(values.ungSuatTrungBinh),
                  doCaoTreoDayTrungBinh: Number(values.doCaoTreoDayTrungBinh)??0,
                  khoangCachMinChoPhepTuDayDanDenMatDat: Number(values.kcMinChoPhepTuDayDanDenMatDat)??0,
                  soLuongPhanPha: soLuongPhanPha,
                  soLuongDayDanTrenMotTangXa: soLuongDayDanTrenMotTangXa,
                  khoangCachTuDiemTreoDayToiTamCotH4: Number(values.kcTuDiemTreoDayToiTamCotH4)??0,
                  loaiCotBeTongLiTam: values.loaiCotBeTongLiTam,
                  chieuCaoCot: values.chieuCaoCot,
                  heSoAnToan: values.heSoAnToan??'1.2',
                  congDungCot: congDungCot,
                  loaiCot: loaiCot,
                  kc: Number(values.kc)??0,
                  kcGio: Number(values.kcGio)??0,
                  kcTrongLuong: Number(values.kcTrongLuong)??0,
                  kcDaiBieu: Number(values.kcDaiBieu)??0,
                  gocNeo: values.gocNeo=='0'? '' : values.gocNeo,
                  soMach: soMach,
                  chonCot: cot,
                  dateTime: getCurrentDateTime(),
                }).then((res) => {
                  setLoading(false);
                });

                
              } else{
                setPage(page + 1);
              }
            }}>
            {({handleSubmit}): ReactElement => (
              <>
                {changePage(page, { handleSubmit, handleBack})}
              </>
            )}
          </Formik>
        </AppView>}
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
