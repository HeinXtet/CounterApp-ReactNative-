import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import CounterButton from '../components/ConterButton';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {connect} from 'react-redux';
import {ActionHandler,ActionPayloadHandler} from '../src/Action/CounterAction';


 class CounterScreen extends Component {

    constructor(props) {
        super(props)
        this.onPressIncrement = this.onPressIncrement.bind(this)
        this.onPressDecrement = this.onPressDecrement.bind(this)
        this.onPressClear = this.onPressClear.bind(this)
        this.onTextChanged = this.onTextChanged.bind(this)
        this.state = {
            count: 0,
            action : 'normal',
        }
    }

    onPressIncrement() {
        this.setState({ count: this.state.count + 1 })
    }

    onPressDecrement() {
        if (!this.state.count <= 0) {
            this.setState({ count: this.state.count - 1 })
        }
    }
    onPressClear() {
        this.setState({ count: 0 })
    }

    onTextChanged(number) {
        if (number.toString() !== ""){
            var count = parseInt(number)
            this.props.ActionPayloadHandler({count:count})
        }else{
            this.props.ActionPayloadHandler({count:0})
        }
        
    }
    render() {
        console.log(this.props);
        return (
            <View style={styles.container}>
                <Text style={styles.title_counter}>Counter App</Text>
                <Text>Count({this.props.action}) - {this.props.count}</Text>
                <TextInput
                    style={{ height: 40, width: 50, margin: 20, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={this.onTextChanged}
                    keyboardType='number-pad'
                    value={this.props.count.toString()}
                />
                <View style={styles.button_row}>
                    <CounterButton
                        radius={8}
                        margin={8}
                        titleColor='black'
                        title="Clear"
                        onPressed={() =>this.props.ActionHandler("INCREMENT")}
                        title="+"
                    />
                    <CounterButton
                        radius={8}
                        margin={8}
                        titleColor='black'
                        title="Clear"
                        onPressed={() =>this.props.ActionHandler("DECREMENT")}
                        title="-"
                    />
                </View>
                <CounterButton
                    radius={8}
                    margin={8}
                    backgroundColor='red'
                    titleColor='white'
                    title="Clear"
                    onPressed={()=>this.props.ActionHandler("CLEAR")}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    },
    button_row: {
        marginTop: 8,
        padding: 16,
        flexDirection: 'row',
    },
    count_button: {
        backgroundColor: Colors.white
    }
})


const mapDispatchAction = {
  
    ActionHandler,
    ActionPayloadHandler
}

function mapStateToProps(state){
    return {
        count : state.count,
        action : state.action
    }
}

export default connect(mapStateToProps,mapDispatchAction)(CounterScreen)