-= Cripto Company =-

O Cripto Company é um aplicativo mobile desenvolvido com React Native.
Com o aplicativo é possível acompanhar o mercado de criptomoedas de forma simples e eficiente. Ele oferece uma experiência completa com acesso a preços atualizados, detalhes sobre as moedas e a possibilidade de salvar suas favoritas.


- Funcionalidades dentro do aplicativo.
Lista de Criptomoedas: Exibe dados das moedas de seu interesse como, variações e capitalização de mercado.  
Detalhes das Moedas: Informações completas de cada criptomoeda, Preço atual, Market cap, Volume de negociação nas últimas 24 horas.
Favoritos: Salve suas moedas favoritas para acessá-las rapidamente(AsyncStorage).  
Busca em Tempo Real: Pesquise qualquer moeda na base de dados.  
Atualização Constante: Dados sempre atualizados com uma API confiável(CoinGecko).  

- Tecnologias Utilizadas.
React Native: Framework para desenvolvimento mobile.  
Expo: Para simplificar o processo de desenvolvimento e teste.  
React Navigation: Para navegação entre telas.  
Axios: Para consumo da API de mercado.  
Async Storage: Para salvar dados localmente no dispositivo.  
Moment.js: Manipulação e formatação de datas.  
CoinGecko (API): Fonte de dados confiável sobre criptomoedas.  

-Extras.
React Native Vector Icons: Ícones personalizados para o app.  
Reanimated: Para animações suaves e interativas(Modals).

-Teste você mesmo(a):
1. Clone o repositório:  
   git clone https://github.com/brunomztt/CriptoCompany.git
   cd CriptoCompany


2. Instale as dependências:
   npm install

3. Inicie o app:  
   npx expo start

4. Escaneie o QR Code que irá aparecer no terminal.


-Como Cripto Company Funciona?
1. Home: Uma lista de acesso rápido as suas criptomoedas favoritas, exibindo preço atual.
2. Tokens: Exibe uma lista com as criptomoedas que você desejar, apenas pesquisar pelo nome e clicando nela, será adicionada na tela tokens.  
3. Detalhes: Mostra informações detalhadas, como histórico de preço e volume de mercado e afins.


Minhas escolhas:
Optei por deixar as criptos diferente do projeto no figma no (HomeScreen e TokensScreen) pois achei visualmente mais agradável, optei por deixar liberado o úsuario escolher quais Criptos ele irá querer adicionar.
