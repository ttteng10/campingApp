import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import {getArticles} from '../apis/articles';

const menuIcon = require('../assets/icons/MenuIcon.png');
const searchIcon = require('../assets/icons/searchIcon.png');
const downArrowIcon = require('../assets/icons/downArrow.png');
const articleHeader = require('../assets/images/articleHeader.png');
const articleImg = require('../assets/images/articleImg.png');
const bookMarkIcon = require('../assets/icons/bookMark.png');

const Articles = () => {
  const navigation = useNavigation();
  const {width} = Dimensions.get('window');
  const [sortBtn, setSortBtn] = useState('FAVORITE');
  const [modalVisible, setModalVisible] = useState(false);
  const [checkModal, setCheckModal] = useState('FAVORITE');
  const [articleData, setAriticleData] = useState([]);
  const formatDate = dateString => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };
  useEffect(() => {
    const getArticlesData = async () => {
      const res = await getArticles(sortBtn);
      setAriticleData(res.data.result);
    };
    getArticlesData();
  }, [sortBtn]);
  const renderArticles = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ArticleDetail', {articleId: item.id})
        }
        style={{
          backgroundColor: '#FFF',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 8,
          width: 350,
          height: 273,
        }}>
        <Image
          source={
            item.articleImages.length > 0
              ? {uri: 'http://' + item.articleImages[0].imgPath}
              : articleImg
          }
          style={{
            height: 164,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            width: 350,
          }}
        />
        <View
          style={{
            paddingTop: 10,
            paddingBottom: 15,
            paddingLeft: 12,
            width: 350,
            gap: 8,
          }}>
          <Text style={{fontSize: 18, fontWeight: '700', color: '#573353'}}>
            {item.title}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: '#573353',
              paddingRight: 48,
            }}
            numberOfLines={2}>
            {item.content}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingRight: 12,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 12, fontWeight: '500', color: '#573353'}}>
              {formatDate(item.createDate)}
            </Text>
            <TouchableOpacity
              style={{
                width: 32,
                height: 32,
                borderRadius: 25,
                backgroundColor: '#E2E2E2',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={bookMarkIcon} style={{width: 10, height: 13}} />
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
          }}>
          <TouchableOpacity
            style={{
              //   width: 44,
              //   height: 44,
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={menuIcon} style={{width: 64, height: 44}} />
          </TouchableOpacity>
          <View>
            <Text style={{fontSize: 18, fontWeight: '700', color: '#573353'}}>
              아티클
            </Text>
          </View>
          <TouchableOpacity>
            <Image source={searchIcon} style={{width: 60, height: 60}} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={articleHeader} style={{width: 374, height: 146}} />
        </View>
        <View
          style={{
            marginTop: 24,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
          }}>
          <Text style={{fontSize: 16, fontWeight: '500', color: '#573353'}}>
            Sort By:
          </Text>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              width: 183,
              height: 33,
              backgroundColor: '#FFF',
              borderRadius: 12,
            }}>
            <Text style={{fontSize: 14, fontWeight: '500', color: '#573353'}}>
              {sortBtn === 'FAVORITE' ? '즐겨찾기순' : '최신순'}
            </Text>
            <Image source={downArrowIcon} style={{width: 20, height: 8}} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={articleData}
          renderItem={renderArticles}
          keyExtractor={item => item.id}
          removeClippedSubviews
          showsVerticalScrollIndicator={false}
        />
        <Modal
          useNativeDriver
          isVisible={modalVisible}
          animationIn={'slideInUp'}
          animationInTiming={300}
          animationOut={'slideOutDown'}
          animationOutTiming={300}
          backdropColor="#000"
          backdropOpacity={0.4}
          style={{justifyContent: 'flex-end', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: '#FFF',
              width,
              height: 142,
              borderRadius: 5,
              paddingHorizontal: 22,
              paddingTop: 10,
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}>
                <Text
                  style={{fontSize: 17, fontWeight: '700', color: '#FC9D45'}}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '700',
                  color: '#573353',
                }}>
                정렬
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  setSortBtn(checkModal);
                }}>
                <Text
                  style={{fontSize: 17, fontWeight: '700', color: '#FC9D45'}}>
                  Save
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                setCheckModal('FAVORITE');
              }}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 'auto',
                marginTop: 33,
              }}>
              <Text
                style={
                  checkModal === 'FAVORITE'
                    ? {fontSize: 18, fontWeight: '700', color: '#FDA758'}
                    : {fontSize: 18, fontWeight: '700', color: '#573353'}
                }>
                즐겨찾기순
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setCheckModal('LATEST');
              }}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 'auto',
                marginTop: 20,
              }}>
              <Text
                style={
                  checkModal === 'LATEST'
                    ? {fontSize: 18, fontWeight: '700', color: '#FDA758'}
                    : {fontSize: 18, fontWeight: '700', color: '#573353'}
                }>
                최신순
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default Articles;
