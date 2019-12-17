import React  from 'react';
const FavNewsContext = React.createContext();
const FavNewsProvider = FavNewsContext.Provider
const FavNewsConsumer = FavNewsContext.Consumer
export {FavNewsContext , FavNewsProvider ,FavNewsConsumer}
