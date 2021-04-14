import React from 'react';
import {View, StyleSheet, Image, StatusBar} from 'react-native';
import {Text} from 'react-native-paper';
import { styles } from "./styles";
import CardView from 'react-native-cardview';
import images from '../../res/images';
import strings from '../../res/strings';

const UserDashboardDesign = () => {
    return(
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <CardView
                cardElevation={20}
                cardMaxElevation={50}
                cornerRadius={10}
                style={styles.cardView}>
                    <View style={styles.cardContainer}>
                        <View style={styles.imageView}>
                            <Image source={images.user_dash.student}
                                style={styles.imageContent} />  
                        </View>
                        <View style={styles.textView}>
                            <Text style={styles.textContent}>{strings.users.student}</Text>
                        </View>
                    </View>
                </CardView>
            </View>
            <View style={styles.container}>
                <CardView
                cardElevation={20}
                cardMaxElevation={50}
                cornerRadius={10}
                style={styles.cardView}>
                    <View style={styles.cardContainer}>
                        <View style={styles.imageView}>
                            <Image source={images.user_dash.tpo}
                                style={styles.imageContent} /> 
                        </View>
                        <View style={styles.textView}>
                            <Text style={styles.textContent}>{strings.users.tpo}</Text>
                        </View>
                    </View>
                </CardView>
            </View>
            <View style={styles.container}>
                <CardView
                cardElevation={20}
                cardMaxElevation={50}
                cornerRadius={10}
                style={styles.cardView}>
                    <View style={styles.cardContainer}>
                        <View style={styles.imageView}>
                            <Image source={images.user_dash.admin}
                                style={styles.imageContent} /> 
                        </View>
                        <View style={styles.textView}>
                            <Text style={styles.textContent}>{strings.users.admin}</Text>
                        </View>
                    </View>
                </CardView>
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
export default UserDashboardDesign;