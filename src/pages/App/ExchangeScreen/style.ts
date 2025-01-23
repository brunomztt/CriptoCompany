import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginTop: 30,
        marginRight: 20,
      },
      backButton: {
        fontSize: 20,
        color: '#333',
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
        color: '#333',
      },
    cryptoList: {
      paddingVertical: 20,
    },
    gridContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    cryptoCard: {
      backgroundColor: '#f1f1f1',
      borderRadius: 10,
      padding: 10,
      marginBottom: 15,
      width: '47%',
      alignItems: 'center',
      elevation: 2,
    },
    cryptoImage: {
      width: 50,
      height: 50,
      marginBottom: 10,
    },
    cryptoPrice: {
      fontSize: 14,
      color: '#4CAF50',
    },
    noFavoritesText: {
      textAlign: 'center',
      fontSize: 16,
      color: '#888',
      marginTop: 50,
    },
    modalContainer: {
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      width: '80%',
      alignItems: 'center',
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    input: {
      width: '100%',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      textAlign: 'center',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      },
      modalButton: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '45%',
      },
      cancelButton: {
        backgroundColor: '#23EBC3',
      },
      saveButton: {
        backgroundColor: '#23EBC3',
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
  });
  export default styles;