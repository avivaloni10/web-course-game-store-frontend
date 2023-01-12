import instance from "./axios-instance";
import * as cart from "./cart";
import * as games from "./games";

export const getGames = async () => {
  return (await instance.get("games")).data;
};
export const searchGames = games.searchGames;


export const getHighestRatingGames = async () => {
  return (await instance.get("games?sort=-totalRating")).data;
};

export const getOrCreateCart = cart.getOrCreateCart;
export const updateCart = cart.updateCart;

export const getCartGames = async (authToken) => {
  const cart = await getOrCreateCart(authToken);
  const gameIds = cart.games.map(g => g.id).join();
  return (await instance.get(`games?id=${gameIds}`)).data;
}
