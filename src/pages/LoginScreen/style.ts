import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
    color: '#000',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#000',
    paddingHorizontal: 8,
  },
  togglePasswordVisibility: {
    padding: 8,
    color: '#white',
  },
  button: {
    width: 58,
    height: 58,
    backgroundColor: '#23EBC3',
    borderRadius: 16,
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

export default styles;
