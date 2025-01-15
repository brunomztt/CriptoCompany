import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fffffff',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  topRedImg: {
    width: 409,
    height: 470,
    marginTop: -40,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  headerImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 30,
  },
  textContainer: {
    alignContent: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  registerButton: {
    width: '90%',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 16,
    gap: 10,
    backgroundColor: '#23EBC3',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  registerButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default styles;