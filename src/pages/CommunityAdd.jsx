import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {setCommunityCreate} from '../apis/community';

const prevArrowIcon = require('../assets/icons/prevArrow.png');
const EditIcon = require('../assets/icons/EditIcon.png');
const btnEllipse = require('../assets/icons/btnEllipse.png');

const CommunityAdd = () => {
  const navigation = useNavigation();
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const titleRef = useRef();
  const contentRef = useRef();
  const pressCreate = () => {
    if (newTitle.length < 1) {
      titleRef.current.focus();
      return;
    }
    if (newContent.length < 1) {
      contentRef.current.focus();
      return;
    }
    setCommunityCreate(newTitle, newContent);
    setNewTitle('');
    setNewContent('');
    navigation.navigate('Community');
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
                  새 글 쓰기
                </Text>
              </View>
              <TouchableOpacity
                onPress={pressCreate}
                style={{width: 44, height: 44}}>
                <ImageBackground
                  source={btnEllipse}
                  style={{
                    width: 44,
                    height: 44,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={EditIcon} style={{width: 17, height: 17}} />
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <TextInput
              ref={titleRef}
              style={{
                color: '#FDA758',
                width: 310,
                height: 50,
                paddingLeft: 12,
                paddingVertical: 16,
                backgroundColor: '#FFF',
                borderRadius: 12,
              }}
              placeholder="제목을 입력해주세요"
              value={newTitle}
              onChangeText={text => setNewTitle(text)}
              autoCapitalize="none"
              spellCheck={false}
              autoCorrect={false}
              maxLength={30}
            />
            <TextInput
              ref={contentRef}
              style={{
                color: '#FDA758',
                width: 350,
                height: 600,
                paddingLeft: 12,
                paddingVertical: 16,
                backgroundColor: '#FFF',
                borderRadius: 12,
                textAlignVertical: 'top',
                marginTop: 8,
              }}
              value={newContent}
              onChangeText={text => setNewContent(text)}
              autoCapitalize="none"
              spellCheck={false}
              autoCorrect={false}
              multiline={true}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CommunityAdd;
