import React from 'react';
import {View, Image, Text} from 'react-native';
import Header from '../../components/Global/HeaderPage';

const Profile = () => {
  const dataSv = [
    {
      id: 1,
      name: 'Nguyễn Thu Trang',
      msv: '201032000066',
      class: 'DHMT14A2HN',
      image: require('src/assets/images/Trang.jpg'),
    },
    {
      id: 2,
      name: 'Hoàng Mai Linh',
      msv: '201032000063',
      class: 'DHMT14A2HN',
      image: require('src/assets/images/mailinh.jpg'),
    },
    {
      id: 3,
      name: 'Nguyễn Thị Khánh Linh',
      msv: '201032000105',
      class: 'DHMT14A2HN',
      image: require('src/assets/images/khanhlinh.jpg'),
    },
  ];

  return (
    <View style={{flex: 1}}>
      <Header
        logo
        children={
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 14,
              textAlign: 'center',
            }}>
            Bro chill không ?
          </Text>
        }
      />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          margin: 10,
        }}>
        Thành viên của nhóm
      </Text>
      {dataSv.map((item, index) => {
        return (
          <View
            style={{
              padding: 20,
              borderWidth: 0.5,
              borderColor: '#ccc',
              margin: 10,
              borderRadius: 10,
              flexDirection: 'row',
              columnGap: 20,
            }}>
            <Image
              source={item.image}
              style={{width: 75, height: 75, borderRadius: 10}}
            />
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginBottom: 10,
                }}>
                Họ và tên: {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginBottom: 10,
                }}>
                Lớp: {item.class}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                }}>
                Mã sinh viên: {item.msv}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};
export default Profile;
