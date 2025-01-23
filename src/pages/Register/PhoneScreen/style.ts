import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#FFFFFF',
    alignContent: 'center',

  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1D1E1F',
    marginBottom: 20,
    alignItems: 'center',

  },
  phoneInputContainer: {
    marginVertical: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  textContainer: {
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#ffffffff',
    borderRadius: 16,
  },
  flagContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  flagIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: '#23EBC3',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonDisabled: {
    backgroundColor: '#B3E8DF',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signInText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#1D1E1F',
  },
  signInLink: {
    color: '#23EBC3',
    fontWeight: 'bold',
  },
  termsText: {
    fontSize: 12,
    color: '#9E9E9E',
    textAlign: 'center',
    marginTop: 10,
  },
  termsLink: {
    color: '#23EBC3',
    fontWeight: 'bold',
  },
});

export default styles;
