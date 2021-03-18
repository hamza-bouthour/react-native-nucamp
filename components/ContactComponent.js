import React, { Component } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';
import { Card, ListItem, Button, Icon, Text } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
// const ContactNavigator = createStackNavigator(
//     {
//         Contact: { screen: Contact}
//     }
// )

class Contact extends Component {
    static navigationOptions = {
        title: 'Contact us'
    }
    render() {
        return (
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <Card
                    title="Contact Informations"
                    wrapperStyle={{margin: 20}}
                    >
                    <Text 
                    style={{margin: 20}}>     
                        1 Nucamp Way
                        Seattle, WA 98001
                        U.S.A.
                    </Text>
                    <Text 
                    style={{margin: 20}}>
                            Phone: 1-206-555-1234
                            Email: campsites@nucamp.co
                    </Text>
                    </Card>
                </Animatable.View>
            </ScrollView>
        )
    }
}

export default Contact;
