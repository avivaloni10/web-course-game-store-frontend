import instance from "./axios-instance";
import * as cart from "./cart";

export const getGames = async () => {
  return (await instance.get("games")).data;
};

export const getHighestRatingGames = async () => {
  return (await instance.get("games?sort=-totalRating")).data;
};

export const getOrCreateCart = cart.getOrCreateCart;
export const updateCart = cart.updateCart;