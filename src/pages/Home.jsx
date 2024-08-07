import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {campingApi, GetBaseList} from '../apis/feed';
import {fetchCampingData} from '../apis/feed';
import campingDummyData from '../assets/campingdata.json';

const menuIcon = require('../assets/icons/MenuIcon.png');
const dummyProfile = require('../assets/images/dummyProfile.png');
const dummyCampingImg = require('../assets/images/dummyCampingImg.png');
const heartIcon = require('../assets/icons/heart.png');

const Home = () => {
  const navigation = useNavigation();
  const [campingDate, setCampingData] = useState();
  const dummydata = campingDummyData.response.body.items.item;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=10&pageNo=1&MobileOS=IOS&MobileApp=CammingApp&serviceKey=nleLiHNGgDlto8YaOsbArk9nUK6sifjqBw7glqh4YBMl%2BhHRj1gTAXI1CkBJcseuGW6PDIm2Po2TqCK5Up2S3Q%3D%3D&_type=json',
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setCampingData(json.response.body.items.item); // 데이터 구조에 따라 변경 필요
        console.log(campingDate);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('CampingDetail', {feedId: item.contentId})
        }
        style={{
          backgroundColor: '#FFF',
          paddingHorizontal: 8,
          paddingTop: 12,
          marginBottom: 16,
          justifyContent: 'center',
          // alignItems: 'center',
          borderRadius: 8,
        }}>
        <View
          style={{
            width: 350,
            height: 148,
          }}>
          <ImageBackground
            source={{url: item.firstImageUrl}}
            style={{
              flex: 1,
              width: 345,
              height: 148,
              padding: 8,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  paddingHorizontal: 12,
                  paddingVertical: 4,
                  borderRadius: 4,
                  backgroundColor: '#FC9D45',
                }}>
                <Text style={{fontSize: 14, fontWeight: '700', color: '#FFF'}}>
                  {item.induty}
                </Text>
              </View>
              <TouchableOpacity>
                <Image source={heartIcon} style={{width: 24, height: 24}} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            marginTop: 8,
          }}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: '700',
              color: '#919191',
            }}>
            {item.facltDivNm} {item.mangeDivNm}
          </Text>
        </View>
        <View
          style={{
            marginTop: 6,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: '#545454',
            }}>
            {item.facltNm}
          </Text>
        </View>
        <View
          style={{
            marginTop: 35,
            marginBottom: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: '700',
              color: '#707070',
            }}>
            {item.addr1}
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: '#FC9D45',
            }}>
            {item.resveCl}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View
        style={{flex: 1, backgroundColor: '#FFF3E9', paddingHorizontal: 16}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 28,
            marginBottom: 18,
          }}>
          <TouchableOpacity>
            <Image source={menuIcon} style={{width: 64, height: 44}} />
          </TouchableOpacity>
          <View>
            <Text style={{fontSize: 18, fontWeight: '700', color: '#573353'}}>
              캠핑투게더
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image source={dummyProfile} style={{width: 44, height: 44}} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={dummydata}
          renderItem={renderItem}
          keyExtractor={item => item.contentId}
          removeClippedSubviews
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
