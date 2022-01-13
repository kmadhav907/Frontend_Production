import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

interface ReviewScreenState {}

class ReviewScreen extends React.Component<{}, ReviewScreenState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Review Screen</Text>
      </View>
    );
  }
}

export default ReviewScreen;
