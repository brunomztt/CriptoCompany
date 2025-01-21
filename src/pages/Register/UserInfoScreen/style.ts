import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    padding: 16,
  },
  title: {
    
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E1E1E',
    marginTop: 40,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6C6C6C',
    marginTop: 8,
    textAlign: 'center',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 16,
    fontSize: 16,
    color: '#1E1E1E',
  },
  inputdate: {
    color: 'red',
  },
});

export default styles;
