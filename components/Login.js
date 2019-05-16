
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
    ToastAndroid
} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class Login extends Component {

    constructor(props) {
        super(props);

    }




    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.loginText}>Login</Text>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="User Name"
                        keyboardType="user-name"
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                    />
                </View>

                <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={styles.forgotText}>Forgot Password ?</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={styles.signUpTexts}>LOG IN</Text>
                </TouchableHighlight>
                <Text style={styles.signUpText}>or connect Viva</Text>
                
                        <Row size={8}style={styles.spacetop}>
                            
                                <Image style={styles.spaceleft} source={require('../assets/FB.png')} />
                                <Image style={styles.spaceleft} source={require('../assets/GP.png')} />
                            </Row>

                            <Text style={styles.signUpText}>or Biometric Login</Text>
                
                <Row size={36} style={styles.spacetop}>
                    
                        <Image style={styles.spaceleft} source={require('../assets/Finger.png')} />
                        <Image style={styles.spaceleft} source={require('../assets/Face.png')} />
                    </Row>

                            

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingTop:160
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#f2f2f2',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#f2f2f2',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    signupButton: {
        backgroundColor: "#f2f2f2",
    },
    signUpText: {
        color: '#000000',
    },
    signUpTexts: {
        color: '#ffffff',
    },
    forgotText: {
        color: '#000000',
        marginBottom: 10,
        fontSize: 18,
    },
    loginButton: {
        backgroundColor: "#000000",
        color: "#ffffff",
        fontSize:48
    },
    loginText: {
        fontSize: 48,
        marginBottom: 20
    },
    spaceleft:{
        marginLeft:15
    },
    spacetop:{
        marginTop:20
    }
});