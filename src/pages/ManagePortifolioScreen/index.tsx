import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './style';

export default function ManagePortifolioScreen({ navigation }: any) {
  const navigateToNext = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
        <ImageBackground style={styles.topRedImg} source={require('../../assets/Top.png')}>
            <Image style={styles.headerImage} source={require('../../assets/ManagePortifolio.png')}/>
        </ImageBackground>
        <View style={styles.textContainer}>  
            <Text style={styles.title}>Manage Your Portfolio</Text>
            <Text style={styles.description}>Keep track of your investments effortlessly.</Text>
        </View>
        <View style={styles.navigationContainer}>
            <TouchableOpacity onPress={() => navigateToNext('SetAlertsScreen')}>
                <Text style={styles.skipButton}>Skip</Text>
            </TouchableOpacity>
            <View style={styles.dotContainer}>
                <View style={styles.dot} />
                <View style={[styles.dot, styles.activeDot]} />
                <View style={styles.dot} />
            </View>
            <TouchableOpacity onPress={() => navigateToNext('StaySecureScreen')}>
                <Text style={styles.nextButton}>Next</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};
