import {FlatList, Header, ImageViewer, Text} from '@components';
import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
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
      <TouchableWithoutFeedback onPress={() => onViewImage(item.img)}>
        <Image
          width={width}
          height={280}
          source={item.img}
          resizeMode="cover"
        />
      </TouchableWithoutFeedback>
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
      <Image
        source={IMAGES.Group12}
        style={{marginHorizontal:25,marginTop:40,marginBottom:40}}
        resizeMode="contain"
      />
    </ScrollView>
  );
};

export default HomeScreen;
