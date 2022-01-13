import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

interface HomeScreenState {}

class HomeScreen extends React.Component<{ navigation: any }, HomeScreenState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>HomeScreen</Text>
        <Button
          title='About Screen'
          onPress={() => this.props.navigation.navigate('About')}
        ></Button>
      </View>
    );
  }
}

export default HomeScreen;
