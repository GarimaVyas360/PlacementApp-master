import React, { useState } from 'react';
import { View, StyleSheet, Image, StatusBar } from 'react-native';
import { Text } from 'react-native-paper';
import { styles } from "./styles";
import CardView from 'react-native-cardview';
import images from '../../res/images';
import strings from '../../res/strings';
import dimensions from '../../res/dimensions';

const UserDashboardDesign = ({ navigation }) => {
    const [studentColor, setStudentColor] = useState('gray');
    const [tpoColor, setTpoColor] = useState('gray');
    const [adminColor, setAdminColor] = useState('gray');

    const [studentSize, setStudentSize] = useState(dimensions.font_size.normal);
    const [tpoSize, setTpoSize] = useState(dimensions.font_size.normal);
    const [adminSize, setAdminSize] = useState(dimensions.font_size.normal);
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <CardView
                    cardElevation={20}
                    cardMaxElevation={50}
                    cornerRadius={10}
                    style={styles.cardView}
                >
                    <View style={styles.cardContainer}
                        onTouchStart={() => { setStudentColor('black'), setStudentSize(dimensions.font_size.medium) }}
                        onTouchEnd={() => { setStudentColor('gray'), setStudentSize(dimensions.font_size.normal), navigation.replace('UserLoginActivity', { user: strings.users.student }) }}
                        onTouchEndCapture={() => { setStudentColor('gray'), setStudentSize(dimensions.font_size.normal) }}
                        onTouchCancel={() => { setStudentColor('gray'), setStudentSize(dimensions.font_size.normal) }}
                    >
                        <View style={styles.imageView}>
                            <Image source={images.user_dash.student}
                                style={styles.imageContent} />
                        </View>
                        <View style={styles.textView}>
                            <Text style={[styles.textContent, { color: studentColor, fontSize: studentSize }]}>{strings.users.student}</Text>
                        </View>
                    </View>
                </CardView>
            </View>
            <View style={styles.container}>
                <CardView
                    cardElevation={20}
                    cardMaxElevation={50}
                    cornerRadius={10}
                    style={styles.cardView}
                >
                    <View style={styles.cardContainer}
                        onTouchStart={() => { setTpoColor('black'), setTpoSize(dimensions.font_size.medium) }}
                        onTouchEnd={() => { setTpoColor('gray'), setTpoSize(dimensions.font_size.normal), navigation.replace('UserLoginActivity', { user: strings.users.tpo }) }}
                        onTouchEndCapture={() => { setTpoColor('gray'), setTpoSize(dimensions.font_size.normal) }}
                        onTouchCancel={() => { setTpoColor('gray'), setTpoSize(dimensions.font_size.normal) }}
                    >
                        <View style={styles.imageView}>
                            <Image source={images.user_dash.tpo}
                                style={styles.imageContent} />
                        </View>
                        <View style={styles.textView}>
                            <Text style={[styles.textContent, { color: tpoColor, fontSize: tpoSize }]}>{strings.users.tpo}</Text>
                        </View>
                    </View>
                </CardView>
            </View>
            <View style={styles.container}>
                <CardView
                    cardElevation={20}
                    cardMaxElevation={50}
                    cornerRadius={10}
                    style={styles.cardView}
                >
                    <View style={styles.cardContainer}
                        onTouchStart={() => { setAdminColor('black'), setAdminSize(dimensions.font_size.medium) }}
                        onTouchEnd={() => { setAdminColor('gray'); setAdminSize(dimensions.font_size.normal), navigation.replace('UserLoginActivity', { user: strings.users.admin }) }}
                        onTouchEndCapture={() => { setAdminColor('gray'), setAdminSize(dimensions.font_size.normal) }}
                        onTouchCancel={() => { setAdminColor('gray'), setAdminSize(dimensions.font_size.normal) }}
                    >
                        <View style={styles.imageView}>
                            <Image source={images.user_dash.admin}
                                style={styles.imageContent} />
                        </View>
                        <View style={styles.textView}>
                            <Text style={[styles.textContent, { color: adminColor, fontSize: adminSize }]}>{strings.users.admin}</Text>
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