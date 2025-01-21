import { StyleSheet } from 'react-native';

const defaultstyles = StyleSheet.create({
  progressBar: {
    height: 5,
    borderRadius: 2.5,
    marginBottom: 10,
    marginTop: 40,
  },
  button: {
    width: 58,
    height: 58,
    backgroundColor: '#23EBC3',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
  buttonText: {
    borderRadius: 16,
    fontSize: 24,
    width: '100%',
    color: '#fff',
    justifyContent: 'center',
    textAlign: 'center',
    },
});

export default defaultstyles;
