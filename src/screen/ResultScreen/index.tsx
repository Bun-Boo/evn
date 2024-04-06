import React from 'react';
import {ReactElement} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import AppView from 'src/components/Global/AppView';
import AppText from 'src/components/Global/AppText';


function ResultScreen(): ReactElement {
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={{padding: 20, marginBottom: 100}}>
        <AppView fill marginHorizontal={16}>
          <AppView fill rowAlignCenter justify={'space-between'}>
            <AppText>Loại dây dẫn : dsjfjsd</AppText>
            <AppText>Vùng gió: kfksd </AppText>
          </AppView>

          <AppView fill rowAlignCenter justify={'space-between'} marginTop={20}>
            <AppText>Ứng suất lớn nhất: 32</AppText>
            <AppText>Ứng suất trung bình: 12</AppText>
          </AppView>
        </AppView>

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
        </AppView>

        <AppText textAlign={'center'} marginTop={20} fontWeight="bold">
          Lực của 1 dây dẫn tác dụng lên cột
        </AppText>

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
            <AppText marginTop={10}>50</AppText>
            <AppText marginTop={10}></AppText>
            <AppText marginTop={10}>48</AppText>
            <AppText marginTop={10}>48</AppText>
            <AppText marginTop={10}></AppText>
            <AppText marginTop={10}>63</AppText>
            <AppText marginTop={10}>63</AppText>
            <AppText marginTop={10}></AppText>
            <AppText marginTop={10}>63</AppText>
            <AppText marginTop={10}>63</AppText>
          </AppView>
        </AppView>

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
            <AppText marginTop={10}>50</AppText>
            <AppText marginTop={10}></AppText>
            <AppText marginTop={10}>48</AppText>
            <AppText marginTop={10}>48</AppText>
            <AppText marginTop={10}></AppText>
            <AppText marginTop={10}>63</AppText>
            <AppText marginTop={10}>63</AppText>
            <AppText marginTop={10}></AppText>
            <AppText marginTop={10}>63</AppText>
            <AppText marginTop={10}>63</AppText>
          </AppView>
        </AppView>

        <AppView borderBottomWidth={1} borderColor={'#ccc'} marginTop={20} />

        {/* trang 2 */}

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
        </AppView>
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
            <AppText marginTop={10}>14.0</AppText>
            <AppText marginTop={10}>14.0</AppText>
            <AppText marginTop={10}>14.0</AppText>
            <AppText marginTop={10}>14.0</AppText>
          </AppView>
        </AppView>

        <AppText textAlign={'center'} marginTop={20} fontWeight="bold">
          Lực dây dẫn tác dụng lên đầu cột
        </AppText>

        <AppText marginTop={10} fontWeight="bold">
          Chế độ làm việc bình thường
        </AppText>

        <AppView fill marginHorizontal={16} rowAlignCenter marginTop={10}>
          <AppView fill row={false}>
            <AppText marginTop={10}>P1 + P2</AppText>
            <AppText marginTop={10}>P3</AppText>
          </AppView>
          <AppView fill row={false} align="flex-end">
            <AppText marginTop={10}>272</AppText>
            <AppText marginTop={10}>50</AppText>
          </AppView>
        </AppView>

        <AppText marginTop={10} fontWeight="bold">
          Sự cố: dây bị đứt
        </AppText>

        <AppView fill marginHorizontal={16} rowAlignCenter marginTop={10}>
          <AppView fill row={false}>
            <AppText marginTop={10}>P1'+ P2'</AppText>
            <AppText marginTop={10}>P3'</AppText>
          </AppView>
          <AppView fill row={false} align="flex-end">
            <AppText marginTop={10}>198</AppText>
            <AppText marginTop={10}>268</AppText>
          </AppView>
        </AppView>

        <AppText textAlign={'center'} marginTop={20} fontWeight="bold">
          Lực gió tác dụng lên cột tác dụng lên đầu cột : 114
        </AppText>

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
          <AppView fill row={false} flex={9}>
            <AppText marginTop={10}>Chế độ làm việc bình thường</AppText>
            <AppText marginTop={10}>Sự cố: dây bị đứt</AppText>
            <AppText marginTop={10}>Chế độ làm việc bình thường DCS</AppText>
            <AppText marginTop={10}>Sự cố: dây bị đứt DCS</AppText>
            <AppText marginTop={10}>Max</AppText>
          </AppView>
          <AppView fill row={false} align="flex-end" flex={1}>
            <AppText marginTop={10}>390</AppText>
            <AppText marginTop={10}>412</AppText>
            <AppText marginTop={10}>96</AppText>
            <AppText marginTop={10}>390</AppText>
            <AppText marginTop={10}>486</AppText>
          </AppView>
        </AppView>

        <AppView fill marginHorizontal={16} rowAlignCenter marginTop={20}>
          <AppView fill row={false}>
            <AppText marginTop={10}>Loại cột lựa chọn</AppText>
            {/* <AppText marginTop={10}>Kết luận</AppText>
            <AppText marginTop={10}>Ghi chú</AppText> */}
          </AppView>
          <AppView fill row={false} align="flex-end">
            <AppText marginTop={10}>-</AppText>
            {/* <AppText marginTop={10}>-</AppText>
            <AppText marginTop={10}>-</AppText> */}
          </AppView>
        </AppView>

        <AppText textAlign={'center'} marginTop={20} fontWeight="bold">
          Kết luận
        </AppText>
        <AppText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
          eius, cumque deserunt voluptatum blanditiis excepturi provident odio!
          Pariatur alias commodi nisi, asperiores quidem consequuntur vitae
          animi illo? Voluptatibus, optio vero!
        </AppText>

        <AppText textAlign={'center'} marginTop={20} fontWeight="bold">
          Ghi chú
        </AppText>

        <AppText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
          eius, cumque deserunt voluptatum blanditiis excepturi provident odio!
          Pariatur alias commodi nisi, asperiores quidem consequuntur vitae
          animi illo? Voluptatibus, optio vero!
        </AppText>
      </View>
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
