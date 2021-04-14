import { StyleSheet } from "react-native";
import dimensions from '../../../../res/dimensions';
export const styles = StyleSheet.create( 
    {  
        scrollView:{
            flexGrow : 1,
            justifyContent : 'center',
        },
        mainContainer:{  
            flex:1,
        },  
        container:{
            flex:1,
        },
        imageBackground:{
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center",
            
        },
        headerView:{
            height:100,
            justifyContent:'center',
            alignItems:'center',
            marginBottom:30,
        },
        headingText:{
            fontSize: dimensions.font_size.large_x,
            fontWeight:'bold',
            color:'navy',
            // position:'absolute',
            // right:'6%'
        },
        loginView:{
            padding:20,
            flexDirection:'column',
            height: '70%',
        },
        cardIcon:{
            marginTop:-62,
            alignSelf:'center',
            backgroundColor:'white',
            borderRadius:100,
            padding:5,
            shadowColor: '#000000',
            shadowOffset: { width: 5, height: 5},
            shadowOpacity: 0.9,
            shadowRadius: 10,
            elevation: 5,
            borderWidth: 1,
            borderColor: '#ddd',
        },
        cardImage:{
            width:75,
            height:75,
            borderRadius:100,
            borderWidth:1,
            borderColor:'white'
        },
        cardView:{
            borderWidth: 1,
            borderRadius: 8,
            borderColor: '#ddd',
            shadowColor: '#000000',
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.9,
            shadowRadius: 5,
            elevation: 3,
            width:'100%',
            height: 'auto',
            backgroundColor:'white',
            padding:15,
        },
        // cardView:{
        //     padding:10,
        // },
        // cardLogo:{
        //     justifyContent:'center',
        //     backgroundColor:'red',
        //     alignSelf:'center',
        // },
        footerContainer:{  
            width:'100%',
            height:55,
            backgroundColor: dimensions.color.footer,
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'row',
        },
        footerView:{
            color:'black',
            fontWeight:'bold',
        },
        logoContainer:{
            paddingLeft:10,
        },
        logoContent:{
            width:40,
            height:40,
            borderRadius:50,
            borderColor:'black',
            borderWidth:1,
        },
        spacing25:{
            marginBottom:25
        },
        spacing15:{
            marginBottom:15
        },
        spacing5:{
            marginBottom:5,
        },
        submitButton:{
            alignItems:'center',
            alignSelf:'center',
        },
        newAcc:{
            alignItems:'center',
            alignSelf:'center',
        },
        newAccText:{
            fontWeight:'bold',
            fontSize: dimensions.font_size.small,
            color: 'navy',
        },
        label:{
            color:'gray',
            fontWeight:'bold',
            fontFamily:'monospace',
            fontSize: dimensions.font_size.small,
        },
        textInputFieldRadio:{
            marginBottom:5,
            flexDirection:'row',
        },
        textInputFieldRadioButtonView:{
            marginBottom:5,
            flexDirection:'row',
            marginRight:25,
            alignItems:'center',
        },
        pickerView:{
            borderColor:'darkgray',
            borderWidth:1.3,
            borderRadius:4,
            backgroundColor:'#f6f6f6',
        },
        terms:{
            flexDirection:'row',
            alignItems:'center'
        },
        termsText:{
            fontWeight:'bold',
            color:'navy',
        },
        loginPage:{
            flexDirection:'row',
        },
        loginPageText:{
            fontWeight:'bold',
            fontSize: dimensions.font_size.small,
            color: 'gray',
        },
        loginPageTextLink:{
            fontWeight:'bold',
            fontSize: dimensions.font_size.small,
            color: 'navy',
        },
    }
);