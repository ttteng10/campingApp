import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const prevArrowIcon = require('../assets/icons/prevArrow.png');

const AppInform = () => {
  const navigation = useNavigation();
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
              앱정보
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
            앱버전
          </Text>
          <Text style={{fontSize: 16, fontWeight: '500', color: '#573353'}}>
            2.0.4231
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AppInform;
