import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
    },
    title: {
      fontSize: 24,
      fontWeight: '600',
      color: '#000',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      color: '#7C7C7C',
      textAlign: 'center',
      marginBottom: 40,
    },
    pinIndicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
        marginTop: 30,
      },
      pinIndicator: {
        width: 16,
        height: 16,
        borderRadius: 6,
        backgroundColor: '#23EBC3',
      },
      keyboardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
      },
      keyboardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
      },
    
      keyboardKey: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        backgroundColor: '#fffffff',
        borderRadius: 40, 
      },  
      
      keyboardKeyText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#1D1E1F',
      },
      resetText: {
        fontSize: 16,
        color: '#1D1E1F',
        fontWeight: 'bold',
        marginVertical: 10,
      },
    setPinButton: {
      width: '80%',
      padding: 15,
      backgroundColor: '#00E0C7',
      borderRadius: 25,
      alignItems: 'center',
    },
    setPinButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#FFFFFF',
    },
  });
export default styles