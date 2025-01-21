import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',	
  },
  navbar: {
    height: 80,
    backgroundColor: '#DC143C',
  },
  navbaritens:{
    marginTop: 33,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  favoriteButton: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  favorited: {
    color: 'white',
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: '#DC143C',
    marginTop: 0,
    borderBottomLeftRadius: '50%',
    borderBottomRightRadius: '40%',
  },
  cryptoLogo: {
    width: 80,
    height: 80,
    borderRadius: 40, 
  },
  cryptoName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#ffffff',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    marginLeft: -40,
    width: '111%',
  },
    detailTextContainer: {
      flexDirection: 'row',
      width: '100%',
      padding: 10,
      alignItems: 'center',
      marginLeft: 20,
    },
    detailLabel: {
      fontSize: 18,
      marginLeft: 15,
      color: '#555',
      padding: 10,
      flex: 1,
      textAlign: 'left',
    },
    detailValue: {
      fontSize: 18,
      marginRight: 20,
      color: '#555',
      textAlign: 'right',
    },
    priceText: {
      width: '100%',
      fontSize: 18,
      marginVertical: 0,
      color: '#555',
      textAlign: 'right',
      padding: 20,
    },
    historicalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#333',
      marginLeft: 45,
    },
});

