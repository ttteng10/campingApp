import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getApiAccountInfo} from '../apis/accounts';
import {setApiLogout} from '../apis/login';

const dummyProfile = require('../assets/images/dummyProfile.png');
const prevArrowIcon = require('../assets/icons/prevArrow.png');
const EditIcon = require('../assets/icons/EditIcon.png');
const btnEllipse = require('../assets/icons/btnEllipse.png');
const timeBack = require('../assets/icons/timeBack.png');
const timeIcon = require('../assets/icons/timeIcon.png');
const bookMarkIcon = require('../assets/icons/bookMarkIcon.png');
const profileRectBack = require('../assets/icons/profileRectBack.png'); //이미지 아이콘 뒤에 배경
const cardIcon = require('../assets/icons/cardIcon.png');
const medalIcon = require('../assets/icons/medalIcon.png');
const nextBtnIcon = require('../assets/icons/nextBtnIcon.png');

const Profile = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState();
  useEffect(() => {
    const getUserInfo = async () => {
      const res = await getApiAccountInfo();
      setUserData(res);
    };
    getUserInfo();
  }, [userData]);
  const logoutPress = () => {
    setApiLogout();
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View
        style={{flex: 1, backgroundColor: '#FFF3E9', paddingHorizontal: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 28,
            marginBottom: 42,
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              borderRadius: 25,
              width: 64,
              height: 44,
            }}>
            <Image source={prevArrowIcon} style={{width: 64, height: 44}} />
          </TouchableOpacity>
          <View>
            <Text style={{fontSize: 18, fontWeight: '700', color: '#573353'}}>
              Profile
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProfilePatch')}
            style={{width: 44, height: 44}}>
            <ImageBackground
              source={btnEllipse}
              style={{
                width: 44,
                height: 44,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={EditIcon} style={{width: 17, height: 17}} />
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#FFF',
          }}>
          <TouchableOpacity
            style={{
              paddingHorizontal: 16,
              paddingVertical: 12,
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: '#FFF3E9',
            }}>
            <Image
              source={
                userData?.profileImagePath === null
                  ? dummyProfile
                  : userData?.profileImagePath
              }
              style={{width: 60, height: 60}}
            />
            <View style={{gap: 5}}>
              <Text style={{fontSize: 16, fontWeight: '700', color: '#573353'}}>
                {userData?.nickName}
              </Text>
              <Text style={{fontSize: 12, fontWeight: '500', color: '#573353'}}>
                {userData?.introduce === null
                  ? '아직 소개 글이 없습니다..'
                  : userData?.introduce}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 16,
                paddingVertical: 15,
                width: 175,
                borderRightWidth: 1,
                borderRightColor: '#FFF3E9',
              }}>
              <View>
                <Text
                  style={{fontSize: 12, fontWeight: '500', color: '#573353'}}>
                  내가 쓴글
                </Text>
                <Text
                  style={{fontSize: 24, fontWeight: '700', color: '#573353'}}>
                  {userData?.communityCount}
                </Text>
              </View>
              <ImageBackground
                source={timeBack}
                style={{
                  width: 40,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={timeIcon} style={{width: 18, height: 18}} />
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 16,
                paddingVertical: 15,
                width: 175,
              }}>
              <View>
                <Text
                  style={{fontSize: 12, fontWeight: '500', color: '#573353'}}>
                  즐겨찾기
                </Text>
                <Text
                  style={{fontSize: 24, fontWeight: '700', color: '#573353'}}>
                  {userData?.favoriteCount}
                </Text>
              </View>
              <Image source={bookMarkIcon} style={{width: 40, height: 40}} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Premium')}
          style={{
            backgroundColor: '#FFF',
            marginTop: 11,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 6,
          }}>
          <View style={{flexDirection: 'row', gap: 14, alignItems: 'center'}}>
            <ImageBackground
              source={profileRectBack}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 38,
                height: 38,
              }}>
              <Image source={cardIcon} style={{width: 20, height: 14}} />
            </ImageBackground>
            <Text style={{fontSize: 16, fontWeight: '500', color: '#573353'}}>
              프리미엄 전환
            </Text>
          </View>
          <Image
            source={nextBtnIcon}
            style={{width: 10, height: 15, marginRight: 20}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFF',
            marginTop: 11,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 6,
          }}>
          <View style={{flexDirection: 'row', gap: 14, alignItems: 'center'}}>
            <ImageBackground
              source={profileRectBack}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 38,
                height: 38,
              }}>
              <Image source={medalIcon} style={{width: 15, height: 21}} />
            </ImageBackground>
            <Text style={{fontSize: 16, fontWeight: '500', color: '#573353'}}>
              캠핑 기록
            </Text>
          </View>
          <Image
            source={nextBtnIcon}
            style={{width: 10, height: 15, marginRight: 20}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFF',
            marginTop: 11,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 6,
          }}>
          <View style={{flexDirection: 'row', gap: 14, alignItems: 'center'}}>
            <ImageBackground
              source={profileRectBack}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 38,
                height: 38,
              }}>
              <Image source={medalIcon} style={{width: 15, height: 21}} />
            </ImageBackground>
            <Text style={{fontSize: 16, fontWeight: '500', color: '#573353'}}>
              그외 메뉴들!
            </Text>
          </View>
          <Image
            source={nextBtnIcon}
            style={{width: 10, height: 15, marginRight: 20}}
          />
        </TouchableOpacity>
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 20,
            marginTop: 'auto',
            marginBottom: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={logoutPress}
            style={{
              width: 350,
              height: 60,
              backgroundColor: '#FDA758',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#573353',
              }}>
              로그아웃
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Profile;
