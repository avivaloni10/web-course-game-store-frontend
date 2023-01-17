import instance from "./axios-instance";
import * as cart from "./cart";
import * as wishlist from "./wishlist";
import * as games from "./games";
import * as gameCollections from "./game-collections";

export const getPlatforms = async (page, size, name, alternativeName, abbreviation) => {
  let suffix = "";
  if (page) {
    suffix += "&page=" + page;
  }
  if (size) {
    suffix += "&size=" + size;
  }
  if (name) {
    suffix += "&name=" + name;
  }
  if (alternativeName) {
    suffix += "&alternativeName=" + alternativeName;
  }
  if (abbreviation) {
    suffix += "&abbreviation=" + abbreviation;
  }
  return (await instance.get("platforms?" + suffix)).data;
};
export const searchGames = games.searchGames;
export const getGame = games.getGame;

export const getGameCollections = gameCollections.getGameCollections;

export const getHighestRatingGames = async (page, size, ids, name, summary) => {
  let suffix = "";
  if (page) {
    suffix += "&page=" + page;
  }
  if (size) {
    suffix += "&size=" + size;
  }
  if (ids) {
    suffix += "&ids=" + ids;
  }
  if (name) {
    suffix += "&name=" + name;
  }
  if (summary) {
    suffix += "&summary=" + summary;
  }
  return (await instance.get("games?sort=-totalRating" + suffix)).data;
};

export const getGamesForPromotions = async () => {
  return (await instance.get("gamesForPromotions")).data;
};

export const getOrCreateWishlist = wishlist.getOrCreateWishlist;
export const updateWishlist = wishlist.updateWishlist;
export const deleteWishlist = wishlist.deleteWishlist;

export const getWishlistGames = async (authToken) => {
  const wishlist = await getOrCreateWishlist(authToken);
  const gameIds = wishlist.games.map(g => g.id).join();
  return (await instance.get(`games?id=${gameIds}`)).data;
}


export const getOrCreateWishlist = wishlist.getOrCreateWishlist;
export const updateWishlist = wishlist.updateWishlist;

export const getWishlistGames = async (authToken) => {
  const wishlist = await getOrCreateWishlist(authToken);
  const gameIds = wishlist.games.map(g => g.id).join();
  return (await instance.get(`games?id=${gameIds}`)).data;
}


export const getOrCreateCart = cart.getOrCreateCart;
export const updateCart = cart.updateCart;
export const deleteCart = cart.deleteCart;

export const getCartGames = async (authToken) => {
  const cart = await getOrCreateCart(authToken);
  const gameIds = cart.games.map(g => g.id).join();
  if(!gameIds) return [];
  return (await instance.get(`games?id=${gameIds}`)).data;
}
