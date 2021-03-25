import React, { Component } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';
import { Card, ListItem, Button, Icon, Text } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';
// const ContactNavigator = createStackNavigator(
//     {
//         Contact: { screen: Contact}
//     }
// )

class Contact extends Component {
    static navigationOptions = {
        title: 'Contact us'
    }
    sendMail() {
        MailComposer.composeAsync({
            recipients: ['campsites@nucamp.co'],
            subject: 'Inquiry',
            body: 'To whom it may concern:'
        })
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
                    <Button
                            title="Send Email"
                            buttonStyle={{backgroundColor: '#5637DD', margin: 40}}
                            icon={<Icon
                                name='envelope-o'
                                type='font-awesome'
                                color='#fff'
                                iconStyle={{marginRight: 10}}
                            />}
                            onPress={() => this.sendMail()}
                        />
                    </Card>
                </Animatable.View>
            </ScrollView>
        )
    }
}

export default Contact;
