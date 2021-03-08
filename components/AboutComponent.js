import React, { Component } from 'react';

import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';
import { PARTNERS } from '../shared/partners';
import { FlatList } from 'react-native';
import { Card, ListItem, Button, Icon, Text } from 'react-native-elements';


// const AboutNavigator = createStackNavigator(
//     {
//         About: { screen: About}
//     }
// )
const Mission = () => {
    return (

        <Card
        title="Our mission">
            <Text>
              We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
            </Text>
        </Card>
    )
}
class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            partners: PARTNERS
        }
    }
    static navigationOptions = {
        title: 'About us'
    }
    render() {
        const renderPartner = ({item}) => {
            return (
                <ListItem 
                title={item.name}
                subtitle={item.description}
                leftAvatar={{source: require('./images/bootstrap-logo.png')}}
                />
            )
        }
        return (
            <ScrollView>
                <Mission />
                <Card 
                title="Community partners" 
                >
                    <FlatList
                    data={this.state.partners}
                    renderItem={renderPartner}
                    keyExtractor={item => item.id.toString()}
                    />
                   
                </Card>
            </ScrollView>
        )
    }
}

export default About;
 