import React, { useEffect } from 'react';
import {ReactElement} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import AppView from 'src/components/Global/AppView';
import AppText from 'src/components/Global/AppText';
import { useNavigation, useRoute } from '@react-navigation/native';
import ApiResult, { IResult } from 'src/api/Result/ApiResult';
import AppButton from 'src/components/Global/AppButton';

function ResultScreen(): ReactElement {
  const navigation = useNavigation();
  const route = useRoute();
  const { cot, loaiDayDan, vungGio, ungSuatLonNhat, ungSuatTrungBinh } = route.params as { cot: boolean, loaiDayDan: string, vungGio: string, ungSuatLonNhat: string, ungSuatTrungBinh: string };

  const [data, setData] = React.useState<IResult>();
  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
    if (cot) {
      ApiResult.getResult_DD().then((res) => {
        const result = res[0];
        for (let key in result) {
          if (result[key] === "") {
            result[key] = null;
          }
        }
        setData(result);
        setLoading(false);
      });
    } else {
      ApiResult.getResult_DCS().then((res) => {
        const result = res[0];
        for (let key in result) {
          if (result[key] === "") {
            result[key] = null;
          }
        }
        setData(result);
        setLoading(false);
      });
    }
  } , []);
  
  console.log(">>> data:", data)

  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
      {loading && <ActivityIndicator size="large" color="#0000ff" style={{marginTop: '50%'}}/>}
      {data && <View style={{padding: 20, marginBottom: -40, backgroundColor: '#eee'}}>
        <AppView fill marginHorizontal={16}>
          <AppView fill rowAlignCenter justify={'space-between'}>
            <AppText style={{fontWeight:'bold'}}>Loại dây dẫn: {loaiDayDan}</AppText>
            <AppText style={{fontWeight:'bold'}}>Vùng gió: {vungGio} </AppText>
          </AppView>

          <AppView fill rowAlignCenter justify={'space-between'} marginTop={20}>
            <AppText style={{fontWeight:'bold'}}>US lớn nhất: {ungSuatLonNhat}</AppText>
            <AppText style={{fontWeight:'bold'}}>US trung bình: {ungSuatTrungBinh}</AppText>
          </AppView>
        </AppView>
      </View>}
      {data && <View style={{padding: 20, marginBottom: 100}}>
        <AppView borderBottomWidth={1} borderColor={'#ccc'} marginTop={20} />

        <AppView fill marginHorizontal={16} rowAlignCenter marginTop={20}>
          <AppView fill row={false}>
            <AppText marginTop={10}>Số cột </AppText>
            <AppText marginTop={10}>Công dụng cột </AppText>
            <AppText marginTop={10}>Loại cột </AppText>
            <AppText marginTop={10}>K/C (m) </AppText>
            <AppText marginTop={10}>K/C gió (m) </AppText>
            <AppText marginTop={10}>K/C trọng lượng (m) </AppText>
            <AppText marginTop={10}>K/C dại biểu (m) </AppText>
            <AppText marginTop={10}>Góc néo (độ) </AppText>
            <AppText marginTop={10}>S/mạch </AppText>
          </AppView>
          <AppView fill row={false} align="flex-end">
            <AppText marginTop={10}>{data?.A}</AppText>
            <AppText marginTop={10}>{data?.B}</AppText>
            <AppText marginTop={10}>{data?.C} </AppText>
            <AppText marginTop={10}>{data?.D}</AppText>
            <AppText marginTop={10}>{data?.E}</AppText>
            <AppText marginTop={10}>{data?.F}</AppText>
            <AppText marginTop={10}>{data?.G}</AppText>
            <AppText marginTop={10}>{data?.H??"-"}</AppText>
            <AppText marginTop={10}>{data?.I}</AppText>
          </AppView>
        </AppView>

        <AppView borderBottomWidth={1} borderColor={'#ccc'} marginTop={20} />

        <AppText textAlign={'center'} marginTop={20} fontWeight="bold">
          Lực của 1 dây dẫn tác dụng lên cột
        </AppText>

        <AppView borderBottomWidth={1} borderColor={'#ccc'} marginTop={20} />
        
        <AppText marginTop={10} fontWeight="bold">
          Chế độ làm việc bình thường
        </AppText>

        <AppView fill marginHorizontal={16} rowAlignCenter marginTop={10}>
          <AppView fill row={false}>
            <AppText marginTop={10}>P1</AppText>
            <AppText marginTop={10}>Bão</AppText>
            <AppText marginTop={10} marginLeft={20}>
              - P2
            </AppText>
            <AppText marginTop={10} marginLeft={20}>
              - P3
            </AppText>
            <AppText marginTop={10}>Trung bình</AppText>

            <AppText marginTop={10} marginLeft={20}>
              - P2
            </AppText>
            <AppText marginTop={10} marginLeft={20}>
              - P3
            </AppText>
            <AppText marginTop={10}>Lạnh</AppText>

            <AppText marginTop={10} marginLeft={20}>
              - P2
            </AppText>
            <AppText marginTop={10} marginLeft={20}>
              - P3
            </AppText>
          </AppView>
          <AppView fill row={false} align="flex-end">
            <AppText marginTop={10}>{data?.J??"-"}</AppText>
            <AppText marginTop={10}></AppText>
            <AppText marginTop={10}>{data?.K??"-"}</AppText>
            <AppText marginTop={10}>{data?.L??"-"}</AppText>
            <AppText marginTop={10}></AppText>
            <AppText marginTop={10}>{data?.M??"-"}</AppText>
            <AppText marginTop={10}>{data?.N??"-"}</AppText>
            <AppText marginTop={10}></AppText>
            <AppText marginTop={10}>{data?.O??"-"}</AppText>
            <AppText marginTop={10}>{data?.P??"-"}</AppText>
          </AppView>
        </AppView>

        <AppView borderBottomWidth={1} borderColor={'#ccc'} marginTop={20} />
        <AppText marginTop={10} fontWeight="bold">
          Sự cố: dây bị đứt
        </AppText>


        <AppView fill marginHorizontal={16} rowAlignCenter marginTop={10}>
          <AppView fill row={false}>
            <AppText marginTop={10}>P1'</AppText>
            <AppText marginTop={10}>Bão</AppText>
            <AppText marginTop={10} marginLeft={20}>
              - P2'
            </AppText>
            <AppText marginTop={10} marginLeft={20}>
              - P3'
            </AppText>
            <AppText marginTop={10}>Trung bình</AppText>

            <AppText marginTop={10} marginLeft={20}>
              - P2'
            </AppText>
            <AppText marginTop={10} marginLeft={20}>
              - P3'
            </AppText>
            <AppText marginTop={10}>Lạnh</AppText>

            <AppText marginTop={10} marginLeft={20}>
              - P2'
            </AppText>
            <AppText marginTop={10} marginLeft={20}>
              - P3'
            </AppText>
          </AppView>
          <AppView fill row={false} align="flex-end">
            <AppText marginTop={10}>{data?.Q??"-"}</AppText>
            <AppText marginTop={10}></AppText>
            <AppText marginTop={10}>{data?.R??"-"}</AppText>
            <AppText marginTop={10}>{data?.S??"-"}</AppText>
            <AppText marginTop={10}></AppText>
            <AppText marginTop={10}>{data?.T??"-"}</AppText>
            <AppText marginTop={10}>{data?.U??"-"}</AppText>
            <AppText marginTop={10}></AppText>
            <AppText marginTop={10}>{data?.V??"-"}</AppText>
            <AppText marginTop={10}>{data?.W??"-"}</AppText>
          </AppView>
        </AppView>

        <AppView borderBottomWidth={1} borderColor={'#ccc'} marginTop={20} />

        {/* trang 2 */}

        {/* <AppView fill marginHorizontal={16} rowAlignCenter marginTop={20}>
          <AppView fill row={false}>
            <AppText marginTop={10}>Số cột </AppText>
            <AppText marginTop={10}>Công dụng cột </AppText>
            <AppText marginTop={10}>Loại cột </AppText>
            <AppText marginTop={10}>K/C (m) </AppText>
            <AppText marginTop={10}>K/C gió (m) </AppText>
            <AppText marginTop={10}>K/C trọng lượng (m) </AppText>
            <AppText marginTop={10}>K/C dại biểu (m) </AppText>
            <AppText marginTop={10}>Góc néo (độ) </AppText>
            <AppText marginTop={10}>S/mạch </AppText>
          </AppView>
          <AppView fill row={false} align="flex-end">
            <AppText marginTop={10}>1</AppText>
            <AppText marginTop={10}>Đỡ thẳng</AppText>
            <AppText marginTop={10}>LT16 </AppText>
            <AppText marginTop={10}>63</AppText>
            <AppText marginTop={10}>63</AppText>
            <AppText marginTop={10}>63</AppText>
            <AppText marginTop={10}>63</AppText>
            <AppText marginTop={10}>-</AppText>
            <AppText marginTop={10}>1</AppText>
          </AppView>
        </AppView> */}
        <AppText marginTop={10} fontWeight="bold">
          Cao độ treo dây (m)
        </AppText>
        <AppView fill marginHorizontal={16} rowAlignCenter marginTop={20}>
          <AppView fill row={false}>
            <AppText marginTop={10}>H1</AppText>
            <AppText marginTop={10}>H2</AppText>
            <AppText marginTop={10}>H3</AppText>
            <AppText marginTop={10}>H</AppText>
          </AppView>
          <AppView fill row={false} align="flex-end">
            <AppText marginTop={10}>{data?.X??"-"}</AppText>
            <AppText marginTop={10}>{data?.Y??"-"}</AppText>
            <AppText marginTop={10}>{data?.Z??"-"}</AppText>
            <AppText marginTop={10}>{data?.AA??"-"}</AppText>
          </AppView>
        </AppView>

        <AppView borderBottomWidth={1} borderColor={'#ccc'} marginTop={20} />

        <AppText textAlign={'center'} marginTop={20} fontWeight="bold">
          Lực dây dẫn tác dụng lên đầu cột (kG)
        </AppText>

        <AppView borderBottomWidth={1} borderColor={'#ccc'} marginTop={20} />
        
        <AppText marginTop={10} fontWeight="bold">
          Chế độ làm việc bình thường
        </AppText>

        <AppView fill marginHorizontal={16} rowAlignCenter marginTop={10}>
          <AppView fill row={false}>
            <AppText marginTop={10}>P1 + P2</AppText>
            <AppText marginTop={10}>P3</AppText>
          </AppView>
          <AppView fill row={false} align="flex-end">
            <AppText marginTop={10}>{data?.AB??"-"}</AppText>
            <AppText marginTop={10}>{data?.AC??"-"}</AppText>
          </AppView>
        </AppView>

        <AppView borderBottomWidth={1} borderColor={'#ccc'} marginTop={20} />

        <AppText marginTop={10} fontWeight="bold">
          Sự cố: dây bị đứt
        </AppText>

        <AppView fill marginHorizontal={16} rowAlignCenter marginTop={10}>
          <AppView fill row={false}>
            <AppText marginTop={10}>P1'+ P2'</AppText>
            <AppText marginTop={10}>P3'</AppText>
          </AppView>
          <AppView fill row={false} align="flex-end">
            <AppText marginTop={10}>{data?.AD??"-"}</AppText>
            <AppText marginTop={10}>{data?.AE??"-"}</AppText>
          </AppView>
        </AppView>

        <AppView borderBottomWidth={1} borderColor={'#ccc'} marginTop={20} />

        <AppText textAlign={'center'} marginTop={20} fontWeight="bold">
          Lực gió tác dụng lên cột tác dụng lên đầu cột: {data?.AF??"-"}
        </AppText>

        <AppView borderBottomWidth={1} borderColor={'#ccc'} marginTop={20} />

        <AppText marginTop={10} fontWeight="bold">
          Lực đầu cột (kG)
        </AppText>
        <AppView
          fill
          marginHorizontal={16}
          rowAlignCenter
          marginTop={20}

          // flex-start
        >
          <AppView fill row={false} flex={7}>
            <AppText marginTop={10}>Chế độ làm việc bình thường</AppText>
            <AppText marginTop={10}>Sự cố: dây bị đứt</AppText>
            {cot && <AppText marginTop={10}>Chế độ làm việc bình thường DCS</AppText>}
            {cot && <AppText marginTop={10}>Sự cố: dây bị đứt DCS</AppText>}
            <AppText marginTop={10}>Max</AppText>
          </AppView>
          <AppView fill row={false} align="flex-end" flex={1}>
            <AppText marginTop={10}>{data?.AG??"-"}</AppText>
            <AppText marginTop={10}>{data?.AH??"-"}</AppText>
            <AppText marginTop={10}>{data?.AI??"-"}</AppText>
            {cot && <AppText marginTop={10}>{data?.AJ??"-"}</AppText>}
            {cot && <AppText marginTop={10}>{data?.AK??"-"}</AppText>}
          </AppView>
        </AppView>

        <AppView fill marginHorizontal={16} rowAlignCenter marginTop={20}>
          <AppView fill row={false}>
            <AppText marginTop={10}>Loại cột lựa chọn</AppText>
            {/* <AppText marginTop={10}>Kết luận</AppText>
            <AppText marginTop={10}>Ghi chú</AppText> */}
          </AppView>
          <AppView fill row={false} align="flex-end">
            <AppText marginTop={10}>{cot?(data?.AL??"-"):(data?.AJ??"-")}</AppText>
            {/* <AppText marginTop={10}>-</AppText>
            <AppText marginTop={10}>-</AppText> */}
          </AppView>
        </AppView>

        <AppText textAlign={'center'} marginTop={20} fontWeight="bold">
          Kết luận
        </AppText>
        <AppText>
          {cot?(data?.AM??""):(data?.AK??"")}
        </AppText>

        <AppText textAlign={'center'} marginTop={20} fontWeight="bold">
          Ghi chú
        </AppText>

        <AppText>
          {cot?(data?.AN??""):(data?.AM??"")}
        </AppText>
        <AppButton
            text="Quay lại"
            textColor={'white'}
            onPress={(): void => {
              navigation.goBack();
            }}
            backgroundColor={'red'}
            borderRadius={8}
            style={{ width: '50%', marginTop: 40, alignSelf: 'center'}}
        />
      </View>}
    </ScrollView>
  );
}

export default ResultScreen;
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
