import React, {useEffect, useState} from 'react';
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

const prevArrowIcon = require('../assets/icons/prevArrow.png');
const premiumImg = require('../assets/images/premiumImg.png');
const checkBack = require('../assets/icons/checkBack.png');
const checkIcon = require('../assets/icons/checkIcon.png');
const SecurityIcon = require('../assets/icons/SecurityIcon.png');

const Premium = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
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
              marginBottom: 40,
            }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{width: 44, height: 44}}>
              <Image source={prevArrowIcon} style={{width: 44, height: 44}} />
            </TouchableOpacity>
            <View>
              <Text style={{fontSize: 18, fontWeight: '700', color: '#573353'}}>
                Premium
              </Text>
            </View>
            <View style={{width: 44, height: 44}} />
          </View>
          <View
            style={{
              width: 350,
              height: 146,
              borderRadius: 12,
              marginBottom: 8,
            }}>
            <Image
              source={premiumImg}
              style={{width: 350, height: 146, borderRadius: 12}}
            />
          </View>
          <View
            style={{
              backgroundColor: '#FFF',
              width: 350,
              borderRadius: 12,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 18,
              }}>
              <Text style={{fontSize: 20, fontWeight: '700', color: '#573353'}}>
                프리미엄 회원을 위한 기능
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 12,
                paddingLeft: 20,
                gap: 20,
                borderTopWidth: 1,
                borderTopColor: '#FFF3E9',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 22,
                  height: 22,
                  backgroundColor: '#FDA758',
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={checkIcon} style={{width: 10, height: 8}} />
              </View>
              <Text style={{fontSize: 16, fontWeight: '500', color: '#573353'}}>
                월 1회 제휴 캠핑장 무료 이용
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 12,
                paddingLeft: 20,
                gap: 20,
                borderTopWidth: 1,
                borderTopColor: '#FFF3E9',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 22,
                  height: 22,
                  backgroundColor: '#FDA758',
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={checkIcon} style={{width: 10, height: 8}} />
              </View>
              <Text style={{fontSize: 16, fontWeight: '500', color: '#573353'}}>
                신라호텔 망고빙수 무료 시식
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 12,
                paddingLeft: 20,
                gap: 20,
                borderTopWidth: 1,
                borderTopColor: '#FFF3E9',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 22,
                  height: 22,
                  backgroundColor: '#FDA758',
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={checkIcon} style={{width: 10, height: 8}} />
              </View>
              <Text style={{fontSize: 16, fontWeight: '500', color: '#573353'}}>
                허먼밀러 의자 체험 2일
              </Text>
            </View>
          </View>
          <View
            style={{flexDirection: 'row', gap: 7, marginTop: 28, width: 350}}>
            <View
              style={{
                backgroundColor: '#FFF',
                justifyContent: 'center',
                alignItems: 'center',
                width: 110,
                height: 135,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: '#FFF3E9',
                  paddingVertical: 22,
                }}>
                <Text style={{fontSize: 24, fontWeight: 1, color: '#FDA758'}}>
                  $19.00
                </Text>
                <Text
                  style={{fontSize: 10, fontWeight: '500', color: '#573353'}}>
                  한달 단위로
                </Text>
                <Text
                  style={{fontSize: 10, fontWeight: '500', color: '#573353'}}>
                  쓰고 싶을 때만
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 8,
                }}>
                <Text
                  style={{fontSize: 12, fontWeight: '700', color: '#573353'}}>
                  Monthly
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#FFF',
                justifyContent: 'center',
                alignItems: 'center',
                width: 110,
                height: 154,
                padding: 0,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
              }}>
              <View
                style={{
                  backgroundColor: '#FDA758',
                  width: 110,
                  height: 40,
                  borderTopRightRadius: 12,
                  borderTopLeftRadius: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 12, fontWeight: 1, color: '#573353'}}>
                  Most Popular
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: '#FFF3E9',
                  paddingVertical: 22,
                }}>
                <Text style={{fontSize: 24, fontWeight: 1, color: '#FDA758'}}>
                  $999.00
                </Text>
                <Text
                  style={{fontSize: 10, fontWeight: '500', color: '#573353'}}>
                  1년 유지로 편안한 사용
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 8,
                }}>
                <Text
                  style={{fontSize: 12, fontWeight: '700', color: '#573353'}}>
                  Yearly
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#FFF',
                justifyContent: 'center',
                alignItems: 'center',
                width: 110,
                height: 135,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
                borderTopRightRadius: 12,
                borderTopLeftRadius: 12,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: '#FFF3E9',
                  paddingVertical: 22,
                }}>
                <Text style={{fontSize: 24, fontWeight: 1, color: '#FDA758'}}>
                  $49.00
                </Text>
                <Text
                  style={{fontSize: 10, fontWeight: '500', color: '#573353'}}>
                  개발자를 위한
                </Text>
                <Text
                  style={{fontSize: 10, fontWeight: '500', color: '#573353'}}>
                  기부
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 8,
                }}>
                <Text
                  style={{fontSize: 12, fontWeight: '700', color: '#573353'}}>
                  Donation
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
              marginBottom: 20,
              backgroundColor: '#FDA758',
              borderRadius: 8,
              width: 350,
              height: 60,
            }}>
            <Text style={{fontSize: 16, fontWeight: '700', color: '#573353'}}>
              구독하기
            </Text>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 6,
              marginBottom: 40,
            }}>
            <Image source={SecurityIcon} style={{width: 12, height: 14}} />
            <Text style={{fontSize: 12, fontWeight: 1, color: '#573353'}}>
              Secured with Goggle Play. Cancel anytime
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '700',
                color: '#FDA758',
                textDecorationLine: 'underline',
              }}>
              환불하기
            </Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                gap: 6,
                marginTop: 10,
                marginBottom: 20,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '700',
                  color: '#573353',
                  textDecorationLine: 'underline',
                }}>
                이용약관
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  color: '#573353',
                }}>
                and
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '700',
                  color: '#573353',
                  textDecorationLine: 'underline',
                }}>
                개인정보 처리방침
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Premium;
