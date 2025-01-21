import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginTop: 30,
    marginRight: 20,
  },
  backButton: {
    fontSize: 20,
    color: '#333',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    color: '#333',
  },
  loading: {
    marginTop: 20,
  },
  cryptoList: {
    paddingBottom: 20,
  },
  cryptoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cryptoInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cryptoIcon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  cryptoName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cryptoPrice: {
    fontSize: 16,
    color: '#666',
  },
  searchResults: {
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  searchResultItem: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchResultsContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalButtonCancel: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonDelete: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  searchText: {
    color: '#23EBC3',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 15,
  },
});

export default styles;
