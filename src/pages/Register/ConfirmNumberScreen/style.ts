import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    marginTop: 180,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1C1C1C',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#6E6E6E',
    textAlign: 'center',
    marginBottom: 40,
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
  },
  codeInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    color: '#1C1C1C',
  },
  resendButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  resendText: {
    fontSize: 16,
    color: '#00D084',
    fontWeight: 'bold',
  },
  confirmButton: {
    marginTop: 40,
    height: 50,
    backgroundColor: '#00D084',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButtonDisabled: {
    backgroundColor: '#B8E0CB',
  },
  confirmButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});
