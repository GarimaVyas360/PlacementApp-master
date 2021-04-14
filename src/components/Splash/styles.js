import { StyleSheet } from "react-native";
export const styles = StyleSheet.create( 
    {  
        rootView:{  
            justifyContent: 'center',  
            flex:1,
            margin: 5,  
            position: 'absolute',  
            width: '100%',  
            height: '100%',  
            backgroundColor: 'white',
        },  
        childView:{  
            justifyContent: 'center',
            alignItems: 'center',
            flex:0.5,
        },
        imageView:{
            width:'100%', height: '100%', resizeMode: 'contain'
        },
        footerContainer:{  
            // flex:0.07,w
            position:'absolute',
            bottom:5,
            width:'100%',
            height:55,
            backgroundColor:'#e8e4c9',
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
        }
    }
);