import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

interface AboutScreenState {}

class AboutScreen extends React.Component<
  { navigation: any },
  AboutScreenState
> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>AboutScreen</Text>
        <Button
          title='Home Screen'
          onPress={() => this.props.navigation.navigate('Home')}
        ></Button>
      </View>
    );
  }
}

export default AboutScreen;
