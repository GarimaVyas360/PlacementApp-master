import { StyleSheet } from "react-native";
import dimensions from '../../../../../res/dimensions';
export const styles = StyleSheet.create( 
    {  
        mainContainer: {
            flex: 1,
            // backgroundColor: '#F5FCFF',
            backgroundColor: 'white',
        },
        container:{
            flex:1,
        },
        header:{
            height:250,
            // backgroundColor:'#0c1b32',
            backgroundColor:'#0c1b32',
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        headingDivider:{
            backgroundColor:'gray',
            height:1,
        },
        cardViewStyle:{
            width:156, 
            height:156, 
            justifyContent:'center',
            alignItems:'center'
        },
        tinyLogo: {
            width: 155,
            height: 155,
            borderRadius:100,
        },
        tinyImageLogo:{
            width: 155,
            height: 155,
            borderRadius: 100,
            backgroundColor:'black',
            borderColor:'white',
            borderWidth:1,
        },
        imageEditView:{
            position:'absolute',
            right:'25%',
            bottom:'10%',
            padding:5,
        },
        imageEdit:{
            
        },
        logoutEditView:{
            position:'absolute',
            top:15,
            right:15,
        },
        mpinView:{
            // position:'absolute',
            // right:15,
            paddingTop:5,
            bottom:35,
            justifyContent:'center',
            alignSelf:'center',
        },
        mpinEdit:{
            color: dimensions.color.lightblack,
            fontWeight:'bold',
        },
        textEditViewStyle:{
            position:'absolute',
            top:15,
            right:15,
            padding:5,
            backgroundColor:'white',
            borderWidth:2,
            borderColor:'lightgray',
            borderRadius:25,
        },
        textEditView:{
            
        },
        textEdit:{
            color:'black'
        },
        baseContainer:{
            flex:1,
            padding:30,
        },
        baseContainerView:{
            padding:5,
        },
        detailHeading:{
            color:'gray',
            fontFamily:'sans-serif-medium',
            paddingBottom:5,
            fontSize:13,
        },
        detailText:{
            color:'black',
            fontWeight:'bold',
            fontFamily:'notoserif',
            paddingBottom:15,
            fontSize:15,
        },
        headingDividerBase:{
            backgroundColor:'darkgray',
            height:1,
            marginBottom:20,
        },
        headingDividerBaseBottom:{
            backgroundColor:'darkgray',
            height:1,
            marginBottom:10,
        },
        footerView:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            height:90,
        },
        headerView:{
            flexDirection:'row',
            padding:5,
        },
        logoutEdit:{
            padding:5,
            color: dimensions.color.lightblack,
        },
    }
);