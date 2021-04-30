import React, { useEffect } from 'react';
import { View, Image, ScrollView, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import { Headline, TextInput, Button, Text, HelperText, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "./styles";
import strings from '../../../../../res/strings';
import images from '../../../../../res/images';

const AdminChattingDashboardDesign = ({ navigation, nav_title }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Divider style={{ height: 0.5, backgroundColor: 'gray', marginBottom: 1 }}></Divider>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={styles.division} onStartShouldSetResponder={() => { navigation.navigate('AdminChattingGroupActivity', { group: 'Group1' }) }}>
                        <View style={styles.imageDiv}>
                            <Image source={images.college.logo_square} style={styles.imageDivIcon} />
                        </View>
                        <View style={styles.headingDiv}>
                            <View style={styles.headingDivTitle}>
                                <Text style={styles.headingDivText}>Group1</Text>
                            </View>
                            <Divider style={styles.headingDivBorder}></Divider>
                        </View>
                    </View>
                    <View style={styles.division} onStartShouldSetResponder={() => { navigation.navigate('AdminChattingGroupActivity', { group: 'Group2' }) }}>
                        <View style={styles.imageDiv}>
                            <Image source={images.college.logo_square} style={styles.imageDivIcon} />
                        </View>
                        <View style={styles.headingDiv}>
                            <View style={styles.headingDivTitle}>
                                <Text style={styles.headingDivText}>Group2</Text>
                            </View>
                            <Divider style={styles.headingDivBorder}></Divider>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}
export default AdminChattingDashboardDesign;