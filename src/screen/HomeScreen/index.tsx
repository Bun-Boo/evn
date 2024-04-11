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

export const data1 = [
  {
    id: 1,
    title: 'Tôi lắng nghe họ, rồi ai sẽ lắng nghe tôi?',
    subTitle:
      'Sự đồng cảm chỉ đơn giản là lắng nghe, giữ không gian, không phán xét, kết nối cảm xúc và truyền đạt thông điệp giữa mọi người. Câu hỏi cuối cùng mình nhận được cho năm vừa qua là: “Who did you become?”  và mình đã trả lời “a listener”- một người biết lắng nghe. ',
    image: 'https://i.ytimg.com/vi/SiqYFRhplU4/hqdefault.jpg',
    linkVideo: require('src/assets/videos/1.mp4'),
  },
  {
    id: 2,
    title: 'Nếu bạn nghĩ: MÌNH KHÔNG ĐỦ TỐT',
    subTitle:
      'Có bao giờ bạn thắc mắc cảm giác “mình chưa đủ tốt” đến từ đâu không? Bạn đã cố gắng, đã chăm chỉ nhưng bạn chưa bao giờ thấy đủ? Thế nhưng, như thế nào là đủ tốt? Thế nên, tôi muốn truyền tải những thông điệp để giúp những bạn nào đang có cảm giác giống tôi hiểu rằng: “Dù bạn đã làm gì, bạn cũng đủ tốt, đủ xứng đáng để nhận lấy những điều tốt đẹp nhất”.',
    image:
      'https://bloganchoi.com/wp-content/uploads/2020/09/nhung-cau-noi-hay-17.jpg',
    linkVideo: require('src/assets/videos/2.mp4'),
  },
  {
    id: 3,
    title:
      'Podcast chữa lành | Mình từng không nhận thức được giá trị của bản thân',
    subTitle:
      'Muốn biết được giá trị bản thân thì cần phải có sự tự tin về bản thân mình. Nhiều người điều kiện và mọi thứ ok la lắm nhưng chả hiểu sao cứ không tin là mình rất ổn nên trong 1 mqh lúc nào cũng là người phải chạy theo người còn lại',
    image:
      'https://blog.voiz.vn/wp-content/uploads/2022/08/nhat-ky-chua-lanh-vanwriter-960x540.jpg',
    linkVideo: require('src/assets/videos/3.mp4'),
  },
  {
    id: 4,
    title: 'ĐỪNG CHẤP NHẬN ĐAM MÊ SẼ CHỈ LÀ ĐAM MÊ | Podcast ngắn',
    subTitle: 'Đứng dậy và thay đổi, không thì mọi thứ sẽ chỉ là ước mơ thôi',
    image: 'https://i.ytimg.com/vi/IWJxA-WOo7I/maxresdefault.jpg',
    linkVideo: require('src/assets/videos/4.mp4'),
  },
  {
    id: 5,
    title: 'Đứa trẻ bên trong cậu đang cảm thấy thế nào?',
    subTitle:
      'Bản thân ba mẹ chúng ta cũng có thể là những đứa trẻ chưa được chữa lành.\nĐến một ngày, khi họ nhìn thấy trên tay đứa con của họ có rất nhiều vết sẹo, họ giận dữ la mắng nó mà không hiểu được rằng đứa con ấy đang cố để nỗi đau thể xác làm nguôi đi những đớn đau tinh thần. Những vết sẹo hữu hình trên tay con cùng với vô vàn những vết thương lòng vô hình bên trong bậc làm cha, làm mẹ vẫn đang cần được chữa lành.',
    image:
      'http://tapchitamlyhoc.com/wp-content/uploads/2021/08/cach-chua-lanh-dua-tre-ben-trong-ban-bang-tam-ly-tri-lieu-3-1-e1628319709718.jpg',
    linkVideo: require('src/assets/videos/5.mp4'),
  },
  {
    id: 6,
    title: 'Hãy nghe nếu bạn nghĩ mình không xinh',
    subTitle:
      'Thay vì mô tả về video này thì mình muốn mọi người tự cảm nhận. Và yeah, cmt cho mình biết suy nghĩ của bạn',
    image: 'https://i.ytimg.com/vi/rYGDp5f6cos/maxresdefault.jpg',
    linkVideo: require('src/assets/videos/6.mp4'),
  },
  {
    id: 7,
    title:
      'Short Podcast🎙| Podcast ngắn truyền động lực ep.3🌟 | Thất bại có đáng sợ không?',
    subTitle:
      'Có bao giờ bạn buồn bã cả tuần hay thậm chí cả tháng vì một con điểm thấp, hay một kết quả không được như bản thân mong đợi không nhỉ? Bất cứ ai trong chúng ta cũng từng trải qua một lần "thất bại" có thể chỉ là những "thất bại" nhỏ về kết quả học tập,... Podcast này dành cho bạn để tạo động lực cho bạn đứng lên, tích cực, lạc quan hơn 🥰 ',
    image: 'https://i.ytimg.com/vi/WHY29TBLIKU/maxresdefault.jpg',
    linkVideo: require('src/assets/videos/7.mp4'),
  },
  {
    id: 8,
    title: 'Mình kiệm lời, vì tâm trí đã đủ ồn ào rồi | Podcast',
    subTitle: `Trong một đám đông, ta sẽ thấy có ít nhất một kẻ ít nói. Một vài anh chị trong nhóm quay ra đặt cho người bạn ít nói kia vài câu hỏi phỏng đoán:
      - Sao em nói ít thế? Hướng nội à?
      - Nghe vẻ em hơi khó gần nhỉ?
      - Nói gì đi em! Không trầm cảm đấy.
      …..
      Mỗi lần nghe như vậy, người bạn này chỉ biết cười trừ. Nhưng trong lòng cậu thấy bức bối, khó chịu lắm. Từ bao giờ tiêu chuẩn đánh giá một người lại dựa vào việc họ nói nhiều hay ít vậy?`,
    image:
      'https://www.elle.vn/wp-content/uploads/2021/06/29/440783/cau-noi-hay-ve-muc-dich-song-2.jpg',
    linkVideo: require('src/assets/videos/8.mp4'),
  },
  {
    id: 9,
    title: 'Vì sao tuổi 20s là lứa tuổi của những giấc mơ tan vỡ?',
    subTitle: `Có những người chết ở tuổi 25 và chỉ đến 75 tuổi mới được chôn.
      Some people die at 25 and aren't buried until 75." - Benjamin Franklin
      Ước mơ của cậu là gì? Nghe câu hỏi, mình chợt khựng lại vài giây, rồi mất một hồi lâu xem mình thực sự muốn làm gì.
      Lứa tuổi 20 là đại lộ của những giấc mơ tan vỡ. Người ta lần lượt nói lời tạm biệt với những ước vọng thời ấu thơ. Người ta đối mặt với những hoang mang không ngớt về cuộc đời và tương lai.`,
    image: 'https://i.ytimg.com/vi/OqWjKNHB0LQ/hqdefault.jpg',
    linkVideo: require('src/assets/videos/9.mp4'),
  },
  {
    id: 10,
    title: 'Everyone strives to live and must live in your own way',
    subTitle: `Chúng ta đều đang sống theo cách của riêng mình. Lối sống ấy có thể rất có ý nghĩa, cũng có thể không, có thể nhìn vào rất an ổn, cũng có thể cảm thấy rất chông chênh. Cuốn sách bạn viết không ai đọc, những nơi bạn tới đều rất khác biệt, người bạn thích sẽ không bao giờ ở bên bạn cho dù bạn có làm điều gì đi chăng nữa,… Thế nhưng tất cả đều là cách sống riêng của chúng ta. Nếu bạn từng vì nó mà đánh cược thì đừng hỏi con đường này phải đi bao lâu, càng không nên quan tâm người khác gắn mác bạn là gì.`,
    image: 'https://i.ytimg.com/vi/VKzBp0h635Y/maxresdefault.jpg',
    linkVideo: require('src/assets/videos/10.mp4'),
  },
];
export const data2 = [
  {
    id: 11,
    title: 'Áp lực thi cử đối với học sinh chúng tôi lớn tới mức nào?',
    subTitle:
      'Điểm số thực sự không phải tất cả nhưng không có nghĩa bạn không cần phải học gì cả. Học không chỉ là tiếp thu kiến thức mà quan trọng hơn là rèn luyện kĩ năng, phẩm chất thái độ. Học không chỉ để biết mà còn để làm để cùng chung sống để khẳng định mình. Vì vậy hãy học những điều thiết thực và học phải vận dụng được vào trong thực tiễn cuộc sống. Bản thân cha mẹ thay vì hàng ngày hỏi con những câu như hôm nay được mấy điểm hãy hỏi con hôm nay con làm được gì, ở trường có gì vui không? Các cơ sở giáo dục cần thay đổi cách kiểm tra đánh giá, thi cử không chỉ kiểm tra kiến thức mà còn kiểm tra cả năng lực phẩm chất hãy coi trọng 1 sản phẩm ứng dụng học sinh tạo ra hơn là con số trên giấy. Đơn vị tuyển dụng phải luôn đề cao kĩ năng kinh nghiệm lên trên bất cứ loại bằng cấp điểm số nào. Có vậy chúng ta mới giải được bài toán mà cả xã hội đang loay hoay.',
    image:
      'https://blog.hocmai.vn/wp-content/uploads/2017/07/kien-thuc-thi-rong-gap-3.jpg',
    linkVideo: require('src/assets/videos/11.mp4'),
  },
  {
    id: 12,
    title: '4 mindset về động lực giúp mình ngừng trì hoãn',
    subTitle: `Mình quan niệm rằng: động lực là nội lực để hành động. Nó có thể được thúc đẩy bởi những tác nhân bên ngoài. Nhưng để thực sự biến động lực thành hành động, bạn phải thực sự tự biết cách tạo động lực cho chính mình. 

    Cũng như hành trình của mình khi bắt đầu chuyển sang làm việc tự do (Content Creator toàn thời gian). Thú thực là, đã có những lúc mình rơi vào trì hoãn, chán nản, thậm chí chẳng còn chút động lực nào để tiếp tục cố gắng. Nhiều khi, mình lại tự bỏ bê bản thân chỉ vì không tìm thấy động lực ở đâu cả. Có những hôm mình lướt điện thoại nhiều hơn giới hạn mình đặt ra. Có những hôm mình thức dậy trong mệt mỏi, lười biếng, và chỉ chờ tắt báo thức rồi quay lại ngủ tiếp. 
    
    Thế nhưng, cũng nhờ việc phải trải qua rất nhiều lần bị mất động lực như vậy, mình mới dần học được cách để tự thúc đẩy mình cố gắng. 
    
    Vậy nên, đến với video lần này, mình mong bạn sẽ có thêm góc nhìn mới, cảm hứng mới để có thể tự xây dựng sự kỷ luật cho riêng mình. `,
    image:
      'https://cdn.123job.vn/123job/uploads/2021/10/18/2021_10_18______d92ab462f59d1af06f4cda3301a1bf98.jpg',
    linkVideo: require('src/assets/videos/12.mp4'),
  },
  {
    id: 13,
    title: 'Vì sao có những người dễ khóc, còn một số khác thì không?',
    subTitle: `Đằng sau giọt nước mắt là cả một câu chuyện dài mà người ngoài cuộc không thể nào hiểu được. Mau nước mắt không có gì là đáng xấu hổ. Nhưng mong rằng cậu hãy quan sát từng đợt khóc của chính mình để nhận ra những dấu hiệu bất ổn và kịp thời tìm sự giúp đỡ. 

    Cậu xứng đáng được yêu thương nhiều hơn thế, và những giọt nước mắt lấp lánh ấy cũng nên được dành cho những điều đáng trân trọng hơn.`,
    image:
      'https://demoda.vn/wp-content/uploads/2022/01/tai-hinh-anh-buon-khoc-nu.jpg',
    linkVideo: require('src/assets/videos/13.mp4'),
  },
  {
    id: 14,
    title: 'Cách Chiến Thắng Sự Trì Hoãn',
    subTitle: `"Mong bạn trở thành phiên bản hoàn hảo nhất. Bản thân hãy cố gắng tiến bộ từng chút một, mỗi ngày hãy cho mình thêm chút hy vọng. Thế giới rộng lớn ngoài kia cũng sẽ vì sự cố gắng của mình mà dần tốt đẹp hơn nữa. Có lẽ chúng ta chưa phải người tốt nhất, nhưng chúng ta có thể trở thành một "cái tôi" tốt hơn."`,
    image: 'https://i.ytimg.com/vi/Bdsf3asTyyQ/maxresdefault.jpg',
    linkVideo: require('src/assets/videos/14.mp4'),
  },
  {
    id: 15,
    title: 'Ngoài kia, không biết thế giới yêu nhau kiểu gì? Podcast',
    subTitle: `Thay vì nói yêu, có hành động nào để thể hiện tình yêu không?
    Có chứ.
    
    Thay vì nói yêu, anh ấy nói “để anh làm cho”, “để anh mời em nhé” hay “sợ em buồn nên anh không làm” chứ không phải “anh xin lỗi vì đã làm em buồn”.
    Là anh đi đâu làm gì cũng nói với em một tiếng, là mỗi khi em tự hào kể với bạn bè về em, là khi em ôm chặt anh và cho anh biết em đã trân trọng tình yêu này như thế nào. Không có từ yêu nào nhưng đó đều là tình yêu.
    
    Vậy còn ngoài kia, không biết thế giới yêu nhau kiểu gì nhỉ?`,
    image: 'https://i.ytimg.com/vi/slbFBJnHJRc/maxresdefault.jpg',
    linkVideo: require('src/assets/videos/15.mp4'),
  },
  {
    id: 16,
    title:
      'Bạn tưởng đó là tình yêu, nhưng hoá ra không phải? | Hiệu ứng tâm lý trong tình yêu',
    subTitle:
      'Đây là nơi để chia sẻ những podcast hay, những suy nghĩ, góc nhìn, quan điểm cá nhân về mọi mặt của đời sống xã hội. Đặc biệt là đời sống của những "Người lớn trẻ tuổi". Hãy cùng chúng mình theo dõi những câu chuyện này nhé!',
    image: 'https://i.ytimg.com/vi/3q9kmjbb0-A/maxresdefault.jpg',
    linkVideo: require('src/assets/videos/16.mp4'),
  },
  {
    id: 17,
    title: 'Cậu có thể gọi được tên cảm xúc hiện tại của mình không? - Podcast',
    subTitle: `Ba mẹ chúng ta không phải là những bác sĩ tâm lý, bản thân họ cũng gặp những vấn đề của riêng họ. Khi hiểu được cách kiểm soát cảm xúc, cậu có thể chỉ cho họ biết, hoặc chí ít là sau này, khi trở thành bậc làm cha làm mẹ, cậu cũng sẽ có những cách ứng xử khác để mang lại những điều tốt nhất cho đứa con của mình. Thế hệ của những người trẻ chúng ta là thế hệ cùng nhau chữa lành. Mình tin là chúng mình có thể làm được điều đó. 

    Hít vào, thở ra. Cậu đã trả lời được câu hỏi xuất hiện đầu tiên trong podcast này chưa? Ngày hôm nay, cậu thấy thế nào?`,
    image: 'https://icanread.vn/wp-content/uploads/2018/10/crying_kid.jpg',
    linkVideo: require('src/assets/videos/17.mp4'),
  },
  {
    id: 18,
    title: 'Có câu nói nào đã từng khiến cậu vỡ vụn chưa? Podcast',
    subTitle: `Vì một câu nói, mấy giây thôi, em chết đi đôi lần …

    Lời nói sắc như dao, chọn đúng sẽ chữa lành, chọn sai sẽ thương tổn. Dù chỉ một câu nói vô tình, một lời châm chọc vô ý hay một câu phán xét bâng quơ đều có thể trở thành công cụ làm vụn vỡ trái tim nhiều người.
    Có câu nói nào đã từng khiến cậu vỡ vụn chưa?`,
    image: 'https://i.ytimg.com/vi/SSGkkMEeoJE/maxresdefault.jpg',
    linkVideo: require('src/assets/videos/18.mp4'),
  },
  {
    id: 19,
    title: ' Podcast Chữa lành là trở về với chính mình | Bản chất của mình',
    subTitle:
      'Mình bị phản bội, mình tin nhầm người, nhưng mình vẫn chọn đối tốt với họ vì đó là bản chất của mình',
    image: 'https://mcdn.coolmate.me/image/May2023/podcast-chua-lanh15.jpg',
    linkVideo: require('src/assets/videos/19.mp4'),
  },
  {
    id: 20,
    title: 'Một mình có cô đơn không? - Hold Dear',
    subTitle: `Thông qua các video, mình mong muốn chia sẻ những bài học, trải nghiệm và góc nhìn còn nhiều thiếu sót của bản thân như một lời tâm sự vào mỗi cuối tuần, hy vọng sẽ chạm đến góc nhỏ nào đó trong tâm hồn bạn.

    Cảm ơn bạn đã dành thời gian để lắng nghe và đồng hành cùng mình. Mình vô cùng trân quý những tình cảm này, mong bạn sẽ tiếp tục ủng hộ các video của mình nữa nhé!`,
    image:
      'https://haycafe.vn/wp-content/uploads/2021/12/Anh-nen-hoat-hinh-buon-co-don-mot-minh.jpg',
    linkVideo: require('src/assets/videos/20.mp4'),
  },
];

function HomeScreen(): ReactElement {
  const navigation = useNavigation();
  // const [data, setData] = React.useState([]);
  // const [dataPodCast, setDataPodCast] = React.useState([]);
  // const handleGetListPodcast = (): void => {
  //   ApiPodcast.getListPodcast().then(response => {
  //     setData(response);
  //   });
  //   ApiPodcast.getListPodcast().then(response => {
  //     setDataPodCast(response);
  //   });
  // };
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
  // React.useEffect(() => {
  //   handleGetListPodcast();
  // }, []);
  return (
    <ScrollView
      style={{flex: 1}}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={() => {}} />
      }>
      <View style={{padding: 20, marginBottom: 100}}>
        <View style={{marginBottom: 50}}>
          <Text style={styles.title}>PodCard được nghe nhiều nhất</Text>
          <FlatList
            data={data1}
            renderItem={renderItem}
            keyExtractor={(item, index) => `_${index}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Text style={styles.title}>Danh sách PodCard</Text>
        <ListPodCast data={data2} />
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
