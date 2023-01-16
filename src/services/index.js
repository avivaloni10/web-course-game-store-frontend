import instance from "./axios-instance";
import * as cart from "./cart";
import * as wishlist from "./wishlist";
import * as games from "./games";
import * as gameCollections from "./game-collections";

export const getGames = async () => {
  return (await instance.get("games")).data;
};
export const searchGames = games.searchGames;
export const getGame = games.getGame;

export const getGameCollections = gameCollections.getGameCollections;


export const getHighestRatingGames = async () => {
  return (await instance.get("games?sort=-totalRating")).data;
};

export const getOrCreateWishlist = wishlist.getOrCreateWishlist;
export const updateWishlist = wishlist.updateWishlist;

export const getWishlistGames = async (authToken) => {
  const wishlist = await getOrCreateWishlist(authToken);
  const gameIds = wishlist.games.map(g => g.id).join();
  return (await instance.get(`games?id=${gameIds}`)).data;
}


export const getOrCreateCart = cart.getOrCreateCart;
export const updateCart = cart.updateCart;

export const getCartGames = async (authToken) => {
  const cart = await getOrCreateCart(authToken);
  const gameIds = cart.games.map(g => g.id).join();
  return (await instance.get(`games?id=${gameIds}`)).data;
}
