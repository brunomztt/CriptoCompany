import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFFFF',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  searchBar: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
    borderRadius: 16,
  },
  header: {
    backgroundColor: '#DC143C',
    padding: 20,
    paddingTop: 40,
    height: 180,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    alignItems: 'center',
  },
  welcomeText: {
    marginTop: 40,
    fontSize: 36,
    color: '#FFF',
    fontWeight: 'bold',
  },
  containerbookmarks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  bookmarksTitle: {
    marginVertical: 20,
    marginLeft: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  cryptoList: {
    paddingHorizontal: 20,
  },
  cryptoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  cryptoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cryptoIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  cryptoName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cryptoPrice: {
    fontSize: 16,
    color: '#555',
  },
  noFavorites: {
    alignItems: 'center',
    marginTop: 50,
  },
  noFavoritesText: {
    color: '#555',
  },
  viewAllButton: {
    alignSelf: 'center',
    marginTop: 10,
    padding: 10,
  },
  viewAllButtonText: {
    fontSize: 16,
    marginRight: 15,
    color: '#23EBC3',
    fontWeight: 'bold',
  },
  loading: {
    marginTop: 50,
    alignSelf: 'center',
  },
  
});

export default styles;
