import React from 'react';
import {Linking, TouchableOpacity, View, Image} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '@screens/home';
import SettingScreen from '@screens/setting';
import {styles} from './styles';
import {IMAGES} from '@assets/images';

export const tabBar = () => {
  const _renderIcon = (routeName: string, selectedTab: string) => {
    let icon = '';

    switch (routeName) {
      case 'MyEyes':
        icon = IMAGES.Group24;
        break;
      case 'title2':
        icon = IMAGES.Group23;
        break;
    }

    return (
      <Image source={icon} style={{height: 35}} resizeMode="contain" />
    );
  };
  const renderTabBar = ({routeName, selectedTab, navigate}: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  const linkChanelGithub = () => {
    Linking.openURL(
      'https://github.com/hoaphantn7604/react-native-template-components',
    );
  };

  return (
    <CurvedBottomBar.Navigator
      style={styles.bottomBar}
      height={55}
      circleWidth={50}
      bgColor="#FFFFFF"
      initialRouteName="MyEyes"
      borderTopLeftRight
      renderCircle={() => (
        <View style={styles.btnCircle}>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
            }}
            onPress={linkChanelGithub}>
            <Image
              source={IMAGES.mic}
              style={{width: 65}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      )}
      tabBar={renderTabBar}>
      <CurvedBottomBar.Screen
        options={{headerShown: false}}
        name="MyEyes"
        position="LEFT"
        component={() => <HomeScreen />}
      />
      <CurvedBottomBar.Screen
        options={{headerShown: false}}
        name="title2"
        component={() => <SettingScreen />}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>
  );
};
