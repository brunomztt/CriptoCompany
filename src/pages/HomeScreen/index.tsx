import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, TextInput, ActivityIndicator, Alert, RefreshControl } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import defaultstyles from '../../global/defaultstyle';
import { SvgXml } from 'react-native-svg';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const [favoriteCryptos, setFavoriteCryptos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const ArrowTransferSvg = `
  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M23.935 11.0182C24.3133 10.6399 24.3133 10.0265 23.935 9.64816L20.06 5.77316C19.6817 5.39484 19.0683 5.39484 18.69 5.77316C18.3117 6.15148 18.3117 6.76486 18.69 7.14318L20.9112 9.36442L7.75 9.36442C7.21498 9.36442 6.78125 9.79815 6.78125 10.3332C6.78125 10.8682 7.21498 11.3019 7.75 11.3019L20.9112 11.3019L18.69 13.5232C18.3117 13.9015 18.3117 14.5149 18.69 14.8932C19.0683 15.2715 19.6817 15.2715 20.06 14.8932L23.935 11.0182ZM7.06499 19.9815C6.68667 20.3598 6.68667 20.9732 7.06499 21.3515L10.94 25.2265C11.3183 25.6048 11.9317 25.6048 12.31 25.2265C12.6883 24.8482 12.6883 24.2348 12.31 23.8565L10.0888 21.6353L23.25 21.6353C23.785 21.6353 24.2188 21.2015 24.2188 20.6665C24.2188 20.1315 23.785 19.6978 23.25 19.6978H10.0888L12.31 17.4765C12.6883 17.0982 12.6883 16.4848 12.31 16.1065C11.9317 15.7282 11.3183 15.7282 10.94 16.1065L7.06499 19.9815Z" fill="white"/>
  </svg>
  `;

  useEffect(() => {
    fetchFavoriteCryptos();
  }, []);

  const fetchFavoriteCryptos = async () => {
    try {
      setLoading(true);
      const favorites = await AsyncStorage.getItem('favorites');
      if (favorites) {
        const favoriteIds = JSON.parse(favorites);

        if (favoriteIds.length > 0) {
          const response = await fetch(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&ids=${favoriteIds.join(
              ','
            )}`
          );
          const data = await response.json();

          const formattedData = data.map((item: any) => ({
            id: item.id,
            name: item.name,
            price: item.current_price,
            iconUrl: item.image,
          }));

          setFavoriteCryptos(formattedData);
        }
      }
    } catch (error) {
      console.error('Erro ao buscar moedas favoritas:', error);
      Alert.alert('Erro', 'Não foi possível carregar suas moedas favoritas.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchFavoriteCryptos();
  };

  const renderFavoriteItem = ({ item }: { item: any }) => {
    return (
      <TouchableOpacity
        style={styles.cryptoItem}
        onPress={() =>
          navigation.navigate('CryptoDetailsScreen', {
            cryptoId: item.id,
            cryptoName: item.name,
            cryptoIcon: item.iconUrl,
            cryptoPrice: item.price,
          })
        }
      >
        <View style={styles.cryptoRow}>
          <Image source={{ uri: item.iconUrl }} style={styles.cryptoIcon} />
          <Text style={styles.cryptoName}>{item.name}</Text>
        </View>
        <Text style={styles.cryptoPrice}>≈ R$ {item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
        </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome, Tristan</Text>
        <TextInput
          placeholder="Search"
          style={styles.searchBar}
        />
      </View>
      <View style={styles.containerbookmarks}>
        <Text style={styles.bookmarksTitle}>Bookmarks</Text>
        <TouchableOpacity
          style={styles.viewAllButton}
          onPress={() => navigation.navigate('CryptoScreen')}
        >
          <Text style={styles.viewAllButtonText}>See all</Text>
        </TouchableOpacity>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#6200EE" style={styles.loading} />
      ) : favoriteCryptos.length > 0 ? (
        <FlatList
          data={favoriteCryptos}
          keyExtractor={(item) => item.id}
          renderItem={renderFavoriteItem}
          contentContainerStyle={styles.cryptoList}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#23EBC3']}
            />
          }
        />
      ) : (
        <View style={styles.noFavorites}>
          <Text style={styles.noFavoritesText}>
            Please add a cryptocurrency to your bookmarks.
          </Text>
        </View>
      )}
      <TouchableOpacity style={defaultstyles.button}>
        <Text style={defaultstyles.buttonText}><SvgXml xml={ArrowTransferSvg} width="31" height="31" /></Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;