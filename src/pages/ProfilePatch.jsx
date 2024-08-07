import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  getApiAccountInfo,
  setApiAccountPatch,
  setApiAccountProfile,
} from '../apis/accounts';
import {launchImageLibrary} from 'react-native-image-picker';

const dummyProfile = require('../assets/images/dummyProfile.png');
const prevArrowIcon = require('../assets/icons/prevArrow.png');
const timeBack = require('../assets/icons/timeBack.png');
const timeIcon = require('../assets/icons/timeIcon.png');
const bookMarkIcon = require('../assets/icons/bookMarkIcon.png');
const musskProfile = require('../assets/images/musskProfile.png');

const ProfilePatch = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState();
  const [patchNickName, setPatchNickName] = useState('');
  const [patchIntroduce, setPatchIntroduce] = useState('');
  const [imageUri, setImageUri] = useState();
  const nickNameRef = useRef(null);
  const introducedRef = useRef(null);
  useEffect(() => {
    const getUserInfo = async () => {
      const res = await getApiAccountInfo();
      setUserData(res);
    };
    getUserInfo();
  }, [userData]);

  const pressPatchAccount = async () => {
    if (patchNickName.length < 1) {
      nickNameRef.current.focus();
      return;
    }
    if (patchIntroduce.length < 1) {
      introducedRef.current.focus();
      return;
    }
    // await setApiAccountProfile(imageUri);
    await setApiAccountPatch(patchNickName, patchIntroduce);
    navigation.navigate('Profile');
  };

  const openGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: true,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          // const uri = response.assets[0].uri;
          const formData = new FormData();
          formData.append('file', {
            uri: imageUri,
            name: 'photo.jpg',
            type: 'image/jpeg',
          });
          // setApiAccountProfile(musskProfile);
          setImageUri(formData);
        }
      },
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                <Text
                  style={{fontSize: 18, fontWeight: '700', color: '#573353'}}>
                  Profile 수정
                </Text>
              </View>
              <View style={{width: 44, height: 44}} />
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
                <TouchableOpacity onPress={openGallery}>
                  <Image
                    source={
                      userData?.profileImagePath === null
                        ? dummyProfile
                        : userData?.profileImagePath
                    }
                    style={{width: 60, height: 60}}
                  />
                </TouchableOpacity>
                <View style={{gap: 5}}>
                  <Text
                    style={{fontSize: 16, fontWeight: '700', color: '#573353'}}>
                    {userData?.nickName}
                  </Text>
                  <Text
                    style={{fontSize: 12, fontWeight: '500', color: '#573353'}}>
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
                      style={{
                        fontSize: 12,
                        fontWeight: '500',
                        color: '#573353',
                      }}>
                      내가 쓴글
                    </Text>
                    <Text
                      style={{
                        fontSize: 24,
                        fontWeight: '700',
                        color: '#573353',
                      }}>
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
                      style={{
                        fontSize: 12,
                        fontWeight: '500',
                        color: '#573353',
                      }}>
                      즐겨찾기
                    </Text>
                    <Text
                      style={{
                        fontSize: 24,
                        fontWeight: '700',
                        color: '#573353',
                      }}>
                      {userData?.favoriteCount}
                    </Text>
                  </View>
                  <Image
                    source={bookMarkIcon}
                    style={{width: 40, height: 40}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#FFF',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                paddingHorizontal: 4,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 50,
                  borderRightWidth: 1,
                  borderRightColor: '#FFF3E9',
                  paddingRight: 5,
                }}>
                <Text>닉네임</Text>
              </View>
              <TextInput
                ref={nickNameRef}
                style={{
                  color: '#FDA758',
                  width: 300,
                  height: 50,
                  padding: 5,
                }}
                placeholder="변경할 닉네임 작성해주세요"
                value={patchNickName}
                onChangeText={text => setPatchNickName(text)}
                autoCapitalize="none"
                spellCheck={false}
                autoCorrect={false}
                maxLength={20}
              />
            </View>
            <View
              style={{
                backgroundColor: '#FFF',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                paddingHorizontal: 4,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 50,
                  borderRightWidth: 1,
                  borderRightColor: '#FFF3E9',
                  paddingRight: 5,
                }}>
                <Text>소개글</Text>
              </View>
              <TextInput
                ref={introducedRef}
                style={{
                  color: '#FDA758',
                  width: 300,
                  height: 50,
                  padding: 5,
                }}
                placeholder="변경할 소개글 작성해주세요"
                value={patchIntroduce}
                onChangeText={text => setPatchIntroduce(text)}
                autoCapitalize="none"
                spellCheck={false}
                autoCorrect={false}
                maxLength={30}
              />
            </View>
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
                onPress={pressPatchAccount}
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
                  수정완료
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default ProfilePatch;
