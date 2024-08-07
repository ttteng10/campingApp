import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import campingDummyData from '../assets/campingdata.json';
import Modal from 'react-native-modal';

const prevArrowIcon = require('../assets/icons/prevArrow.png');
const dummyImage = require('../assets/images/dummyCampingImg.png');

const CampingDetail = () => {
  const {width} = Dimensions.get('window');
  const navigation = useNavigation();
  const route = useRoute();
  const {feedId} = route.params;
  const dummydata = campingDummyData.response.body.items.item;
  const detailData = dummydata.filter(item => item.contentId === feedId);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <ScrollView style={{flex: 1, backgroundColor: '#FFF3E9'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 28,
            paddingHorizontal: 16,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={prevArrowIcon} style={{width: 44, height: 44}} />
          </TouchableOpacity>
          <View>
            <Text style={{fontSize: 18, fontWeight: '700', color: '#573353'}}>
              캠핑장 상세정보
            </Text>
          </View>
          <View style={{width: 44, height: 44}} />
        </View>
        <View
          style={{
            marginTop: 11,
            width,
            height: 250,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={dummyImage} style={{width, height: 250}} />
        </View>
        <View
          style={{
            width,
            paddingHorizontal: 16,
            paddingTop: 38,
            backgroundColor: '#FFF',
            borderRadius: 8,
          }}>
          <View style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
            <Text style={{fontSize: 13, fontWeight: '700', color: '#FC9D45'}}>
              {detailData[0].facltDivNm}
            </Text>
            <Text style={{color: '#c8c8c8'}}>|</Text>
            <Text style={{fontSize: 13, fontWeight: '700', color: '#FC9D45'}}>
              {detailData[0].mangeDivNm}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 8,
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 16, fontWeight: '700', color: '#383838'}}>
              {detailData[0].facltNm}
            </Text>
            <Text style={{fontSize: 15, fontWeight: '700', color: '#919191'}}>
              {detailData[0].resveCl}
            </Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={{fontSize: 13, fontWeight: '700', color: '#707070'}}>
              {detailData[0].addr1}
            </Text>
          </View>
          <View style={{marginTop: 11}}>
            <Text style={{fontSize: 16, fontWeight: '700', color: '#383838'}}>
              {detailData[0].caravInnerFclty
                ? detailData[0].caravInnerFclty
                : detailData[0].sbrsCl}
            </Text>
          </View>
          <View style={{marginTop: 16}}>
            <Text style={{fontSize: 15, fontWeight: '700', color: '#919191'}}>
              소개 및 안내
            </Text>
          </View>
          <View style={{marginTop: 9}}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '700',
                color: '#383838',
                lineHeight: 22.5,
              }}>
              {detailData[0].intro
                ? detailData[0].intro
                : detailData[0].featureNm}
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            marginTop: 30,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={{
              width: 300,
              height: 60,
              borderRadius: 8,
              backgroundColor: '#FDA758',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: '700', color: '#573353'}}>
              전화하기
            </Text>
          </TouchableOpacity>
        </View>
        <Modal
          useNativeDriver
          isVisible={modalVisible}
          animationIn={'slideInUp'}
          animationInTiming={300}
          animationOut={'slideOutDown'}
          animationOutTiming={300}
          backdropColor="#000"
          backdropOpacity={0.4}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: '#FFF',
              width: 300,
              height: 142,
              borderRadius: 5,
              paddingHorizontal: 22,
              paddingTop: 10,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#573353',
                marginBottom: 5,
              }}>
              {detailData[0].tel}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                color: '#573353',
                marginBottom: 5,
              }}>
              아직 준비중인 기능입니다...
            </Text>
            <View style={{flexDirection: 'row', gap: 10}}>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 120,
                  height: 50,
                  backgroundColor: '#FDA758',
                  borderRadius: 8,
                }}>
                <Text
                  style={{fontSize: 16, fontWeight: '700', color: '#573353'}}>
                  취소
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 120,
                  height: 50,
                  backgroundColor: '#FDA758',
                  borderRadius: 8,
                }}>
                <Text
                  style={{fontSize: 16, fontWeight: '700', color: '#573353'}}>
                  통화
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CampingDetail;
