import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#1D1E1F',
    marginTop: 70,
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    width: '100%',
    marginVertical: 20,
  },  
  keyboardKey: {
    width: '28%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  
  keyboardKeyText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1D1E1F',
  },
  resetText: {
    marginTop: -10,
    fontSize: 16,
    color: '#1D1E1F',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  continueButton: {
    width: '90%',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 16,
    gap: 10,
    backgroundColor: '#23EBC3',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  continueButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default styles;