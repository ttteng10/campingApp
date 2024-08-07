import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  getCommunityDetail,
  setCommunityReply,
  setCommunityLike,
} from '../apis/community';

const prevArrowIcon = require('../assets/icons/prevArrow.png');
const dummyProfile = require('../assets/images/dummyProfile.png');
const shareIcon = require('../assets/icons/ShareIcon.png');
const communtiyHeart = require('../assets/icons/communtiyHeart.png');
const communtiyBubble = require('../assets/icons/communtiyBubble.png');
const communityHeartOff = require('../assets/icons/heartOff.png');

const CommunityDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {communityId, heartNum} = route.params;
  const [detailData, setDetailData] = useState();
  const [replyData, setReplyData] = useState();
  const [newReply, setNewReply] = useState('');
  const [heartCheck, setHeartCheck] = useState(false);

  useEffect(() => {
    const getApiCommunityDetail = async () => {
      const res = await getCommunityDetail(communityId);
      setDetailData(res);
      setReplyData(res.replys);
    };
    getApiCommunityDetail();
    if (heartNum.includes(communityId)) {
      setHeartCheck(true);
    }
  }, [communityId, replyData]);

  const pressReply = async () => {
    await setCommunityReply(communityId, newReply);
    setNewReply('');
    const updatedDetail = await getCommunityDetail(communityId);
    setDetailData(updatedDetail);
    setReplyData(updatedDetail.replys);
  };

  const presslike = async communityId => {
    try {
      await setCommunityLike(communityId);
      const updatedDetail = await getCommunityDetail(communityId);
      setDetailData(updatedDetail);
      setHeartCheck(!heartCheck);
    } catch (error) {
      console.error('Failed to update like:', error);
    }
  };

  const renderReply = ({item}) => {
    return (
      <View style={{paddingHorizontal: 16, marginBottom: 19}}>
        <View style={{flexDirection: 'row', gap: 10}}>
          <Image source={dummyProfile} style={{width: 28, height: 28}} />
          <View>
            <Text style={{fontSize: 14, fontWeight: '700', color: '#573353'}}>
              {item.nickname}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '500', color: '#573353'}}>
              time
            </Text>
          </View>
        </View>
        <View style={{marginTop: 8}}>
          <Text>{item.reply}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}>
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
                marginBottom: 20,
              }}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{width: 44, height: 44}}>
                <Image source={prevArrowIcon} style={{width: 44, height: 44}} />
              </TouchableOpacity>
              <View>
                <Text
                  style={{fontSize: 18, fontWeight: '700', color: '#573353'}}>
                  상세보기
                </Text>
              </View>
              <View style={{width: 44, height: 44}} />
            </View>
            <View style={{width: 350, height: 612, backgroundColor: '#FFF'}}>
              <View
                style={{
                  width: 350,
                  height: 160,
                  backgroundColor: '#FFF',
                  borderWidth: 1,
                  borderColor: '#FFF3E9',
                  borderRadius: 10,
                  marginBottom: 30,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 16,
                    paddingTop: 12,
                    paddingBottom: 12,
                    borderBottomWidth: 1,
                    borderBottomColor: '#FFF3E9',
                  }}>
                  <View style={{flexDirection: 'row', gap: 10}}>
                    <TouchableOpacity>
                      <Image
                        source={dummyProfile}
                        style={{width: 28, height: 28}}
                      />
                    </TouchableOpacity>
                    <View style={{justifyContent: 'center'}}>
                      <TouchableOpacity>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: '700',
                            color: '#573353',
                          }}>
                          {detailData?.nickname}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: '1',
                          color: '#573353',
                        }}>
                        time
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <Image source={shareIcon} style={{widht: 32, height: 32}} />
                  </TouchableOpacity>
                </View>
                <View style={{paddingHorizontal: 16, paddingTop: 12}}>
                  <Text>{detailData?.content}</Text>
                </View>
                <View style={{marginTop: 'auto', marginBottom: 16}}>
                  <View
                    style={{
                      marginLeft: 'auto',
                      marginRight: 16,
                      flexDirection: 'row',
                      gap: 16,
                    }}>
                    <TouchableOpacity
                      onPress={() => presslike(communityId)}
                      style={{
                        flexDirection: 'row',
                        gap: 3,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      {heartCheck ? (
                        <Image
                          source={communtiyHeart}
                          style={{width: 12, height: 10}}
                        />
                      ) : (
                        <Image
                          source={communityHeartOff}
                          style={{width: 14, height: 10}}
                        />
                      )}
                      <Text>{detailData?.like}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        gap: 3,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={communtiyBubble}
                        style={{width: 10, height: 10}}
                      />
                      <Text>{detailData?.replyCount}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={{paddingHorizontal: 16, marginBottom: 22}}>
                <Text
                  style={{fontSize: 16, fontWeight: '500', color: '#57353'}}>
                  댓글
                </Text>
              </View>
              <FlatList
                data={replyData}
                renderItem={renderReply}
                keyExtractor={item => item.replyId}
                removeClippedSubviews
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <KeyboardAvoidingView // 수정된 부분 시작
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}>
        <View
          style={{
            // marginTop: 'auto',
            borderTopWidth: 0.5,
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            borderTopColor: '#E0E0E0',
            paddingHorizontal: 10,
            paddingVertical: 6,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 5,
          }}>
          <TextInput
            style={{
              color: '#FDA758',
              backgroundColor: '#F5F5F5',
              width: 300,
              height: 35,
              paddingVertical: 6,
              paddingLeft: 10,
            }}
            placeholder="댓글을 입력하세요"
            value={newReply}
            onChangeText={text => setNewReply(text)}
            autoCapitalize="none"
            spellCheck={false}
            autoCorrect={false}
            maxLength={10}
          />
          <TouchableOpacity
            onPress={pressReply}
            style={{
              width: 28,
              height: 22,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '500',
                color: '#C3C3C3',
              }}>
              등록
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CommunityDetail;
