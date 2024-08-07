import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getCommunity, setCommunityLike} from '../apis/community';

const menuIcon = require('../assets/icons/MenuIcon.png');
const dummyProfile = require('../assets/images/dummyProfile.png');
const shareIcon = require('../assets/icons/ShareIcon.png');
const communityHeart = require('../assets/icons/communtiyHeart.png');
const communtiyBubble = require('../assets/icons/communtiyBubble.png');
const communityHeartOff = require('../assets/icons/heartOff.png');

const Community = () => {
  const navigation = useNavigation();
  const [communityData, setCommunityData] = useState();
  const [heartNum, setHeartNum] = useState([]);
  useEffect(() => {
    const getApiCommunity = async () => {
      const res = await getCommunity();
      setCommunityData(res);
    };
    getApiCommunity();
  }, [communityData]);
  const presslike = async communityId => {
    try {
      const likeId = await setCommunityLike(communityId);
      const updatedCommunityData = await getCommunity();
      setCommunityData(updatedCommunityData);
      if (!heartNum.includes(communityId)) {
        setHeartNum([...heartNum, communityId]);
      } else if (heartNum.includes(communityId)) {
        const newArr = heartNum.filter(item => item !== communityId);
        setHeartNum(newArr);
      }
    } catch (error) {
      console.error('Failed to update like:', error);
    }
  };
  const renderCommunity = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('CommunityDetail', {
            communityId: item.id,
            heartNum: heartNum,
          })
        }
        style={{
          width: 350,
          height: 160,
          backgroundColor: '#FFF',
          borderWidth: 1,
          borderColor: '#FFF3E9',
          borderRadius: 10,
          marginBottom: 8,
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
              <Image source={dummyProfile} style={{width: 28, height: 28}} />
            </TouchableOpacity>
            <View style={{justifyContent: 'center'}}>
              <TouchableOpacity>
                <Text
                  style={{fontSize: 14, fontWeight: '700', color: '#573353'}}>
                  {item.nickname}
                </Text>
              </TouchableOpacity>
              <Text style={{fontSize: 12, fontWeight: '1', color: '#573353'}}>
                time
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Image source={shareIcon} style={{widht: 32, height: 32}} />
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 16, paddingTop: 12}}>
          <Text>{item.content}</Text>
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
              onPress={() => presslike(item.id)}
              style={{
                flexDirection: 'row',
                gap: 3,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {heartNum.includes(item.id) ? (
                <Image
                  source={communityHeart}
                  style={{width: 12, height: 10}}
                />
              ) : (
                <Image
                  source={communityHeartOff}
                  style={{width: 14, height: 10}}
                />
              )}
              <Text>{item.like}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                gap: 3,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={communtiyBubble} style={{width: 10, height: 10}} />
              <Text>{item.replyCount}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View
        style={{flex: 1, backgroundColor: '#FFF3E9', paddingHorizontal: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 28,
            marginBottom: 42,
          }}>
          <TouchableOpacity
            style={{
              //   width: 44,
              //   height: 44,
              borderRadius: 25,
            }}>
            <Image source={menuIcon} style={{width: 64, height: 44}} />
          </TouchableOpacity>
          <View>
            <Text style={{fontSize: 18, fontWeight: '700', color: '#573353'}}>
              커뮤니티
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image source={dummyProfile} style={{width: 44, height: 44}} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={communityData}
          renderItem={renderCommunity}
          keyExtractor={item => item.id}
          removeClippedSubviews
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Community;
