import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getArticleDetail} from '../apis/articles';

const prevArrowIcon = require('../assets/icons/prevArrow.png');
const bookMarkIcon = require('../assets/icons/bookMarkIcon.png');
const articleImg = require('../assets/images/articleImg.png');

const ArticleDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {articleId} = route.params;
  const [detailData, setDetailData] = useState();
  const [detailTime, setDetailTime] = useState('');
  const formatDate = dateString => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '';
    return new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };
  useEffect(() => {
    const articleDetailFunc = async () => {
      const res = await getArticleDetail(articleId);
      setDetailData(res.data.result);
    };
    articleDetailFunc();
  }, [articleId]);
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
            marginBottom: 20,
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: 44,
              height: 44,
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={prevArrowIcon} style={{width: 64, height: 44}} />
          </TouchableOpacity>
          <View>
            <Text style={{fontSize: 18, fontWeight: '700', color: '#573353'}}>
              아티클 상세
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: 44,
              height: 44,
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={bookMarkIcon} style={{width: 44, height: 44}} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: 350,
            height: 164,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 14,
          }}>
          <Image
            source={articleImg}
            style={{width: 350, height: 164, borderRadius: 16}}
          />
        </View>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View
            style={{
              backgroundColor: '#FFF',
              width: 350,
              height: 613,
              paddingHorizontal: 14,
              paddingTop: 13,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                color: '#573353',
                marginBottom: 15,
              }}>
              {detailData?.title}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: '#573353',
                marginBottom: 15,
                marginLeft: 'auto',
              }}>
              {formatDate(detailData?.createDate)}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '500', color: '#573353'}}>
              {detailData?.content}
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ArticleDetail;
