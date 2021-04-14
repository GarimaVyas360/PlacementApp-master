import React from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import { styles } from "./styles";
import strings from '../../res/strings';
import images from '../../res/images';

const SplashDesign = () => {
    return(
        <View style={styles.rootView}>  
            <StatusBar backgroundColor={'white'}/>
            <View style={styles.childView}>  
                <Image source={images.splash.icon}
                    style={styles.imageView} />
            </View>
            <View style={styles.footerContainer}>
                <Text style={styles.footerView}>{strings.footer.powered_by}</Text>
                <View style={styles.logoContainer}>
                    <Image source={images.college.logo_square}
                    style={styles.logoContent} /> 
                </View>
            </View>
        </View>
    );
}
export default SplashDesign;