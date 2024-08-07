import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {campingApi} from '../apis/feed';

const splashScreen = require('../assets/images/Splash_Screen.png');
const splashContent1 = require('../assets/images/Splash_Content1.png');
const splashContent2 = require('../assets/images/Splash_Content2.png');
const splashContent3 = require('../assets/images/Splash_Content3.png');
const splashContent4 = require('../assets/images/Splash_Content4.png');
const contentDot_on = require('../assets/icons/contentDot_on.png');
const contentDot_off = require('../assets/icons/contentDot_off.png');
const contents = [
  splashContent1,
  splashContent2,
  splashContent3,
  splashContent4,
];

const Splash = () => {
  const {width} = Dimensions.get('window');
  const navigation = useNavigation();
  const [splashVisible, setSplashVisible] = useState(true);
  const [contentIdx, setContentIdx] = useState(0);
  const nextPress = () => {
    setContentIdx(contentIdx + 1);
  };
  const skipPress = () => {
    setContentIdx(3);
  };
  useEffect(() => {
    // campingApi();
    setTimeout(() => {
      // navigation.replace('MainTab');
      setSplashVisible(false);
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      {splashVisible ? (
        <Image
          source={splashScreen}
          style={{width: '100%', height: '100%'}}
          resizeMode="cover"
        />
      ) : (
        <View style={{marginTop: 80}}>
          <View>
            <Image
              source={contents[contentIdx]}
              style={{width, height: 500, marginBottom: 65}}
              resizeMode="contain"
            />
            {contentIdx !== 3 ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: 32,
                }}>
                <TouchableOpacity
                  onPress={skipPress}
                  style={{paddingBottom: 25}}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '600',
                      alignItems: 'center',
                      lineHeight: 24,
                      color: '#573353',
                    }}>
                    Skip
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 5,
                  }}>
                  <Image
                    source={contentIdx === 0 ? contentDot_on : contentDot_off}
                    style={{width: 10, height: 80}}
                  />
                  <Image
                    source={contentIdx === 1 ? contentDot_on : contentDot_off}
                    style={{width: 10, height: 80}}
                  />
                  <Image
                    source={contentIdx === 2 ? contentDot_on : contentDot_off}
                    style={{width: 10, height: 80}}
                  />
                  <Image
                    source={contentIdx === 3 ? contentDot_on : contentDot_off}
                    style={{width: 10, height: 80}}
                  />
                </View>
                <TouchableOpacity
                  onPress={nextPress}
                  style={{paddingBottom: 25}}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '600',
                      alignItems: 'center',
                      lineHeight: 24,
                      color: '#573353',
                    }}>
                    Next
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  // navigation.navigate('Login');
                  navigation.navigate('MainTab');
                }}
                style={{
                  backgroundColor: '#FDA758',
                  marginHorizontal: 20,
                  borderRadius: 8,
                  paddingVertical: 22,
                  paddingHorizontal: 132,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '700',
                    alignItems: 'center',
                    color: '#573353',
                  }}>
                  시작하기
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Splash;
