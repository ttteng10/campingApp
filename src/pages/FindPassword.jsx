import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const prevArrowIcon = require('../assets/icons/prevArrow.png');
const findPasswordImg = require('../assets/images/findPasswordImg.png');

const FindPassword = () => {
  const navigation = useNavigation();
  const [checkEmail, setCheckEmail] = useState('');
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View
              style={{
                backgroundColor: '#FFF3E9',
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{marginTop: 39}}>
                <Image source={prevArrowIcon} style={{width: 44, height: 44}} />
              </TouchableOpacity>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 27,
                  marginBottom: 39,
                }}>
                <Text
                  style={{fontSize: 24, fontWeight: '700', color: '#573353'}}>
                  비밀번호 찾기
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 48,
                }}>
                <Image
                  source={findPasswordImg}
                  style={{width: 270, height: 263}}
                />
              </View>
              <View
                style={{
                  backgroundColor: '#FFF',
                  paddingVertical: 20,
                  borderRadius: 12,
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 5,
                  }}>
                  <Text
                    style={{fontSize: 14, fontWeight: '500', color: '#573353'}}>
                    등록된 이메일로
                  </Text>
                  <Text
                    style={{fontSize: 14, fontWeight: '500', color: '#573353'}}>
                    비밀번호 변경 메일을 발송합니다.
                  </Text>
                </View>
                <View
                  style={{
                    paddingVertical: 19,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TextInput
                    style={{
                      color: '#FDA758',
                      backgroundColor: '#FFF6ED',
                      width: 334,
                      height: 56,
                      borderRadius: 12,
                      paddingLeft: 20,
                    }}
                    placeholder="이메일을 입력하세요"
                    value={checkEmail}
                    onChange={text => setCheckEmail(text)}
                  />
                </View>
                <View
                  style={{
                    marginTop: 8,
                    marginBottom: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    style={{
                      width: 334,
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
                      비밀번호 찾기
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 50,
                  marginBottom: 34,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '500',
                    color: '#573353',
                  }}>
                  회원이세요?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '700',
                      color: '#573353',
                    }}>
                    로그인
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default FindPassword;
