import {FlatList, Header, ImageViewer, Text} from '@components';
import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageSourcePropType,
  NativeSyntheticEvent,
  NativeScrollEvent,
  TouchableWithoutFeedback,
} from 'react-native';
import {height, scale} from 'react-native-size-scaling';
import {BANNER, DATA} from './constant';
import {styles} from './styles';
import {IMAGES} from '@assets/images';

const {width} = Dimensions.get('window');
const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};
interface IData {
  id: number;
  title: string;
  img: ImageSourcePropType;
}

interface IProps {}

const HomeScreen: React.FC<IProps> = _props => {
  const [paging, setPaging] = useState(1);
  const [visible, setVisible] = useState(false);
  const [uri, setUri] = useState<ImageSourcePropType>();

  const onViewImage = (image: ImageSourcePropType) => {
    setUri(image);
    setVisible(true);
  };

  const _renderItemSlider = ({item}: {item: IData}) => {
    return (
      <TouchableOpacity onPress={() => onViewImage(item.img)}>
        <Image
          width={width}
          height={280}
          source={item.img}
          resizeMode="cover"
        />
      </TouchableOpacity>
    );
  };

  const _renderItem = ({item}: {item: IData}) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => onViewImage(item.img)}></TouchableWithoutFeedback>
    );
  };

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const slideSize = event.nativeEvent.layoutMeasurement.width;
      const index = event.nativeEvent.contentOffset.x / slideSize;
      const roundIndex = Math.round(index);

      setPaging(roundIndex + 1);
    },
    [],
  );
  return (
    <ScrollView style={{backgroundColor: '#560BAD'}}>
      {paging === 1 && (
        <TouchableOpacity onPress={() => setPaging(paging + 1)}>
          <Image
            source={IMAGES.BACK_BANNER_1}
            style={{width: '100%', height: 230}}
            resizeMode="contain"
          />
          <Image
            source={IMAGES.BACK_BANNER_2}
            style={{width: '100%', height: 230}}
            resizeMode="contain"
          />
          <Image
            source={IMAGES.BACK_BANNER_3}
            style={{width: '100%', height: 230}}
            resizeMode="contain"
          />
          <Image
            source={IMAGES.BACK_BANNER_4}
            style={{width: '100%', height: 230}}
            resizeMode="contain"
          />
          <Image
            source={IMAGES.BACK_BANNER_5}
            style={{width: '100%', height: 230, marginBottom: 100}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
      {paging === 2 && (
        <TouchableOpacity onPress={() => setPaging(paging + 1)}>
          <Image
            source={IMAGES.Group12}
            style={{marginHorizontal: 25, marginTop: 40, marginBottom: 110}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
      {paging === 3 && (
        <TouchableOpacity onPress={() => setPaging(paging + 1)}>
          <Image
            source={IMAGES.Group18}
            style={{marginHorizontal: 25, marginTop: 40, marginBottom: 100}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
      {paging === 4 && (
        <TouchableOpacity onPress={() => setPaging(paging + 1)}>
          <Image
            source={IMAGES.Group19}
            style={{marginHorizontal: 25, marginTop: 40, marginBottom: 100}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}{paging === 5 && (
        <TouchableOpacity onPress={() => setPaging(paging + 1)}>
          <Image
            source={IMAGES.Group20}
            style={{marginHorizontal: 25, marginTop: 40, marginBottom: 40}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}{paging === 6 && (
        <TouchableOpacity onPress={() => setPaging(paging + 1)}>
          <Image
            source={IMAGES.Group21}
            style={{marginHorizontal: 25, marginTop: 40, marginBottom: 40}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}{paging === 7 && (
        <TouchableOpacity onPress={() => setPaging(1)}>
          <Image
            source={IMAGES.Group22}
            
            style={{marginHorizontal: 25, marginTop: 40, marginBottom: 40}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

export default HomeScreen;
