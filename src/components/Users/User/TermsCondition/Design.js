import React, { useState } from 'react';
import { View, Image, ScrollView, ActivityIndicator } from 'react-native';
import { Headline, TextInput, Button, Text, HelperText, Divider } from 'react-native-paper';
import { styles } from "./styles";
import strings from '../../../../res/strings';
import images from '../../../../res/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
const ActivityIndicatorElement = () => {
    return (
        <View style={styles.activityIndicatorStyle}>
            <ActivityIndicator
                color="red"//"#009688"
                size="large"
            />
        </View>
    );
};
const TermsConditionDesign = () => {
    const [visible, setVisible] = useState(false);
    const [url, setUrl] = useState('https://www.google.com');
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <WebView
                    style={styles.view}
                    //Loading URL
                    source={{ uri: url }}
                    //Enable Javascript support
                    javaScriptEnabled={true}
                    //For the Cache
                    domStorageEnabled={true}
                    onLoadStart={() => setVisible(true)}
                    onLoad={() => setVisible(false)}
                />
                {visible ? <ActivityIndicatorElement /> : null}
            </View>
        </SafeAreaView>
    );
}
export default TermsConditionDesign;