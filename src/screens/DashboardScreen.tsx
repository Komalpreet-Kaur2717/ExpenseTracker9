import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

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

  const handleAddTransaction = (newTransaction: any) => {
    setTransactions((prevTransactions) => [newTransaction, ...prevTransactions]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Dashboard</Text>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.addTransactionButton} onPress={() => navigation.navigate('AddTransaction', { addTransaction: handleAddTransaction })}>
        <Text style={styles.addTransactionButtonText}>+ Add Transaction</Text>
      </TouchableOpacity>

      <FlatList
        data={transactions}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <Text style={styles.transactionText}>Date: {item.date}</Text>
            <Text style={styles.transactionText}>Amount: ${item.amount}</Text>
            <Text style={styles.transactionText}>Description: {item.description}</Text>
            <Text style={styles.transactionText}>Category: {item.category}</Text>
            <TouchableOpacity
              style={styles.viewDetailsButton}
              onPress={() => handleTransactionDetail(item)}
            >
              <Text style={styles.viewDetailsText}>View Details</Text>
            </TouchableOpacity>
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
    backgroundColor: '#f4f4f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  addTransactionButton: {
    backgroundColor: '#007BFF',
    borderRadius: 10,
    paddingVertical: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  addTransactionButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  transactionItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  transactionText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  viewDetailsButton: {
    marginTop: 10,
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  viewDetailsText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DashboardScreen;
