import React, {useState, useRef} from 'react';
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
import {useNavigationValue} from '../NavigationContext';
import {setApiNewAccount} from '../apis/accounts';
import {setApiLogin} from '../apis/login';

const newAccountIcon = require('../assets/icons/newAccount.png');
const emailIcon = require('../assets/icons/newAccountEmail.png');
const passwordIcon = require('../assets/icons/loginPassword.png');
const userIcon = require('../assets/icons/user.png');
const phoneIcon = require('../assets/icons/phone.png');
const checkIcon = require('../assets/icons/checkIcon.png');
const googleIcon = require('../assets/icons/Google_Icon.png');
const facebookIcon = require('../assets/icons/facebookIcon.png');

const NewAccount = () => {
  const navigation = useNavigation();
  const {setLoginSuccess} = useNavigationValue();
  const [userName, setUserName] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);
  const userNameRef = useRef(null);
  const loginEmailRef = useRef(null);
  const passwordRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const pressBox1 = () => {
    setCheckBox1(!checkBox1);
  };
  const pressBox2 = () => {
    setCheckBox2(!checkBox2);
  };
  const pressAccount = () => {
    if (!userName) {
      userNameRef.current.focus();
      return;
    }
    if (!loginEmail) {
      loginEmailRef.current.focus();
      return;
    }
    if (!password) {
      passwordRef.current.focus();
      return;
    }
    if (!phoneNumber) {
      phoneNumberRef.current.focus();
      return;
    }
    setApiNewAccount(loginEmail, password, userName, phoneNumber);
    if (checkBox1 && setApiLogin(loginEmail, password)) {
      setLoginSuccess(true);
      //   navigation.navigate('Home');
      navigation.replace('MainTab');
    } else {
      navigation.navigate('Login');
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={{backgroundColor: '#FFF3E9', paddingHorizontal: 20}}>
              <View style={{paddingHorizontal: 90, paddingTop: 20}}>
                <Image
                  source={newAccountIcon}
                  style={{width: 187, height: 200}}
                />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 21,
                  marginBottom: 32,
                }}>
                <Text
                  style={{fontSize: 24, fontWeight: '700', color: '#573353'}}>
                  회원가입
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 8,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: '#FFF',
                    borderRadius: 12,
                    width: 374,
                    height: 56,
                    //   justifyContent: 'center',
                    //   alignItems: 'center',
                  }}>
                  <View
                    style={{
                      borderRightWidth: 1.5,
                      borderColor: '#FFF3E9',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingLeft: 17,
                      paddingRight: 22,
                    }}>
                    <Image source={userIcon} style={{width: 14, height: 16}} />
                  </View>
                  <View style={{paddingLeft: 16, paddingVertical: 19}}>
                    <TextInput
                      ref={userNameRef}
                      style={{color: '#FDA758'}}
                      placeholder="이름을 입력하세요"
                      value={userName}
                      onChangeText={text => setUserName(text)}
                      autoCapitalize="none"
                      spellCheck={false}
                      autoCorrect={false}
                      maxLength={20}
                    />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: '#FFF',
                    borderRadius: 12,
                    width: 374,
                    height: 56,
                  }}>
                  <View
                    style={{
                      borderRightWidth: 1.5,
                      borderColor: '#FFF3E9',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingLeft: 17,
                      paddingRight: 22,
                    }}>
                    <Image source={emailIcon} style={{width: 15, height: 12}} />
                  </View>
                  <View style={{paddingLeft: 16, paddingVertical: 19}}>
                    <TextInput
                      ref={loginEmailRef}
                      style={{color: '#FDA758'}}
                      keyboardType="email"
                      placeholder="이메일을 입력하세요"
                      value={loginEmail}
                      onChangeText={text => setLoginEmail(text)}
                      autoCapitalize="none"
                      spellCheck={false}
                      autoCorrect={false}
                      maxLength={20}
                    />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: '#FFF',
                    borderRadius: 12,
                    width: 374,
                    height: 56,
                  }}>
                  <View
                    style={{
                      borderRightWidth: 1.5,
                      borderColor: '#FFF3E9',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingLeft: 17,
                      paddingRight: 22,
                    }}>
                    <Image
                      source={passwordIcon}
                      style={{width: 12, height: 16}}
                    />
                  </View>
                  <View style={{paddingLeft: 16, paddingVertical: 19}}>
                    <TextInput
                      ref={passwordRef}
                      style={{color: '#573353'}}
                      placeholder="비밀번호을 입력하세요"
                      value={password}
                      onChangeText={text => setPassword(text)}
                      autoCapitalize="none"
                      spellCheck={false}
                      autoCorrect={false}
                      secureTextEntry={true}
                      maxLength={20}
                    />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: '#FFF',
                    borderRadius: 12,
                    width: 374,
                    height: 56,
                  }}>
                  <View
                    style={{
                      borderRightWidth: 1.5,
                      borderColor: '#FFF3E9',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingLeft: 17,
                      paddingRight: 22,
                    }}>
                    <Image source={phoneIcon} style={{width: 15, height: 18}} />
                  </View>
                  <View style={{paddingLeft: 16, paddingVertical: 19}}>
                    <TextInput
                      ref={phoneNumberRef}
                      style={{color: '#FDA758'}}
                      placeholder="전화번호를 입력하세요"
                      value={phoneNumber}
                      onChangeText={text => setPhoneNumber(text)}
                      autoCapitalize="none"
                      spellCheck={false}
                      autoCorrect={false}
                      maxLength={20}
                    />
                  </View>
                </View>
              </View>
              <View style={{marginTop: 28, gap: 15}}>
                <TouchableOpacity
                  onPress={pressBox1}
                  style={{flexDirection: 'row', gap: 11}}>
                  {checkBox1 ? (
                    <View
                      style={{
                        backgroundColor: '#FDA758',
                        width: 20,
                        height: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 6,
                      }}>
                      <Image
                        source={checkIcon}
                        style={{width: 10, height: 8}}
                      />
                    </View>
                  ) : (
                    <View
                      style={{
                        backgroundColor: '#FDA758',
                        width: 20,
                        height: 20,
                        borderRadius: 6,
                      }}></View>
                  )}
                  <Text
                    style={{fontSize: 16, fontWeight: '500', color: '#573353'}}>
                    자동 로그인
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={pressBox2}
                  style={{flexDirection: 'row', gap: 11}}>
                  {checkBox2 ? (
                    <View
                      style={{
                        backgroundColor: '#FDA758',
                        width: 20,
                        height: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 6,
                      }}>
                      <Image
                        source={checkIcon}
                        style={{width: 10, height: 8}}
                      />
                    </View>
                  ) : (
                    <View
                      style={{
                        backgroundColor: '#FDA758',
                        width: 20,
                        height: 20,
                        borderRadius: 6,
                      }}></View>
                  )}
                  <Text
                    style={{fontSize: 16, fontWeight: '500', color: '#573353'}}>
                    약관 동의
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingTop: 20,
                  marginTop: 8,
                  marginBottom: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={pressAccount}
                  style={{
                    width: 374,
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
                    회원가입하기
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 10,
                    alignItems: 'center',
                    marginBottom: 20,
                  }}>
                  <View
                    style={{
                      borderTopColor: '573353',
                      borderTopWidth: 1,
                      width: 120,
                    }}
                  />
                  <Text
                    style={{fontSize: 14, fontWeight: '500', color: '#573353'}}>
                    Or sign in with
                  </Text>
                  <View
                    style={{
                      borderTopColor: '573353',
                      borderTopWidth: 1,
                      width: 120,
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      //   paddingHorizontal: 63,
                      paddingVertical: 13,
                      borderRadius: 12,
                      backgroundColor: '#FFF',
                      width: 181,
                      height: 50,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={googleIcon}
                      style={{width: 23, height: 30, marginRight: 16}}
                    />
                    <Text style={{fontSize: 16, color: '#573353'}}>Google</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      //   paddingHorizontal: 63,
                      paddingVertical: 13,
                      borderRadius: 12,
                      backgroundColor: '#FFF',
                      width: 181,
                      height: 50,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={facebookIcon}
                      style={{width: 23, height: 40, marginRight: 16}}
                    />
                    <Text style={{fontSize: 16, color: '#573353'}}>
                      Facebook
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: 32,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '500',
                      color: '#573353',
                    }}>
                    회원이세요?
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}>
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
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default NewAccount;
