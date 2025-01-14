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
  navigationContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  skipButton: {
    fontSize: 16,
    color: 'grey',
  },
  nextButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'grey',
    opacity: 0.5,
    marginHorizontal: 5,
  },
  activeDot: {
    opacity: 1,
    backgroundColor: 'black',
  },
});

export default styles;
