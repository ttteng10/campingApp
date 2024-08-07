import React, {useState, useEffect, useRef} from 'react';
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
import {setApiLogin} from '../apis/login';
import {useNavigationValue} from '../NavigationContext';

const backImage = require('../assets/images/LoginBackground.png');
const questionIcon = require('../assets/icons/loginQuestion.png');
const googleIcon = require('../assets/icons/Google_Icon.png');
const facebookIcon = require('../assets/icons/facebookIcon.png');
const emailIcon = require('../assets/icons/loginEmail.png');
const passwordIcon = require('../assets/icons/loginPassword.png');

const Login = () => {
  const navigation = useNavigation();
  const {setLoginSuccess} = useNavigationValue();
  const [loginEmail, setLoginEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keyboardOffset, setKeyboardOffset] = useState(0);
  const loginEmailRef = useRef(null);
  const passwordRef = useRef(null);

  const pressLogin = () => {
    if (!loginEmail) {
      loginEmailRef.current.focus();
      return;
    }
    if (!password) {
      passwordRef.current.focus();
      return;
    }
    if (setApiLogin(loginEmail, password)) {
      setLoginSuccess(true);
      // navigation.navigate('Home');
      navigation.replace('MainTab');
    }
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      event => {
        setKeyboardOffset(event.endCoordinates.height);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardOffset(0);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#FFF', margin: 0, padding: 0}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ImageBackground
            source={backImage}
            style={{
              flex: 1,
              width: '100%',
              height: '100%',
            }}
            resizeMode="cover">
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
              <Image
                source={questionIcon}
                style={{
                  width: 44,
                  height: 44,
                  marginTop: 20,
                  marginLeft: 'auto',
                  marginRight: 16,
                  marginBottom: 150,
                }}
              />
              <View
                style={{
                  marginHorizontal: 42,
                  marginBottom: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: '700',
                    fontSize: 32,
                    alignItems: 'center',
                    color: '#573353',
                  }}>
                  환영해요!
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 25,
                }}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    paddingHorizontal: 63,
                    paddingVertical: 13,
                    borderRadius: 12,
                    backgroundColor: '#FFF',
                    width: 350,
                    height: 50,
                    alignItems: 'center',
                  }}>
                  <Image
                    source={googleIcon}
                    style={{width: 23, height: 30, marginRight: 30}}
                  />
                  <Text style={{fontSize: 16, color: '#573353'}}>
                    Continue with Google
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    paddingHorizontal: 63,
                    paddingVertical: 13,
                    borderRadius: 12,
                    backgroundColor: '#FFF',
                    width: 350,
                    height: 50,
                    alignItems: 'center',
                  }}>
                  <Image
                    source={facebookIcon}
                    style={{width: 23, height: 45, marginRight: 30}}
                  />
                  <Text style={{fontSize: 16, color: '#573353'}}>
                    Continue with Facebook
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: '#FFF',
                  borderRadius: 8,
                  height: 356,
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 12,
                    paddingHorizontal: 140,
                    borderBottomWidth: 1,
                    borderBottomColor: '#FFF3E9',
                    marginBottom: 16,
                  }}>
                  <Text
                    style={{fontSize: 13, fontWeight: '500', color: '#753353'}}>
                    이메일로 로그인하기
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
                      backgroundColor: '#FFF6ED',
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
                        source={emailIcon}
                        style={{width: 15, height: 12}}
                      />
                    </View>
                    <View style={{paddingLeft: 16, paddingVertical: 19}}>
                      <TextInput
                        ref={loginEmailRef}
                        style={{color: '#FDA758'}}
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
                      backgroundColor: '#FFF6ED',
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
                </View>
                <View
                  style={{
                    paddingHorizontal: 20,
                    paddingTop: 20,
                    marginBottom: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={pressLogin}
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
                      로그인
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 6,
                  }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('FindPassword')}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '500',
                        textDecorationLine: 'underline',
                        color: '#573353',
                      }}>
                      비밀번호 찾기
                    </Text>
                  </TouchableOpacity>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '500',
                        color: '#573353',
                      }}>
                      아직 회원이 아니세요?
                    </Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('NewAccount')}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '700',
                          color: '#573353',
                        }}>
                        회원가입
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
