import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const prevArrowIcon = require('../assets/icons/prevArrow.png');
const alarmBtnBack = require('../assets/icons/alarmBtnBack.png');

const AlarmPage = () => {
  const navigation = useNavigation();
  const [alarmCheck, setAlarmCheck] = useState(false);
  useEffect(() => {}, [alarmCheck]);
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
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{width: 44, height: 44}}>
            <Image source={prevArrowIcon} style={{width: 44, height: 44}} />
          </TouchableOpacity>
          <View>
            <Text style={{fontSize: 18, fontWeight: '700', color: '#573353'}}>
              알람 설정
            </Text>
          </View>
          <View style={{width: 44, height: 44}} />
        </View>
        <View
          style={{
            backgroundColor: '#FFF',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            paddingVertical: 17,
            borderRadius: 12,
            width: 350,
          }}>
          <Text style={{fontSize: 16, fontWeight: '500', color: '#573353'}}>
            푸시 메시지 허용
          </Text>
          <TouchableOpacity onPress={() => setAlarmCheck(!alarmCheck)}>
            <ImageBackground
              source={alarmBtnBack}
              style={{
                width: 54,
                height: 30,
                borderRadius: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 4,
              }}>
              {alarmCheck ? (
                <>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: '700',
                      color: '#573353',
                      margin: 3,
                    }}>
                    On
                  </Text>
                  <View
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 11,
                      backgroundColor: '#573353',
                    }}
                  />
                </>
              ) : (
                <>
                  <View
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 11,
                      backgroundColor: '#573353',
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: '700',
                      color: '#573353',
                      margin: 3,
                    }}>
                    Off
                  </Text>
                </>
              )}
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AlarmPage;
