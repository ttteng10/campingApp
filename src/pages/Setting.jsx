import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const menuIcon = require('../assets/icons/MenuIcon.png');
const settingProfile = require('../assets/images/settingProfile.png');
const profileRectBack = require('../assets/icons/profileRectBack.png');
const alarmIcon = require('../assets/icons/alarmIcon.png');
const nextBtnIcon = require('../assets/icons/nextBtnIcon.png');
const phoneIcon = require('../assets/icons/phoneIcon.png');
const QuestionIcon = require('../assets/icons/QuestionIcon.png');
const SecurityIcon = require('../assets/icons/SecurityOn.png');
const InformIcon = require('../assets/icons/InformIcon.png');
const moreIcon = require('../assets/icons/moreIcon.png');

const Setting = () => {
  const navigation = useNavigation();
  const normalBtn = (imgUrl, text, subText, naviLink = '') => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(naviLink)}
        style={{
          backgroundColor: '#FFF',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 6,
          paddingVertical: 18,
          borderRadius: 12,
          marginBottom: 8,
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
            {imgUrl === moreIcon ? (
              <Image source={imgUrl} style={{width: 18, height: 3}} />
            ) : (
              <Image source={imgUrl} style={{width: 20, height: 14}} />
            )}
          </ImageBackground>
          <View style={{gap: 8}}>
            <Text style={{fontSize: 16, fontWeight: '500', color: '#573353'}}>
              {text}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                color: '#573353',
              }}>
              {subText}
            </Text>
          </View>
        </View>
        <Image
          source={nextBtnIcon}
          style={{width: 10, height: 15, marginRight: 20}}
        />
      </TouchableOpacity>
    );
  };
  const supportBtn = (imgUrl, text, naviLink = '') => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(naviLink)}
        style={{
          backgroundColor: '#FFF',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 6,
          borderRadius: 12,
          marginBottom: 8,
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
            <Image source={imgUrl} style={{width: 20, height: 14}} />
          </ImageBackground>
          <Text style={{fontSize: 16, fontWeight: '500', color: '#573353'}}>
            {text}
          </Text>
        </View>
        <Image
          source={nextBtnIcon}
          style={{width: 10, height: 15, marginRight: 20}}
        />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFF3E9',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 28,
            marginBottom: 20,
          }}>
          <TouchableOpacity style={{width: 44, height: 44}}>
            <Image source={menuIcon} style={{width: 44, height: 44}} />
          </TouchableOpacity>
          <View>
            <Text style={{fontSize: 18, fontWeight: '700', color: '#573353'}}>
              Settings
            </Text>
          </View>
          <View style={{width: 44, height: 44}} />
        </View>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}
            style={{width: 350, height: 146}}>
            <Image
              source={settingProfile}
              style={{width: 350, height: 146, borderRadius: 12}}
            />
          </TouchableOpacity>
          <View style={{marginTop: 17, marginBottom: 17}}>
            <Text style={{fontSize: 16, fontWeight: '500', color: '#573353'}}>
              일반
            </Text>
          </View>
          {normalBtn(alarmIcon, '알람', '마케팅 알람 받아줘', 'AlarmPage')}
          {normalBtn(moreIcon, '기타', '그외 여러 일반적인 설정들...')}
          <View style={{marginTop: 15, marginBottom: 15}}>
            <Text style={{fontSize: 16, fontWeight: '500', color: '#573353'}}>
              Support
            </Text>
          </View>
          {supportBtn(phoneIcon, '문의하기')}
          {supportBtn(QuestionIcon, '자주묻는질문')}
          {supportBtn(SecurityIcon, '개인정보처리방침')}
          {supportBtn(InformIcon, '앱정보', 'Appinform')}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Setting;
