import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionDetailScreen = ({ route }: any) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text>Date: {transaction.date}</Text>
      <Text>Amount: {transaction.amount}</Text>
      <Text>Description: {transaction.description}</Text>
      <Text>Type: {transaction.type}</Text>
      <Text>Category: {transaction.category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default TransactionDetailScreen;
