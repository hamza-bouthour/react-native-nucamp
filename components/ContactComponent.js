import React, { Component } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';
import { Card, ListItem, Button, Icon, Text } from 'react-native-elements';
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
            </ScrollView>
        )
    }
}

export default Contact;
