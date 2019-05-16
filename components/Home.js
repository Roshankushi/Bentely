import React, { Component } from 'react';

import { Platform, StyleSheet, View, Image, TouchableHighlight,Text } from 'react-native';
import CardView from 'react-native-cardview';
import { Col, Row, Grid } from "react-native-easy-grid";


export default class Home extends Component {


    render() {
        
        return (
            
                <View >
<Text style={styles.headingtag}>Select Your Car</Text>

                    <Grid>
                        <Col><CardView
                            style={styles.cardViewStyle}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                <Image style={styles.cardView_InsideText} source={require('../assets/C1.jpg')} />
                            </TouchableHighlight>
                        </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                    <Image style={styles.cardView_InsideText} source={require('../assets/C2.jpg')} />
                                </TouchableHighlight>
                            </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                    <Image style={styles.cardView_InsideText} source={require('../assets/C3.jpg')} />
                                </TouchableHighlight>

                            </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                    <Image style={styles.cardView_InsideText} source={require('../assets/C4.jpg')} />
                                </TouchableHighlight>
                            </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                    <Image style={styles.cardView_InsideText} source={require('../assets/C10.jpg')} />
                                </TouchableHighlight>
                            </CardView>
                        </Col>
                        <Col><CardView
                            style={styles.cardViewStyle}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                <Image style={styles.cardView_InsideText} source={require('../assets/C5.jpg')} />
                            </TouchableHighlight>
                        </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                    <Image style={styles.cardView_InsideText} source={require('../assets/C6.jpg')} />
                                </TouchableHighlight>
                            </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>

                                    <Image style={styles.cardView_InsideText} source={require('../assets/C7.jpg')} />
                                </TouchableHighlight>
                            </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                    <Image style={styles.cardView_InsideText} source={require('../assets/C8.jpg')} />
                                </TouchableHighlight>
                            </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                    <Image style={styles.cardView_InsideText} source={require('../assets/C10.jpg')} />
                                </TouchableHighlight>

                            </CardView>
                        </Col>
                        <Col><CardView
                            style={styles.cardViewStyle}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                <Image style={styles.cardView_InsideText} source={require('../assets/C9.jpg')} />
                            </TouchableHighlight>
                        </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                    <Image style={styles.cardView_InsideText} source={require('../assets/C10.jpg')} />
                                </TouchableHighlight>
                            </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                    <Image style={styles.cardView_InsideText} source={require('../assets/C11.jpg')} />
                                </TouchableHighlight>
                            </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                    <Image style={styles.cardView_InsideText} source={require('../assets/C1.jpg')} />
                                </TouchableHighlight>
                            </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                    <Image style={styles.cardView_InsideText} source={require('../assets/C8.jpg')} />
                                </TouchableHighlight>
                            </CardView>
                        </Col>
                        <Col><CardView
                            style={styles.cardViewStyle}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                <Image style={styles.cardView_InsideText} source={require('../assets/C5.jpg')} />
                            </TouchableHighlight>

                        </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                    <Image style={styles.cardView_InsideText} source={require('../assets/C6.jpg')} />
                                </TouchableHighlight>

                            </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                    <Image style={styles.cardView_InsideText} source={require('../assets/C7.jpg')} />
                                </TouchableHighlight>

                            </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                 <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                    <Image style={styles.cardView_InsideText} source={require('../assets/C8.jpg')} />
                                </TouchableHighlight>
                            </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                    <Image style={styles.cardView_InsideText} source={require('../assets/C11.jpg')} />
                                </TouchableHighlight>

                            </CardView>
                        </Col>
                    </Grid>

                </View>


        );
    }

}

const styles = StyleSheet.create({

    

    cardViewStyle: {

        width: 180,
        height: 150,
        marginTop: 10

    },

    cardView_InsideText: {

        fontSize: 20,
        color: '#000',
        width: 180,
        height: 150

    },

    headingtag: {

        fontSize: 40,
        color: '#000',
        justifyContent: 'center',
        alignItems: 'center',

    }

});