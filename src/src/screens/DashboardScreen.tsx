import React, { useState } from 'react';
import { View, Button, FlatList, Text, StyleSheet } from 'react-native';

const DashboardScreen = ({ navigation }: any) => {
  const [transactions, setTransactions] = useState([
    { id: '1', date: '2025-03-01', amount: 100, description: 'Groceries', type: 'Debit', category: 'Shopping' },
    { id: '2', date: '2025-03-02', amount: 50, description: 'Uber', type: 'Debit', category: 'Travel' },
  ]);

  const handleLogout = () => {
    navigation.replace('Login');
  };

  const handleTransactionDetail = (transaction: any) => {
    navigation.navigate('TransactionDetail', { transaction });
  };

  const handleAddTransaction = () => {
    navigation.navigate('AddTransaction');
  };

  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={handleLogout} />
      <Button title="Add Transaction" onPress={handleAddTransaction} />
      <FlatList
        data={transactions}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <Text>{item.date}</Text>
            <Text>{item.amount}</Text>
            <Text>{item.description}</Text>
            <Button title="View Details" onPress={() => handleTransactionDetail(item)} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  transactionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 10,
  },
});

export default DashboardScreen;
