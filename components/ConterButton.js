import React, { Component } from 'react';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';

const ConterButton = (props) => {
    return(<TouchableOpacity onPress={props.onPressed}>
        <View style={{backgroundColor:props.backgroundColor,borderRadius:props.radius,borderColor:"white" ,margin : props.margin}}>
            <Text style={{color:props.titleColor,padding:8}}>{props.title}</Text>
        </View>
    </TouchableOpacity>)
}
export default ConterButton;